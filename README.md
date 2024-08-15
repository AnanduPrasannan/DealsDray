Run
To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

MONGODB_CONNECTION_STRING: Specify the Mongodb URI to access the database

JWT_SECRET_KEY: Specify the secret which is used to generate JWT token on authorization

FRONTEND_URL: http://localhost:5173 , for me it is this

VITE_API_BASE_URL: It is used to fetch data from or send data to different API servers

After you've set these environmental variables in the .env file at the server folder and client folder of the project, and install node modules using npm install in both server and client folder.

Now you can run npm run dev in the terminal to run server and 'npm run dev' to run client and the application should work.

Technology
The application is built with:

Node.js

MongoDB

Express.js

JWT authentication and authorization

Reactjs

React router dom for client routes

Tailwind CSS for user interfaces

React Query for API data fetching and Use Hook Form for validation and form handling , Express validator is used at backend for validation.


Features
It is a HR manaagement Portal.
HR can do the following
Create an account , login and logout
Add all employee details,updat and delete it
You have filter and sorting options 
Pagination has been added
You can add images
Can see the history of added employees

