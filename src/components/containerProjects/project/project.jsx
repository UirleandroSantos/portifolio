import styles from './project.module.css';

export function Project(props){
    return(
        <div className={styles.container}>
            <h2 className={styles.titleProject}>{ props.title }</h2>
            <div className={styles.technologies}>
                <span>{ props.primaryTechnologies }</span>
                <span>{ props.secondTechnologies }</span>
                <span>{ props.thirdTechnology }</span>
            </div>
            <p className={styles.description}>{ props.description }</p>
        </div>
    )
}