import React, { FormEvent, useState } from "react"
import { Form, Button } from "react-bootstrap"
import AnnouncementService from "../../services/AnnouncementService"


const AddAnnouncement: React.FC = () => {
    const [title, setTitle] = useState<string>('')
    const [priceStr, setPriceStr] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const handleCreateAnnouncement = async (event: FormEvent<HTMLFormElement>) => {
        const price = Number(priceStr) 
        await AnnouncementService.createAnnouncement({title, price, description})
    }

    return (
        <Form onSubmit={handleCreateAnnouncement}>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                required
                type='title'
                placeholder='title'
                onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control
                required
                type=''
                placeholder='price'
                onChange={(e) => setPriceStr(e.target.value)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                required
                type='description'
                placeholder='description'
                onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Create announcement
            </Button>
        </Form>
    )
}

export default AddAnnouncement