# Back

Build the architecture on serverless, because:
- Auto-scale each function separately and automatically.
- If a micro service falls, all the others keep running.
- You can use different providers (aws, azure, etc).

I thought that based on the requirements, thinking of a large audience seemed the best option for this example.

## Getting started

### enviroment
You can set two enviroment variables:
- MONGODB_URI: uri of mongodb. default: localhost:27017
- PORT: port where application will listen. default : 3000


### install and run
```
    npm install
    npm install -g serverless@1.39.1
    npm run start
```
Starts on `http://localhost:3000`.

### I included several core libs

* Mongoose _-  mongodb driver.
* Serverless _- http framework.

And some **other useful libs** like eslint, serverless-offline.

## Project structure

`services` 
In this folder are our http functions separated by each model (category, brand).

`app/controllers` 
The controllers are used to warpe logic related to a model, the idea of the controllers is that they can be used by any service and the logic is encapsulated. The idea is always to extend the BaseController because it has all the necessary functionality for the required operations (CRUD).

`app/model` 
the models are representations of mongo schema.

`app/config` 
App configuration.

`utils/*` 
Useful snippets of code like schema validations, database connection, errors handler, http response, etc.

_Tested using NPM 6.2.0, Node v10.8.0, Git 2.19.0 over Mac OS 10.14.2.
