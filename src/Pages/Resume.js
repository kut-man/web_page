import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'
import Tile from '../components/Tile'
import { useRef } from 'react'
import { experiences } from '../DataBase'

export default function Resume() {
    
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

            {<Tile values={experiences.tile1} />}

            <div style={{ width: "90vw", maxWidth: "730px", marginTop: "60px", marginBottom: "40px" }}>
                <p className="education">Education</p>
            </div>

            {<Tile values={experiences.tile2} />}

            {<Tile values={experiences.tile3} />}

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
