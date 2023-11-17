import { Footer } from "../../footer/Footer";
import { Header } from "../../header/Header";
import styles from './contacts.module.css';
import iconFacebook from '../../../assets/facebook.svg';
import iconWhatsapp from '../../../assets/whatsapp.svg';
import iconIntagram from '../../../assets/instagram.svg';
import iconDiscord from '../../../assets/discord.svg';
import iconGit from '../../../assets/GitHub.svg';

export function Contacts(){
    return (
        <section className={styles.wrapperContacts}>
            <Header />
            <section className={styles.containerContacts}>
                <h1 className={styles.titleContacts}>Contacts</h1>
                <p>talk to me here 👇</p>
                <div className={styles.containerImags}>
                    <a className={styles.containerSVG} href="https://wa.me/+5582981071103">
                        <img className={styles.iconContacts} src={iconWhatsapp} alt="" />
                        <p>WhatsApp</p>
                    </a>
                    <a className={styles.containerSVG} href="https://www.facebook.com/profile.php?id=100009042320555">
                        <img className={styles.iconContacts} src={iconFacebook} alt="" />
                        <p>Facebook</p>
                    </a>
                    <a className={styles.containerSVG} href="https://ig.me/m/uirleandro_santos">
                        <img className={styles.iconContacts} src={iconIntagram} alt="" />
                        <p>Instagram</p>
                    </a>
                </div>
            </section>
        </section>
)
}