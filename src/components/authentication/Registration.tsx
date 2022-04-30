import React, { FormEvent, useContext, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Context } from "../.."
import { observer } from 'mobx-react-lite';



const RegisrationForm: React.FC = () => {
    const [username, setUsername] = useState<string>('')
    const [password1, setPassword1] = useState<string>('')
    const [password2, setPassword2] = useState<string>('')

    const {store} = useContext(Context) 

    const handleRegistration = (event: FormEvent<HTMLFormElement>): void => {
        store.registration({username, password1, password2})
    }
    return (
        <>
        {store.isAuth ? 'Вы уже вошли' : <Form onSubmit={handleRegistration}>
        <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
            required
            type='username'
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
            />
        </Form.Group>

        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
            required
            type='password1'
            placeholder='password'
            onChange={(e) => setPassword1(e.target.value)}
            />
        </Form.Group>

        <Form.Group>
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
            required
            type='password2'
            placeholder='confirm password'
            onChange={(e) => setPassword2(e.target.value)}
            />
        </Form.Group>

        <Button variant="primary" type="submit">
                Register
        </Button>
    </Form>}
        </>
    )
}

export default observer(RegisrationForm)