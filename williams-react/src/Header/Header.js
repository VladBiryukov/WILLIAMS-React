import React from 'react';
import Navigation from '../Navigation/Navigation.js'
import './Header.css'

function Logo() {
   return (
      <a className="header__box-logo" href="index.html">
         <div className="header__img-log" />
      </a>
   )
}



class Header extends React.Component {

   state = {
      btn: [
         { text: 'Submit Your Idea Now', href: '#' },
         { text: 'CONTACT US', href: '#' },
         { text: 'View  Our Services', href: '#' },
         { text: 'Download Patent Overview', href: '#' },
      ],
      phone: { text: '1-888-357-1068', href: 'tel:1-888-357-1068' },
   }

   renderContactBtn() {


      return this.state.btn.map(btn => {
         return (
            <div className='header__wrap-btn' key={btn.text}> <a className="item" href={btn.href}>{btn.text}</a></div>
         )
      })
   }


   renderContacts() {


      return (
         <div className="header__box-contacts"  >
            <div className="header__box-phone">
               <a className="header__phone" href={this.state.phone.href} >{this.state.phone.text}</a>
            </div>
            <div className="header__box-btn">
               {this.renderContactBtn()}
            </div>
         </div>
      )
   }

   render() {
      return (
         <header className="header">
            <div className="container">
               <div className="header__block">
                  <Logo />
                  <Navigation />
                  {this.renderContacts()}
               </div>
            </div>
         </header>
      )
   }
}
export default Header   