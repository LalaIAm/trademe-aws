import React, { useEffect } from 'react'
import Header from './Header'

const WebLayout = ({ children }) => {
  useEffect(() => {
    let cssLink = document.createElement('link')
    cssLink.href = 'assets/web.style.css'
    cssLink.id = 'web-css'
    cssLink.rel = 'stylesheet'
    document.head.appendChild(cssLink)

    return () => {
      document.getElementById('web-css').remove()
    }
  })
  return (
    <div className='listar-home listar-hometwo'>
      <div className='preloader-outer'>
        <div className='pin'></div>
        <div className='pulse'></div>
      </div>
      <div id='listar-wrapper' className='listar-wrapper listar-haslayout'>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default WebLayout
