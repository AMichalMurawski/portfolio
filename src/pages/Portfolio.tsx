import React from "react"
import { About, Contact, Header, Home, Projects, Skills } from "../components/sections"

const Portfolio: React.FC = () => {
    return <div>
        <Header />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
}

export default Portfolio