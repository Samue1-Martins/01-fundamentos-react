import { useState } from 'react'
import { Post } from './components/Post/Post'
import { Sidebar } from './components/Sidebar/Sidebar'
import './global.css'
import styles from "./App.module.css"

import { Header } from './components/Header/Header'


export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />
        <main>
            <Post
              author="Samuel Martins"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ratione accusantium placeat sint perspiciatis modi pariatur exercitationem eius sapiente. Repudiandae soluta harum velit earum possimus nostrum nam dolor modi sunt?"
            />

            <Post
              author="Lucy Martins"
              content="Eu amo cozinhar"
            />
          </main>
      </div>

    </>
  )
}

