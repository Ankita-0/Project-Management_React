import noProjectImage from '../assets/no-projects.png';
export default function NewProjectSelected({onStartAddProject}){
    return <div className="NoProjectSelected">
        <img src={noProjectImage} alt='An empty task list'/>
        <h2>No Project Selected</h2>
        <p>Select a project or get started with a new one</p>
        <p>
            <button onClick={onStartAddProject}>Create new project</button>
        </p>
    </div>
}