import { useRef, useState } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {

	const nameRef = useRef();
	const [bool, setBool] = useState(false);

	const handleNameChange = () => {
		
		setBool(!bool);
		if (!bool){
			nameRef.current.innerHTML = 'Mofiz.dev';
		}else{
			nameRef.current.innerHTML = 'Mohammad Hafiz Nazari';
		}
	}

	return(
		<header className={styles.header}>
			<h1 ref={nameRef} onClick={handleNameChange}>Mohammad Hafiz Nazari</h1>
			<h4>Full Stack Javascript Developer</h4>
			<canvas className="background"></canvas>
	  </header>
	)
}