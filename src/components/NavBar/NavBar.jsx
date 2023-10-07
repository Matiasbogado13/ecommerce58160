import CartWidget from "../Cartwidget/Cartwidget"

const NavBar = () => {
    return(
        <nav>
            <h1>VINOTECA</h1>
            <section className="nav-list">
                <button>Vinos </button>
                <button>Combos</button>
                <button>Contacto</button>
            </section>
            <CartWidget />
        </nav>
    )
}

export default NavBar