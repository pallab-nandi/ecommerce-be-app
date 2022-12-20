<div align="center"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiI1EJKrANyPNYSK2mUTXzWYH2EdyaNxAZOm8ic4zr9pvcdiZnBPsYlPDlya1mt507-WdhX2tK44qjG_eyXSYjXurqKTdaFbPhPwmT4qYzqHDlFG6tMxNlH8_9QBet_anvb2CT9y8bw2pxBVQQJtSEqmBiH5Zky_-Ho7luGbCtwMsW4iqAsjnUaTvV1NQ/s16000/LogoMakr-158Xv7.png"></div>
<h1 align="center">E-Commerce BackEnd App</h1>
<p align="center">
    <strong><u>Description</u></strong>
    <br>A BackEnd application for e-commerce CRUD operation<br>
    <b>Project Title : </b>E-Commerce BackEnd App<br>
    <b>Project by : </b><a href="https://github.com/pallab-nandi">Pallab Nandi</a>
</p>
<br/>
<h2>About</h2>
A BackEnd application of e-commerce built on MVC(Model-View-Controller) structure. The technologies uses on this application are - <b>NodeJS</b>, <b>ExpressJS</b> and <b>Sequelize</b>. This application uses <b>MySQL</b> technology to interact with DataBase. Important key features this application contains are :-

<br>

- User SignUp and LogIn feature
- User Cart CURD operation
- Categories, Products and Users CRUD operation for Admin only
- uses JWT for Authorization and Authentication


<h2>API Documentation</h2>

The current project is deployed on the <b>cyclic.sh</b> platform. Therefore, the root directory for the API is <br>`pallabnandi-ecommerce-app.cyclic.app`

For Products CRUD operation, the common route is `/ecomm/api/v1/product` . Now the following operations are :

- `/all` - to fetch all products (Also filters available like maxCost, minCost etc.)
- `/[id]` - to fetch according as product ID
- `/create` - to create new product (Only accessable by Admin)
- `/[id]/update` - to update the specific product (Only accessable by Admin)
- `/[id]/delete` - to delete the specific product (Only accessable by Admin)

For Categories CRUD operation, the common route is `/ecomm/api/v1/category` . Now the following operations are :

- `/all` - to fetch all categories
- `/[id]` - to fetch according as category ID
- `/create` - to create new category (Only accessable by Admin)
- `/[id]/update` - to update the specific category (Only accessable by Admin)
- `/[id]/delete` - to delete the specific category (Only accessable by Admin)

For Users CRUD operation, the common route is `/ecomm/api/v1/user` . Now the following operations are :

- `/all` - to fetch all users (Only accessable by Admin)
- `/[id]` - to fetch according as User ID (Only accessable by Admin)
- `/[id]/update` - to update the specific user (Only accessable by Admin)
- `/[id]/delete` - to delete the specific user (Only accessable by Admin)

For Cart CRUD operation, the common route is `/ecomm/api/v1/cart` . Now the following operations are :

- `/view` - to fetch all Cart Items with status 'Processed' or 'Shipped' (Only accessably by Authenticate User)
- `/view?status=all` - to fetch all Cart Items with all type of status (Only accessably by Authenticate User)
- `/view?status=[id]` - to fetch all Cart Items with status type (Only accessably by Authenticate User)
- `/add` - to create new Cart (Only accessable by Authenticate User)
- `/[id]` - to update the specific category (Only accessable by Admin)
- `/[id]/delete` - to delete the specific category (Only accessable by Admin)

For Auth, the common route is `/ecomm/api/v1/auth` . Now the following operations are :

- `/signup` - to register self as new user.
- `/login` - to login self.


<h2>Clone the application on Local System</h2>

To clone the application on the local system, one must go through these prerequisite -

1. Must have <b>Git</b> install on the system
2. Technology needed to run the app - <b>NodeJS</b>
3. And <b>MySQL Community</b> should be installed on the system

If one follows these prerequisite, then proceed the step as follow

- Open Terminal (on MAC or Linux) or Git Bash (on Windows) and run the following command - <br>`git clone https://github.com/pallab-nandi/ecommerce-be-app.git`

<div align="center"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFY5ybnxONzgxyF-0cAljTBfNmSreR5-HXRvNd9xyzLd_CdmuUGeWbxenIesbqcVARD9IZhDuoIT4BFcHu8t_7kHZDR3ynd6OnImbteDy-Nfc6usSJ3RCWqQ2dtSSfpi32Upp7A6C9W_nv7YkGYy6XalafbM8Tw2MyVKfYItIogY0UPWsrEcjeq6ndlA/s16000/git-clone-min.png"></div>

- Now go to Project directory and run `npm install` command to install necessary dependencies.

<div align="center"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhPrPorur3Z8R8W_cVXpWrx25p-q9Uoi4H9yLsf-iNK_jQgIqabgOh6KSCovUU6lS_AVBHEDijNO6PVubX1z3FxsU4PD0unRb4FM6vpl3NOsGP8keGodv5PPPqSW5lfEiSDBZg0JiLd1h1Vs38O92i1WpscTHEuI-CLwjqE0LD-xW0s96I3w6-BLIHvA/s16000/npm-install.png"></div>

- With everything ready just run the command `node ./index.js` or `npm start` to start the application.

<div align="center"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDxfVJqhQNQm0Z0YIbIJzIu1G2Wc8Mk7U0vbIt8WoYyb68TDux9UcHhWHFusFpGEIQbt0AAjwVckpRVJJFrNvL9k8zWsO9E9ZY9C8oKkkB_UDNsnwLWc2ZxzN3e36EoME1lWAfZCN8s0BaZ1CxKwft6Wt6W1Gv9HvYEK8zQT-m1pBPPhqj7gQPB3QAFQ/s16000/app-start.png"></div><br>

<b>Note :</b> Before starting application change `'prodcution'` into `'development'` in `connections/sequelize.connection.js` file so that it wouldn't hamper with the production database. And do change the necessary details in `config/config.json` file to connect with the local database.


<h2>Project Version</h2>

The current version of the application is `v1.0.0`
