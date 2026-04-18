export const emailConfig = {
  smtp: {
    host: "w0210a67.kasserver.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "kontakt@meine2026.de",
      pass: "Nm@VKU-MCrHhQaG0vPHr",
    },
  },
  recipients: {
    to: "tobi@meine2026.de",
    // to: "ankit.kumar221099@gmail.com",
    cc: "digamber@meine2026.de",
  },
  from: '"Tobias Nadjib Webseite" <kontakt@meine2026.de>',
};

export type FormType = "spenden" | "volunteer" | "kontakt" | "event";

export interface EmailData {
  type: FormType;
  firstName: string;
  lastName?: string;
  email: string;
  message?: string;
  participationOptions?: string[];
  donationAmount?: string;
}
