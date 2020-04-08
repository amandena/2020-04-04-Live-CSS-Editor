import React, {useState} from 'react'
import './App.css'

const App = () => {

  const [html, setHTML] = useState()
  const [css, setCSS] = useState()

  const handleChange = event => {
    event.target.id === 'html' ? setHTML(event.target.value) : setCSS(event.target.value)
  }

  return (
    <div className="App">
      <style id='style' dangerouslySetInnerHTML={{ __html: css }}/>
      <div className='forms'>
        <div>
          <h3>HTML</h3>
          <textarea
            id='html'
            className='edit'
            value={html}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>CSS</h3>
          <textarea
            id='css'
            className='edit'
            value={css}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='page' dangerouslySetInnerHTML={{ __html: html }}/>
    </div>
  )
}

export default App
