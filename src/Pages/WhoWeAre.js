import React from 'react';
import Header from './../Components/Header/Header.js'
import Services from './../Components/Services/Services.js' 

export default class WhoWeAre extends React.Component {
    render() {
        return (
            <div className='wrap'>
                <Header />
                <Services /> 
            </div>
        )
    }
}