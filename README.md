# Microsoft Graph Webhook (Vercel Ready)

This project provides a simple Microsoft Graph webhook endpoint.

## Features

- Responds to `validationToken` (GET request)
- Accepts Graph notifications (POST request)
- Designed for Vercel

## Deploy

1. Import this repo to Vercel
2. Set endpoint to:
   ```
   https://your-project-name.vercel.app/api/webhook
   ```

3. Done! Use it in Microsoft Graph subscription `notificationUrl`.

## Test

- Open:
  ```
  https://your-project-name.vercel.app/api/webhook?validationToken=abc123
  ```
  You should see `abc123` printed in the browser.
