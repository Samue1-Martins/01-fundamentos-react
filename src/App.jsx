import { useState } from 'react'
import { Post } from './Post'
import './global.css'
import { Header } from './components/Header/Header'


export function App() {
  return (
    <>
    <Header />

      <Post
        author="Samuel Martins"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ratione accusantium placeat sint perspiciatis modi pariatur exercitationem eius sapiente. Repudiandae soluta harum velit earum possimus nostrum nam dolor modi sunt?"
      />

      <Post
        author="Lucy Martins"
        content="Eu amo cozinhar"
      />
    </>
  )
}

