import React from 'react';
import './../../index.css'
import Navigation from '../../Components/Navigation/Navigation.js';
import styles from './Footer.module.css';
import bbsLogo from './../../img/BBS-logo.svg'
import nappLogo from './../../img/NAPP-logo.svg'
import bbsDesc from './../../img/BBS-desc.svg'
import SocialNetworks from './../SocialNetworks/SocialNetworks.js'

export default class Footer extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         desc: {
            button: 'submit your idea now',
            ratting: 'Company rating',
            addres: 'Benjamin Williams, Registered Patent Agent, Reg. No. 70416',
            phone: 'Office: 1-888-357-1068. Fax: (720) 328-5297',
            company: 'Web Design – Direct Line Development'
         },
         logo: {
            bbs: bbsLogo,
            bbsDesc: bbsDesc,
            napp: nappLogo,
         },

      }
   }

   renderRowNav() {
      return (
         <div className={styles.footer__row}>
            <Navigation />
            <div> <a className={styles.footer__button} href='qwe'>{this.state.desc.button}</a> </div>
         </div>
      )
   }

   renderRowCompanyLogos() {
      return (
         <div className={styles.footer__row}>
            <div className={styles.footer__box_logos}>
               <img className={styles.footer__logo} src={this.state.logo.bbs} alt='Logo BBS' />
               <img className={styles.footer__logo} src={this.state.logo.bbsDesc} alt='desc BBS' />
               <img className={styles.footer__logo} src={this.state.logo.napp} alt='Logo napp' />
            </div>
            <SocialNetworks />
         </div>
      )
   }

   renderRowCompanyRating() {
      return (
         <div className={styles.footer__row}>
            <p className={styles.footer__text_rating}>{this.state.desc.ratting}</p>
         </div>
      )
   }
   renderRowAddres() {
      return (
         <div className={styles.footer__row}>
            <p className={styles.footer__text_address}>{this.state.desc.addres}</p>
         </div>
      )
   }
   renderRowContacts() {
      return (
         <div className={styles.footer__row}>
            <a href='tel:1-888-357-1068' className={styles.footer__phone}>{this.state.desc.addres}</a>
            <p className={styles.footer__text_contacts}>{this.state.desc.company}</p>
         </div>
      )
   }

   render() {
      return (
         <footer className='footer'>
            <div className={styles.footer__container}>
               <div className={styles.footer__block}>
                  {this.renderRowNav()}
                  {this.renderRowCompanyLogos()}
                  {this.renderRowCompanyRating()}
                  {this.renderRowAddres()}
                  {this.renderRowContacts()}
               </div>
            </div>
         </footer>
      )
   }
}