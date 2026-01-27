# SnapOnWheels Environment Configuration

To enable the email functionality on the Contact page, you need to set up the following environment variables.

1. Create a file named `.env.local` in the root directory (same level as `package.json`).
2. Add the following lines, replacing the values with your actual Gmail/SMTP credentials:

```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Note:** If using Gmail, you must generate an "App Password" from your Google Account settings (Security > 2-Step Verification > App Passwords). Do not use your regular login password.
