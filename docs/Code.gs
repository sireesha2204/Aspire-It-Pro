/**
 * Aspire IT Pro - mail endpoint (Google Apps Script web app)
 *
 * For every website form submit (Get a Quote form, footer Subscribe box) the website posts here and this script
 * sends ONE branded alert mail to the team inbox (TO). Nothing is sent to the visitor.
 * Hit Reply in Gmail to answer the visitor directly (the visitor's address is set as Reply-To).
 *
 * Setup: see GOOGLE_MAIL_SETUP.md. After pasting this file run `testMail` once to authorise.
 */

// ====================== SETTINGS (edit here) ======================
var TO         = 'akkishiri717@gmail.com';            // inbox that receives every enquiry
var BRAND      = 'Aspire IT Pro';                  // sender display name
var SITE_URL   = 'https://aspireitpro.com';             // your live website (also hosts the logo used in the mail)
var LOGO_URL   = SITE_URL + '/logo.png';      // must be publicly reachable for the logo to show in mails

// Brand colours (from the Aspire IT Pro logo and website)
var C = { navy: '#0b1a3a', blue: '#3b5fad', blueDeep: '#1f5ca6', red: '#ee3159',
          bg: '#f7f9ff', card: '#ffffff', text: '#0b1a3a', muted: '#5a6788', line: '#e1e7f5' };
var HEAD_FONT = "'Plus Jakarta Sans','Segoe UI',Helvetica,Arial,sans-serif";
var FONT = "'Plus Jakarta Sans','Segoe UI',Helvetica,Arial,sans-serif";

var LABELS = { name: 'Full Name', email: 'Email', message: 'Message' };
var SKIP   = ['kind', 'subject', 'website', 'access_key'];
var MAX    = { name: 120, email: 254, message: 5000, other: 1000 };
var EMAIL_RE = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']{2,}$/;

// ====================== WEB APP ENTRY POINTS ======================
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var data = JSON.parse((e && e.postData && e.postData.contents) || '{}');

    // Spam trap: real visitors never see this field, bots fill it.
    if (data.website) return reply({ ok: true });

    var isSub = data.kind === 'subscribe';
    var clean = sanitize(data);

    if (!clean.email || !EMAIL_RE.test(clean.email)) return reply({ ok: false, error: 'invalid_email' });
    if (!isSub && (!clean.name || clean.name.length < 2 || !clean.message || clean.message.length < 5)) {
      return reply({ ok: false, error: 'missing_fields' });
    }

    lock.waitLock(15000);
    var when = stamp();

    // Alert to the team.
    var alertMail = isSub ? subscriberAlert(clean, when) : enquiryAlert(clean, when);
    MailApp.sendEmail({
      to: TO, subject: alertMail.subject, body: alertMail.text, htmlBody: alertMail.html,
      name: BRAND + ' Website', replyTo: clean.email
    });

    return reply({ ok: true });
  } catch (err) {
    console.error(err);
    return reply({ ok: false, error: 'server_error' });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

function doGet() { return reply({ ok: true, info: 'Aspire mail endpoint is running' }); }

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// ====================== HELPERS ======================
function sanitize(data) {
  var out = {};
  Object.keys(data).forEach(function (k) {
    if (SKIP.indexOf(k) >= 0) return;
    var v = data[k];
    if (v === null || typeof v === 'object') return;
    v = String(v).replace(/\u0000/g, '').trim();
    var limit = MAX[k] || MAX.other;
    if (v.length > limit) v = v.substring(0, limit);
    if (k === 'name' || k === 'email') v = v.replace(/[\r\n<>]+/g, ' ').trim();   // no header injection / markup
    if (v) out[k] = v;
  });
  return out;
}

function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function escBr(s) { return esc(s).replace(/\r?\n/g, '<br>'); }
function firstName(n) { return (n || '').split(/\s+/)[0] || 'there'; }
function stamp() { return Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'dd MMM yyyy, hh:mm a (z)'); }
function host() { return SITE_URL.replace(/^https?:\/\//, ''); }

// ====================== EMAIL LAYOUT ======================
// Table-based, inline-styled markup: renders the same in Gmail, Outlook, Apple Mail and mobile apps.
function layout(o) {
  var btn = o.cta ? (
    '<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:30px 0 4px"><tr>' +
    '<td align="center" bgcolor="' + C.red + '" style="border-radius:4px">' +
    '<a href="' + esc(o.cta.url) + '" target="_blank" style="display:inline-block;padding:15px 32px;font:600 14px/1 ' + FONT + ';letter-spacing:0.06em;text-transform:uppercase;color:#ffffff;text-decoration:none;border-radius:4px">' +
    esc(o.cta.label) + '</a></td></tr></table>') : '';

  return '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<meta name="color-scheme" content="light only"><meta name="supported-color-schemes" content="light only">' +
    '<title>' + esc(o.plainTitle) + '</title>' +
    '<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">' +
    '<style>@media only screen and (max-width:620px){.wrap{width:100%!important}.pad{padding:28px 22px!important}.h1{font-size:27px!important}}</style>' +
    '</head>' +
    '<body style="margin:0;padding:0;background:' + C.bg + ';-webkit-text-size-adjust:100%">' +
    // hidden preheader (inbox preview text)
    '<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:' + C.bg + ';font-size:1px;line-height:1px">' + esc(o.preheader) + '&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</div>' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="' + C.bg + '"><tr><td align="center" style="padding:28px 12px">' +
    '<table role="presentation" class="wrap" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;border:1px solid ' + C.line + '">' +

    // brand gradient strip
    '<tr><td height="5" bgcolor="' + C.red + '" style="height:5px;font-size:0;line-height:0;background:' + C.red + ';background-image:linear-gradient(90deg,' + C.blue + ',' + C.red + ')">&nbsp;</td></tr>' +

    // header (white, so the logo reads clearly)
    '<tr><td class="pad" bgcolor="#ffffff" style="background:#ffffff;padding:28px 40px;border-bottom:1px solid ' + C.line + '">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>' +
    '<td align="left" valign="middle"><a href="' + SITE_URL + '" target="_blank" style="text-decoration:none">' +
    '<img src="' + LOGO_URL + '" width="200" alt="Aspire IT Pro" style="display:block;border:0;width:200px;height:auto;font:700 20px/1 ' + HEAD_FONT + ';color:' + C.navy + '"></a></td>' +
    '<td align="right" valign="middle" style="font:600 11px/1 ' + FONT + ';letter-spacing:2.2px;text-transform:uppercase;color:' + C.blue + '">' + esc(o.eyebrow) + '</td>' +
    '</tr></table></td></tr>' +

    // body
    '<tr><td class="pad" bgcolor="' + C.card + '" style="background:' + C.card + ';padding:42px 40px 38px;font-family:' + FONT + ';color:' + C.text + '">' +
    '<h1 class="h1" style="margin:0 0 16px;font:800 30px/1.2 ' + HEAD_FONT + ';letter-spacing:-0.5px;color:' + C.navy + '">' + o.title + '</h1>' +
    '<p style="margin:0 0 6px;font:400 16px/1.7 ' + FONT + ';color:' + C.muted + '">' + o.intro + '</p>' +
    (o.body || '') + btn +
    '</td></tr>' +

    // footer
    '<tr><td class="pad" bgcolor="' + C.navy + '" style="background:' + C.navy + ';padding:26px 40px;font-family:' + FONT + '">' +
    '<p style="margin:0 0 6px;font:800 14px/1.4 ' + HEAD_FONT + ';color:#ffffff">Aspire IT Pro</p>' +
    '<p style="margin:0 0 12px;font:400 12px/1.7 ' + FONT + ';color:#b9c8ee">Software, enterprise and IT solutions for growing businesses.</p>' +
    '<p style="margin:0;font:400 11px/1.7 ' + FONT + ';color:#7d92c4">' + o.footnote + '<br>' +
    '<a href="' + SITE_URL + '" target="_blank" style="color:#b9c8ee;text-decoration:underline">' + host() + '</a></p>' +
    '</td></tr>' +

    '</table></td></tr></table></body></html>';
}

function label(t) {
  return '<div style="font:600 11px/1 ' + FONT + ';letter-spacing:1.8px;text-transform:uppercase;color:' + C.red + ';margin:0 0 7px">' + esc(t) + '</div>';
}
function fieldRow(k, v, last) {
  var isEmail = /@/.test(v) && EMAIL_RE.test(v);
  var val = isEmail ? '<a href="mailto:' + esc(v) + '" style="color:' + C.blue + ';text-decoration:none">' + esc(v) + '</a>' : escBr(v);
  return '<tr><td style="padding:16px 0;' + (last ? '' : 'border-bottom:1px solid ' + C.line + ';') + '">' + label(LABELS[k] || k) +
    '<div style="font:500 16px/1.6 ' + FONT + ';color:' + C.text + '">' + val + '</div></td></tr>';
}
function quote(text) {
  return '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:22px 0 0"><tr>' +
    '<td width="4" bgcolor="' + C.red + '" style="background:' + C.red + '"></td>' +
    '<td bgcolor="' + C.bg + '" style="background:' + C.bg + ';padding:18px 22px;font:400 15px/1.75 ' + FONT + ';color:' + C.text + '">' + escBr(text) + '</td></tr></table>';
}
function metaBar(when) {
  return '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:26px 0 0"><tr><td style="border-top:1px solid ' + C.line + ';padding-top:14px;font:500 12px/1.6 ' + FONT + ';color:' + C.muted + '">Received ' + esc(when) + ' &nbsp;&middot;&nbsp; via ' + esc(host()) + '</td></tr></table>';
}

// ====================== TEMPLATES: TEAM ALERTS ======================
function subscriberAlert(d, when) {
  var body =
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:22px 0 0;border-top:1px solid ' + C.line + '">' + fieldRow('email', d.email, true) + '</table>' + metaBar(when);
  var html = layout({
    plainTitle: 'New subscriber', eyebrow: 'New subscriber', preheader: d.email + ' subscribed on the website.',
    title: 'You have a new subscriber',
    intro: 'Someone just subscribed using the form on your website.',
    body: body,
    footnote: 'Internal notification &middot; sent automatically when the website Subscribe form is submitted.'
  });
  return { subject: 'New subscriber - Aspire IT Pro', html: html,
    text: 'NEW SUBSCRIBER\n\nEmail:\n' + d.email + '\n\nReceived ' + when };
}

function enquiryAlert(d, when) {
  var keys = Object.keys(d).filter(function (k) { return k !== 'message'; });
  var rows = keys.map(function (k, i) { return fieldRow(k, d[k], i === keys.length - 1); }).join('');
  var body =
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:22px 0 0;border-top:1px solid ' + C.line + '">' + rows + '</table>' +
    (d.message ? '<div style="margin:24px 0 0">' + label('Message') + quote(d.message) + '</div>' : '') + metaBar(when);
  var html = layout({
    plainTitle: 'New quote request', eyebrow: 'Quote request', preheader: (d.name || 'A visitor') + ' just requested a quote through the website.',
    title: 'New quote request from ' + esc(d.name || 'a visitor'),
    intro: 'Someone just filled in the Get a Quote form on your website. Hit Reply in Gmail to answer them directly.',
    body: body,
    footnote: 'Internal notification &middot; sent automatically when the Get a Quote form is submitted.'
  });
  var text = 'NEW QUOTE REQUEST\n\n' + Object.keys(d).map(function (k) { return (LABELS[k] || k) + ':\n' + d[k] + '\n'; }).join('\n') +
    '\nReceived ' + when + '\nReply to this email to answer ' + firstName(d.name) + ' directly.';
  return { subject: 'New quote request' + (d.name ? ' from ' + d.name : '') + ' - Aspire IT Pro', html: html, text: text };
}

// ====================== TESTS (run from the editor) ======================
// Run once: triggers the Google permission screen and sends you a test mail.
function testMail() {
  MailApp.sendEmail(TO, 'Aspire test mail', 'If you can read this, the setup works.');
}

// Sends you the designed alert mails so you can check them in your inbox.
function previewAllEmails() {
  var when = stamp();
  var c = { name: 'Aarav Mehta', email: TO, message: 'Hello team,\nWe need a quote for a custom software project.' };
  var n = { email: TO };
  [subscriberAlert(n, when), enquiryAlert(c, when)].forEach(function (m, i) {
    MailApp.sendEmail({ to: TO, subject: '[Preview ' + (i + 1) + '/2] ' + m.subject, body: m.text, htmlBody: m.html, name: BRAND });
  });
}
