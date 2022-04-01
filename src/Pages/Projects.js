import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'

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
            <div className="project-containers">
                <div className='left-part'>
                    <div>
                        <div className='decorational-rectangle'></div>
                        <div>
                            <h5>Project name 01</h5>
                            <h6>Role Title</h6>
                        </div>

                    </div>
                    <p>I'm a paragraph. Click here to add your own text and edit me.
                        It’s easy. Just click “Edit Text” or double click me to add
                        your own content and make changes to the font. I’m a great
                        place for you to tell a story and let your users know a
                        little more about you.
                    </p>
                </div>
                <img src="https://user-images.githubusercontent.com/73386100/160409992-bf913730-dd0e-463d-b93d-b5c97f522227.png" alt="my project" />
            </div>
            <div className="project-containers">
                <div className='left-part'>
                    <div>
                        <div className='decorational-rectangle'></div>
                        <div>
                            <h5>Project name 01</h5>
                            <h6>Role Title</h6>
                        </div>

                    </div>
                    <p>I'm a paragraph. Click here to add your own text and edit me.
                        It’s easy. Just click “Edit Text” or double click me to add
                        your own content and make changes to the font. I’m a great
                        place for you to tell a story and let your users know a
                        little more about you.
                    </p>
                </div>
                <img src="https://user-images.githubusercontent.com/73386100/160410001-d558a9e3-96eb-4e17-bd0b-0349b947486b.png" alt="my project" />
            </div>
            <div className="project-containers">
                <div className='left-part'>
                    <div>
                        <div className='decorational-rectangle'></div>
                        <div>
                            <h5>Project name 01</h5>
                            <h6>Role Title</h6>
                        </div>

                    </div>
                    <p>I'm a paragraph. Click here to add your own text and edit me.
                        It’s easy. Just click “Edit Text” or double click me to add
                        your own content and make changes to the font. I’m a great
                        place for you to tell a story and let your users know a
                        little more about you.
                    </p>
                </div>
                <video src="https://user-images.githubusercontent.com/73386100/161314332-c002000c-1844-4529-a58b-c022fd8aa6ef.mp4N" loop autoPlay muted></video>
            </div>
        </div>
    )
}

