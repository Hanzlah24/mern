import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../componenets/Spinner";
import ProjectComponent from "../componenets/ProjectComponent";
const ProjectPage = () => {
    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(true);
  const {id}=useParams();
    useEffect(() => {
      const fetchProject = async () => {
        try {
          const res = await fetch(`/api/api/projects/project/${id}`);
          const data = await res.json();
          setProject(data);
        } catch (error) {
          console.error("Error fetching languages:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchProject();
    }, []);
  
    return loading ? <Spinner loading={loading}/>:<><ProjectComponent project={project}/></>
}

export default ProjectPage
