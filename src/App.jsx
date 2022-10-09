import React from "react";
import { useState,useEffect } from 'react'
import Notes from './components/Notes';
import api from  "./services/api"

import "./styles/app.css";
import "./styles/globa.css";
import "./styles/sidebar.css";
import "./styles/main.css";
import RadioButton from "./components/RadioButton";


/*
{_id:"1234", title:"hello world",notes:"aprendendo mern stack"},
    {_id:"1235", title:"mongoose",notes:"mongoose permite a sligações"},
    {_id:"1236", title:"javascript",notes:"js roda no front end e no backend"},
    {_id:"1237", title:"typescript",notes:"typescript é um super set javascript"},
*/

function App() {
  const [title,setTitles]=useState("");
  const [notes,setNotes]=useState("");
  const [allNotes,setAllNotes]=useState([
    
  ])

  const getAllNotes= async ()=>{
    const response= await api.get("/annotations");
    const notes = await response.data.annotations
    setAllNotes(notes)
   
   }
  useEffect(()=>{
     getAllNotes()
  },[allNotes])
  
  useEffect(()=>{
    const enableSubmintButton=()=>{
      let btn=document.getElementById('btn_submit');
      btn.style.background="#ffd3ca";
      if(title && notes){
        btn.style.background="#e88f7a";
      }
    }
    enableSubmintButton()
  },[title,notes])


  const handleSubmit= async (event)=>{
    event.preventDefault();
    const response= await api.post('/annotations',{
      title,
      notes,
      pryority:false
    })
    setTitles("")
    setNotes("")
  }

  
  return (
   <div id='app'>
    <aside>
      <strong>Caderno de notas</strong>
      <form onSubmit={handleSubmit}>
        <div className='input-block'>
          <label htmlFor='title'>Titulo da anotação</label>
          <input 
          required
          maxLength={30}
          value={title}
          onChange={event=>setTitles(event.target.value)}
          />
        </div>
        <div className='input-block'>
          <label htmlFor='nota'>Anotações</label>
          <textarea
          required
          value={notes}
          onChange={event=>setNotes(event.target.value)}
          />
        </div>
        <button type='submit' id="btn_submit" >Adicionar</button>
      </form>
      <RadioButton/>
    </aside>
    <main>
        <ul>
          {
            allNotes.map(data=>(
              <Notes 
              key={data._id}
              data={data}
              />
            ))
          }
        </ul>
    </main>
   </div>
  )
}

export default App
