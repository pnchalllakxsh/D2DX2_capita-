/**
 * Submit form data to Google Sheets (via Apps Script) and optionally Web3Forms.
 *
 * HOW TO SET UP:
 *
 * 1. GOOGLE SHEETS (free, unlimited)
 *    - Create a new Google Sheet
 *    - Go to Extensions > Apps Script
 *    - Paste this script:
 *
 *      function doPost(e) {
 *        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *        var data = JSON.parse(e.postData.contents);
 *        sheet.appendRow([
 *          new Date(),
 *          data.name || '',
 *          data.email || '',
 *          data.company || '',
 *          data.stage || '',
 *          data.message || '',
 *          data.formType || 'application'
 *        ]);
 *        return ContentService
 *          .createTextOutput(JSON.stringify({ status: 'ok' }))
 *          .setMimeType(ContentService.MimeType.JSON);
 *      }
 *
 *    - Click Deploy > New deployment > Web app
 *    - Set "Execute as" = Me, "Who has access" = Anyone
 *    - Copy the URL and paste it below as GOOGLE_SCRIPT_URL
 *
 * 2. WEB3FORMS (free, 250/month, sends email notifications)
 *    - Go to https://web3forms.com and enter your email
 *    - Copy the access key and paste it below as WEB3FORMS_KEY
 */

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyBI-Gf1xYyIofmIy5mVzBstZYd-ZBwBzGWZoNgOtuAn4FjlavJzXwHqKkg2e7fzGqA/exec';
const WEB3FORMS_KEY = '';

interface FormPayload {
  [key: string]: string;
}

export async function submitToGoogleSheet(data: FormPayload): Promise<boolean> {
  if (!GOOGLE_SCRIPT_URL) {
    console.warn('[submitForm] GOOGLE_SCRIPT_URL not configured — skipping Google Sheets');
    return true;
  }
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return true;
  } catch {
    console.error('[submitForm] Google Sheets submission failed');
    return false;
  }
}

export async function submitToWeb3Forms(data: FormPayload): Promise<boolean> {
  if (!WEB3FORMS_KEY) {
    console.warn('[submitForm] WEB3FORMS_KEY not configured — skipping Web3Forms');
    return true;
  }
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...data }),
    });
    const json = await res.json();
    return json.success === true;
  } catch {
    console.error('[submitForm] Web3Forms submission failed');
    return false;
  }
}

export async function submitForm(data: FormPayload): Promise<boolean> {
  const [sheetsOk, web3Ok] = await Promise.allSettled([
    submitToGoogleSheet(data),
    submitToWeb3Forms(data),
  ]);

  return (
    (sheetsOk.status === 'fulfilled' && sheetsOk.value) ||
    (web3Ok.status === 'fulfilled' && web3Ok.value)
  );
}
