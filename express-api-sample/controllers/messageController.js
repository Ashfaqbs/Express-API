// Logic for handling message CRUD operations

// controllers/messageController.js

const messages = [
    { id: 1, text: "Hello, world!" },
    { id: 2, text: "Welcome to the API!" }
  ];
  
  // Get all messages
  const getMessages = (req, res) => {
    res.json(messages);
  };
  
  // Get a single message by id
  const getMessage = (req, res) => {
    const { id } = req.params;
    const message = messages.find(m => m.id === parseInt(id));
    
    if (!message) {
      return res.status(404).json({ error: "Message not found!" });
    }
    res.json(message);
  };
  
  // Create a new message
  const createMessage = (req, res) => {
    const { text } = req.body;
    const newMessage = {
      id: messages.length + 1, // Increment ID (in real scenarios, use DB auto increment)
      text,
    };
    
    messages.push(newMessage);
    res.status(201).json(newMessage);
  };
  
  // Update an existing message
  const updateMessage = (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    
    const message = messages.find(m => m.id === parseInt(id));
    
    if (!message) {
      return res.status(404).json({ error: "Message not found!" });
    }
    
    message.text = text;  // Update the message text
    res.json(message);
  };
  
  // Delete a message
  const deleteMessage = (req, res) => {
    const { id } = req.params;
    const index = messages.findIndex(m => m.id === parseInt(id));
    
    if (index === -1) {
      return res.status(404).json({ error: "Message not found!" });
    }
    
    messages.splice(index, 1);  // Remove the message from the array
    res.status(204).send();
  };
  
  module.exports = {
    getMessages,
    getMessage,
    createMessage,
    updateMessage,
    deleteMessage,
  };
  