import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import axios from 'axios'

export function ChampionForm() {
    const [name, setName] = useState("")

    function handleSubmit() {
        axios.post("http://localhost:8085/addChamp", {
            champName: name,
            image: `https://opgg-static.akamaized.net/images/lol/champion/${name}.png`
        }).then( response => {
            alert(response.data)
            setName("")
        })
    }

    return (
        <Container style={{maxWidth:'700px'}}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="champName">
                    <Form.Label>Nombre del campeon</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa nombre del campeón" value={name} onChange={event => setName(event.target.value)} />
                    <Form.Text className="text-muted">
                        Nosotros agregamos los demás datos, no te preocupes.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>

    )

}