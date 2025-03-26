import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from '../Avatar/Avatar'
import styles from "./Comment.module.css"
import { useState } from "react"

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setlikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeCount() {
        setlikeCount((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Samue1-Martins.png" alt="" />

            <div className={styles.commentsBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Samuel Douglas</strong>
                            <time title='06 de fevereiro as 10:24h' datetime="2025-02-06 10:24:00">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>
                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}