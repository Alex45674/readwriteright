import styles from './App.module.css';
import { Contact } from './components/Contact/Contact';
import { Projects } from './components/Projects/Projects';
import { Experience } from './components/Experience/Experience';
import { About } from './components/About/About';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/NavBar/NavBar';


function App() {
  return <div className={styles.App}>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Experience></Experience>
    <Projects></Projects>
    <Contact></Contact>
  </div>;
}

export default App
