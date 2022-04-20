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


// get information to render in a table
// make a form so informatin can be added to the table and make sure it persists to the backend
// create a search bar by client or role
// CSS color scheme it to data pipers color scheme