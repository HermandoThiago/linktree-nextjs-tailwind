import { Button } from "~/components"

export default function Home() {
  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <div className="border border-slate-300 px-28 py-12 rounded-md shadow-2xl max-w-screen-md text-center">
          <p className="text-white text-2xl">
            Hermando Thiago
          </p>
          <div>
            <Button link="https://github.com/HermandoThiago">
              Github
            </Button>
            <Button link="https://www.linkedin.com/in/hermando-thiago/">
              Linkedin
            </Button>
            <Button link="">
              Email
            </Button>
          </div>
      </div>
    </section>
  )
}
