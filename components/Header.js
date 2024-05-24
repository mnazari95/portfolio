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
				<h4>Software Developer</h4>
				<h4>
				<a
					href="https://github.com/mnazari95"
					target="_blank"
					rel="noopener noreferrer"
					id='gHubLink'
				>
					Github
				</a>
				<span> | </span>
				<a
					href="https://ca.linkedin.com/in/mo-nazari-1b324a10a"
					target="_blank"
					rel="noopener noreferrer"
					id='linkedInLink'
				>
					LinkedIn
				</a>
				</h4>
			</div>
		</header>
	)
}