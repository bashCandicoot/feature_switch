# Feature switch API (Node.js)

Setup:

```cd server```  

```npm install -g sequelize-cli``` 

```npm install``` 

```sequelize db:migrate```

```npm start```


Run:

Head to the following urls in a browser/Postman/Insomnia  

```GET    http://localhost:8081/features/email/{email}```    

```PUT    http://localhost:8081/features/{id}```  

```POST   http://localhost:8081/features/```  

```DELETE http://localhost:8081/features/{id}```  



# Challenge

In this case we will want a small feature switch to allow us to conduct an A/B test.  

A switch should have the following information:

- Feature name, so we can identify which feature we're testing  

- Enabled/disabled  

Ratio of users that will get this feature assigned  

Our API will need the following cases:  

- A way to create a new feature, so we can run multiple tests  

- A way to edit information about a feature  

- A way to delete them  

- A way of providing an email to the API that returns the array of features, saying if the user is part of them or not  

