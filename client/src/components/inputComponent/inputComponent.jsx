import React, {useState} from "react";

export default function InputComponent(props) {
    const { handleProps } = props
    const [experience, setExperience] = useState(600000)
    const [lvl, setLvl] = useState(665)

    function cobainData() {
        var usernameValue = document.getElementById('inputUsername').value
        console.log(usernameValue)
        var emailValue = document.getElementById('inputEmailAddress').value
        var passwordValue = document.getElementById('inputPassword').value
        var showData = true
        handleProps(usernameValue, emailValue, passwordValue, experience,lvl, showData)
    }

    return (
        <>
        <form>
        <div className="mb-3">
            <label for="username" className="form-label">Username </label>
            <input type="text" className="form-control" id="inputUsername" aria-describedby="emailHelp"></input>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="inputEmailAddress" aria-describedby="emailHelp"></input>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword"></input>
        </div>
        <div className="btn btn-primary" onClick={cobainData}>Register</div>
        </form>
        </>

    )


}