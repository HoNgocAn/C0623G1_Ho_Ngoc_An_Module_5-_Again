import React, {useState, useEffect} from "react";

function Greeting () {

    const [firstname, setFirstName] = useState("")

    const [lastname, setLastName] = useState("")


    const handleFirstNameChange =( e ) => {
        setFirstName(e.target.value)
    }
    const handleLastNameChange =(e) =>{
        setLastName(e.target.value)
    }

    return (
        <div>
            <input value={firstname} onChange={handleFirstNameChange}/>
            <br/>
            <input value={lastname} onChange={handleLastNameChange}/>

            <p>
                Hello, {" "}
                <span>
                        {firstname} {lastname}
                </span>
            </p>
        </div>

    )
}

export default Greeting