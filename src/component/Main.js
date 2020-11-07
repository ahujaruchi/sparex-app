import React from 'react'
import './Main.css'
import Product from './Product/Product'
import Filters from './Filters/Filters'


const Main = () => {
    return (
        <div className="Container">
            <h1>SpaceX Launch Programs</h1>
            <div className="Wrapper__Container">
                <div className="Filter__Panel"><Filters></Filters></div>
                <div className="Product__Panel"><Product></Product></div>
            </div>
        </div>

    )
}

export default Main
