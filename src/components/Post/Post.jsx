import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/Samue1-Martins.png" />
                    <div className={styles.authorInfo}>
                        <strong>Samuel Martns</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='06 de fevereiro as 10:24h' datetime="2025-02-06 10:24:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Salve rapaziada</p>
                <p>Acabei ed realizar este projeto</p>
                <p><a href="">git hub: samue1-martins</a></p>
                <p><a href="">#novoprojeto</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário' />

                <footer>
                    <button type='submit'>Publicar</button>

                </footer>
            </form>


        </article>
    )
}

