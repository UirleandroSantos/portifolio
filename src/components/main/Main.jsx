import { Button } from '../button/Button';
import styles from './main.module.css';
import imgCode from '../../assets/imgCode.svg';

export function MainInformation(){
    return(
        <main className={styles.containerMain}>
            <section className={styles.informations}>
                <p className={styles.job}>Full Stack Developer</p>
                <h1 className={styles.name}>Uirleandro Santos</h1>
                <p className={styles.textInformations}>Amet minim mollit non deserunt ullamco est sit 
                    aliqua dolor do amet sint. Velit officia consequat 
                    duis enim velit mollit. Exercitation veniam 
                    consequat sunt.
                </p>
                <a className={styles.buttonDownload} href="">
                    <Button content='Download CV'/>
                </a>
                <a className={styles.buttonContactMe} href="https://wa.me/+5582981071103">
                    <Button content='Contact me'/>
                </a>
            </section>

            <section className={styles.containerSvg}>
                <img className={styles.svg} src={imgCode} alt="" />
            </section>
        </main>
    )
}