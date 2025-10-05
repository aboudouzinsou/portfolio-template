import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { sendContactEmails } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const supabase = getSupabase();
    const body = await request.json();
    const { firstName, lastName, email, phone, projectType, budget, message } =
      body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !projectType ||
      !budget ||
      !message
    ) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 },
      );
    }

    // Insérer dans Supabase (l'ID sera généré automatiquement)
    const { data: submission, error: dbError } = await supabase
      .from("ContactSubmission")
      .insert([
        {
          firstName,
          lastName,
          email,
          phone,
          projectType,
          budget,
          message,
          status: "new",
        },
      ])
      .select()
      .single();

    if (dbError) {
      console.error("Erreur DB:", dbError);
      throw dbError;
    }

    try {
      await sendContactEmails({
        firstName,
        lastName,
        email,
        phone,
        projectType,
        budget,
        message,
        submissionId: submission.id,
      });
    } catch (emailError) {
      console.error("Erreur email:", emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Votre demande a été envoyée avec succès",
        submissionId: submission.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi du formulaire:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi" },
      { status: 500 },
    );
  }
}
