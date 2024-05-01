Rent Boat Application

FrontEnd: 

To start the server: npm start (PORT : 3000)
Dependencies : 
        "@testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "axios": "^1.6.8",
        "moment": "^2.30.1",
        "moment-timezone": "^0.5.45",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^6.22.3",
        "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"

Backend : 

To start the server : npm start (nodemon server.js) running on PORT 4000 
Dependencies :
   "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.3.1",
    "node": "^18.20.2",
    "nodemon": "^3.1.0",
    "validator": "^13.11.0" 

Backend API's :
	

Book Now API - Create booking

http://127.0.0.1:4000/api/v1/rentboat/ - Post 
Body
{
  "firstName": "Sai5",
  "lastName": "Nimmagadda2",
  "middleName": "Prasanna",
  "phone": "9441481549",
  "email": "sai6@gmail.com",
  "type": "kayak",
  "count": 1,
  "startTime":"3PM",
  "date":"2024-07-16",
  "duration": 3
}

Update by id - Update the booking

http://127.0.0.1:4000/api/v1/rentboat/661c437736db73577315718d - Patch 
Body
{ 
  "duration":7
}

Get (Display) by id - Display the booking

http://127.0.0.1:4000/api/v1/rentboat/661c437736db73577315718d - GET

Delete by id - Cancel the booking

http://127.0.0.1:4000/api/v1/rentboat/661c46a801bd64d877b620e8 - Delete 

login 

http://127.0.0.1:4000/api/v1/users/login - POST

Body
{
  "email": "test123@gmail.com",
  "password":"Test12345"
}

Signup 

http://127.0.0.1:4000/api/v1/users/signup - Post
{
  "name": "Gayu Nimmagadda",
  "email": "test123@gmail.com",
  "password":"Test12345",
  "confirmPassword":"Test12345"  
}
