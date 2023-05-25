document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get the username and password entered by the user
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Perform validation or send a request to the backend for authentication
    // For simplicity, let's assume the login is successful if the username and password are not empty
    if (username !== "" && password !== "") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });  