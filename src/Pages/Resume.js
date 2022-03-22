import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'
import Tile from '../components/Tile'

export default function Resume() {
    const tile1 = Tile('2021-2022', "Freelancer", "Weblancer", "Online");
    const tile2 = Tile('2015-2020', "Manas-Ata", "Secondary School", "Talas, Kyrgyzstan");
    const tile3 = Tile('2022-Present', "Vistula University", "Bachelors", "Warsaw, Poland");
    return (
        <div className="resume">
            <div className="title"> <FontAwesomeIcon icon={faSquareFull} color="blue" /> Resume </div>
            <div style={{ width: "730px", height: "200px" }}>
                <p className="experience" style={{ marginTop: "100px" }}>Experince</p>
                <button className="download">DOWNLOAD CV</button>
            </div>

            {tile1}
        
            <div style={{ width: "730px", marginTop: "60px", marginBottom: "40px" }}>
                <p className="education">Education</p>
            </div>
            
            {tile2}

            {tile3}

            <div className="skillset"></div>
        </div>
    )
}
