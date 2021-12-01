import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function SelectEnemyChampion(props) {

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
        justifyContent: 'flex-end',
        padding: '8px'
    }

    return (
        <div style={rowStyle}>
            <div style={{paddingRight: '8px'}}>
                <a style={{display: 'block'}}>{props.name}</a>
            </div>
            <div style={imgContainerStyle}>
                <img
                    style={imgStyle}
                    src={`https://opgg-static.akamaized.net/images/lol/champion/${props.name}.png`}
                    alt={props.name} />
            </div>
        </div>
    )
}