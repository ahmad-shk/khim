import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, phone, email, date, time, person, remarks } = body;

        // 1. SMTP Transporter konfigurieren
        const transporter = nodemailer.createTransport({
            host: "dein-smtp-host.com", // z.B. smtp.gmail.com
            port: 465,
            secure: true, 
            auth: {
                user: "deine-email@beispiel.de",
                pass: "dein-passwort-oder-app-key",
            },
        });

        // 2. Email an Admin
        const adminMail = {
            from: '"Restaurant Buchung" <deine-email@beispiel.de>',
            to: "admin@restaurant.com",
            subject: "Neue Reservierung erhalten!",
            text: `Neue Buchung von ${name}. Personen: ${person}, Datum: ${date}, Zeit: ${time}. Tel: ${phone}. Info: ${remarks}`,
            html: `<h3>Neue Reservierung</h3>
                   <p><strong>Name:</strong> ${name}</p>
                   <p><strong>Datum:</strong> ${date} um ${time}</p>
                   <p><strong>Personen:</strong> ${person}</p>
                   <p><strong>Telefon:</strong> ${phone}</p>
                   <p><strong>Bemerkung:</strong> ${remarks}</p>`
        };

        // 3. Bestätigung an Kunden
        const customerMail = {
            from: '"Dein Restaurant" <deine-email@beispiel.de>',
            to: email,
            subject: "Ihre Reservierungsanfrage",
            html: `<h3>Hallo ${name},</h3>
                   <p>Vielen Dank für Ihre Anfrage! Wir haben Ihre Details erhalten.</p>
                   <p><strong>Details:</strong> ${date} um ${time} für ${person} Personen.</p>
                   <hr />
                   <p>Wir werden uns in Kürze mit einer Bestätigung bei Ihnen melden.</p>
                   <p>Bei Fragen erreichen Sie uns unter: <strong>+49 123 456789</strong></p>`
        };

        // Sende beide E-Mails
        await transporter.sendMail(adminMail);
        await transporter.sendMail(customerMail);

        return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("SMTP Error:", error);
        return NextResponse.json({ error: "Fehler beim Senden der Email" }, { status: 500 });
    }
}