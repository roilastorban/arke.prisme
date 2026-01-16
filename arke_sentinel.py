import smtplib
import sys
import json
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_notification(data):
    # Configuration SMTP
    smtp_server = "smtp.gmail.com"
    smtp_port = 587
    sender_email = "gerernoscommandes@gmail.com"
    # New password provided by user
    sender_password = "sjui nygc otpy vwrp".strip()
    receiver_email = "gerernoscommandes@gmail.com"

    # Construction du message
    msg = MIMEMultipart()
    msg['From'] = f"ARKÉ Sentinel <{sender_email}>"
    msg['To'] = receiver_email
    msg['Subject'] = f"NOUVEAU DIAGNOSTIC ARKÉ - {data.get('level', 'P1')}"

    body = f"""
    ALERTE : NOUVELLE SOUMISSION ARKÉ
    ----------------------------------
    Niveau : {data.get('level')}
    Client : {data.get('name')}
    Email : {data.get('email')}
    Marque : {data.get('brand')}
    
    DÉTAILS DU DIAGNOSTIC :
    -----------------------
    {data.get('details', 'N/A')}
    
    AMBITION :
    ----------
    {data.get('ambition', 'N/A')}
    
    ----------------------------------
    Action requise : Analyser et répondre manuellement depuis l'adresse secrète.
    """
    
    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(sender_email, sender_password)
        server.send_message(msg)
        server.quit()
        print("Notification envoyée avec succès.")
    except Exception as e:
        print(f"Erreur lors de l'envoi : {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        try:
            form_data = json.loads(sys.argv[1])
            send_notification(form_data)
        except Exception as e:
            print(f"Erreur de parsing JSON : {e}")
