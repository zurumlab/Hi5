document.getElementById('profile-settings-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form data
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const privacySettingsInput = document.getElementById('privacy-settings');
    const notificationPreferencesInput = document.getElementById('notification-preferences');
  
    const formData = {
      username: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      privacySettings: privacySettingsInput.value,
      notificationPreferences: notificationPreferencesInput.checked
    };
  
    // Handle form data (e.g., send to backend)
  });
  