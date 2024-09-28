import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="flex justify-between">
            <Link to="/" className="text-lg font-bold">Maheswari Marimuthu</Link>
            <ul className="flex">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/about">About</Link></li>
                <li className="nav-item"><Link to="/projects">Projects</Link></li>
                <li className="nav-item"><Link to="/contact">Contact</Link></li>
            </ul>
        </header>
    );
}
