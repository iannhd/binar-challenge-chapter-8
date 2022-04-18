import React, { useState } from "react";
import {EditSuccessPage} from "../index"


export default function EditPage(props) {

    const { userName, email, password, experience, level } = props
    const [showResult, setShowResult] = useState(true)

    function showSearch() {
        let showResult = false

        setShowResult(showResult)
    }

    return (
        <>
            {
                showResult ?
        <form>
        <div className="mb-3">
            <label for="username" className="form-label">Username </label>
            <input type="text" className="form-control" id="inputUsername" aria-describedby="userHelp" value={userName} ></input>
        </div>
        <div className="mb-3">
            <label for="username" className="form-label">Input New Username </label>
            <input type="text" className="form-control" id="inputUsername" aria-describedby="userHelp" placeholder="Insert New Username..."></input>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="inputEmailAddress" aria-describedby="emailHelp" value={email}></input>
        </div>
        
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Input New Email address</label>
            <input type="email" className="form-control" id="inputEmailAddress" aria-describedby="emailHelp" placeholder="Input New Email address..."></input>
        </div>
                        
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword" value={password}></input>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Input New Password</label>
            <input type="password" className="form-control" id="inputPassword" placeholder="Input New Password..."></input>
        </div>                
        <div className="btn btn-primary"onClick={showSearch}>Submit Edit </div>
        </form> : <EditSuccessPage userName={userName} password={ password } email={email} experience={experience} level={level} />
        }
        </>
        
    )

}