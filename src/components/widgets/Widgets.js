import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import { FiberManualRecord } from '@material-ui/icons'

function Widgets() {

    const newsArticle = (heading, subtitle) => {
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        
    }


    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon fontSize="small" />
            </div>

            {newsArticle("this is a sample", 'Top News - 254 readers')}
        </div>
    )
}

export default Widgets
