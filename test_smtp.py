import smtplib
import os

email = "gerernoscommandes@gmail.com"
password = "shui nygc otpy vwrp"

try:
    print("Testing port 587 with STARTTLS...")
    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()
    server.login(email, password)
    print("Login successful on 587!")
    server.quit()
except Exception as e:
    print(f"Failed on 587: {e}")

try:
    print("\nTesting port 465 with SSL...")
    server = smtplib.SMTP_SSL("smtp.gmail.com", 465)
    server.login(email, password)
    print("Login successful on 465!")
    server.quit()
except Exception as e:
    print(f"Failed on 465: {e}")
