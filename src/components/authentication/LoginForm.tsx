import React, { FormEvent, useContext, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Context } from "../.."
import { observer } from 'mobx-react-lite';


const LoginForm: React.FC = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {store} = useContext(Context) 

    const handleLogin = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        event.stopPropagation()
        store.login({username, password})
    }
    return (
        <>
        {store.isAuth ? 'Вы уже вошли' : <Form onSubmit={handleLogin}>
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
            type='password'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
            />
        </Form.Group>

        <Button variant="primary" type="submit">
                Login
        </Button>
    </Form>}
        </>
    )
}

export default observer(LoginForm)