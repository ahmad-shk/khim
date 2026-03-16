import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, phone, email, date, time, person, remarks } = body;

        // Basic server-side validation
        if (!name || !email || !date || !time || !person) {
            return NextResponse.json(
                { error: 'Pflichtfelder fehlen.' },
                { status: 400 }
            );
        }

        // SMTP Transporter using environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 465,
            secure: process.env.SMTP_SECURE !== 'false', // true by default
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const restaurantName = 'KHIM Restaurant';
        const restaurantEmail = process.env.SMTP_USER!;
        const adminEmail = process.env.ADMIN_EMAIL || restaurantEmail;
        const restaurantPhone = '+43 677 6317 8906';

        // Format date for display (e.g. 2025-03-20 → 20.03.2025)
        const [y, m, d] = date.split('-');
        const formattedDate = `${d}.${m}.${y}`;

        // ----- Email to Admin -----
        const adminMail = {
            from: `"${restaurantName} Buchungssystem" <${restaurantEmail}>`,
            to: adminEmail,
            subject: `🍽️ Neue Reservierungsanfrage von ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5; padding: 20px; border-radius: 8px;">
                    <h2 style="color: #11285B; border-bottom: 2px solid #11285B; padding-bottom: 10px;">Neue Reservierungsanfrage</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 8px; font-weight: bold; color: #555;">Name:</td><td style="padding: 8px;">${name}</td></tr>
                        <tr style="background:#fff;"><td style="padding: 8px; font-weight: bold; color: #555;">E-Mail:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
                        <tr><td style="padding: 8px; font-weight: bold; color: #555;">Telefon:</td><td style="padding: 8px;">${phone || '—'}</td></tr>
                        <tr style="background:#fff;"><td style="padding: 8px; font-weight: bold; color: #555;">Datum:</td><td style="padding: 8px;">${formattedDate}</td></tr>
                        <tr><td style="padding: 8px; font-weight: bold; color: #555;">Uhrzeit:</td><td style="padding: 8px;">${time} Uhr</td></tr>
                        <tr style="background:#fff;"><td style="padding: 8px; font-weight: bold; color: #555;">Personen:</td><td style="padding: 8px;">${person}</td></tr>
                        <tr><td style="padding: 8px; font-weight: bold; color: #555;">Anmerkungen:</td><td style="padding: 8px;">${remarks || '—'}</td></tr>
                    </table>
                    <p style="margin-top: 20px; color: #888; font-size: 12px;">Diese E-Mail wurde automatisch vom Reservierungssystem gesendet.</p>
                </div>
            `,
        };

        // ----- Confirmation Email to Customer -----
        const customerMail = {
            from: `"${restaurantName}" <${restaurantEmail}>`,
            to: email,
            subject: `Ihre Reservierungsanfrage bei ${restaurantName} – ${formattedDate}`,
            html: `
                <!DOCTYPE html>
                <html lang="de">
                <head><meta charset="UTF-8" /></head>
                <body style="margin:0;padding:0;background:#f0f0f0;font-family: 'Segoe UI', Arial, sans-serif;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0f0;padding:30px 0;">
                        <tr>
                            <td align="center">
                                <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.1);">
                                    
                                    <!-- Header -->
                                    <tr>
                                        <td style="background:#11285B;padding:40px 40px 30px;text-align:center;">
                                            <h1 style="margin:0;color:#ffffff;font-size:32px;font-weight:300;letter-spacing:4px;">KHIM</h1>
                                            <p style="margin:8px 0 0;color:#a0b0cc;font-size:13px;letter-spacing:2px;text-transform:uppercase;">Restaurant</p>
                                        </td>
                                    </tr>

                                    <!-- Body -->
                                    <tr>
                                        <td style="padding: 40px;">
                                            <p style="color:#11285B;font-size:22px;font-weight:600;margin:0 0 8px;">Hallo ${name},</p>
                                            <p style="color:#555;font-size:15px;line-height:1.6;margin:0 0 24px;">
                                                vielen Dank für Ihre Reservierungsanfrage! Wir haben Ihre Anfrage erhalten und werden uns 
                                                <strong>so schnell wie möglich</strong> bei Ihnen melden, um die Reservierung zu bestätigen.
                                            </p>

                                            <!-- Reservation Details Box -->
                                            <div style="background:#f8f9fc;border:1px solid #e0e7f0;border-radius:8px;padding:24px;margin-bottom:24px;">
                                                <h3 style="margin:0 0 16px;color:#11285B;font-size:14px;text-transform:uppercase;letter-spacing:1px;">Ihre Reservierungsdetails</h3>
                                                <table width="100%" cellpadding="0" cellspacing="0">
                                                    <tr>
                                                        <td style="padding:8px 0;color:#888;font-size:13px;width:40%;">📅 Datum</td>
                                                        <td style="padding:8px 0;color:#11285B;font-size:14px;font-weight:600;">${formattedDate}</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding:8px 0;color:#888;font-size:13px;">⏰ Uhrzeit</td>
                                                        <td style="padding:8px 0;color:#11285B;font-size:14px;font-weight:600;">${time} Uhr</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding:8px 0;color:#888;font-size:13px;">👥 Personen</td>
                                                        <td style="padding:8px 0;color:#11285B;font-size:14px;font-weight:600;">${person} ${Number(person) === 1 ? 'Person' : 'Personen'}</td>
                                                    </tr>
                                                    ${remarks ? `<tr>
                                                        <td style="padding:8px 0;color:#888;font-size:13px;">💬 Anmerkungen</td>
                                                        <td style="padding:8px 0;color:#11285B;font-size:14px;">${remarks}</td>
                                                    </tr>` : ''}
                                                </table>
                                            </div>

                                            <p style="color:#555;font-size:14px;line-height:1.6;margin:0 0 8px;">
                                                Bei Fragen können Sie uns jederzeit erreichen:
                                            </p>
                                            <p style="color:#11285B;font-size:14px;font-weight:600;margin:0 0 24px;">
                                                📞 ${restaurantPhone}<br/>
                                                📧 <a href="mailto:${restaurantEmail}" style="color:#11285B;">${restaurantEmail}</a>
                                            </p>

                                            <p style="color:#555;font-size:14px;line-height:1.6;margin:0;">
                                                Wir freuen uns darauf, Sie bei uns begrüßen zu dürfen! 🙏
                                            </p>
                                        </td>
                                    </tr>

                                    <!-- Footer -->
                                    <tr>
                                        <td style="background:#11285B;padding:24px 40px;text-align:center;">
                                            <p style="margin:0;color:#a0b0cc;font-size:12px;">
                                                KHIM Restaurant · Schneckgasse 12, 3100 St. Pölten
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `,
        };

        // Send both emails
        await transporter.sendMail(adminMail);
        await transporter.sendMail(customerMail);

        return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('SMTP Error:', error);
        return NextResponse.json({ error: 'Fehler beim Senden der Email' }, { status: 500 });
    }
}