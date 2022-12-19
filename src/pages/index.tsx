import { Button } from "~/components"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

export default function Home() {
  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <div className="border-cyan-300 border border-opacity-10 px-20 py-12 rounded-md shadow-2xl max-w-screen-sm text-center">
          <p className="text-white text-2xl">
            Hermando Thiago
          </p>
          <div className="flex justify-center items-center flex-row text-white text-4xl py-5 space-x-4 w-full">
            <i className="devicon-typescript-plain colored"></i>
            <i className="devicon-nextjs-original"></i>
            <i className="devicon-nestjs-plain colored"></i>
            <i className="devicon-docker-plain colored"></i>
            <i className="devicon-postgresql-plain colored"></i>
            <i className="devicon-python-plain colored"></i>
          </div>
          <div>
            <Button 
              link="https://github.com/HermandoThiago"
              icon={<BsGithub size={20}/>}  
            >
              Github
            </Button>
            <Button 
              link="https://www.linkedin.com/in/hermando-thiago/"
              icon={<BsLinkedin size={20} />}
            >
              Linkedin
            </Button>
            <Button 
              link=""
              icon={<MdEmail size={20} />}
            >
              Email
            </Button>
          </div>
      </div>
    </section>
  )
}
