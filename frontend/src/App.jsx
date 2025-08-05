import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    //redirect to /todos page
    navigate("/todos");
  }, []);

  return null;
};

export default App;
