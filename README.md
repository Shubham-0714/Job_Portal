NextHire Job Portal (MERN)

NextHire is a fullstack job portal where recruiters can post jobs and candidates can apply.

 Live Demo
Frontend: https://nexthire-frontend-1ohf.onrender.com  
Backend API: https://nexthire-cnwf.onrender.com

 Tech Stack:

1) Frontend:
React
React Router
Tailwind CSS

2) Backend:
Node.js
Express.js

3) Database:
MongoDB Atlas

4) Authentication:
JWT

5) Deployment:

Render

Features:

1) User Authentication:
Register
Login
JWT Authentication

2) Job Management:
Create Job
View Jobs
Role based access

 API Endpoints:

POST /api/users/register  
POST /api/users/login  
GET /api/jobs  
POST /api/jobs

Summary :

I built a fullstack MERN job portal called NextHire where recruiters can post jobs and candidates can view them.
The frontend is built with React and Tailwind, backend with Node.js and Express, and MongoDB Atlas is used for database.
Authentication is implemented using JWT tokens and role based access control.
The application is deployed on Render.

API Documentation: 

1) Register User

Endpoint : POST /api/users/register

Request Body:

{
 "name": "Shubham",
 "email": "shubham@example.com",
 "password": "123456",
 "role": "candidate"
}

Response

{
 "success": true,
 "message": "User registered successfully"
}

2) Login User

Endpoint: POST /api/users/login

Request Body

{
 "email": "shubham@example.com",
 "password": "123456"
}

Response

{
 "success": true,
 "token": "jwt_token_here",
 "user": {
   "id": "user_id",
   "name": "Shubham",
   "role": "candidate"
 }
}

3) Create Job

Endpoint: POST /api/jobs

Headers:

Authorization: Bearer <my generated token>

Request Body

{
 "title": "Frontend Developer",
 "company": "ABC",
 "location": "Delhi",
 "description": "Need Frontend Developer",
 "role": "frontend"
}