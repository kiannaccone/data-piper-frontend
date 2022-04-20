

function Information({pizza: {client, poc, email, role, urgency, quantity, skills}}){
    return(
        <div>
            <p>{client}</p>
            <p>{poc}</p>
            <p>{email}</p>
            <p>{role}</p>
            <p>{urgency}</p>
            <p>{quantity}</p>
            <p>{skills}</p>
        </div>
    )
}

export default Information