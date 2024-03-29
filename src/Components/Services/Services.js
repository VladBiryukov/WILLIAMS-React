import React from 'react';
import styles from './Services.module.css';
import ruler from '../../img/ruler.svg'
import medal from '../../img/medal.svg'
import notebook from '../../img/notebook.svg'
import planet from '../../img/planet.svg'
import home from '../../img/home.svg'
import plant from '../../img/plant.svg'



function CardServices(props) {
   return (
      <a className={styles.services__card} href='/'>
         <div className={styles.services__content_card}>
            <div className={styles.services__box_img}> <img src={props.card.img} className={styles.services__img} alt={props.card.name} /> </div>
            <div className={styles.services__name}> {props.card.name}</div>
            <div className={styles.services__text} >{props.card.text}</div>
         </div>
         <div className={styles.services__btn}>{props.card.btn}</div>
         {/* <h6 className="services__name services__name_mobile">{props.card.name}</h6> */}
      </a>
   )
}

function TitleServices() {
   return (
      <h2 className={styles.services__title + ' title_h2'}>We Can Help With</h2>
   )
}

class Services extends React.Component {
   state = {
      card: [
         { name: 'Utility Patents', img: home, btn: 'lear more', text: 'Utility patents offer the broadest protection for any new or useful process, machine, manufacture, or composition of matter.' },
         { name: 'Design Patents', img: ruler, btn: 'lear more', text: 'Design patents protect the way something looks, not the structural components informing the device.' },
         { name: 'Provisional Patents', img: notebook, btn: 'lear more', text: 'A provisional patent is a temporary filing, filed under 35 USC 111(b), used to secure the benefit of a filing date.' },
         { name: 'Plant Patents', img: plant, btn: 'lear more', text: 'Plant patents are granted to an inventor who has invented or discovered, and asexually reproduced a distinct and new variety of plant.' },
         { name: 'Trademarks', img: medal, btn: 'lear more', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor' },
         { name: 'International IP', img: planet, btn: 'lear more', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor' },
      ]
   }
   renderCards() {
      return this.state.card.map(card => {
         return (
            <CardServices
               card={card}
               key={card.name}
            />
         )
      })
   }
   renderBoxCards() {
      return (
         <div className={styles.services__box_card}>
            {this.renderCards()}
         </div>
      )
   }
   render() {
      return (
         <section className='services'>
            <div className='container'>
               <div className='services__block'>
                  <TitleServices />
                  {this.renderBoxCards()}

               </div>
            </div>
         </section >
      )
   }



}
export default Services