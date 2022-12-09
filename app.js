        const express = require("express");

        const app = express();

        const port = 3000;

        app.use(express.urlencoded({ extended:false }));
        app.use(express.json());

        const items = [{
            name: "Bags",
            price: 12,
            currency: "USD",
            id: 1
        },
        {
            name: "Sneakers",
            price: 25,
            currency: "USD",
            id: 2
        },
        {
            
            name: "Hoodie",
            price: 15,
            currency: "USD",
            id: 3
        },
        {
            
            name: "Cargo Pants",
            price: 10,
            currency: "USD",
            id: 4
        },
        {
            
            name: "Watches",
            price: 7,
            currency: "USD",
            id: 5
        }
        ]
        
        app.get("/", (request, response) => {
          response.send("Welcome to our Christmas sales page!!!");
        });

        app.get("/items", function (request, response) {
            response.json(items);
        });

        app.post("/add-items", (request, response) => {
            console.log("Body", request.body)

            response.json(request.body);
        });
        
       /* app.get("/items/:id", function (request, response) {
            console.log("Params", request.params.id);

            response.json(request.params.id);
        });*/
        
       
        app.listen(port);
          console.log(`App is running at port ${port}`);
        