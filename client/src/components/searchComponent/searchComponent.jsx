import React from "react";
import "../../CSS_Files/searchComponent.css"
export default function SearchComponent(criteriaProps) {
    const {handleSearch} = criteriaProps
    function showCriteria() {
        let inputCriteria = document.getElementById('site-search').value
        const node = document.createElement('h3')
        const textNode = document.createTextNode(inputCriteria)
        node.appendChild(textNode)
        let insertCriteria = document.getElementById('searchResult').appendChild(node)
        handleSearch(insertCriteria)
    }
    return (
        <>  
            <label for="Criteria" >Choose Criteria:</label>
            <select id="criteria" name="criteria" className="mx-1">
            <option value="username">Username</option>
            <option value="email">Email</option>
            <option value="experience">Experience</option>
            <option value="level">Level</option>
            </select>
            <input type="search" id="site-search" name=""/>
            <button onClick={showCriteria}>Search</button>  

        </>
    )
}