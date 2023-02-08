# NoSQL-Social-Network-API
Module 18 Challenge-NoSQL Challenge: Social Network API

This project is an API for a social network web application where users can share thoughts, reactions, create a friends' list and react their friend's thoughts. I used `Express.js` to route, `MongoDB` for a database, `Mongoose` Object Data Modeling library, `Insomnia` to seed data, and `Moment.js` to create timestamps.

# License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Badges

<p>
  <img src="https://img.shields.io/badge/-Express-black" />
  <img src="https://img.shields.io/badge/-Insomnia-orange" />
  <img src="https://img.shields.io/badge/-JavaScript-yellow" />
  <img src="https://img.shields.io/badge/-Moment-teal" />
  <img src="https://img.shields.io/badge/-MongoDB-green" />
  <img src="https://img.shields.io/badge/-Mongoose-blue" />
  <img src="https://img.shields.io/badge/-Node-red" />
</p>

# Table of Contents

- [License](#license)
- [Badges](#badges)
- [Screenshots](#screenshots)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation and Usage](#installation-and-usage)
- [Tests](#tests)
- [Technologies Used](#technologies-used)
- [Project Link](#project-link)
- [Contributing and Questions](#contributing-and-questions)

# Screenshot DO THESE

![Screenshot (111)](https://user-images.githubusercontent.com/109984761/213993446-bf4c6726-af4a-48c5-a96e-4f387cb1eeec.png)
![BeerStack Brewclopedia](https://user-images.githubusercontent.com/109984761/213993468-987a92bf-ebf7-4753-bb41-b8251051ab9c.png)

# Acceptance Criteria

- GIVEN a social network API

- WHEN I enter the command to invoke the application

- THEN my server is started and the Mongoose models are synced to the MongoDB database

- WHEN I open API GET routes in Insomnia for users and thoughts

- THEN the data for each of these routes is displayed in a formatted JSON

- WHEN I test API POST, PUT, and DELETE routes in Insomnia

- THEN I am able to successfully create, update, and delete users and thoughts in my database

- WHEN I test API POST and DELETE routes in Insomnia

- THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

# Installation and Usage

The project was uploaded to GitHub at the following repository: https://github.com/cmarielorber/NoSQL-Social-Network-API

To install the project follow these steps:

Clone the application from GitHub with:
```
git clone [link from GitHub]
```
From the root folder, install the dependencies with:
```
npm install
```
```
npm i mongodb
```
Run the app with:
```
nodemon server.js
```
When the server is started, the Mongoose models are synched to the MongoDB database.
Open MongoDB and connect to the MongoDB URI mongodb://localhost:27017. On the list of databases, click on usersDB to see thoughts and users data.
To create seed data and test the API routes, use Insomnia. 

# Tests
Insomnia is used to test REST API calls. Please see the walk-through demonstration videos: https://drive.google.com/file/d/1MQ2WUP7RbTJPUuadVkVzzmjbWWJe8IWU/view as well as the sections on Description and Usage to see how data is added and tested using Insomnia.

On Insomnia, the following API routes have been created and used to add, update, or remove users, friends, thoughts, and reactions in the user's database.

📁 USER

- Create a new user: POST /api/users
- Get all users: GET /api/users
- Get a single user by its id: GET /api/users/:userId
- Update a user by its id: PUT /api/users/:userId
- Delete a user by its id: DELETE /api/user/:userId

📁 FRIEND

- Add a new friend to a user's friend list: POST /api/users/:userid/friends/:friendId
- Delete a friend from a user's friend list: DELETE /api/users/:userid/friends/:friendId

📁 THOUGHT

- Create a new thought: POST /api/thoughts/
- Get all thoughts: GET /api/thoughts/
- Get a single thought by its id: GET /api/thoughts/:thoughtId
- Update a thought by its id: PUT /api/thoughts/:thoughtId
- Delete a thought by its id: DELETE /api/thoughts/:thoughtId

📁 REACTION

- Create a reaction: POST /api/thoughts/:thoughtId/reactions
- Delete a reaction by the reactionId: DEL /api/thoughts/:thoughtId/reactions/:reactionId

# Technologies Used

- <a href="https://expressjs.com/" target="_blank">Express</a>
- <a href="https://insomnia.rest/" target="_blank">Insomnia</a>
- <a href="https://www.javascript.com/" target="_blank">JavaScript</a>
- <a href="https://www.npmjs.com/package/moment" target="_blank">Moment</a>
- <a href="https://www.mongodb.com/" target="_blank">MongoDB</a>
- <a href="https://mongoosejs.com/" target="_blank" >Mongoose</a>
- <a href="https://nodejs.org/en/" target="_blank">Node.js</a>
# Project Link

[NoSQL-Social-Network-API](https://github.com/cmarielorber/NoSQL-Social-Network-API)

[NoSQL-Social-Network-API Demo](https://docs.google.com/presentation/d/15hSn8MMS_9yVPyyFyTjIasWqzz-44rC4soTjx3Zvu4k/edit?usp=sharing)

# Contributing and Questions

* Pull requests are welcome. 
* If you have any questions about this application, please feel free to contact me directly at: <a href="mailto: christenmlorber@gmail.com"> Gmail<img></a>.

[Top of Page](#NoSQL-Social-Network-API)

