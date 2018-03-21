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

# Thoughts

I picked sqlite to store the data as it's nice and easy to run for little programs like this. I knew I wanted to hit a selection of routes to get/create/update/delete data so I fleshed those out quickly and linked them to a features controller.  

Then I created a migration of fake data, loaded up Postman and started hitting the endpoints - beginning with the GET until I had that returning what I wanted.  

If I had more time I would create a users model and tie that to the features model to get an accurate ratio of users for each feature. Currently the total users (5) and the ratio is just a user inputted string which would soon become meaningless as more features/users are added.  

I'd move the database away from sqlite as ideally I want to store the users' emails in an array and sqlite doesn't support arrays. Using a string and partially matching with %like% works well enough for now however.  


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

