import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {

	const nameRef = useRef();
	const [bool, setBool] = useState(false);
	const ALIAS = 'Mofiz.dev';
	const NAME = 'Mohammad Hafiz Nazari';
	const handleNameChange = () => {
		setBool(!bool);
	}

	useEffect(() => {
		if (!bool) {
			nameRef.current.innerHTML = ALIAS;
		} else {
			nameRef.current.innerHTML = NAME;
		}
	}, [bool])

	return (
		<header className={styles.header}>
			<div>
				<h1 ref={nameRef} onClick={handleNameChange}>{ALIAS}</h1>
				<h4>Full Stack Javascript Developer</h4>
			</div>
		</header>
	)
}