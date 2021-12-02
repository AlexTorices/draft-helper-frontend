import React, { useEffect, useState } from 'react'
import { weakAgainst } from '../command/weak-to';
import {synergyWith as synergyWith} from '../command/synergy-with'
import axios from 'axios';


function computeSynergyPuntation(champName, selectedEnemies) {
    //return synergyWith(championId, selectedEnemies);
    return axios.post("http://localhost:8085/getStrongAgainst", {"id_winner": champName})
}

function computeWeakToPuntation(champName, selectedEnemies) {
    return axios.post("http://localhost:8085/getWeakAgainst", {"id_loser": champName})
}

export function ChampionCard(props) {
    
    let not = '#f2013f'
    let synergy = '#00ff7f'
    let warning = '#ff8f00'

    const [weakTo, setWeakTo] = useState(0)
    const [synergyWith, setSynergyWith] = useState(0)
    const [selected, setSelected] = useState(false)
    
    useEffect(() => {
        computeSynergyPuntation(props.champion.champName, props.enemy)
        .then(response => {
            var counter = 1;
            response.data.forEach(resp => {
                if (props.enemy.includes(resp["id_loser"])){
                    counter += 1
                }
            });
            setSynergyWith(counter)
        })

        computeWeakToPuntation(props.champion.champName, props.enemy)
        .then(response => {
            var counter = 1;
            response.data.forEach(resp => {
                if (props.enemy.includes(resp["id_winner"])){
                    counter += 1
                }
            });
            setWeakTo(counter)
        })

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
                src={props.champion.image} 
                alt={props.champion.champName}
                style={cardStyles}
                onClick={() => props.onSelect(props.champion.champName, updateChampionSinergy)} />
        </div>
    )
}