import { useState } from "react"


function Information({dataPiper}){
  
    const [addInfo, setAddInfo] = useState({
        client: "",
        poc: "",
        email:"",
        role: "",
        urgency: "",
        quantity: "",
        skills: ""
    })

    // const handleAddFormChange = (e) => {
    //     e.preventDefault();

    //     const fieldName = e.target.getAttribute("name");
    //     const fieldValue = e.target.value;

    //     const newFormData = {...addFormData};
    //     newFormData[fieldName] = fieldValue

    //     setAddInfo(newFormData)
    // };

    // const handleAddFormSubmit = (e) => {
    //     e.preventDefault();

    //     const newRow = {
    //         client: addInfo.client,
    //         poc: addInfo.poc,
    //         email: addInfo.email,
    //         role: addInfo.role,
    //         urgency: addInfo.urgency,
    //         quantity: addInfo.quantity,
    //         skills: addInfo.skills,
    //     };

    //     const newRow = [...row, newRow];
    //     setAddInfo(newRow);
    // }

    function handleChange(e) {
        setAddInfo((currentInfo) => ({
          ...currentInfo, 
          [e.target.name] : e.target.value,
        }))
        console.log(e.target.value)
    }
    // function handleSubmit (e) {
    //     e.preventDefault()
    //     const row = {
    //       client: addInfo.client,
    //       poc: addInfo.poc,
    //       email: addInfo.email,
    //       role: addInfo.role,
    //       urgency: addInfo.urgency,
    //       quantity: addInfo.quantity,
    //       skills: addInfo.skills,
    // }

    // fetch ("http://localhost:9292/datapipers", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //     }, 
    //     body: JSON.stringify(book),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setBookList((currentBook) => [data, ...currentBook])
    //       setNewBook({
    //         title:"",
    //         author: "",
    //         genre: "",
    //         cover:""
    //     })
    //     setBookAdd((data))
    //     });
    //   }

    return(
    <div>
    <table class="table">
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
      <td>{pizza.email}</td>
      <td>{pizza.role}</td>
      <td>{pizza.urgency}</td>
      <td>{pizza.quantity}</td>
      <td>{pizza.skills_needed}</td>
    </tr>
    ))}
  </tbody>
</table>

<h2>Add a Row</h2>
    <form>
        <input 
        type="text"
        name="client"
        required="required"
        placeholder="Clients Name"
        onChange = {handleChange}/>
        <input 
        type="text"
        name="poc"
        required="required"
        placeholder="Person of Contact"
        onChange = {handleChange}/>
        <input 
        type="text"
        name="email"
        required="required"
        placeholder="Email address"
        onChange = {handleChange}/>
        <input 
        type="text"
        name="role"
        required="required"
        placeholder="Role"
        onChange = {handleChange}/>
        <input 
        type="text"
        name="urgency"
        required="required"
        placeholder="Urgency Level"
        onChange = {handleChange}/>
        <input 
        type="text"
        name="quantity"
        required="required"
        placeholder="Quantity"
        onChange = {handleChange}/>
        <input 
        type="text"
        name="skills"
        required="required"
        placeholder="Skills Needed"
        onChange = {handleChange}/>
    </form>
</div>
)
}

export default Information