import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../componenets/Spinner";
import ProjectCards from '../componenets/ProjectCards'
const LanguagePage = () => {
  const [language, setLanguage] = useState([]);
  const [loading, setLoading] = useState(true);
const {id}=useParams();
  useEffect(() => {
    const fetchLanguage = async () => {
      try {
        const res = await fetch(`/api/api/projects/${id}`);
        const data = await res.json();
        setLanguage(data);
      } catch (error) {
        console.error("Error fetching languages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLanguage();
  }, []);

  return loading ? <Spinner loading={loading}/>:<><ProjectCards language={language}/></>
};

export default LanguagePage;
