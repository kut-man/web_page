import React from 'react'

export default function Project({values}) {
    return (
        <div className="project-containers">
            <div className='left-part'>
                <div>
                    <div className='decorational-rectangle'></div>
                    <div>
                        <h5>{values.projectName}</h5>
                        <h6>{values.role}</h6>
                    </div>

                </div>
                <p>{values.description}</p>
            </div>
            <img src={values.img} alt="my project" />
        </div>
    )
}