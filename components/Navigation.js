import styles from '../styles/Navigation.module.css';
import { useState, useRef, useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {

	const [toggleNav, setToggleNav] = useState(false);
	const toggleNavigationRef = useRef();
	const toggleBtnRef = useRef();


	const openNavIcon = <FontAwesomeIcon icon={faArrowLeft} />
	const closeNavIcon = <FontAwesomeIcon icon={faTimes} />
	
	const handleToggleNav = () => {
		setToggleNav(!toggleNav);
	}

	useEffect(() => {
		if (toggleNav) {
			toggleBtnRef.current.style.width = "0px";
			toggleNavigationRef.current.style.width = "100px";
		} else {
			toggleNavigationRef.current.style.width = "0px";
			toggleBtnRef.current.style.width = "1.7rem";
		}
	}, [toggleNav]);

	const openNav = (!toggleNav ?
		(<button
			className={styles.toggleBtn}
			onClick={handleToggleNav}
			ref={toggleBtnRef}>{openNavIcon}</button>)
		: (<button 
			ref={toggleBtnRef}></button>));

	const closeNav =  (toggleNav && toggleNav ? 
		(<button
			className={styles.closeNavBtn}
			onClick={handleToggleNav}>{closeNavIcon}</button>) 
		: (<button>{closeNavIcon}</button>));

	return (
		<>
			{openNav}
			<div className={styles.navLayout} ref={toggleNavigationRef}>
				{closeNav}
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