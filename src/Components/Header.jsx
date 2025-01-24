import './Header.css';
import logo from '../assets/logo.png';
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from 'react';

export function Header() {
    const [show, setShow] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const dropdown = () => {0
        setShow(!show);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`header ${scrolled ? "scrolled" : ""}`}>
                <div className='logo'>
                    <img src={logo} alt="slacklogo" />
                </div>
                <div className='headernav'>
                    <p onClick={dropdown}>
                        Features {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </p>
                    <p onClick={dropdown}>
                        Solutions {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </p>
                    <p className='e'>Enterprise</p>
                    <p onClick={dropdown}>
                        Resources {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </p>
                    <p className='p'>Pricing</p>
                </div>
                <div className='actions'>
                    <div className='sign'>
                        <div className='ci'>
                            <CiSearch />
                        </div>
                        <section className='gih'>
                            <GiHamburgerMenu />
                        </section>
                        <section className='in'>
                            <p>Sign in</p>
                        </section>
                    </div>
                    <div className='butt'>
                        <button className='but1'>TALK TO SALES</button>
                        <button className='but2'>GET STARTED</button>
                    </div>
                </div>
            </header>
        </>
    );
}