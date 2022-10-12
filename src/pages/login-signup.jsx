import {loginSubmit,signupSubmit} from '../store/actions/user.action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginSignup =() => {
    const [noLogin,setNoLogin] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        console.log(noLogin)
    },[noLogin])
    const onLoginSubmit = (ev) => {
        ev.preventDefault()
        dispatch(loginSubmit({ username: ev.target[0].value, password: ev.target[1].value }))
        .then(()=>{
            navigate('/toy')
        })
    }

    const onSignupSubmit = (ev) => {
        ev.preventDefault()
        const user = {
            fullname: ev.target[0].value,
            username: ev.target[1].value,
            password: ev.target[2].value,
            // balance: utilService.getRandomIntInclusive(1000, 5000),
            // activities: [],
            // colors:['#f0f0f0', '#27ae60', '#000000', '#fff']
        }
        dispatch(signupSubmit(user))
        .then(()=>{
            navigate('/name')
        })
    }

    
   return <section className="login-signup">
            {!noLogin && <form onSubmit={(ev) => onLoginSubmit(ev)}>
                <input name="username" type="text" placeholder="Enter username" />
                <input name="password" type="password" placeholder="Enter password" />
                <button>Login</button>
            </form>}
            {!noLogin && <button onClick={() => setNoLogin(prevNoLogin => prevNoLogin = true)}>Don't have a login?</button>}
            {noLogin && <form onSubmit={(ev) => onSignupSubmit(ev)}>
                <input name="fullname" type="text" placeholder="Fullname" />
                <input name="username" type="text" placeholder="Enter a username" />
                <input name="password" type="password" placeholder="Enter a password" />
                <button>Sign-up</button>
            </form>}
        </section>
}