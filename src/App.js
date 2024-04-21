import Menu from './components/Menu';
import styles from './App.module.css';
import WhoWeAre from './components/WhoWeAre';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className={styles.App}>
        <Menu/>
        <WhoWeAre/>
        <Services/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
