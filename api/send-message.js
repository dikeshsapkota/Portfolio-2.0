import { Resend } from "resend";

export async function POST(request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing.");

      return Response.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          message: "Please complete all fields.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    if (name.length > 100 || email.length > 200 || message.length > 5000) {
      return Response.json(
        {
          success: false,
          message: "The submitted message is too long.",
        },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
    const receivedAt = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Asia/Kathmandu",
    });

    const { data, error } = await resend.emails.send({
      from: "Dikesh Portfolio <onboarding@resend.dev>",
      to: ["dikeshsapkota@gmail.com"],
      replyTo: email,
      subject: `New portfolio message from ${name}`,

      text: `
NEW PORTFOLIO MESSAGE

Name: ${name}
Email: ${email}
Received: ${receivedAt}

Message:
${message}

Reply directly to this email to contact ${name}.
      `.trim(),

      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>New Portfolio Message</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background-color: #f1f5f9;
              font-family: Arial, Helvetica, sans-serif;
              color: #1e293b;
            "
          >
            <table
              role="presentation"
              width="100%"
              cellpadding="0"
              cellspacing="0"
              style="padding: 32px 16px; background-color: #f1f5f9;"
            >
              <tr>
                <td align="center">
                  <table
                    role="presentation"
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      max-width: 640px;
                      background-color: #ffffff;
                      border: 1px solid #e2e8f0;
                      border-radius: 16px;
                      overflow: hidden;
                    "
                  >
                    <tr>
                      <td
                        style="
                          padding: 32px;
                          background-color: #0f172a;
                          text-align: center;
                        "
                      >
                        <div
                          style="
                            font-size: 13px;
                            font-weight: 700;
                            letter-spacing: 2px;
                            text-transform: uppercase;
                            color: #60a5fa;
                          "
                        >
                          Dikesh Sapkota Portfolio
                        </div>

                        <h1
                          style="
                            margin: 12px 0 8px;
                            font-size: 28px;
                            line-height: 1.3;
                            color: #ffffff;
                          "
                        >
                          New Contact Message
                        </h1>

                        <p
                          style="
                            margin: 0;
                            font-size: 15px;
                            line-height: 1.6;
                            color: #cbd5e1;
                          "
                        >
                          Someone contacted you through your portfolio website.
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 32px;">
                        <h2
                          style="
                            margin: 0 0 18px;
                            font-size: 20px;
                            color: #0f172a;
                          "
                        >
                          Contact details
                        </h2>

                        <table
                          role="presentation"
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                          style="
                            border: 1px solid #e2e8f0;
                            border-radius: 12px;
                            overflow: hidden;
                          "
                        >
                          <tr>
                            <td
                              style="
                                width: 120px;
                                padding: 14px 16px;
                                background-color: #f8fafc;
                                border-bottom: 1px solid #e2e8f0;
                                font-weight: 700;
                              "
                            >
                              Name
                            </td>

                            <td
                              style="
                                padding: 14px 16px;
                                border-bottom: 1px solid #e2e8f0;
                              "
                            >
                              ${safeName}
                            </td>
                          </tr>

                          <tr>
                            <td
                              style="
                                padding: 14px 16px;
                                background-color: #f8fafc;
                                border-bottom: 1px solid #e2e8f0;
                                font-weight: 700;
                              "
                            >
                              Email
                            </td>

                            <td
                              style="
                                padding: 14px 16px;
                                border-bottom: 1px solid #e2e8f0;
                              "
                            >
                              <a
                                href="mailto:${safeEmail}"
                                style="
                                  color: #2563eb;
                                  text-decoration: none;
                                "
                              >
                                ${safeEmail}
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td
                              style="
                                padding: 14px 16px;
                                background-color: #f8fafc;
                                font-weight: 700;
                              "
                            >
                              Received
                            </td>

                            <td style="padding: 14px 16px;">
                              ${receivedAt}
                            </td>
                          </tr>
                        </table>

                        <h2
                          style="
                            margin: 30px 0 14px;
                            font-size: 20px;
                            color: #0f172a;
                          "
                        >
                          Message
                        </h2>

                        <div
                          style="
                            padding: 20px;
                            background-color: #f8fafc;
                            border: 1px solid #e2e8f0;
                            border-left: 4px solid #2563eb;
                            border-radius: 10px;
                            font-size: 16px;
                            line-height: 1.75;
                            overflow-wrap: anywhere;
                          "
                        >
                          ${safeMessage}
                        </div>

                        <div style="margin-top: 26px; text-align: center;">
                          <a
                            href="mailto:${safeEmail}?subject=${encodeURIComponent(
                              `Re: Your message to Dikesh Sapkota`
                            )}"
                            style="
                              display: inline-block;
                              padding: 13px 24px;
                              background-color: #2563eb;
                              border-radius: 8px;
                              color: #ffffff;
                              font-size: 15px;
                              font-weight: 700;
                              text-decoration: none;
                            "
                          >
                            Reply to ${safeName}
                          </a>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding: 20px 32px;
                          background-color: #f8fafc;
                          border-top: 1px solid #e2e8f0;
                          text-align: center;
                          font-size: 13px;
                          line-height: 1.6;
                          color: #64748b;
                        "
                      >
                        This email was sent automatically from your portfolio
                        contact form.
                        <br />
                        © ${new Date().getFullYear()} Dikesh Sapkota
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          success: false,
          message: "Your message could not be sent. Please try again.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Your message was sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}

export function GET() {
  return Response.json({
    success: true,
    message: "Contact API is working.",
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}