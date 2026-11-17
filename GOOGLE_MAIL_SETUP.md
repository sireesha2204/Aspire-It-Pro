# Aspire IT Pro mail setup (Google Apps Script) - branded alert mails

Each time a visitor sends the **Get a Quote** form or subscribes in the footer, **one designed alert mail goes to akkishiri717@gmail.com**.
Nothing is sent to the visitor. Press **Reply** in Gmail to answer them (their address is the Reply-To).
On the website a toast appears: "Thank you for your interest! Our team will connect with you shortly."

## Part 1 - Create the script
1. https://script.google.com signed in as akkishiri717@gmail.com -> **New project** -> rename `Aspire Mail`.
2. Delete everything in the editor, paste the full `docs/Code.gs`, **Ctrl+S**.
3. Check the SETTINGS block at the top: `TO` is the inbox that receives the mails; `SITE_URL` must be your real live domain
   (default `https://aspireitpro.com`). The logo in mails loads from `SITE_URL/logo.png` (file is in `public/logo.png`),
   so deploy the site first or the logo shows as text.

## Part 2 - Authorise (one time)
1. Function dropdown -> **testMail** -> **Run** -> **Review permissions** -> your account.
2. **Advanced** -> **Go to Aspire Mail (unsafe)** -> **Allow** (it is your own script).
3. Check Gmail (and Spam) for "Aspire test mail".
4. Run **previewAllEmails** to receive the 2 designed alert mails.

## Part 3 - Publish
1. **Deploy** -> **New deployment** -> gear -> **Web app**. Execute as: **Me**. Who has access: **Anyone**. **Deploy**. Copy the URL ending `/exec`.
2. Open the URL in a browser: `{"ok":true,"info":"Aspire mail endpoint is running"}`.
3. Changing the code later? **Deploy** -> **Manage deployments** -> pencil -> Version: **New version** -> **Deploy**.
   Saving alone does NOT update the live URL.

## Part 4 - Connect the website
1. `src/config.js` -> `mailScript: "https://script.google.com/macros/s/XXXX/exec",`
2. `npm install`, `npm run dev`. Click **Get a Quote**, fill the form, send. Then try the footer Subscribe box.
3. `npm run build` and upload `dist`.

If `mailScript` is empty the forms show the red "Message not sent" toast (nothing can be sent without the URL).

## Built-in protection
Spam-trap field, server-side validation, all visitor text escaped in mails. Gmail limit is about 100 mails/day on a free account.
