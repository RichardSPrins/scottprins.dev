import sendgrid from "@sendgrid/mail";
// import mailchimp from "@mailchimp/mailchimp_marketing";
// import md5 from "md5";

export const sendContactEmail = async (details: { [key: string]: string }) => {
  const sendGridKey = process.env.SENDGRID_API_KEY || "";
  try {
    sendgrid.setApiKey(sendGridKey);
    const autoReplyMessage = {
      from: process.env.PERSONAL_EMAIL || "",
      to: details.email,
      subject: "Thanks for reaching out!",
      html: `
        <h4>Thank you for yout interest in working with me on your next project!</h4><br />
        <p>I will take a look at your message, and get back to you promptly about next steps to get started!</p><br /><br />
        
        <p>Thanks,</p><br />
        <p>Scott Prins</p>
      `,
    };
    const messageToMe = {
      from: process.env.PERSONAL_EMAIL || "",
      to: process.env.PERSONAL_EMAIL || "",
      subject: "New Prospective Client Inquiry for ScottPrins.dev",
      html: `
        <h3>You have a new project request!</h3>
        <p>Client Prospect: ${details.name}</p>
        <p>Email: ${details.email}</p>
        <p>Contact: <a href="tel:${details.phoneNumber}">${details.phoneNumber}</a></p>
        <p>Budget: ${details.budget}</p><br />
        <p>${details.info}</p>
      `,
    };
    await sendgrid.send(autoReplyMessage);
    await sendgrid.send(messageToMe);
  } catch (error: any) {
    console.error(error.response.body);
  }
};
