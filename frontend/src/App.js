import React, { useState, useEffect } from 'react';

function App() {
  // Declare state at the top level of the component
  const [message, setMessage] = useState('');

  // Fetch data from Spring Boot API when the component mounts
  useEffect(() => {
    fetch('http://localhost:8080/api/hello')
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means this runs only once when the component mounts

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
