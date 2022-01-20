import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword
} from "firebase/auth";
import "../App.css"
import { auth } from "../firebase-config"
function Auth() {

    const [regEmail, setRegEmail] = useState("")
    const [regPassword, setRegPassword] = useState("")
    const [loginEmail, setLogEmail] = useState("")
    const [loginPassword, setLogPassword] = useState("")
    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                regEmail,
                regPassword
            )
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            )

            console.log(user);
        } catch (error) {
            console.log(error.message)
        }
      }

        const logout = async () => {

            await signOut(auth)
        }

        return (
            <div className="auth-form">
                <div>
                    <h3>Make snowBook Account</h3>
                    <input
                        onChange={(event) => {
                            setRegEmail(event.target.value)
                        }}
                        placeholder={"email address"}
                    ></input>
                    <input
                        onChange={(event) => {
                            setRegPassword(event.target.value)
                        }}
                        placeholder={"Password"}
                    ></input>

                    <button onClick={register}>Add Account</button>
                </div>
                <div>
                    <h3>Login Here</h3>
                    <input
                        placeholder="email address"
                        onChange={(event) => {
                            setLogEmail(event.target.value)
                        }}
                    />
                    <input
                        placeholder="Password"
                        onChange={(event) => {
                            setLogPassword(event.target.value)
                        }}
                    />

                    <button onClick={login}>Login </button>
                </div>

                <h3>Logged in</h3>
                <h3>{user?.email}</h3>
                <button onClick={logout}>Log out</button>
            </div>
        );
    }

    export default Auth;