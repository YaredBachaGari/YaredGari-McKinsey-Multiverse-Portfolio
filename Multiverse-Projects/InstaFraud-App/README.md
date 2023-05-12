# InstaFraud App Project

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

This project is an InstaFraud social networking application.The major objective of this project was to create a full- stack application for educational purposes that could run in any environment using Docker. At the same time, demonstrate the abilities/skills we acquired during our apprenticeship at Multiverse. This app resembles many of the features we discovered on Instagram and Twitter, as suggested by its name. We are driven to complete this application since the creation of each feature, both on the backend and frontend, will enable us to understand and put what we have learnt into practice.  Accordingly, once the ideation and brainstroming phase has been completed, we created the UML diagrams and the user interface wireframe on Figma to decide the minimum viable product within the given timeframe. Finally, we managed to complete all of the following main features: user authentication and authorization ( registration, signin and refresh token), role based CRUD operation on different posts, follow/unfollow other users, view profile and users reaction feature such as like and comment. To achieve this we utilized the following technology stacks;

![](header.png)

## Technologies 
* Javascript - ES6
* React - version 18.2.0
* Express.js/node  4.18.2/18.5.0
* Sequelize ORM - version 6.25.3
* MySQL - version 2.3.3
* Figma 
* Postman 
* Docker

## Development setup Instructions

For a local development setup, depending on which section of the application you want run, use the following commands to install all dependencies and spin the server. Potentially do this for multiple platforms.

To run front end  
```sh
cd into Instafraud/my-app
npm install
npm start
```
To run back end  
```sh
cd into Instafraud/Backend
npm install
npm start
```
To run both front and back-end on docker 

```sh
cd into Instafraud/Backend
npm install
cd into Instafraud/my-app
npm install
cd into Instafraud
docker-compose up
```
## Demo

Here are few screenshots to demonstrate what our app does.
![](my-app/public/images/Screen1.png)
![](my-app/public/images/Screen2.png)
![](my-app/public/images/Screen3.png)
![](my-app/public/images/Screen4.png)

## Contributors 

* Yared Gari 
* Kegaan Carpenter 
* Jordan Hornback

## Want To Contribute? You can

1. Fork it (<https://github.com/InstaFraud/InstaFraud.git>)
2. Create your feature branch (`git checkout -b feature/anyName`)
3. Commit your changes (`git commit -am 'Add some anyName'`)
4. Push to the branch (`git push origin feature/anyName`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki

