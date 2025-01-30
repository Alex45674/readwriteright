import styles from './App.module.css';
import { Helmet } from "react-helmet";
import { Contact } from './components/Contact/Contact';
import { Projects } from './components/Projects/Projects';
import { Experience } from './components/Experience/Experience';
import { About } from './components/About/About';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/NavBar/Navbar';


function App() {
  return <div className={styles.App}>
    <Helmet>
        <title>Portfolio</title>
    </Helmet>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Experience></Experience>
    <Projects></Projects>
    <Contact></Contact>
  </div>
}

export default App
