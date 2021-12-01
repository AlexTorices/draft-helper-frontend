import React, { useEffect, useState } from 'react'
import { ChampionCard } from './champion-card'
import { SelectChampion } from './select-champion'
import { SelectEnemyChampion } from './select-enemy-champion'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function weakTo(championId) {
    return [ 1, 2, 3, 4]
}


export function ChampionGrid(props) {

    const [teamChampions, setTeamChampions] = useState([])
    const [enemyChampions, setEnemyChampions]= useState([])
    const [history, setHistory] = useState([])
    const [turnOf, setTurnOf] = useState("blue")
    const [turn, setTurn]  = useState(0)

    const changeTurn = () => {
        if (turnOf === "blue")
            setTurnOf("red")
        else
            setTurnOf("blue")
    }

    const onChampionSelect = (championId, callback) => {
        if (turn >= 10)
            return 

        if (turnOf === "red") { // Red is enemy
            if(!enemyChampions.includes(championId)) {
                enemyChampions.push(championId)
                setEnemyChampions(enemyChampions.slice())
            }
        } else if (turnOf === "blue") { // Your team is blue
            if(!teamChampions.includes(championId)) {
                teamChampions.push(championId)
                setTeamChampions(teamChampions.slice())
            }
        }
        callback()
        changeTurn()
        setTurn(turn + 1)
    }


    const champions2 = props.champions.map(champion => {
        return (
            <Col>
                <ChampionCard champion={champion} onSelect={onChampionSelect} team={teamChampions} enemy={enemyChampions} />
            </Col>
        )
    })

    const champ={
        id:1,
        name: "Akali",
        imgUrl: "https://avatarfiles.alphacoders.com/210/210077.jpg"

    }

    const selectedTeamChampions = teamChampions.map(champId => {
        return (
            <SelectChampion champion={champ}></SelectChampion>
        )
    }) 

    const selectedEnemyChampions = enemyChampions.map(champId => {
        return (
            <SelectEnemyChampion champion={champ}></SelectEnemyChampion>
        )
    }) 

    return (
        <div style={{maxWidth:'1200px', margin: '0 auto', padding: '24px'}}>
            <Row>
                <Col>
                    <h1 style={{backgroundColor: '#4169e1'}}> Blue team</h1>
                    {selectedTeamChampions}
                </Col>
                <Col>
                <Container style={{maxWidth: '400px'}}>
                    <h1>Turn <a style={{backgroundColor: turnOf}}> {turnOf}</a></h1>
                    <Row md={4}>
                        {champions2}
                    </Row>
                </Container>
                </Col>
                <Col>
                    <h1 style={{backgroundColor: '#de1738'}}> Red Team</h1>
                    {selectedEnemyChampions}
                </Col>
            </Row>

        </div>
    )
}