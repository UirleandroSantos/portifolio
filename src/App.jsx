import styles from './App.module.css'
import { AboutMe } from './components/aboutMe/AboutMe';
import { ContainerProjects } from './components/containerProjects/ContainerProjects';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { MainInformation } from './components/main/Main';
import { SocialMedia } from './components/socialMedia/SocialMedia';
import './global.css';

export function App() {
    return(
      <section className={styles.wrapper}>
        <Header />
        <MainInformation />
        <AboutMe />
        <ContainerProjects />
        <SocialMedia />
        <Footer />
    </section>
    )
}