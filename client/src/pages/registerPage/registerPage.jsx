import React, {useState} from "react";
import { CardComponent } from "../../components";
import { DashboardPage } from "../index"

export default function RegisterPage() {
    const [showData, setShowData] = useState(false)
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [experience, setExperience] = useState(600000)
    const [lvl, setLvl] = useState(665)

    function handleData(usernameValue, emailValue, passwordValue, experience,lvl, showData) {
        setShowData(showData)
        setUserName(usernameValue)
        setEmail(emailValue)
        setPassword(passwordValue)
        setExperience(experience)
        setLvl(lvl)
    }

    return (
        <>
            {
                showData ? 
                    <DashboardPage userName={userName} email={email} password={password} experience={experience} level={lvl}  /> :  <CardComponent handleData={ handleData }/> 
            }
        </>

    )
}