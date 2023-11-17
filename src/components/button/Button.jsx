import styles from './button.module.css';

export function Button(props){
    return(
        <button className={styles.button}>
            {props.content}
        </button>
    )
}