

function Information({dataPiper}){
  
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
        />
        <input 
        type="text"
        name="poc"
        required="required"
        placeholder="Person of Contact"
        />
        <input 
        type="text"
        name="email"
        required="required"
        placeholder="Email address"
        />
        <input 
        type="text"
        name="role"
        required="required"
        placeholder="Role"
        />
        <input 
        type="text"
        name="urgency"
        required="required"
        placeholder="Urgency Level"
        />
        <input 
        type="text"
        name="quantity"
        required="required"
        placeholder="Quantity"
        />
        <input 
        type="text"
        name="skills"
        required="required"
        placeholder="Skills Needed"
        />
    </form>
</div>
)
}

export default Information