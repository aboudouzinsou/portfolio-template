import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmails(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  submissionId: string;
}) {
  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "aboudouzinsou@yahoo.com",
    subject: `🚀 Nouveau contact : ${data.firstName} ${data.lastName}`,
    html: ` <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
             <h2 style="color: #2563eb;">Nouvelle demande de contact</h2>
             <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
               <h3 style="margin-top: 0;">Informations du client</h3>
               <p><strong>Nom :</strong> ${data.firstName} ${data.lastName}</p>
               <p><strong>Email :</strong> <a href="mailto:${data.email}">${data.email}</a></p>
               <p><strong>Téléphone :</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
             </div>
             <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
               <h3 style="margin-top: 0;">Détails du projet</h3>
               <p><strong>Type de projet :</strong> ${data.projectType}</p>
               <p><strong>Budget :</strong> ${data.budget}</p>
               <p><strong>Message :</strong></p>
               <p style="white-space: pre-wrap;">${data.message}</p>
             </div>
             <p style="color: #6b7280; font-size: 14px;">
               ID de soumission : ${data.submissionId}<br>
               Date : ${new Date().toLocaleString("fr-FR")}
             </p>
           </div>`,
  });

  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: data.email,
    subject: "✅ Votre demande a bien été reçue",
    html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2563eb;">Bonjour ${data.firstName},</h2>
              <p>Merci d'avoir pris contact avec moi ! J'ai bien reçu votre demande concernant votre projet <strong>${data.projectType}</strong>.</p>
              <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; margin: 20px 0;">
                <p style="margin: 0;"><strong>✓ Votre demande est en cours de traitement</strong></p>
                <p style="margin: 10px 0 0 0;">Je reviendrai vers vous sous 24h avec une réponse détaillée.</p>
              </div>
              <h3>Récapitulatif de votre demande :</h3>
              <ul style="list-style: none; padding: 0;">
                <li>📋 <strong>Type de projet :</strong> ${data.projectType}</li>
                <li>💰 <strong>Budget :</strong> ${data.budget}</li>
                <li>📅 <strong>Date de soumission :</strong> ${new Date().toLocaleDateString("fr-FR")}</li>
              </ul>
              <p>En attendant, n'hésitez pas à consulter mes réalisations sur mon portfolio :</p>
              <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}" style="color: #2563eb;">Voir mes projets</a></p>
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
              <p style="color: #6b7280; font-size: 14px;">
                <strong>François Mawutô Aboudou Zinsou</strong><br>
                Développeur Full Stack - Spécialiste SaaS<br>
                📧 faboudou.zinsou@gmail.com<br>
                📱 +229 67 26 63 60
              </p>
            </div>`,
  });
}
