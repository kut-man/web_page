import React from 'react'

export default function Burger() {

  function openMenu() {
    document.querySelector('.burger').classList.toggle("animation")
    document.querySelector('.list-container').classList.toggle("appearance");
  }

  return (
    <div className="burger" onClick={openMenu}>
      <div className="rec-1"></div>
      <div className="rec-2"></div>
      <div className="rec-3"></div>
    </div>
  )
}
