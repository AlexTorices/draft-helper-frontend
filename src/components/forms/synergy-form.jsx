import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import axios from 'axios'


export function SynergyForm() {

    const [champ1, setChamp1] = useState("")
    const [champ2, setChamp2] = useState("")

    function handleSubmit() {
        axios.post("http://localhost:8085/addSynergy", {
            "id_1": champ1,
            "id_2": champ2
        }).then( _ => {
            alert("Done")
            setChamp1("")
            setChamp2("")
        })
    }

    function onDelete() {
        axios.delete("http://localhost:8085/deleteSynergy", {data:{
            "id_1": champ1,
            "id_2": champ2
        }}).then( _ => {
            alert("Deleted")
            setChamp1("")
            setChamp2("")
        })
    }

    return (
        <Container style={{maxWidth:'700px'}}>
        <h3> Sinergia entre campeones</h3>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="champNameWinner">
                <Form.Label>Nombre del campeon</Form.Label>
                <Form.Control type="text" placeholder="Ingresa nombre del campeón" value={champ1} onChange={event => setChamp1(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="champNameLoser">
                <Form.Label>Nombre del campeon</Form.Label>
                <Form.Control type="text" placeholder="Ingresa nombre del campeón" value={champ2} onChange={event => setChamp2(event.target.value)} />
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