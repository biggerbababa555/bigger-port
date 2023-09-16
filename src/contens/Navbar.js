import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { Link } from "react-scroll";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const [click,setClick] = useState(false)
	const handleClick = () => setClick(!click)
	const closeMenu = () => setClick(false)

	return (
		<header>
			<h3>Bigger</h3>
			<nav ref={navRef}>
				<Link to='home' spy={true} smooth={true} offset={50} duration={500} onclick={closeMenu}>Home</Link>
				<Link to='about' spy={true} smooth={true} offset={50} duration={500} onclick={closeMenu}>About</Link>
				<Link to='skills' spy={true} smooth={true} offset={50} duration={500} onclick={closeMenu}>Skill</Link>
				<Link to='project' spy={true} smooth={true} offset={50} duration={500} onclick={closeMenu}>Project</Link>

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
