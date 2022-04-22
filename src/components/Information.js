import { useState } from "react"


function Information({dataPiper, setDataPiper}){
  
    const [add, setAdd] = useState([])
    const [addInfo, setAddInfo] = useState({
        client: "",
        poc: "",
        email:"",
        role: "",
        urgency: "",
        quantity: "",
        skills_needed: ""
    })


    function handleChange(e) {
        setAddInfo((currentInfo) => ({
          ...currentInfo, 
          [e.target.name] : e.target.value,
        }))
        console.log(e.target.value)
    }
    function handleSubmit (e) {
        e.preventDefault()
        const row = {
          client: addInfo.client,
          poc: addInfo.poc,
          email: addInfo.email,
          role: addInfo.role,
          urgency: addInfo.urgency,
          quantity: addInfo.quantity,
          skills_needed: addInfo.skills_needed
    }

    fetch ("http://localhost:9292/datapipers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }, 
        body: JSON.stringify(row),
      })
        .then((res) => res.json())
        .then((data) => {
          setDataPiper((currentBook) => [data, ...currentBook])
          setAddInfo({
            client: "",
            poc: "",
            email:"",
            role: "",
            urgency: "",
            quantity: "",
            skills_needed: ""
        })
        setAdd((data))
        });
    }


    return(
    <div>
    <div className="batman">
    <table id="table">
  <thead>
    <tr>
      <th>Client</th>
      <th>POC</th>
      <th>Email</th>
      <th>Role</th>
      <th>Urgency</th>
      <th>Quantity</th>
      <th>Skills Needed</th>
    </tr>
  </thead>
  <tbody>
   {dataPiper.map((pizza) => (
    <tr>
      <td>{pizza.client}</td>
      <td>{pizza.poc}</td>
      <td><a href= {pizza.email}>{pizza.email}</a></td>
      <td>{pizza.role}</td>
      <td>{pizza.urgency}</td>
      <td>{pizza.quantity}</td>
      <td>{pizza.skills_needed}</td>
    </tr>
    ))}
  </tbody>
</table>
</div>
<h2>Add To Table</h2>
    <form id= "form" onSubmit={handleSubmit}>
        <input 
        type="text"
        name="client"
        value={addInfo.client}
        required="required"
        placeholder="Clients Name"
        onChange = {handleChange}/>
        <input 
        type="text"
        name="poc"
        value={addInfo.poc}
        required="required"
        placeholder="Person of Contact"
        onChange = {handleChange}/>
        <input 
        type="text"
        name="email"
        value={addInfo.email}
        required="required"
        placeholder="Email address"
        onChange = {handleChange}/>
        <input 
        type="text"
        name="role"
        value={addInfo.role}
        required="required"
        placeholder="Role"
        onChange = {handleChange}/>
        <input 
        type="text"
        name="urgency"
        value={addInfo.urgency}
        required="required"
        placeholder="Urgency Level"
        onChange = {handleChange}/>
        <input 
        type="text"
        name="quantity"
        value={addInfo.quantity}
        required="required"
        placeholder="Quantity"
        onChange = {handleChange}/>
        <textarea id="textarea"
        type="text"
        name="skills_needed"
        value={addInfo.skills_needed}
        required="required"
        placeholder="Skills Needed"
        onChange = {handleChange}/>
        <button id="button" type="submit">Add</button>
    </form>
</div>
)
}

export default Information