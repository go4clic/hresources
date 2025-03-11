
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@1.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const guideUrl = "https://drive.google.com/file/d/1U-SdRYH7XoGZf5PhSLXz02GkD6jYlI1i/view?usp=sharing";

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email es requerido" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Store email in the database
    const { error: dbError } = await supabase
      .from("email_subscribers")
      .upsert({ email })
      .select();

    if (dbError) {
      console.error("Error storing email:", dbError);
      // Continue even if there's an error saving to DB
    }

    // Send the email
    const emailResponse = await resend.emails.send({
      from: "IA en RRHH <onboarding@resend.dev>",
      to: [email],
      subject: "Tu Guía Gratuita: IA en Recursos Humanos",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h1 style="color: #0EA5E9; margin-bottom: 20px;">¡Gracias por tu interés en IA en RRHH!</h1>
          
          <p>Hola,</p>
          
          <p>Gracias por descargar nuestra guía gratuita sobre el uso de la Inteligencia Artificial en Recursos Humanos. Aquí encontrarás herramientas, estrategias y consejos prácticos para transformar tu departamento de RRHH.</p>
          
          <p>Puedes acceder a la guía completa en el siguiente enlace:</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${guideUrl}" style="background-color: #0EA5E9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">DESCARGAR GUÍA COMPLETA</a>
          </div>
          
          <p>Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.</p>
          
          <p>Saludos,<br>El equipo de IA en RRHH</p>
          
          <hr style="border: 1px solid #eee; margin: 30px 0;" />
          
          <p style="font-size: 12px; color: #666;">
            © ${new Date().getFullYear()} IA en RRHH. Todos los derechos reservados.<br>
            <a href="https://www.go4clic.com/politica-de-privacidad" style="color: #0EA5E9; text-decoration: none;">Política de Privacidad</a>
          </p>
        </div>
      `,
    });

    console.log("Email enviado:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Email enviado correctamente" }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  } catch (error) {
    console.error("Error en función send-guide-email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
