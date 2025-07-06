import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const callApi = async () => {
    try {
      const res = await fetch('http://54.168.157.87:3000/api/hello');
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage('Gọi API thất bại');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>React gọi Node API</h1>
      <button onClick={callApi}>Gọi API</button>
      <p>Kết quả: {message}</p>
    </div>
  );
}

export default App;
