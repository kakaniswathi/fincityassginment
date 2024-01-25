import "./index.css"

const DisplayProject = props => {
    const {eachProject} = props
        return (
        <li className="list-container">
            <div className="project-details-container">
            <h1 className="project-name">{eachProject.projectName}</h1>
            <p className="project-description">{eachProject.projectDescription}</p>
            <button className="view-button">View Project</button>
            </div>
            <div className="project-details-image-container">
                <img src={eachProject.projectImgUrl} alt="project-logo" className="project-image-style"/>
            </div>
        </li>
    )
}

export default DisplayProject