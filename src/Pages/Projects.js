import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'
import Project from '../components/Project'

const projects = [
    {
        id: 1,
        projectName: 'Project name 01',
        role: 'Role Title',
        description: `I'm a paragraph. Click here to add your own text and edit me.
                    It’s easy. Just click “Edit Text” or double click me to add
                    your own content and make changes to the font. I’m a great
                    place for you to tell a story and let your users know a
                    little more about you.`,
        img: 'https://user-images.githubusercontent.com/73386100/160409992-bf913730-dd0e-463d-b93d-b5c97f522227.png'
    },
    {
        id: 2,
        projectName: 'Project name 02',
        role: 'Role Title',
        description: `I'm a paragraph. Click here to add your own text and edit me.
                    It’s easy. Just click “Edit Text” or double click me to add
                    your own content and make changes to the font. I’m a great
                    place for you to tell a story and let your users know a
                    little more about you.`,
        img: 'https://user-images.githubusercontent.com/73386100/160409992-bf913730-dd0e-463d-b93d-b5c97f522227.png'
    },
    {
        id: 3,
        projectName: 'Project name 03',
        role: 'Role Title',
        description: `I'm a paragraph. Click here to add your own text and edit me.
                    It’s easy. Just click “Edit Text” or double click me to add
                    your own content and make changes to the font. I’m a great
                    place for you to tell a story and let your users know a
                    little more about you.`,
        img: 'https://user-images.githubusercontent.com/73386100/160409992-bf913730-dd0e-463d-b93d-b5c97f522227.png'
    }
];

export default function Projects() {
    return (
        <div className="projects">
            <div className="title"> <FontAwesomeIcon icon={faSquareFull} color="blue" /> Projects </div>
            <div className="something">
                <p style={{ textAlign: "center" }}>I'm a paragraph. Click here to add your own text and edit me.
                    It’s easy. Just click “Edit Text” or double click me to add your
                    own content and make changes to the font. I’m a great place for
                    you to tell a story and let your users know a little more about you.
                </p>
            </div>

            {projects.map(project => <Project key={project.id} values={project} />)}
            
        </div>
    )
}

