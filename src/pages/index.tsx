import Link from "next/link";
import { Title } from "~/components";
import {
  BsLinkedin,
  BsWhatsapp,
  BsFillKanbanFill,
  BsMedium,
} from "react-icons/bs";

export default function Home() {
  const buttonStyles =
    "flex items-center justify-center py-3 bg-white hover:bg-base-200 hover:-translate-y-1 duration-150 backdrop-blur-lg bg-opacity-5 rounded-md text-accent font-bold gap-4";

  return (
    <section className="h-screen overflow-x-hidden flex items-center justify-center px-4 bg-base-200">
      <div className="h-screen w-full max-w-[500px] flex justify-center flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-lg">Hermando Thiago</h3>
        </div>
        <div className="my-8">
          <Title text="Fullstack Developer" classes="text-5xl mx-0" />

          <p className="mt-6">
            Um desenvolvedor fullstack apaixonado por transformar ideias em
            realidade através do poder do código. Com uma sólida formação em
            desenvolvimento de software, estou constantemente explorando novas
            tecnologias e aprimorando minhas habilidades para entregar soluções
            completas e eficientes
          </p>

          <Link href="https://wa.me/5584998681388" target="_blank">
            <button className="btn btn-accent mt-10">Entrar em contato</button>
          </Link>

          <Title text="Link úteis" classes="text-xl mt-10" />

          <div className="flex flex-col w-full gap-4">
            <Link
              href="https://www.linkedin.com/in/hermando-thiago/"
              target="_blank"
              className={buttonStyles}
            >
              <BsLinkedin className="h-6 w-6 text-blue-500" />
              Linkedin
            </Link>

            <Link
              href="https://wa.me/5584998681388"
              target="_blank"
              className={buttonStyles}
            >
              <BsWhatsapp className="h-6 w-6 text-green-500" />
              Whatsapp
            </Link>

            <Link
              href="https://personal-portfolio-theta-wheat.vercel.app/"
              target="_blank"
              className={buttonStyles}
            >
              <BsFillKanbanFill className="h-6 w-6 text-secondary-focus" />
              Portfólio
            </Link>
            <Link
              href="https://medium.com/@hermandodev"
              target="_blank"
              className={buttonStyles}
            >
              <BsMedium className="h-6 w-6 text-white" />
              Medium
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
