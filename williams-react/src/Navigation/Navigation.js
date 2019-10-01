import React from 'react'
import './Navigation.css'


class Navigation extends React.Component {
   state = {
      nav: [
         { href: "#", text: "Who We Are" },
         { href: "#", text: "What We Do" },
         { href: "#", text: "Patenting Process" },
         { href: "#", text: "FAQ" },
         { href: "#", text: "Fee Structure" },
         { href: "#", text: "Contact" },
         { href: "#", text: "Blog" }, 
      ]
   }
   renderNav() {
      return this.state.nav.map(nav => {
         return (
            <a className="nav__link" href={nav.href} key={nav.text}>{nav.text}</a>
         )
      })
   }
   render() {
      return (
         <nav className='nav'>
            {this.renderNav()}
         </nav>
      )
   }
}
export default Navigation