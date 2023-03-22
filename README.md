# todo-list-app-Tyscript

1. Install Node.js
You can download and install Node.js from the official website: https://nodejs.org/
2. Clone the project
Open your terminal and navigate to the directory where you want to store the project.
Run the command git clone https://github.com/Maztermon/todo-list-app-Tyscript.git to clone the project from Github.
3. Install project dependencies
In your terminal, navigate to the project directory and run the command 
**`npm install`** to install all the project dependencies. 
**`npm install --save-dev typescript ts-node nodemon`**
**`npm install --save express cors body-parser`**
Compile your TypeScript code: **`npx tsc --init`** This command initializes a new TypeScript configuration file (tsconfig.json) with some default settings. You can modify these settings as needed.**`npx tsc`**
4. Start the server
In the same directory, run the command **`npm run start`** to start the server.
The server will start running on http://localhost:4000/
5. Use the application
You can use the following API endpoints to interact with the TODO List Application:
-GET http://localhost:4000/todos - Get all todos
-GET http://localhost:4000/todos/:id - Get a specific todo by ID
-POST http://localhost:4000/todos - Add a new todo
-PUT http://localhost:4000/todos/:id - Update an existing todo by ID
-DELETE http://localhost:4000/todos/:id - Delete a todo by ID
You can use any API client, such as Thunder Client or Postman, to test the API endpoints.
6. Stop the server
To stop the server, go to the terminal and press Ctrl+C.
