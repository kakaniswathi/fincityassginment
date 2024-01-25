import {Component} from "react"
import {v4 as uuidV4} from 'uuid'
import DisplayProject from "../DisplayProject"
import Footer from "../Footer"
import Contact from "../Contact"
import "./index.css"
let projectList = [{
    id:1,
    projectName:"Project Name",
    projectDescription:"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    projectImgUrl:"https://res.cloudinary.com/drjim6cqm/image/upload/v1704431418/pexels-elly-fairytale-3823207_1_e38y1n.png"
},
{
    id:2,
    projectName:"Project Name",
    projectDescription:"What was your role, your deliverables, if the project was personal, freelancing.",
    projectImgUrl:"https://res.cloudinary.com/drjim6cqm/image/upload/v1704431424/Rectangle_7_zqxq2t.png"
},
{
    id:3,
    projectName:"Project Name",
    projectDescription:"You can also add in this description the type of the project, if it was for web, mobile, electron.",
    projectImgUrl:"https://res.cloudinary.com/drjim6cqm/image/upload/v1704431429/Rectangle_7_1_ffrs1q.png"
}
]

class ProjectAddSection extends Component {
    state = {projectListItem: projectList,inputProjectName:"",inputProjectLink:"",inputProjectDescription:""}

    onChangeProjectName = event => {
        this.setState({inputProjectName:event.target.value})
    }

    onChangeProjectLink = event => {
        this.setState({inputProjectLink:event.target.value})
    }
    onChangeProjectDescription = event => {
        this.setState({inputProjectDescription:event.target.value})
    }

    addProject = event =>{
        event.preventDefault()
        const {inputProjectName,inputProjectLink,inputProjectDescription} = this.state
        const addNewProject = {
            id: uuidV4(),
            projectName:inputProjectName,
            projectDescription:inputProjectDescription,
            projectImgUrl:inputProjectLink
        }
        this.setState(prevState => ({
            projectListItem: [...prevState.projectListItem, addNewProject],
            inputProjectName: '',
            inputProjectLink: '',
            inputProjectDescription:""
          }))

    }
    render(){
        const {projectListItem,inputProjectName,inputProjectLink,inputProjectDescription} = this.state
        console.log(projectListItem)
        return(
            <div className="add-project-bg-container" id="addProjectSection">
                <h1 className="add-project-heading">Add Project</h1>
            <form onSubmit={this.addProject} className="form-container">
                <div className="input-container">
                    <label htmlFor="name">Project Name</label>
                    <input type="text" id="name" value={inputProjectName} onChange={this.onChangeProjectName}/>
                </div>
                <div className="input-container">
                    <label htmlFor="link">Project Link</label>
                    <input type="text" id="link" value={inputProjectLink} onChange={this.onChangeProjectLink}/>
                </div>
                <div className="input-container">
                    <label htmlFor="description">Description</label>
                    <textarea rows="7" cols="50" id="description" value={inputProjectDescription} onChange={this.onChangeProjectDescription}/>
                </div>
                <button type="submit" className="add-button">Add</button>
        </form>
        <Footer/>
        <div>
            <h1 className="project-title-heading">Projects</h1>
            <hr className="horizontal-line"/>
        </div>
        <ul className="unorder-list-container">{projectListItem.map(eachProject => (
            <DisplayProject eachProject={eachProject} key={eachProject.id}/>
        ))}</ul>
        <Contact/>
        <Footer/>
    </div>
        )
    }
} 

export default ProjectAddSection