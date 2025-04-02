# Task Management API

A RESTful API built with Node.js and Express.js for managing tasks with in-memory data storage.

## Overview

This project implements a complete task management system through a RESTful API, allowing users to create, read, update, and delete tasks. The API includes error handling, input validation, and filtering capabilities, all built on the Express.js framework.

## Features

- **Complete CRUD Operations**:
  - Create new tasks
  - Retrieve individual or all tasks
  - Update existing tasks
  - Delete tasks

- **Advanced Functionality**:
  - Filter tasks by status (completed, pending)
  - Filter tasks by priority
  - Search tasks by title/description
  - Sort tasks by creation date

- **Robust Architecture**:
  - Input validation
  - Comprehensive error handling
  - In-memory data persistence
  - RESTful design principles

## Technical Stack

- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **In-memory storage** - Data persistence mechanism
- **Postman/curl** - API testing tools

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/tasks | Retrieve all tasks (with optional filtering) |
| GET    | /api/tasks/:id | Retrieve a specific task by ID |
| POST   | /api/tasks | Create a new task |
| PUT    | /api/tasks/:id | Update an existing task |
| DELETE | /api/tasks/:id | Delete a task |

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/task-management-api.git
   cd task-management-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

The API will be available at `http://localhost:3000/api/tasks`

## Usage Examples

### Create a Task

```
POST /api/tasks
Content-Type: application/json

{
  "title": "Complete project documentation",
  "description": "Write comprehensive API documentation",
  "status": "pending",
  "priority": "high",
  "dueDate": "2025-04-15"
}
```

### Get All Tasks

```
GET /api/tasks
```

### Filter Tasks

```
GET /api/tasks?status=completed&priority=high
```

### Update a Task

```
PUT /api/tasks/1
Content-Type: application/json

{
  "status": "completed"
}
```

## Testing

Use Postman or curl to test the API endpoints:

```
curl -X GET http://localhost:3000/api/tasks
```

## Project Structure

```
task-management-api/
├── src/
│   ├── controllers/    # Request handlers
│   ├── middleware/     # Express middleware
│   ├── routes/         # API routes
│   ├── models/         # Data models
│   ├── utils/          # Helper functions
│   └── app.js          # Express app setup
├── package.json
└── README.md
```

## Learning Outcomes

By building this project, you'll gain experience with:

- Designing and implementing RESTful APIs
- Working with Express.js middleware
- Implementing proper error handling
- Creating robust input validation
- Building filtering and sorting mechanisms
- Testing APIs using industry-standard tools

## Next Steps

Consider enhancing the project with:

- Persistent database storage (MongoDB, PostgreSQL)
- User authentication and authorization
- API documentation using Swagger/OpenAPI
- Deployment to a cloud platform
- Unit and integration tests

## License

This project is licensed under the MIT License.