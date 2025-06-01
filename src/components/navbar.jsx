export default function Navbar() {
    return (
        <div className="lg:fixed right-0  bg-gradient-to-tl from-black to-gray-900 lg:rounded-l-[25px]">
    <nav className="lg:h-screen flex items-center justify-center">
      <ul className="flex lg:flex-col gap-15 w-full h-full justify-center">
        <li className="lg:rotate-90 relative">
          <button className="text-white transform font-medium text-[1.2rem] uppercase tracking-wider p-5   after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[3px] after:bg-white after:rounded-[5px] after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100 cursor-pointer">
            Sobre mim
          </button>
        </li>
        <li className="lg:rotate-90 relative">
          <button className="text-white transform font-medium text-[1.2rem] uppercase tracking-wider p-5   after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[3px] after:bg-white after:rounded-[5px] after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100 cursor-pointer">
            Habilidades
          </button>
        </li>
        <li className="lg:rotate-90 relative">
          <button className="text-white transform font-medium text-[1.2rem] uppercase tracking-wider p-5   after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[3px] after:bg-white after:rounded-[5px] after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100 cursor-pointer">
            Portifólio
          </button>
        </li>
        <li className="lg:rotate-90 relative">
          <button className="text-white transform font-medium text-[1.2rem] uppercase tracking-wider p-5   after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[3px] after:bg-white after:rounded-[5px] after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100 cursor-pointer">
            Contato
          </button>
        </li>
      </ul>
    </nav>
</div>

    )
}