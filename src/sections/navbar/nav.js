import logo from '../../assets/logoAJK.png';
import './nav.css';
import { useState, useEffect } from "react";
import {Link} from 'react-scroll/modules'

export default function Nav() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`nav ${isScrolled ? "nav-fixed" : ""}`}>
            <div className='logo'>
                <img src={logo} width={50} height={50} alt='logo' />
                <h1>PT. ADI JOYO KUSUMO</h1>
            </div>
            <div className='menu'>
                <div className="menu2">
                <Link to="home" offset={-100} smooth={true} duration={500}>
                    <h2>Home</h2>
                </Link>

                    <div
                        className="dropdown"
                        onMouseEnter={() => setDropdownVisible(true)}
                        onMouseLeave={() => setDropdownVisible(false)}
                    >
                        <h2 className="dropdown-title">
                            Tentang Kami
                        </h2>
                        
                        {dropdownVisible && (
                            <div className="dropdown-content">
                                <Link to="galeri" offset={-100} smooth={true} duration={500}>
                                    <h3>Galeri</h3>
                                </Link>
                                <Link to="profil" offset={-100} smooth={true} duration={500}>
                                    <h3>Profil</h3>
                                </Link> 
                            </div>
                        )}
                    </div>
                    <Link to="contact" offset={-100} smooth={true} duration={500}>
                        <h2>Contact</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
}
