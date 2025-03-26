import {PencilLine} from 'phosphor-react'

import { Avatar } from '../Avatar/Avatar'
import styles from './Sidebar.module.css'
import imageCover from '../../assets/imagePerfil.jpg'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src={imageCover} />

            <div className={styles.profile}>
                <Avatar src= "https://github.com/Samue1-Martins.png" />

                <strong>Samuel martins</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}