import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/About/About"
import Skills from "./Components/skills/Skills"
import Contact from "./Components/contact/Contact"
import Projects from "./Components/Projects/Projects"
import ProjectsDetails  from "./Components/ProjectDetails/ProjectsDetails"
import Footer from "./Components/Footer/Footer"
function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <div className="App">
   
     <Navbar />
     <About/>
<Skills />
<Projects openModal={openModal} setOpenModal={setOpenModal}  />
{openModal.state &&
            <ProjectsDetails openModal={openModal} setOpenModal={setOpenModal} />
          }

<Contact/>
<Footer/>

   
    </div>
  );
}

export default App;
