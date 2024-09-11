import { Button, Link, Navbar } from "@nextui-org/react";

export function Header() {
  return (
    <header className="bg-color1 h-16 p-4 pl-6 ">
      <div className="flex justify-between ">
        <div className="flex items-center text-center">
          <section className="flex h-6 mr-8 items-center ">
            <img src="/assets/home.svg" alt="" />
            <img src="/assets/home-fusion.png" alt="" />
          </section>

          <Navbar className="flex h-5 justify-start ">
            <aside className="flex justify-start">
              <img
                src="/assets/icon-home.svg"
                alt="ícone home"
                className="mr-2"
              />
              <Link href="#" className="text-color2 font-medium">
                Início
              </Link>
            </aside>
            <aside className="flex justify-start items-center ">
              <img src="/assets/icon-heart.svg" alt="" className="mr-2" />
              <Link href="#" className="text-color3  font-medium">
                Favoritos
              </Link>
            </aside>
          </Navbar>
        </div>
        <div className="flex gap-4 items-center bg-color1 rounded-full ">
          <Button radius="full" className="h-10 font-semibold shadow-md">
            <img src="/assets/profile-muhammad.png" alt="Imagem de perfil" />
            <h1>Muhammad</h1>
          </Button>
        </div>
      </div>
    </header>
  );
}
