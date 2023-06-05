import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'
import Project from '../components/Project'
import { projects } from '../DataBase'

export default function Projects() {
    return (
        <div className="projects">
            <div className="title"> <FontAwesomeIcon icon={faSquareFull} color="blue" /> Projects </div>
            <div className="something">
                <p style={{ textAlign: "center" }}>
                    Step into the realm of my projects and join me on an exciting exploration 
                    of my digital creations. Within this captivating space, you will uncover a 
                    diverse range of endeavors that highlight my skills, expertise, and creativity.
                </p>
            </div>

            {projects.map(project => <Project key={project.id} values={project} />)}
            
        </div>
    )
}

