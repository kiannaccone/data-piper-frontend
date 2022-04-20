import { useState, useEffect } from 'react';
import '../App.css';
import Form from './Form';

function App() {

  const[dataPiper, setdataPiper] = useState([])

  const dataPiperUrl = "http://localhost:9292/datapipers"

  useEffect(() => {
    fetch(dataPiperUrl)
      .then((resp) => resp.json())
      .then(setdataPiper);
  }, []);

  return (
    <div>
      <Form dataPiper= {dataPiper}/>
    </div>
  );
}

export default App;
