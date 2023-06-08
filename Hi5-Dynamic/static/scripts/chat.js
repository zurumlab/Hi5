const chatThreads = document.getElementById('chat-threads');
const messageContainer = document.getElementById('message-container');
const selectedThread = document.getElementById('selected-thread');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Mock server URL for demonstration purposes
const serverURL = 'https://api.example.com/chat';

// Mock data for chat threads
const mockChatThreads = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  { id: 3, name: 'User 3' }
];

// Populate chat threads
mockChatThreads.forEach(thread => {
  const threadItem = document.createElement('li');
  threadItem.classList.add('thread-item');
  threadItem.textContent = thread.name;
  threadItem.setAttribute('data-thread-id', thread.id);
  chatThreads.appendChild(threadItem);
});

// Event listeners for chat threads
const threadItems = document.querySelectorAll('.thread-item');
threadItems.forEach(threadItem => {
  threadItem.addEventListener('click', () => {
    const threadId = threadItem.getAttribute('data-thread-id');
    selectThread(threadId);
  });
});

// Function to select a chat thread
function selectThread(threadId) {
  // Remove active class from all thread items
  threadItems.forEach(threadItem => {
    threadItem.classList.remove('active');
  });

  // Add active class to the selected thread item
  const selectedThreadItem = document.querySelector(`.thread-item[data-thread-id="${threadId}"]`);
  selectedThreadItem.classList.add('active');

  // Set the selected thread name
  const selectedThreadName = selectedThreadItem.textContent;
  selectedThread.textContent = `Selected Thread: ${selectedThreadName}`;

  // Fetch and display chat messages for the selected thread (mock implementation)
  fetchChatMessages(threadId);
}

// Function to fetch and display chat messages for a thread (mock implementation)
function fetchChatMessages(threadId) {
  // Simulate API call delay
  setTimeout(() => {
    const mockMessages = [
      { id: 1, threadId: 1, sender: 'User 1', message: 'Hello!' },
      { id: 2, threadId: 1, sender: 'User 2', message: 'Hi there!' },
      { id: 3, threadId: 1, sender: 'User 1', message: 'How are you?' }
    ];

    // Clear the message container
    messageContainer.innerHTML = '';

    // Display chat messages
    mockMessages.forEach(message => {
      if (message.threadId === parseInt(threadId)) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = `${message.sender}: ${message.message}`;
        messageContainer.appendChild(messageElement);
      }
    });
  }, 500);
}

// Event listener for sending a message
sendButton.addEventListener('click', sendMessage);

// Event listener for Enter key press in the input field
messageInput.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    sendMessage();
  }
});

// Function to send a message
function sendMessage() {
  const message = messageInput.value;
  const selectedThreadId = document.querySelector('.thread-item.active').getAttribute('data-thread-id');

  if (message.trim() !== '') {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = `You: ${message}`;
    messageContainer.appendChild(messageElement);

    // Send message to the server (replace with your actual API call)
    // Example using fetch:
    fetch(serverURL, {
      method: 'POST',
      body: JSON.stringify({ threadId: selectedThreadId, message }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Handle response from the server
        console.log('Server response:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    messageInput.value = '';
  }
}