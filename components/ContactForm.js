import styles from '../styles/ContactForm.module.css'

export default function ContactForm () {
    return(
        <div className={styles.formLayout}>
            <label htmlFor="email" className={styles.formLabel}>Email</label>
            <input type="email" id="email" className={styles.formSubject} required/>
            <label htmlFor="subject" className={styles.formLabel}>Subject</label>
            <input type="text" id="subject" className={styles.formSubject}/>
            <label htmlFor="message" className={styles.formLabel}>Message</label>
            <textarea id="message" className={styles.formMessage}/>
            <input type="submit" id="submitBtn" className={styles.formBtn}></input>
        </div>
    );
}