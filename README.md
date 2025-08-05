# Simple-Todo-App-API-UI-No-Auth-No-Deployment-Required

## Demo

https://github.com/user-attachments/assets/1aa576a2-3228-4f83-8d01-ad14c309aeb8


##  Backend Setup

1. Install dependencies add needed files:

   ```bash
   1.npm install
   2.add .env file
       .env:
           PORT={your port}
           DATABASE_URL={your databaseURL}
   ```
3.migrate to postgreSQL
   ```bash
   1.Generate Migration: npx drizzle-kit generate
   2.Run Migration: npx drizzle-kit push
   ```
3.run server by typing in terminal: npm run dev

##  frontend Setup

1. Install dependencies:

   ```bash
   1.npm install
   ```
2.run server by typing in terminal: npm run dev
