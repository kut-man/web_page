import React from 'react'

export default function ButtonContainer(props) {
    return (
        <div className={props.className}>
            <button className="resume_button" style={{ padding: "5px 30px 5px 30px", margin: "30px 20px 50px 0" }} onClick={event =>  window.location.href='/resume'}>RESUME</button>
            <button className="project_button" style={{ padding: "5px 22px 5px 22px" }} onClick={event =>  window.location.href='/projects'}>PROJECTS</button>
        </div>
    )
}
