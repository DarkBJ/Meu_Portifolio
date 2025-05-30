export default function Navbar() {
    return (
        <div className="area-header fixed right-0  bg-gradient-to-tl from-black to-gray-900  ">
    <nav className="h-screen flex items-center justify-center">
      <ul className="flex flex-col gap-40 border-1 w-full h-full justify-center">
        <li className="rotate-90 relative">
          <a className="text-white transform font-medium text-[1.2rem] uppercase tracking-wider p-5   after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[3px] after:bg-white after:rounded-[5px] after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100" href="#">
            Sobre mim
          </a>
        </li>
        <li className="rotate-90 relative">
          <a className="text-white transform font-medium text-[1.2rem] uppercase tracking-wider p-5   after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[3px] after:bg-white after:rounded-[5px] after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100" href="#">
            Habilidades
          </a>
        </li>
        <li className="rotate-90 relative">
          <a className="text-white transform font-medium text-[1.2rem] uppercase tracking-wider p-5   after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[3px] after:bg-white after:rounded-[5px] after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100" href="#">
            Portifólio
          </a>
        </li>
        <li className="rotate-90 relative">
          <a className="text-white transform font-medium text-[1.2rem] uppercase tracking-wider p-5   after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[3px] after:bg-white after:rounded-[5px] after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100" href="#">
            Contato
          </a>
        </li>
      </ul>
    </nav>
</div>

    )
}