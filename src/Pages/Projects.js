import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {
    return (
        <div className="projects">
            <div className="title"> <FontAwesomeIcon icon={faSquareFull} color="blue" /> Projects </div>
            <div className="something">
                <p style={{textAlign: "center"}}>I'm a paragraph. Click here to add your own text and edit me.
                    It’s easy. Just click “Edit Text” or double click me to add your
                    own content and make changes to the font. I’m a great place for
                    you to tell a story and let your users know a little more about you.
                </p>
            </div>
            <div className="project-containers">
                <div></div>
            </div>
            <div className="project-containers">
                <div></div>
            </div>
            <div className="project-containers">
                <div></div>
            </div>
            <div className="project-containers">
                <div></div>
            </div>
        </div>
    )
}

