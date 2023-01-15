import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'
import Tile from '../components/Tile'

export default function Resume() {
    const tile1 = {
        date: '2021-2022',
        name: "Freelancer",
        position: "Weblancer",
        location: "Online",
        description:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur tempus eleifend leo ut pulvinar.
        Morbi efficitur posuere malesuada. Aenean venenatis
        rutrum nulla, et mollis justo fermentum hendrerit.
        `
    };
    const tile2 = {
        date: '2015-2020',
        name: "Manas-Ata",
        position: "Secondary School",
        location: "Talas, Kyrgyzstan",
        description:
        `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur tempus eleifend leo ut pulvinar.
        Morbi efficitur posuere malesuada. Aenean venenatis
        rutrum nulla, et mollis justo fermentum hendrerit.
        `
    };
    const tile3 = {
        date: '2022-Present',
        name: "Vistula University",
        position: "Bachelors",
        location: "Warsaw, Poland",
        description: 
        `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur tempus eleifend leo ut pulvinar.
        Morbi efficitur posuere malesuada. Aenean venenatis
        rutrum nulla, et mollis justo fermentum hendrerit.
        `
    };
    return (
        <div className="resume">
            <div className="title"> <FontAwesomeIcon icon={faSquareFull} color="blue" /> Resume </div>
            <div style={{ width: "90vw", maxWidth: "730px", height: "200px" }}>
                <p className="experience" style={{ marginTop: "100px" }}>Experince</p>
                <button className="download">DOWNLOAD CV</button>
            </div>

            {<Tile values={tile1} />}

            <div style={{ width: "90vw", maxWidth: "730px", marginTop: "60px", marginBottom: "40px" }}>
                <p className="education">Education</p>
            </div>

            {<Tile values={tile2} />}

            {<Tile values={tile3} />}

            <div className="skillset">
                <div>
                    <h5>Professional skillset</h5>
                    <div className='professional-skills'>
                        <div>
                            <p><FontAwesomeIcon icon={faSquareFull} color="blue" />Teamwork & Collaboration</p>
                            <p><FontAwesomeIcon icon={faSquareFull} color="blue" />Creativity.</p>
                        </div>

                        <div>
                            <p><FontAwesomeIcon icon={faSquareFull} color="blue" />Time management.</p>
                            <p><FontAwesomeIcon icon={faSquareFull} color="blue" />Problem-solving</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h5>Languages</h5>
                    <div className='language-skills'>
                        <div>
                            <p><FontAwesomeIcon icon={faSquareFull} color="blue" />Russian (proficient)</p>
                            <p><FontAwesomeIcon icon={faSquareFull} color="blue" />Kyrgyz (native)</p>
                        </div>
                        <div>
                            <p><FontAwesomeIcon icon={faSquareFull} color="blue" />English (proficient)</p>
                            <p><FontAwesomeIcon icon={faSquareFull} color="blue" />Polish (beginner)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
