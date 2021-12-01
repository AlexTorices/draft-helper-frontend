import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function SelectChampion(props) {

    const imgContainerStyle = {
        width: '60px',
        height: '60px',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '50%'
    }

    const imgStyle = {
        display: 'inline',
        margin: '0 auto',
        height: '100%',
        width: 'auto'
    }

    const rowStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: '8px'
    }

    return (
        <div style={rowStyle}>
            <div style={imgContainerStyle}>
                <img
                    style={imgStyle}
                    src={props.champion.imgUrl}
                    alt={props.champion.name} />
            </div>
            <div style={{paddingLeft: '8px'}}>
                <a style={{display: 'block'}}>{props.champion.name}</a>
            </div>

        </div>
    )
}