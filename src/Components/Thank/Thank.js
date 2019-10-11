import React from 'react';
import logo from './../../img/lamp.svg'
import s from './Thank.module.css'



export default class Thank extends React.Component {
   state = {
      desc: {
         title: 'Thank you for Choosing Williams Intellectual Property',
         p: 'We’re here to help you through the complex labyrinth and changing landscape of the United States Patent and Trademark Office. Let us leverage our expertise and help you, from paper to marketplace.',
         button: 'Lear more',
      },
      logo: logo
   }

   render() {
      return (
         <div className={s.thank}>
            <div className={s.thank__container}>
               <div className={s.thank__block}>
                  <div className={s.thank__content}>
                     <div className={s.thank__content_inner}>
                        <img className={s.thank__logo} alt='Lamp' src={this.state.logo} />
                        <h2 className={s.thank__title}>{this.state.desc.title}</h2>
                        <p className={s.thank__text}>{this.state.desc.p}</p>
                     </div>
                     <a className={s.thank__button} href='/qwe'>{this.state.desc.button}</a>
                  </div>
               </div>
            </div >
         </div >
      )
   }
} 