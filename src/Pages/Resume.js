import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'
import Tile from '../components/Tile'
import { useRef } from 'react'

export default function Resume() {
    const tile1 = {
        date: '2023-2024',
        name: "Dynatrace",
        position: "Software Engineer Intern",
        location: "Gdańsk",
        description:`         
            I gained valuable industry exposure, worked with a talented team, and 
            enhanced my technical skills. The collaborative and inclusive environment, 
            along with access to cutting-edge technologies, made it a rewarding experience. 
            I am grateful for the opportunity and the foundation it has provided for my future career.
        `
    };
    const tile2 = {
        date: '2020-2022',
        name: "Ala-Too University",
        position: "Bachelors",
        location: "Bishkek",
        description:`       
            Acquired diverse academic experiences and essential skills. 
            However, chose to transfer to a different country, showing my 
            unwavering commitment to pursue better educational opportunities. 
            My adaptability and dedication are evident in this decision.
        `
    };
    const tile3 = {
        date: '2022-Present',
        name: "Vistula University",
        position: "Bachelors",
        location: "Warsaw",
        description:`
            I am gaining a strong foundation in both the theoretical 
            and practical aspects of computing. Currently taking courses: 
            Java Programming, Operating Systems, Architecture of Computers, 
            Artificial Intelligence, Discrete Mathematics
        `
    };

    const link = useRef()

    const downloadPdf = () => {
        link.current.click();
    };

    return (
        <div className="resume">
            <div className="title"> <FontAwesomeIcon icon={faSquareFull} color="blue" /> Resume </div>
            <div style={{ width: "90vw", maxWidth: "730px", height: "200px" }}>
                <p className="experience" style={{ marginTop: "100px" }}>Experince</p>
                <button onClick={downloadPdf} className="download">DOWNLOAD CV</button>
                <a style={{display: "none"}} ref={link} download href='https://github.com/kut-man/web_page/files/11408466/CV.Kutman.Eshenkulov.pdf'>Download</a>
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
