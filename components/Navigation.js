import styles from '../styles/Navigation.module.css';
import { useState, useRef, useEffect } from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {

	const [toggleNav, setToggleNav] = useState(false);
	const toggleNavigationRef = useRef();
	const toggleBtnRef = useRef();


	// const openNavIcon = <FontAwesomeIcon className={styles.iconStyle} icon={faArrowLeft} size="5x" />
	const openNavIcon = "menu";
	// const closeNavIcon = <FontAwesomeIcon icon={faTimes} className={styles.iconStyle} size="2x" />
	const closeNavIcon = "close";
	
	const handleToggleNav = () => {
		setToggleNav(!toggleNav);
	}

	useEffect(() => {
		if (toggleNav) {
			toggleBtnRef.current.style.display = "none";
			toggleNavigationRef.current.style.width = "100px";
		} else {
			toggleNavigationRef.current.style.width = "0px";
			toggleBtnRef.current.style.display = "flex";
		}
	}, [toggleNav]);

	const openNav = (!toggleNav ?
		(<button
			className={styles.toggleBtn}
			onClick={handleToggleNav}
			ref={toggleBtnRef}>{openNavIcon}</button>)
		: (<button className={styles.toggleBtn}
			ref={toggleBtnRef}></button>));

	const closeNav =  (toggleNav && toggleNav ? 
		(<button
			className={styles.closeNavBtn}
			onClick={handleToggleNav}>{closeNavIcon}</button>) 
		: (<button className={styles.closeNavBtn}>{closeNavIcon}</button>));

	return (
		<>
			{openNav}
			<div className={styles.navLayout} ref={toggleNavigationRef}>
				<ul className={styles.sectionList}>
					{closeNav}
					<li><a href="#projects">Projects</a></li>
					<li><a href="#blogs">Blogs</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</div>
		</>
	);
 } 