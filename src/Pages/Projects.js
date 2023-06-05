import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'
import Project from '../components/Project'

const projects = [
    {
        id: 1,
        projectName: 'HodlHub',
        role: 'Crypto Asset Manager',
        description: `
            HodlHub is a sleek and intuitive crypto asset manager website built using 
            React, Redux, SCSS, Vite, Material UI, D3, and Tailwind. With real-time data 
            updates, customizable charts, and a modern design, it simplifies portfolio 
            management and helps you make informed investment decisions. Start hodling smarter with HodlHub!
        `,
        img: 'https://user-images.githubusercontent.com/73386100/160409992-bf913730-dd0e-463d-b93d-b5c97f522227.png'
    },
    {
        id: 2,
        projectName: 'Ryder',
        role: 'E-commerce',
        description: `
            Built using React and Firebase, website offers a seamless and secure shopping experience. 
            Browse our diverse collection, enjoy intuitive navigation, and benefit from features like real-time updates, 
            detailed product information, and secure checkout.
        `,
        img: 'https://user-images.githubusercontent.com/73386100/160409992-bf913730-dd0e-463d-b93d-b5c97f522227.png'
    },
    {
        id: 3,
        projectName: 'Kutman',
        role: 'Personal Project',
        description: `
            My personal website, built with React, Next.js, 
            SCSS, and integrated with the EmailJS API, offers a seamless 
            user experience. It showcases my projects, skills, 
            and achievements with a modern design. 
            Visitors can easily contact me through the secure contact form. 
            Explore my site to discover more about me and my work!
            `,
        img: 'https://user-images.githubusercontent.com/73386100/160409992-bf913730-dd0e-463d-b93d-b5c97f522227.png'
    }
];

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

