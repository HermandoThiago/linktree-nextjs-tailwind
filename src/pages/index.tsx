import { Button, IconsContainer, Photo } from "~/components";
import { BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <div className="border-cyan-300 border border-opacity-10 py-8 px-10 rounded-md shadow-2xl max-w-sm text-center">
        <Photo />
        <p className="text-white text-3xl">Hermando Thiago</p>
        <p className="text-white py-1 text-lg">Fullstack Typescript</p>
        <IconsContainer />
        <div>
          <Button
            link="https://github.com/HermandoThiago"
            icon={<BsGithub size={20} />}
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
            link="mailto:hermandodev@gmail.com"
            icon={<MdEmail size={20} />}
          >
            Email
          </Button>
          <Button
            link="https://medium.com/@hermandodev"
            icon={<BsMedium size={20} />}
          >
            Medium
          </Button>
        </div>
      </div>
    </section>
  );
}
