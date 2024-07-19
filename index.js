function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    };
  
    return fetch('http://localhost:3000/users', configObj)
      .then(response => response.json())
      .then(data => {
        // Append the new ID to the DOM
        document.body.innerHTML += `<p>User ID: ${data.id}</p>`;
      })
      .catch(error => {
        // Append error message to the DOM
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
  }
  