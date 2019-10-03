import React from 'react';
import Navigation from '../Navigation/Navigation.js'
import styles from './Header.module.css'

function Logo() {
   return (
      <a className={styles.header__box_logo} href="index.html">
         <div className={styles.header__img_log} />
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
            <div className={styles.header__wrap_btn} key={btn.text}> <a className='nav__link' href={btn.href}>{btn.text}</a></div>
         )
      })
   }


   renderContacts() {


      return (
         <div className={styles.header__box_contacts} >
            <div className={styles.header__box_phone}>
               <a className={styles.header__phone} href={this.state.phone.href} >{this.state.phone.text}</a>
            </div>
            <div className={styles.header__box_btn}>
               {this.renderContactBtn()}
            </div>
         </div>
      )
   }

   render() {
      return (
         <header className='header'>
            <div className='container'>
               <div className={styles.header__block}>
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