export interface Env {
  RESEND_API_KEY: string;
  TO_EMAIL: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // Only allow POST requests (webhooks are sent via POST)
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    try {
      // FormSubmit sends the form data as JSON
      const formData = await request.json<Record<string, any>>();
      
      // Extract the relevant fields
      const fullName = formData['Full Name'] || formData['name'] || 'N/A';
      const phone = formData['Phone'] || formData['phone'] || 'N/A';
      const email = formData['Email'] || formData['email'] || 'N/A';
      const address = formData['Address'] || formData['address'] || 'N/A';
      const property = formData['Property'] || formData['property'] || 'N/A';
      const message = formData['Message'] || formData['message'] || 'N/A';

      // Lanwan branding colors
      const primaryColor = "#0B1120"; // Navy
      const accentColor = "#D4AF37"; // Gold

      const htmlEmail = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Consultation Request</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 40px 20px; color: #333;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
          <!-- Header -->
          <tr>
            <td align="center" bgcolor="${primaryColor}" style="padding: 40px 20px; border-bottom: 4px solid ${accentColor};">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">New Consultation Request</h1>
              <p style="color: #94a3b8; margin: 10px 0 0 0; font-size: 15px;">You have received a new site visit request from Lanwan Smart Home.</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 25px 0; font-size: 18px; color: ${primaryColor}; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">Customer Details</h2>
              
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 15px;">
                <tr>
                  <td width="30%" style="padding: 12px 0; color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</td>
                  <td width="70%" style="padding: 12px 0; color: #0f172a; font-size: 16px; font-weight: 500;">${fullName}</td>
                </tr>
                <tr>
                  <td width="30%" style="padding: 12px 0; border-top: 1px solid #f1f5f9; color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
                  <td width="70%" style="padding: 12px 0; border-top: 1px solid #f1f5f9; color: #0f172a; font-size: 16px; font-weight: 500;">
                    <a href="tel:${phone}" style="color: ${primaryColor}; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td width="30%" style="padding: 12px 0; border-top: 1px solid #f1f5f9; color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                  <td width="70%" style="padding: 12px 0; border-top: 1px solid #f1f5f9; color: #0f172a; font-size: 16px; font-weight: 500;">
                    <a href="mailto:${email}" style="color: ${primaryColor}; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td width="30%" style="padding: 12px 0; border-top: 1px solid #f1f5f9; color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Property</td>
                  <td width="70%" style="padding: 12px 0; border-top: 1px solid #f1f5f9; color: #0f172a; font-size: 16px; font-weight: 500;">${property}</td>
                </tr>
                <tr>
                  <td width="30%" style="padding: 12px 0; border-top: 1px solid #f1f5f9; color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Address</td>
                  <td width="70%" style="padding: 12px 0; border-top: 1px solid #f1f5f9; color: #0f172a; font-size: 16px; font-weight: 500;">${address}</td>
                </tr>
              </table>

              <h2 style="margin: 30px 0 20px 0; font-size: 18px; color: ${primaryColor}; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">Message</h2>
              <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; border: 1px solid #e2e8f0;">
                <p style="margin: 0; line-height: 1.6; color: #334155; font-size: 15px;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td align="center" style="padding: 25px 20px; background-color: #f1f5f9; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #64748b; font-size: 13px;">This email was generated automatically by the Lanwan Smart Home website.</p>
            </td>
          </tr>
        </table>
      </body>
      </html>
      `;

      // Define default or fallback email
      const toEmail = env.TO_EMAIL || "imdhaval1712@gmail.com";

      // Send the email using Resend API
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": \`Bearer \${env.RESEND_API_KEY}\`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "Consultations <onboarding@resend.dev>", // Requires verifying domain for production
          to: toEmail,
          subject: "New Site Visit Request - Lanwan Automation",
          html: htmlEmail,
          reply_to: email !== 'N/A' ? email : undefined,
        })
      });

      if (!resendResponse.ok) {
        const errorText = await resendResponse.text();
        console.error("Resend API Error:", errorText);
        return new Response("Failed to send email", { status: 500 });
      }

      return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      });
      
    } catch (error) {
      console.error("Webhook Error:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  }
};
