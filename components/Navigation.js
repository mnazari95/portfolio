import styles from '../styles/Navigation.module.css';
import {useState, useRef} from 'react';

export default function Navigation () {

    const [toggleNav, setToggleNav] = useState(false);
		const toggleNavigationRef = useRef();
		const toggleBtnRef = useRef();

    const handleToggleNav = () => {
        setToggleNav(!toggleNav);
        if (toggleNav){
					toggleBtnRef.current.innerHTML = ">";
					toggleNavigationRef.current.style.right = "25px";
					toggleNavigationRef.current.style.width = "100px";
        }else{
					toggleBtnRef.current.innerHTML = "<";
					toggleNavigationRef.current.style.right = "0px";
					toggleNavigationRef.current.style.width = "0px";
        }
    }
    return(
        <>
        <button className={styles.toggleBtn} onClick={handleToggleNav} ref={toggleBtnRef}>{">"}</button>
        <div className={styles.navLayout} ref={toggleNavigationRef}>
            <ul className={styles.sectionList}>
							<li><a href="#projects">Projects</a></li>
							<li><a href="#blogs">Blogs</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        </>
    );
}