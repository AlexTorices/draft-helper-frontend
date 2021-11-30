import React, { useEffect, useState } from 'react'
import { ChampionCard } from './champion-card'
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

    const changeTurn = () => {
        if (turnOf === "blue")
            setTurnOf("red")
        else
            setTurnOf("blue")
    }

    const onChampionSelect = (championId, callback) => {
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
    }


    const champions2 = props.champions.map(champion => {
        return (
            <Col>
                <ChampionCard champion={champion} onSelect={onChampionSelect} team={teamChampions} enemy={enemyChampions} />
            </Col>
        )
    })

    const selectedTeamChampions = teamChampions.map(champId => {
        return <p>{champId}</p>
    }) 

    const selectedEnemyChampions = enemyChampions.map(champId => {
        return <p>{champId}</p>
    }) 

    return (
        <div>
            <Row>
                <Col> 
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
                    {selectedEnemyChampions}
                </Col>
            </Row>

        </div>
    )
}