import NewProject from "./Components/NewProject";
import ProjectsSidebar from "./Components/ProjectsSidebar";
import NoProjectSelected from "./Components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  })

  let content;

  if(projectsState.selectedProjectId ===null){
    content = <NewProject onAdd={handleAddProject}/>
  }
  else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartProject}/>
  }
  
  function handleAddProject(projectData) {
    setProjectsState(prevState=> {
      const projectId= Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      }
      return{
        prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects, newProject],
      }
    })
  }

  function handleStartProject(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId:null,
      }
    })
  }

  return (
    <main className="main">
      <ProjectsSidebar projects={projectsState.projects} onStartAddProject={handleStartProject}/>
      {content}
    </main>
  );
}

export default App;
