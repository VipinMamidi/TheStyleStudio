<h1 align="center">
The Style Studio
	
</h1>
A shopping website built using the MERN stack, Redux.js, Bootstrap 5 and AWS's S3 Storage. The user authentication includes 2 social login options(Google, Linkedin).
<br/>
The app also implements an email verification system for users registering using an email and password. Stripe and Paypal payment gateways are implemented to provide payment options, and the app also includes an admin panel to keep track of all products, orders and users. This is also a PWA

## Getting Started

- Fork this repo and run the `git clone <forked repo>` command from your terminal/bash.
- Cd into the directories and `npm install`
- Create a `.env` file in the root directory and add the variables
- Create a `.env` file in the frontend folder and add the variables
- Run the command `npm run dev` to run the server side and the client side concurrently.

## Demo

The app has been hosted on heroku [here](https://thestylestudio.herokuapp.com/)

## Info

- **The Style Studio** is an installable E-commerce PWA.
- It has been built from scratch using the MERN stack with the client side using a redux store as well. Bootstrap 5 is used along with some custom styling.
- [This course](https://www.udemy.com/share/103Cm43@TuAiV7GxL5Jy8NNbJb_-cpG2FeyqwS5dSG06Z6rhTh6PFAOCA05G77bxDUE-zRHj/) from Brad Traversy was the initial inspiration to build this from scratch. _But there are loads of new additional features throughout the app._
- The client side uses React hooks along with Redux.js and redux-thunk middleware
- The server side is built using the express framework of node.js.
- The database used to store the users, orders, products and refresh tokens is the free tier of the cloud based mongoDB service from MongoDB Atlas.
- The user authentication and authorisation has been implemented in two ways:

  i) **An email & password based login**:

  - Here, the JWT tokens are used to verify each new registered user by sending an email for account verification.
  - There is also a feature of allowing the user to reset password in case he/she forgets the credentials. This also uses refresh tokens and access tokens of varying life spans.
  - If user changes the email id after logging in, another verification link is sent to verify the new email id for extra security.
  - This feature has been implemented using the nodemailer package, along with the json web tokens(JWT).

  ii) **Social account based login**:

  - There are 4 options for logging in using an already exisiting social account.
  - The Google, Github, Linkedin and Twitter account details that are required for this app include the profile email and ID, nothing else is stored or fetched from the response.
  - The passport.js package is used to configure all this.
  - In case the user tries to login with a different social account after having registered with some other type of social account, the **app also notifies** the user to login using the correct social media account.

- The user avatar is a gravatar based on the stored user email.
- The workflow for ordering the items is very simple and quick. The status tracker helps keep track of the number of steps left before placing the order.
- The product page implements an image maginifier on hover.
- The user can review a product only once, after the placing an order for it.
- There is an admin panel built into the app, that can help the admin set any order as being delivered, and also allows the admin to add/update/delete any product.
- The admin panel also provides information regarding all orders and users.
- The app has 2 payment options available:

  i) The Stripe API is used to accept payments via a **Credit or Debit Card**. Since the app is still using the sandbox version, you can test this using 4242 4242 4242 4242 and any combition of date/cvv

  ii) The Paypal payment button can accept payments from any paypal account, but the app still uses sandbox credentials, so you can make payments using any sandbox client accounts.

- The images for the user avatar and the product are stored in a private AWS S3 bucket.
- The app is responsive and is also an installable progressive web app, with a notification sent to the user everytime the app has an update.

### User authentication and authorization

- As explained earlier, there are 2 approaches implemented. One makes use of **JWT**s and the other approach needs the use of a popular npm package called **passport.js**.
  - Along with a regular email login, I wanted to implement a system for **email verification** so that the number of troll accounts is kept to a minimum.
  - This involved sending an email with a verification link that consists of a web token/access token valid for a 15 minute duration.
  - Once this link is clicked, the client side then makes an API call to **verify the token** and confirm the user's account.
  - This same system is implemented to build the feature where a user can ask to reset the password.
  - The mails are sent using nodemailer, and a gmail account is used to send the mails securely.
  - The access tokens meant to validate the user session is **valid for an hour**, after which the refresh token has to be used to get new access tokens. These refresh tokens are **valid for 7 days**, after which they are removed from the Database automatically, using the **TTL concept of mongoose**.
- The next approach includes 2 social login options

### Payment Gateways

- There are two options to make the payment for the ordered items.
- The **Stripe API** is used to provide the option of using a Credit/Debit Card
- The **Paypal option** accepts payments from any paypal account, and the _react-paypal-button-v2_ is used in the client side to initiate the payment process.
- The Stripe payment makes use of creating a unique **payment intent** from the server side, for each payment and logs an invoice in the stripe developer account.
- You can use the sandbox account for trying paypal payments and use the dummy CC number of 4242 4242 4242 4242 for trying the stripe payment gateway

### Admin Panel

- The admin panel view is meant to handle all the orders, products and registered users
- An order can be marked as delivered, after the user has completed the payment
- The admin can create a product for the shop, which makes it easier to add/remove more products to replicate a real world e-commerce site
- The users detail can altered, only by setting them as admin or not. Other than this, the admin cannot change any other detail about the registered user.
- Helps give an estimate of the total number of orders and users on the app.

### Easy Workflow for Ordering Items

- The app has been designed and built in a manner that makes it very easy to order items once they are added to the cart.
- There is a status bar implemented that can help keep the user informed about the number of steps left in placing an order.

### Responsive Design

- Bootstrap 5 is used in the form of the latest version and a theme from bootswatch helps in maintaining a colour palette.
- Additional styling is included to format various smaller elements throughout the app.
- The app has been created using create-react-app and has opted in for using service workers.
- There is also a Toast component which alerts the user of a newer version of the app evrey time the app is updated.
- The navbar is not built using the nav elements for toggling, instead it is rendered differently based on display classes offered by bootstrap.

### Miscellaneous

- The app uses an **S3 storage option** to store all the gravatars or user profile pics, and the access is limited to the sdk setup in the server side.
- A user can submit a review for any product only if he/she has placed an order for the product, and hasn't already submitted a review
- The cart page makes it very easy to alter the quantity of the products, and the cart size is indicated to the user at all instants.
- The product carousel in the home page fetches the top rated products and provides the details
- Pagination is also implemented to be server side rendered list of products/orders.

## Technologies Used

Some of the technologies used in the development of this web application are as follow:

- MongoDB Atlas: It provides a free cloud service to store MongoDB collections.
- ReactJS: A JavaScript library for building user interfaces.
- NodeJS: A runtime environment to help build fast server applications using JS.
- Express.js: A popular Node.js framework to build scalable server-side for web applications.
- Redux.js: A predictable & global state container for React apps.
- Mongoose: An ODM(Object Data Modelling)library for MongoDB and Node.js
- Heroku: A platform(PaaS) to deploy full stack web applications for free.
- JSON Web Tokens or JWTs: A standard to securely authenticate HTTP requests
- Bootstrap 5: A popular framework for building responsive, mobile-first sites.
- React Bootstrap: The most popular front-end framework, rebuilt for React.
- passport.js: Simple, unobtrusive authentication for Node.js
- nodemailer: Send mails using a node based server
- bootswatch: Free & customisable themes for Bootstrap
- Multer and Multer-S3: Node.js packages that help in dealing with file uploads.
- AWS S3 Storage Bucket: An object storage service that offers industry-leading scalability, data availability, security, and performance.
