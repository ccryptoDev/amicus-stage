/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {
  isSandbox: true,
  isTwilioEnabled: false,
  sandGridApiKey:
    "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",
  // TWILIO CREDS COPIED FROM TGCU PROJECT
  // TWILIO_ACCOUNT_SID: "AC5ab03e4031bddc1519b294319e2bd109",
  // TWILIO_AUTH_TOKEN: "a04c59141fe74450e4895a994ce8b409",
  // TWILIO_PHONE_NUMBER: "+15014030756",
  // PATRIA CREDENTIALS
  TWILIO_ACCOUNT_SID: "AC7107f8ad206b16338617b4549492b397",
  TWILIO_AUTH_TOKEN:
    "6d71a6fe5a279d4d1d484b0cfefb9b4a",
  TWILIO_PHONE_NUMBER: "+12183924884",
  //MANDRILL
  MANDRILL_API_KEY: "TejjZt4RdHgbNUgGuygL9A",
  MANDRILL_FROM_EMAIL: "no-reply@amicuslending.com",
  env: {
    TOKEN_SECRET:
      "m49w10tt4msjbdrrtonp048xvnspwbncqmesxgxqvuwoeaqaeuxylcvfy3q75uvxs4cq4g4fnhfj385glcwcxij7jecrv37bx9qp9nba1u7ux6q3hm9lgeltl3am3j29",
    REACT_APP_BASE_URL: "http://localhost:3000",
    REACT_APP_ADMIN_BASE_URL: "https://amicus-lms.alchemylms.com",
  },
  tribe: {
    firstName: "Amicus",
    firstNameCaps: "AMICUS",
    name: "Amicus Lending LLC",
    addressLine1: "1920 Alcott Ave",
    addressLine2: "Chico, CA 95928",
    legalEmail: "legal@amicuslending.com",
    mailTo: "mailto: legal@amicuslending.com",
    email: "CustomerCare@amicusLending.com",
  },
};
