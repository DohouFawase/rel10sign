import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
    const [state, setstate] = useState(false);
    const location = useLocation();

    function drop() {
        setstate(!state)
    }

    const menuVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        closed: {
            y: "-100%",
            opacity: 0,
            transition: {
                y: { stiffness: 1000 }
            }
        }
    };

    return (
        <div className="p-4">
            <header className="flex justify-between items-center">
                <div className="">
                    <NavLink to={"/"}>
                    <img src="/Logo-Rel-10sign.png" alt="" className="w-12 h-12" />
                    
                    </NavLink>
                </div>
                <nav className="flex">
                    <ul className="hidden md:flex gap-4">
                        <li>
                            <NavLink to={"/"}>Acceuil</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/realisation"}>Project</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}>Contact</NavLink>
                        </li>
                    </ul>
                    <div className="">
                        <button className="md:hidden relative " onClick={drop}>Toggle</button>
                        <AnimatePresence>
                            {state && (
                                <motion.div
                                    className="absolute bg-black w-full right-[0rem] h-64 text-white"
                                    variants={menuVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                >
                                    <ul className="flex flex-col justify-center text-center p-6 space-y-12 gap-4">
                                        <li>
                                            <NavLink to={"/"} onClick={() => setstate(false)}>Acceuil</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/realisation"} onClick={() => setstate(false)}>Project</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/contact"} onClick={() => setstate(false)}>Contact</NavLink>
                                        </li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </nav>
            </header>
        </div>
    )
}
