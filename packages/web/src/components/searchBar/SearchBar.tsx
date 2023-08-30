import { useState, useEffect } from 'react'
import './SearchBar.scss'

interface MyComponentProps { 
    word: string,
    setWord: (word: string) => void;
}

const SearchBar = ({word,setWord}:MyComponentProps) => {
  return (

        <input type="text" className='search-input' placeholder='ค้นหาเมนูอาหาร' value={word} onChange={(e)=>setWord(e.target.value)}/>
  
  )
}

export default SearchBar