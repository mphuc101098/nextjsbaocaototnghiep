import React, { useEffect } from 'react'
import firebase from '../config/firebase';
export default function ImportPage() {
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user)
            } else {
                const provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithRedirect(provider);
            }
        });
    }, [])
    return (
        <>
            <p>asdvhjsadbh</p>
        </>
    )
}