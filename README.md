Sequelize:
`git checkout sequelize`
To run locally, use SQL to create a database.
Create a file `.env` on the same directory as the server file.
Inside this file type out
    `DATABASE="your-database-name"
     PASSWORD="your-password"
     SECRET="keyboard cat"`
Replace the your- variable strings to suit your environment.
Run `npm i` then `npm run start` to see your app in browser.
Currently, every time the server restarts your databases will drop. To prevent this, go to the server.js file and remove the {force: true} object.

Mongoose:
`git checkout mongo`
To run locally, run `mongod` in terminal.
Create a file `.env` on the same directory as the server file.
    `DATABASE="your-database-name"
     SECRET="keyboard cat"`
Replace the your- variable strings to suit your environment.
Run `npm i` then `npm run start` to see your app in browser.

Anytime you need to access user info, you can take advantage of the getMe method in the API.

Once you add more models to the application, you can add the required routes by going into routes/api/ and adding new files for each model based on the structure for the current routes/api/user.js file. Then, you'll make updates to the code found in routes/api/index.js to link it in. You can follow the process outlined for incorporating the user server routes. 