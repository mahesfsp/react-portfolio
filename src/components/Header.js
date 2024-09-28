

export default function Header() {
    return (
        <header className="flex justify-between">
          
            <ul className="flex">
                <li className="nav-item"><a href="/">Home</a></li>
                <li className="nav-item"><a href="/about">About</a></li>
                <li className="nav-item"><a href="/projects">Projects</a></li>
                <li className="nav-item"><a href="/contact">Contact</a></li>
            </ul>
        </header>
    );
}
