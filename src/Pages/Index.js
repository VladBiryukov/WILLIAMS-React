import React from 'react';
import Header from './../Components/Header/Header.js'
import Services from './../Components/Services/Services.js'
import Thank from './../Components/Thank/Thank'

export default class Index extends React.Component {
    render() {
        return (
            <div className='wrap'>
                <Header />
                <Services />
                <Thank />
            </div>
        )
    }
}