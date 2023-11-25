import { Header } from "../../header/Header";
import styles from '../contacts/contacts.module.css';
export function Error(){
    return (
        <section className={styles.wrapper}>
            <Header />
            <h1>Página não encontrada!!</h1>
        </section>
    )
}