document.getElementById('trainingForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Capture the form data
    const fullName = document.getElementById('fullName').value;
    const userId = document.getElementById('userId').value;
    const trainingDate = document.getElementById('trainingDate').value;
    const trainingTime = document.getElementById('trainingTime').value;
    const sessionDescription = document.getElementById('sessionDescription').value;
  
    // Display the captured data (just for testing)
    const output = `
      Full Name: ${fullName}
      User ID: ${userId}
      Training Date: ${trainingDate}
      Training Time: ${trainingTime}
      Description: ${sessionDescription}
    `;
  
    document.getElementById('output').textContent = output;
  });