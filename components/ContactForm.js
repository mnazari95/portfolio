import { useState } from 'react';
import styles from '../styles/ContactForm.module.css'

export default function ContactForm() {

	const [email, setEmail] = useState(null);
	const [subject, setSubject] = useState(null);
	const [message, setMessage] = useState(null);

	const handleInput = (input) => {

		switch (input.target.id) {
			case "email":
				setEmail(input.target.value);
				break;
			case "subject":
				setSubject(input.target.value);
				break;
			case "message":
				setMessage(input.target.value);
				break;
		}
	}
	const sendForm = (event) => {
		event.preventDefault();

		console.log(`email is ${email} with subject ${subject}, saying ${message}`);
		const data = {
			email,
			name: subject,
			desc: message
		}
		const URL = "https://n2wsl2ncr9.execute-api.us-west-2.amazonaws.com/prod/mailfwd";
		fetch(URL, {
			method: 'POST',
			body: JSON.stringify(data)
		})
		.then(() => {
			console.log('ok email sent');
		})
		.catch(err => console.log(err));
	}

	return (
		<form className={styles.formLayout} onSubmit={sendForm}>
			<label htmlFor="email" className={styles.formLabel}>Email</label>
			<input type="email" id="email" className={styles.formSubject} required onChange={handleInput}/>
			<label htmlFor="subject" className={styles.formLabel}>Subject</label>
			<input type="text" id="subject" className={styles.formSubject} onChange={handleInput}/>
			<label htmlFor="message" className={styles.formLabel}>Message</label>
			<textarea id="message" className={styles.formMessage} onChange={handleInput}/>
			<input type="submit" id="submitBtn" className={styles.formBtn} value="Send"></input>
		</form>
	);
}