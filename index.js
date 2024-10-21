const form = document.getElementById('dogForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const dogName = document.getElementById('dogName').value;
  const dogBreed = document.getElementById('dogBreed').value;

  const dogData = {
    dogName: dogName,
    dogBreed: dogBreed
  };

  fetch('http://localhost:3000/dogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dogData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      messageDiv.textContent = `Dog "${dogName}" (${dogBreed}) has been successfully added!`;
      messageDiv.style.color = 'green';
      form.reset(); 
    })
    .catch((error) => {
      console.error('Error:', error);
      messageDiv.textContent = `Failed to add the dog. Please try again.`;
      messageDiv.style.color = 'red';
    });
});
