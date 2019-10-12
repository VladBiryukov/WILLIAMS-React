import React from 'react'
import './Navigation.css';
import { NavLink } from 'react-router-dom'
class Navigation extends React.Component {
   state = {
      nav: [
         { href: "/WhoWeAre", text: "Who We Are" },
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
            <NavLink
               to={nav.href} 
               className='nav__link'
               // href={nav.href}
               key={nav.text}>
               {nav.text}
            </NavLink>
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