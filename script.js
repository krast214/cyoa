document.addEventListener('DOMContentLoaded', () => {
    const roomCodeInput = document.getElementById('roomCodeInput');
    const enterRoomBtn = document.getElementById('enterRoomBtn');
    const message = document.getElementById('message');
  
    enterRoomBtn.addEventListener('click', async () => {
      const roomCode = roomCodeInput.value.trim();
      
      if (!roomCode) {
        message.textContent = 'Please enter a room code.';
        return;
      }
  
      try {
        const response = await fetch('/enter-room', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ roomCode })
        });
  
        if (!response.ok) {
          throw new Error('Invalid response from server.');
        }
  
        const data = await response.json();
  
        if (data.success) {
          message.textContent = data.message;
          // Redirect to the room or perform other actions upon successful entry
        } else {
          message.textContent = data.message;
        }
      } catch (error) {
        console.error('Error:', error);
        message.textContent = 'An error occurred. Please try again later.';
      }
    });
  });
  