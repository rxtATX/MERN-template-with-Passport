Sequelize:
To run locally, use SQL to create a database.
Create a file `.env` on the same directory as the server file.
Inside this file type out
    `DATABASE="your-database-name-here"
    PASSWORD="your-SQL-password-here"`
Replace the strings to suite your environment.
Run `npm i` then `npm run start` to see your app in browser.
Currently, every time the server restarts your databases will drop. To prevent this, go to the server.js file and remove the {force: true} object.