import { EmailData } from "./email-config";

export function getEmailTemplate(data: EmailData) {
  const { type, firstName, lastName, email, message, participationOptions, donationAmount } = data;

  const typeLabels: Record<string, string> = {
    kontakt: "Kontaktanfrage",
    spenden: "Spendenanfrage",
    volunteer: "Mitmachen / Volunteer",
    event: "Event-Anmeldung",
  };

  const title = typeLabels[type] || "Neue Nachricht";
  const fullName = `${firstName} ${lastName || ""}`.trim();

  let detailsHtml = "";

  if (type === "spenden" && donationAmount) {
    detailsHtml += `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Gewünschter Spendenbetrag:</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; color: #E30613; font-weight: bold;">${donationAmount}</td>
      </tr>
    `;
  }

  if (type === "volunteer" && participationOptions && participationOptions.length > 0) {
    const options = participationOptions.map(opt => {
        if (opt === "info") return "Informationen erhalten";
        if (opt === "help") return "Mithelfen";
        if (opt === "ideas") return "Ideen einbringen";
        return opt;
    }).join(", ");
    
    detailsHtml += `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Interessen:</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${options}</td>
      </tr>
    `;
  }

  return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f9f9f9;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background: #ffffff; border: 1px solid #dddddd; border-radius: 8px; overflow: hidden;">
        <thead>
          <tr>
            <th style="background-color: #003056; color: #ffffff; padding: 20px; text-align: left;">
              <h1 style="margin: 0; font-size: 24px;">Tobias Nadjib 2026</h1>
              <p style="margin: 5px 0 0; font-weight: normal; opacity: 0.8;">${title}</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 30px;">
              <p style="margin-top: 0;">Hallo Team,</p>
              <p>Es ist eine neue <strong>${title}</strong> über die Webseite eingegangen:</p>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 20px 0; border: 1px solid #eee; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; width: 40%;"><strong>Name:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>E-Mail:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #003056;">${email}</a></td>
                </tr>
                ${detailsHtml}
              </table>

              ${message ? `
                <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-left: 4px solid #E30613; border-radius: 4px;">
                  <strong style="display: block; margin-bottom: 5px;">Nachricht:</strong>
                  <p style="margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
              ` : ""}

              <p style="margin-top: 30px; font-size: 12px; color: #888; border-top: 1px solid #eee; padding-top: 15px;">
                Diese E-Mail wurde automatisch über das Kontaktformular auf <a href="https://meine2026.de" style="color: #888;">meine2026.de</a> gesendet.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    </html>
  `;
}
