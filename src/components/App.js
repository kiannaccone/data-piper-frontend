import { useState, useEffect } from 'react';
import '../App.css';
import Information from './Information';
import Search from './Search';
import datapiper from "./datapiper.png"

function App() {

  const[dataPiper, setDataPiper] = useState([])
  const [search, setSearch] = useState("")

  const dataPiperUrl = "http://localhost:9292/datapipers"

  useEffect(() => {
    fetch(dataPiperUrl)
      .then((resp) => resp.json())
      .then(setDataPiper);
  }, []);

  const filterTable = dataPiper.filter(data => {
    return(
        data.client.toLowerCase().includes(search.toLowerCase())
        ||
        data.role.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <div id="header">
      <img src={datapiper} alt="Data Piper Logo"/>
      <h1 id="h1-text">Coding Challenge</h1>
      <Search search = {search} setSearch = {setSearch}/>
      <Information dataPiper= {filterTable} setDataPiper= {setDataPiper}/>
    </div>

  );
}

export default App;