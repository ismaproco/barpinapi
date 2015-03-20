#BARPIN API

Install the Application
-----------------------

To install the application you need the following dependencies in your system:

- node
- npm
- mongo ( running local instance )

Clone the repository:
- https
```
https://github.com/ismaproco/barpinapi.git
```
- ssh
```
git@github.com:ismaproco/barpinapi.git
```

Go to the barpin folder:
```
cd barpinapi
```

Install dependencies
```
npm install
```

Run the application
```
node server.js
```

#Examples to use the REST-API

Full Restful API for the user management, is using the node-restful to build the service layer of the application, the following examples illustrate the use of the API.

Get All Users
---------------

GET /users/

- Example:
```

GET /api/users HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache

```

Get Single User
---------------

GET /users/:id

- Example:
```

GET /api/users/55090220ae2f8538169781d4 HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache

```


Save User
---------------

POST /users/

- Example:
```

POST /api/users HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache

{ "userName": "ismaproco", "password": "1b12b3b123123ccc1de", "name": "ismael", "lastName": "jimenez", "birthDate": "231231212312", "email": "isma@isma.com", "imageUrl": "http://1231223412", "twitterAccount": "ismapro", "googleAccount": "ismaproco", "facebookAccount": "saifgen" }


```

Update Users
---------------

PUT /users/:id

- Example:
```

PUT /api/users/55090220ae2f8538169781d4 HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache

{ "userName": "ismaproco", "password": "1b12b3b123123ccc1de", "name": "ismael", "lastName": "jimenez", "birthDate": "231231212312", "email": "isma@isma.com", "imageUrl": "http://1231223412", "twitterAccount": "ismapro", "googleAccount": "ismaproco", "facebookAccount": "saifgen@hotmail.com" }


```

Delete Users
---------------

DELETE /users/:id

- Example:
```

DELETE /api/users/55090220ae2f8538169781d4 HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache

```
