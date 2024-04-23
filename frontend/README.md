Rent Boat

http://127.0.0.1:3000/api/v1/rentboat/ - Post 
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

Update by id

http://127.0.0.1:3000/api/v1/rentboat/661c437736db73577315718d - Patch 
Body
{ 
  "duration":7
}

Get (Display) by id

http://127.0.0.1:3000/api/v1/rentboat/661c437736db73577315718d - GET

Delete by id

http://127.0.0.1:3000/api/v1/rentboat/661c46a801bd64d877b620e8 - Delete 

login 

http://127.0.0.1:4000/api/v1/users/login - POST

Body
{
  "email": "test123@gmail.com",
  "password":"Test12345"
}

Signup 

http://127.0.0.1:3000/api/v1/users/signup - Post
{
  "name": "Gayu Nimmagadda",
  "email": "test123@gmail.com",
  "password":"Test12345",
  "confirmPassword":"Test12345"  
}