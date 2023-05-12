# InstaFraud App

> This project has an educational goal, but it also mimics some of the features and functionalities that major social networking apps, like Instagram and Twitter, offer.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

The main goal of this project was to develop a full stack application that can able run accross all environments with the help of Docker. simultaneously show off the skills/abilities we learned during our bootcamp training. Thus the main, features included in this release are, user authentication and authorization( registration, signin and refresh token), role based CRUD operation on different posts, follow/unfollow other users, view profile and users reaction feature such as like and comment. To achieve this we utilized the following tech stacks;

![](header.png)

## Tech Stacks 
* React
* Express.js/node
* Sequelize ORM
* MySQL
* Figma
* Postman

## Release History

* 0.0.2
    * Work in progress
* 0.0.1
    * The first release

## Development setup

For a local development setup, depending on which section of the application you want run, use the following commands to install all dependencies and spin the server. Potentially do this for multiple platforms.

To run front end  
```sh
cd into Instafraud/my-app
npm install
npm start
```
To run back end  
```sh
cd into Instafraud/my-app
npm install
npm start
```
To run both front and back-end on docker 

```sh
cd into Instafraud/my-app
npm install
cd into Instafraud/my-app
npm install
cd into Instafraud
docker-compose up
```
## Usage example

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

