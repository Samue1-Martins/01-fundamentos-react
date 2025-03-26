import { useState } from 'react'
import { Post } from './components/Post/Post'
import { Sidebar } from './components/Sidebar/Sidebar'
import './global.css'
import styles from "./App.module.css"

import { Header } from './components/Header/Header'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Samue1-Martins.png",
      name: "Samuel Martins",
      role: "Student"
    },
    content: [
      { type: 'paragraph', content: 'Salve rapaziada' },
      { type: 'paragraph', content: 'Acabei de realizar este projeto' },
      { type: 'link', content: 'samuel.filllmaker/galdosb' }
    ],
    publishedAt: new Date('2023-02-24 17:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Samue1-Martins.png",
      name: "Samuel Martins",
      role: "Student"
    },
    content: [
      { type: 'paragraph', content: 'Salve rapaziada' },
      { type: 'paragraph', content: 'Acabei de realizar este projeto' },
      { type: 'link', content: 'samuel.filllmaker/galdosb' }
    ],
    publishedAt: new Date('2025-02-24 17:00:00')
  }
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </>
  )
}

