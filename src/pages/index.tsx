import Link from "next/link";
import { Title } from "~/components";
import {
  BsLinkedin,
  BsWhatsapp,
  BsFillKanbanFill,
  BsMedium,
} from "react-icons/bs";

export default function Home() {
  return (
    <section className="h-full w-screen flex items-center justify-center flex-col px-4">
      <div className="h-full w-full max-w-[500px] flex justify-center flex-col">
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
            <button className="btn btn-secondary mt-10">
              Entrar em contato
            </button>
          </Link>

          <Title text="Link úteis" classes="text-xl mt-10" />

          <div className="flex flex-col w-full gap-6">
            <Link
              href="https://www.linkedin.com/in/hermando-thiago/"
              target="_blank"
              className="btn bg-slate-800 hover:bg-slate-900 border-0 mt-6"
            >
              <BsLinkedin className="h-6 w-6 text-blue-500" />
              Linkedin
            </Link>

            <Link
              href="https://wa.me/5584998681388"
              target="_blank"
              className="btn bg-slate-800 hover:bg-slate-900 border-0"
            >
              <BsWhatsapp className="h-6 w-6 text-green-500" />
              Whatsapp
            </Link>

            <Link
              href="https://personal-portfolio-theta-wheat.vercel.app/"
              target="_blank"
              className="btn bg-slate-800 hover:bg-slate-900 border-0"
            >
              <BsFillKanbanFill className="h-6 w-6 text-secondary-focus" />
              Portfólio
            </Link>
            <Link
              href="https://medium.com/@hermandodev"
              target="_blank"
              className="btn bg-slate-800 hover:bg-slate-900 border-0"
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
