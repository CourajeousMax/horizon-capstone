# Description 
Chirp! is a self-care application that encourages the user to practice healthier habits by giving them a set of goals to complete at their own pace,  journaling prompts to express their thoughts and feelings and in return, they will level up their pet. By taking care of yourself, you are also helping your companion grow.
# Features 
Create an account; Log in; Complete a set of goals list to level up your pet; Navigate to the Journals page to write down your thoughts and feelings; Listen to music as you write down your thoughts;
# Installation
1. Clone this repository: git clone git@github.com:CourajeousMax/horizon-capstone.git;
2. Go to client and server directories and install dependencies for each of them: npm install;
3. Set up database: mysql -u root -p;
4. Create database and use it: CREATE DATABASE horizon then USE horizon;
5. Set up knex: npm run migrate then npm run seed;
6. Create an .env file based on .env.example updating it with your information;
7. Start client: npm start;
8. Start server: npx nodemon index.
# Tech Stack 
Tech Stack Front-End: [REACT] [SASS] [AXIOS] [ WeatherApi]

Tech Stack Front-End: [Node Js] [Express] [knex] [MySQL] [AffirmationsApi]

# Next steps

Implement functionality to the journals page so the user can write, edit and store their entries.;

Implement reward system/levels as you level up your companion;

Implement more features such as dark/light mode toggle, and animations;

Polish design;

Make the design responsive;
