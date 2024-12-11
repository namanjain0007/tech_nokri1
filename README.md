# Tech Nokri

Tech Nokri is a MERN stack application designed to simplify the job search process. It allows users to find jobs based on their courses and qualifications, apply for them directly, and manage their applications efficiently.

## Features

- **Job Search**: Search for jobs based on your skills, qualifications, and interests.
- **Apply Directly**: Users can send their resumes directly to relevant companies.
- **Duplicate Prevention**: Prevents users from applying to the same job multiple times. Displays "Already Applied" if they attempt to reapply.
- **User-Friendly Interface**: Clean and intuitive design for easy navigation.
  
## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: Redux (if used)
- **Authentication**: JWT (if applicable)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tech-nokri.git
   cd tech-nokri
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory.
   - Add the following variables:
     ```env
     MONGO_URI=your-mongodb-uri
     JWT_SECRET=your-jwt-secret
     PORT=5000
     ```

4. Start the application:
   ```bash
   # Start backend server
   cd backend
   npm start

   # Start frontend development server
   cd ../frontend
   npm start
   ```

5. Open the application in your browser at `http://localhost:3000`.

## Folder Structure

```plaintext
tech-nokri/
├── backend/      # Backend server code
├── frontend/     # Frontend React application
└── README.md     # Project documentation
```

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.
