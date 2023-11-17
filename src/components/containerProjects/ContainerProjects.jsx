import { Button } from '../button/Button';
import styles from './containerProjects.module.css';
import { Project } from './project/project';

export function ContainerProjects(){
    return(
        <div className={styles.container}>
            <h2 className={styles.titleProjects}>Projects</h2>
            <div className={styles.projects}>
                <Project 
                    title="Pousada"
                    description="Uma ótima pousada"
                    primaryTechnologies="Java Script"
                    secondTechnologies="HTML"
                    thirdTechnology="CSS"
                />
                <Project 
                    title="Hospedagem de site"
                    description="Hospede seu site aqui"
                    primaryTechnologies="React"
                    secondTechnologies="Next"
                    thirdTechnology="TypeScript"
                />
            </div>
            <div className={styles.containerButton}>
                <Button content='Ver todos os projetos'/>
            </div>
        </div>
    )
}