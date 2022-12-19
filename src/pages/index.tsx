import { Button } from "~/components"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

export default function Home() {
  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <div className="border border-slate-300 px-28 py-12 rounded-md shadow-2xl max-w-screen-md text-center">
          <p className="text-white text-2xl">
            Hermando Thiago
          </p>
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
