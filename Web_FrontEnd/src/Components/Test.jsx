import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        { name: 'About us', link: 'https://eplogproperties.com/about-us/' },
        { name: 'Services', link: 'https://eplogproperties.com/services/' },
        { name: 'Blogs', link: 'https://eplogproperties.com/blogs/' },
        { name: 'Career', link: 'https://eplogproperties.com/career/' },
        { name: 'Contact Us', link: 'https://eplogproperties.com/contact-us/' },
        { name: 'Properties', link: 'https://eplogproperties.com/properties/' },
    ];

    const variants = {
        open: { y: 0, transition: { duration: 0.3 } },
        closed: { y: '-100%', transition: { duration: 0.3 } },
    };

    return (
        <nav className="relative z-20">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Toggler Button */}
                <button
                    className="lg:hidden text-black focus:outline-none"
                    type="button"
                    onClick={toggleMenu}
                    aria-controls="navbarSupportedContent"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <FaBars className="text-xl" />
                </button>
            </div>

            {/* Full-Screen Overlay Menu */}
            <motion.div
                className={`fixed inset-0 bg-[#7C3EFF] p-4 flex flex-col`}
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                variants={variants}
            >
                <div className=" absolute right-5   ">
                    <button
                        className="text-white text-2xl mb-4"
                        onClick={toggleMenu}
                        aria-label="Close navigation"
                    >
                        <FaTimes />
                    </button>
                </div>
                <motion.ul
                    className="flex flex-col items-start space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {menuItems.map((item, index) => (
                        <motion.li
                            key={index}
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                            exit={{ y: 20 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }} // Stagger effect
                        >
                            <a
                                href={item.link}
                                className="text-white hover:text-blue-200"
                            >
                                {item.name}
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </nav>
    );
};

export default Navbar;
