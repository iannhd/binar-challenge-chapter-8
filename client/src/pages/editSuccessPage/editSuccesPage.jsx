import React, {useState} from "react";
import { DashboardPage } from "../index"


export default function EditSuccessPage(props) {
    const { userName, email, password, experience, level } = props
    const [goToDashboard, setGoToDashboard] = useState(true)
    function backToDashboard() {
        let goToDashboard = false
        setGoToDashboard(goToDashboard)
    }
    return (
        <>
            {
                goToDashboard ?
            <>
            <h1 className="alert alert-success">Edit Success!</h1>
            <form>
                <div className="mb-3">
                    <label for="username" className="form-label">New Username </label>
                    <input type="text" className="form-control" id="inputUsername" aria-describedby="emailHelp" value={userName} ></input>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">New Email address </label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" value={email} ></input>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">New Password</label>
                    <input type="password" className="form-control" id="inputPassword" aria-describedby="emailHelp" value={password} ></input>
                </div>
                
                <div className="btn btn-primary" onClick={backToDashboard}>Go To Dashboard</div>
                        </form>
                        </> : <DashboardPage userName={userName} password={ password } email={email} experience={experience} level={level}/>
            }
        </>

    )
}
