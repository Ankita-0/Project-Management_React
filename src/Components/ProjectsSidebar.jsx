import Button from "./Button"
export default function ProjectsSidebar({onStartAddProject, projects}) {
    return <aside className="ProjectsSidebar">
        <h2>Your Projects</h2>
        <div>
            <Button onClick={onStartAddProject}>+ Add Project</Button>
        </div>
        <ul>
            {projects.map(project=> <li key={project.id}>
                <Button>{project.title}</Button>
            </li>)}
        </ul>
    </aside>
}