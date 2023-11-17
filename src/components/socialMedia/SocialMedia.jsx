import styles from './socialMedia.module.css';
import iconGmail from '../../assets/gmail.svg';
import iconGitHub from '../../assets/github.svg';
import iconLinkedin from '../../assets/linkedin.svg';

export function SocialMedia(){
    return(
        <section className={styles.containerFooter}>
            <h2 className={styles.titleSocial}>Social media</h2>
            <ul className={styles.linksSocialMedia}>
                <a type='email' href='to:uirleandro.santos.19@gmail.com' target='_blank'>
                    <img  className={styles.iconSocial} src={iconGmail} alt="svg gmail" />
                    <p className={styles.nameIcon}>GMAIL</p>
                </a>
                <a href='https://www.linkedin.com/in/uirleandro-santos-4969a5264/' target='_blank'>
                    <img  className={styles.iconSocial} src={iconLinkedin} alt="svg linkedin" />
                    <p className={styles.nameIcon}>LINKEDIN</p>
                </a>
                <a href='https://github.com/UirleandroSantos' target='_blank'>
                    <img  className={styles.iconSocial} src={iconGitHub} alt="svg github" />
                    <p className={styles.nameIcon}>GITHUB</p>
                </a>
            </ul>
        </section>
    )
}