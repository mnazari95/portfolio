import styles from '../styles/Home.module.css'

export default function Card(props) {

    return(
        <div className={styles.card}>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <h3>{props.title}&rarr;</h3>
            </a>
            <p>{props.description}</p>
            <h4>Features:</h4>
            <ul>
                {
                    props.features.map((feature) => 
                        <li key={feature}>{feature}</li>
                    )
                }
            </ul>
        </div>
    )
}