import { PortfolioImg } from "../assets"
import ProjectCard from "../components/ProjectCard"

import { Espace, Login,Alhalas } from "../assets"

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="bg-blue-500 w-full flex flex-col justify-center items-center">
        <img src={PortfolioImg} alt="portfolio" className="w-64 lg:w-80 mb-4" />
        <h1 className="text-white text-base md:text-2xl font-bold mb-4">
          My Portfolio Projects
        </h1>
        <p className="text-white">Here's some of my works ...</p>
      <div className="flex lg:flex-row flex-col">
        <ProjectCard
          img={Login}
          name="QR-Attend"
          text="QR Code Attendance and Absence Management System."
          tech={['js','nodejs', 'express', 'react', 'flutter', 'mongodb']}
          link=""
        />
         <ProjectCard
          img={Espace}
          name="ElectraSpace"
          text="A project for a local freelancing service."
          tech={['html', 'css', 'ts', 'react', 'tailwind']}
          link="https://espace-eight.vercel.app/"
        />
        <ProjectCard
          img={Alhalas}
          name="CamelHub"
          text="A project To Record Details about Camels."
          tech={['nodejs', 'express','redux', 'mysql', 'react', 'bootstrap']}
          link=""
        />
      </div>
      </div>
    </div>
  )
}
export default Portfolio
