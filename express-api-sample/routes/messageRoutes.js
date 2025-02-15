// API routes (endpoints)
// routes/messageRoutes.js

const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Define the routes for CRUD operations
router.get('/messages', messageController.getMessages);  // Get all messages

// req

// http://localhost:3001/api/messages
// resp 
// [
//     {
//     "id": 1,
//     "text": "Hello, world!"
//     },
//     {
//     "id": 2,
//     "text": "Welcome to the API!"
//     }
//     ]


router.get('/messages/:id', messageController.getMessage);  // Get message by ID

/*
Req
http://localhost:3001/api/messages/1

Resp
{
"id": 1,
"text": "Hello, world!"
}


*/
router.post('/messages', messageController.createMessage);  // Create a new message

/*
Req
http://localhost:3001/api/messages

{
    "id": 3,
    "text": "Hello, world! three"
    }


    resp
{
    "id": 3,
    "text": "Hello, world! three"
}
*/
router.put('/messages/:id', messageController.updateMessage);  // Update a message

/*
Req
http://localhost:3001/api/messages/3

{
    "id": 3,
    "text": "Hello, world! three updated"
    }


    resp
{
    "id": 3,
    "text": "Hello, world! three updated"
}
*/
router.delete('/messages/:id', messageController.deleteMessage);  // Delete a message


/*
Req
http://localhost:3001/api/messages/3

resp

204 No Content

*/

module.exports = router;
