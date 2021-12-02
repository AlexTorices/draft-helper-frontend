import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import axios from 'axios'


export function MatchupForm() {

    const [winner, setWinner] = useState("")
    const [loser, setLoser] = useState("")

    function handleSubmit() {
        axios.post("http://localhost:8085/addMatchup", {
            "id_winner": winner,
            "id_loser": loser
        }).then( _ => {
            alert("Done")
            setWinner("")
            setLoser("")
        })
    }

    function onDelete() {
        axios.delete("http://localhost:8085/deleteMatchup", {data:{
            "id_winner": winner,
            "id_loser": loser
        }}).then( _ => {
            alert("Deleted")
            setWinner("")
            setLoser("")
        })
    }

    return (
        <Container style={{maxWidth:'700px'}}>
        <h3> Enfrentamiento de campeones</h3>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="champNameWinner">
                <Form.Label>Campeón ganador</Form.Label>
                <Form.Control type="text" placeholder="Ingresa nombre del campeón" value={winner} onChange={event => setWinner(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="champNameLoser">
                <Form.Label>Campeón perdedor</Form.Label>
                <Form.Control type="text" placeholder="Ingresa nombre del campeón" value={loser} onChange={event => setLoser(event.target.value)} />
            </Form.Group>
            
            <Button variant="primary" type="submit" style={{marginRight: '16px'}}>
                Submit
            </Button>
            <Button variant="danger" onClick={onDelete}>
                Delete
            </Button>
        </Form>
    </Container>

    )
}