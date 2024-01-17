import Aboutus from "./Aboutus"
import Contact from "./Contact"
import Footersection from "./Footersection"
import Footer from "./Footersection"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Services from "./Services"
import Testimonials from "./Testimonials"
import Projects from "./projects"

const Sarang = () => {
    return (
        <div className="container mx-auto ">
            <div className="">
                <Navbar />
                <Hero />
            </div>
            <Aboutus />
            <Services />
            <Projects />
            <Testimonials />
            <Contact />
            <Footersection />
        </div>
    )
}

export default Sarang
