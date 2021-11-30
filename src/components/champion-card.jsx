import React, { useEffect, useState } from 'react'
import { weakAgainst } from '../command/weak-to';
import {synergyWith as synergyWith} from '../command/synergy-with'

function computeSynergyPuntation(championId, selectedEnemies) {
    return synergyWith(championId, selectedEnemies);
}

function computeWeakToPuntation(championId, selectedEnemies) {
    return weakAgainst(championId, selectedEnemies);
}

export function ChampionCard(props) {
    
    let not = '#f2013f'
    let synergy = '#00ff7f'
    let warning = '#ff8f00'

    const [weakTo, setWeakTo] = useState(0)
    const [synergyWith, setSynergyWith] = useState(0)
    const [selected, setSelected] = useState(false)
    
    useEffect(() => {
        setSynergyWith(computeSynergyPuntation(props.champion.id, props.enemy))
        setWeakTo(computeWeakToPuntation(props.champion.id, props.enemy))

    })


    var borderColor = ""
    if (weakTo > synergyWith)
        borderColor = not
    else if (synergyWith > weakTo)
        borderColor = synergy

    const borderSize = Math.abs(weakTo - synergyWith)*3

    var brightness = 50;
    if (selected) {
        brightness = 100;
    }

    let cardStyles = {
        width:'70px',
        border: `${borderSize}px solid ${borderColor}`,
        filter: `brightness(${brightness}%)`
    }

    const updateChampionSinergy = () => {
        setSelected(true)
    }

    return (
        <div style={{display: 'inline-block', padding: '4px'}}>
            <img 
                src={props.champion.imgUrl} 
                alt={props.champion.name}
                style={cardStyles}
                onClick={() => props.onSelect(props.champion.id, updateChampionSinergy)} />
        </div>
    )
}