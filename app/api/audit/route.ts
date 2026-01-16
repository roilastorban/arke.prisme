import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Préparation des données pour Python
    const jsonData = JSON.stringify(body);
    const scriptPath = path.join(process.cwd(), 'arke_sentinel.py');
    
    // On passe les variables d'environnement explicitement au script Python
    // On s'assure de supprimer les guillemets si présents dans les variables d'env
    const env = {
      ...process.env,
      SENDER_EMAIL: process.env.SENDER_EMAIL?.replace(/"/g, ''),
      SENDER_PASSWORD: process.env.SENDER_PASSWORD?.replace(/"/g, ''),
      RECEIVER_EMAIL: process.env.RECEIVER_EMAIL?.replace(/"/g, ''),
      SMTP_SERVER: process.env.SMTP_SERVER?.replace(/"/g, ''),
      SMTP_PORT: process.env.SMTP_PORT?.replace(/"/g, ''),
    };

    exec(`python3 ${scriptPath} '${jsonData.replace(/'/g, "'\\''")}'`, { env }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erreur d'exécution Python: ${error}`);
        return;
      }
      if (stderr) {
        console.error(`Erreur Python: ${stderr}`);
        return;
      }
      console.log(`Sortie Python: ${stdout}`);
    });

    return NextResponse.json({ message: 'Soumission reçue et transmise à la Sentinelle.' }, { status: 200 });
  } catch (error) {
    console.error('Erreur API Audit:', error);
    return NextResponse.json({ error: 'Erreur lors du traitement de la demande.' }, { status: 500 });
  }
}
