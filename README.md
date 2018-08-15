# Wycliffe Discovery Center Quiz
 A quiz application for rotunda panel in Wycliffe's very own [Discovery Center](https://www.wycliffe.org/discovery-center).

# Demo

Click the link below to see a simple demo of the application. Note that because the actual application uses a touch screen, the cursor will not be visible and the full application will more naturally fit its screen.

[Watch the Video!](https://youtu.be/RkZaxSduRhw)

# Technologies Used
A full-stack MERN Application
* Mongodb
* Express
* React
* Node.js
for Raspbian OS on Rasberry Pi with 24 inch 1080x1920 Elotouch-screen.

# React Components
react-idle
Semantic-ui
[Victory animation](https://formidable.com/open-source/victory/gallery/animating-circular-progress-bar/)

## To Run Locally

Make sure you have [Node.js](http://nodejs.org/) and [Nodemon](https://www.npmjs.com/package/nodemon) installed.

```sh
git clone https://github.com/saintwycliffe/mern-discovery.git # or clone your own fork
cd mern-discovery
npm install
cd client
npm install
npm run build
cd ..
nodemon
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Deploying to Heroku

```
heroku create
git push heroku master
heroku open
```
