const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle room entry
app.post('/enter-room', (req, res) => {
  const { roomCode } = req.body;
  
  // Validate room code (you can implement your own validation logic)
  if (isValidRoomCode(roomCode)) {
    res.json({ success: true, message: 'Room code is valid. Entering room...' });
  } else {
    res.status(400).json({ success: false, message: 'Invalid room code.' });
  }
});

// Function to validate room code (dummy implementation)
function isValidRoomCode(roomCode) {
  // Implement your validation logic here
  return /^\d{4}$/.test(roomCode); // Example: Room code must be a 4-digit number
}

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
