import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App(){
    return (
        <div>
            <Navbar />
            <Header
                id="intro-container" 
                name="Jason"
                title = "recent graduate"
                company="the University of Chicago"
            />
            <About image="images/jig-1.jpg"/>
            <hr></hr>            
            <Skills />
            <hr></hr>
            <Contact />
            <Footer name="Jason Guba"
                linkedIn="https://www.linkedin.com/in/jason-guba/"
                instagram = "https://www.instagram.com/jasonguba/"
                email="jiguba@uchicago.edu" 
            />
        </div>
    );
};