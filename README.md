# Dummy API
### Dummy crud API to act as a backend server for frontend apps

<br>
<br>

#### To make use of this API you have 2 options

## Option 1 - run server locally on your machine
 
 - clone the repository `git clone https://github.com/rafayel23/UP-RUN-dummy-API.git`
 - get into cloned repository directory `cd ./UP-RUN-dummy-API`
 - install the dependencies `npm install`
 - run server locally `npm start`

#### Open your browser at http://localhost:4000, if you see `UP & RUN dummy API home` then you're good to go. now you can use the following endpoints...
   
##### `Get users`
GET - http://localhost:4000/api/users

##### `Get user by ID`
GET - http://localhost:4000/api/users/[id]
  
##### `Create user`
POST - http://localhost:4000/api/users

##### `Update user by ID`
PUT - http://localhost:4000/api/users/[id]
  
##### `Delete user by ID`
DELETE - http://localhost:4000/api/users/[id]
  
<br>
<br>

## Option 2 - use production server

Here you don't have to configure anything, just use the following endpoints...
  
##### `Get users`
GET - https://up-run-dummy-api.herokuapp.com/api/users

##### `Get user by ID`
GET - https://up-run-dummy-api.herokuapp.com/api/users/[id]
  
##### `Create user`
POST - https://up-run-dummy-api.herokuapp.com/api/users

##### `Update user by ID`
PUT - https://up-run-dummy-api.herokuapp.com/api/users/[id]
  
##### `Delete user by ID`
DELETE - https://up-run-dummy-api.herokuapp.com/api/users/[id]

<br>
<br>

## User Schema

Below represented the interface of user <br>
First goes key, then value type, then validations

 - name: string (required)
 - email: string (required, unique, validEmail)
 - address:
   - street: string (required)        
   - city: string (required)
 - phones: string[] (at least one item required, pattern - `+` following with 8-12 numbers)

