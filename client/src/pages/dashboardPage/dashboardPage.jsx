import React, { useState } from "react";
import { EditPage } from "../index"
import { SearchComponent } from "../../components";


export default function DashboardPage(props, criteriaProps) {
    const { userName, email, experience, level, password } = props
    const {handleSearch} = criteriaProps
    const [showEdit, setShowEdit] = useState(true)
    let styles = {
        border: '3px solid gray',
        padding: '10px',
        background: '#fff',
        width: '90vw'
    }

    let styles2 = {
        border: '3px solid gray',
        padding: '10px',
        background: '#fff',
        width: '90vw',
        margin:'10px'
    }

    function editFunction() {
        let showEdit = false
        
        setShowEdit(showEdit)
    }

    return (
        <>  
            {
                showEdit ? <div>
                    Search
                    <div><SearchComponent/></div>
                    <h1>Player</h1>
                    <table style={styles}>
                <tr style={styles}>
                    <th style={styles}>Username</th>
                    <th style={styles}>Email</th>
                    <th style={styles}>Experience</th>
                    <th style={styles}>Level</th>
                    <th style={styles}>Edit</th>
                    <th style={styles}>Delete</th>
                    
                </tr>
                <tr>
                    <td style={styles}>{userName}</td>
                    <td style={styles}>{email}</td>
                    <td style={styles}>{experience}</td>
                    <td style={styles}>{level}</td>
                    <td style={styles}><div className="btn btn-primary" onClick={editFunction}>Edit Player</div></td>        
                    <td style={styles}><div className="btn btn-danger" onClick={editFunction}>Delete Player</div></td>         
                </tr>
                    </table>

                <table style={styles2}>
                    <tr>
                        <th>Search Result</th>    
                    </tr>
                    <tr>
                        <td id="searchResult"></td>        
                    </tr>    
                </table>

                </div>
                : <EditPage userName={userName} password={password} email={email} experience={experience} level={level} />
            }
            
        </>
    )
}