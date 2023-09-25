# Mini Trello Clone

🚀 This is a simple clone of Trello, a project management tool, showcasing customizable stages and task comments.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Database Structure](#database-structure)
- [Error Handling](#error-handling)

## Features

1. Customizable stages for task boards.
2. Task comments for discussions and collaboration.

## Technologies Used

- HTML
- CSS
- JavaScript
- [Add other technologies used]

## Setup

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/mini-trello-clone.git`
2. Open `index.html` in a web browser.

## API Endpoints

### Create a Stage for a Board

- Endpoint: `POST /api/boards/{boardID}/stages`
- Request Payload: { "stageName": "Custom Stage", "order": 3 }

### Update a Stage for a Board

- Endpoint: `PUT /api/boards/{boardID}/stages/{stageID}`
- Request Payload: { "stageName": "Updated Stage Name", "order": 4 }

### Create a Comment for a Task

- Endpoint: `POST /api/tasks/{taskID}/comments`
- Request Payload: { "userID": 123, "commentText": "This is a comment." }

### Update a Comment for a Task

- Endpoint: `PUT /api/tasks/{taskID}/comments/{commentID}`
- Request Payload: { "commentText": "Updated comment text." }

## Database Structure

### Board Stages Table

- Columns: BoardStageID (Primary Key), BoardID (Foreign Key), StageName, Order

### Task Comments Table

- Columns: CommentID (Primary Key), TaskID (Foreign Key), UserID (Foreign Key), CommentText, CreatedAt

## Error Handling

- Proper HTTP status codes and error messages are used to indicate the success or failure of a request.
- For example, 400 Bad Request for invalid input, 404 Not Found for a non-existent resource, and 500 Internal Server Error for server errors.
- Detailed error messages are provided in the response payload to guide the client on what went wrong.
