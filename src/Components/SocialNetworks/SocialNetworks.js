import React from 'react'
import style from './SocialNetworks.module.css'

export default class SocialNetworks extends React.Component {
   state = {
      link: [
         {
            href: '#',
            svg: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.6 10.4V7.9H16.3C14.4 7.9 13.1 9.5 13.1 11.5V12.9H10.7V15.2H13.1V22.2H15.8V15.2H18.6V12.9H15.8V11.3C15.8 10.8 16.1 10.5 16.4 10.5H18.6V10.4ZM15 0C23.3 0 30 6.7 30 15C30 23.3 23.3 30 15 30C6.7 30 0 23.3 0 15C0 6.7 6.7 0 15 0Z" fill="white" fill-opacity="0.8"/>
            </svg>`
         },
         {
            href: '#',
            svg: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.1 12.3C21.7 11.9 22.2 11.4 22.6 10.8C22.1 11 21.5 11.2 20.9 11.3C21.5 10.9 22 10.4 22.2 9.7C21.6 10 21 10.3 20.3 10.4C19.8 9.8 19 9.5 18.1 9.5C16.5 9.5 15.1 10.8 15.1 12.5C15.1 12.7 15.1 13 15.2 13.2C12.7 13.1 10.6 11.9 9.1 10.1C8.8 10.5 8.7 11 8.7 11.6C8.7 12.6 9.2 13.5 10 14.1C9.5 14.1 9.1 14 8.7 13.7C8.7 15.1 9.7 16.3 11.1 16.6C10.9 16.7 10.6 16.7 10.3 16.7C10.1 16.7 9.9 16.7 9.7 16.6C10.1 17.8 11.2 18.6 12.5 18.7C11.5 19.5 10.2 20 8.8 20C8.6 20 8.3 20 8.1 20C9.4 20.8 11 21.3 12.6 21.3C18 21.3 21 16.8 21 12.9C21.1 12.5 21.1 12.4 21.1 12.3ZM15 0C23.3 0 30 6.7 30 15C30 23.3 23.3 30 15 30C6.7 30 0 23.3 0 15C0 6.7 6.7 0 15 0Z" fill="white" fill-opacity="0.8"/>
            </svg>`
         },
         {
            href: '#',
            svg: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.1 13.5C15.1 12.4 14.7 7.6 14.7 7.4C14.6 7.2 14.5 7.1 14.3 7C13.6 6.8 11 7.6 10.5 8.1C10.3 8.3 10.3 8.5 10.3 8.6C10.4 8.8 13.6 13.9 13.6 13.9C14.1 14.7 14.5 14.6 14.6 14.5C14.7 14.6 15.1 14.5 15.1 13.5ZM17.8 15.8C20.5 15.1 20.6 15.1 20.7 15C20.9 14.9 20.9 14.7 20.9 14.5C20.8 13.8 19.7 12.1 19.1 11.8C18.9 11.7 18.7 11.7 18.5 11.8C18.4 11.9 18.3 12 16.9 14C16.9 14 16.3 14.9 16.2 14.9C16 15.1 16 15.4 16.2 15.7C16.4 16 16.7 16.1 16.9 16C17.1 16 17.4 15.9 17.8 15.8ZM19 21.8C19.6 21.6 20.9 19.9 21 19.2C21 19 21 18.8 20.8 18.7C20.7 18.6 20.6 18.6 18.3 17.8C18.3 17.8 17.3 17.5 17.3 17.4C17 17.3 16.8 17.4 16.6 17.6C16.4 17.8 16.4 18.2 16.5 18.4L16.9 19.1C18.3 21.4 18.4 21.6 18.5 21.7C18.6 21.8 18.8 21.8 19 21.8ZM15 22.6C15 22.5 15 22.4 15.1 19.9V18.8C15.1 18.5 14.9 18.3 14.7 18.2C14.4 18.1 14.1 18.2 13.9 18.4L13.4 19C11.6 21.1 11.5 21.2 11.5 21.3C11.5 21.4 11.5 21.5 11.5 21.5C11.5 21.6 11.6 21.7 11.6 21.8C12 22.3 14 23 14.6 22.9C14.8 22.9 14.9 22.8 15 22.6ZM9.3 14.7C9 15.1 8.9 16.4 9 17.3C9 17.6 9.1 17.8 9.2 18C9.3 18.2 9.5 18.3 9.7 18.3C9.8 18.3 9.9 18.3 12.3 17.5L13.4 17.2C13.7 17.1 13.8 16.9 13.9 16.6C13.9 16.3 13.8 16 13.5 15.9L12.8 15.6C10.3 14.5 10.1 14.5 10 14.5C9.6 14.4 9.4 14.5 9.3 14.7ZM15 0C23.3 0 30 6.7 30 15C30 23.3 23.3 30 15 30C6.7 30 0 23.3 0 15C0 6.7 6.7 0 15 0Z" fill="white" fill-opacity="0.8"/>
            </svg>`
         },
         {
            href: '#',
            svg: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 14.7C5.8 17.2 7.49999 19.7 9.89999 20.6C12.3 21.5 15.3 20.9 16.9 18.8C17.9 17.5 18.1 15.8 18 14.2C18 14.2 14.1 14.2 12.1 14.2C12.1 14.9 12.1 15.6 12.1 16.2C13.3 16.2 14.4 16.2 15.6 16.2C15.1 18.7 11.6 19.6 9.7 17.9C7.8 16.4 7.89999 13.3 9.89999 11.9C11.3 10.8 13.3 11.1 14.7 12C15.2 11.5 15.8 11 16.3 10.4C15.1 9.5 13.7 8.9 12.2 8.9C9 8.9 6.1 11.6 6 14.7ZM23 12H21C21 12.7 21 13.3 21 14C20.3 14 19.7 14 19 14V16C19.7 16 20.3 16 21 16C21 16.7 21 17.3 21 18H23C23 17.3 23 16.7 23 16C23.7 16 24.3 16 25 16V14C24.3 14 23.7 14 23 14C23 13.3 23 12.7 23 12ZM15 0C23.3 0 30 6.7 30 15C30 23.3 23.3 30 15 30C6.7 30 0 23.3 0 15C0 6.7 6.7 0 15 0Z" fill="white" fill-opacity="0.8"/>
            </svg>`
         }
      ]
   }

   renderLinks() {
      return this.state.link.map((item, index) => {
         return (
            <a key={index}
               className={style.link}
               href={item.href}
               dangerouslySetInnerHTML={{ __html: `${item.svg}` }}>
            </a>
         )
      })
   }

   render() {
      return (
         <div className={style.box_links}>
            {this.renderLinks()}
         </div>
      )
   }
}