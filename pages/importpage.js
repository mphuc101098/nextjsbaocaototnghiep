import React, { useEffect } from 'react'
import firebase from '../config/firebase';
import importTruong from './importTruong';
import importNganh from './importNganh';
import importDiem from './importDiem';
import { DropdownButton, Dropdown } from 'react-bootstrap'

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
            <DropdownButton title="abcxyz" id="bg-nested-dropdown">
                <Dropdown.Item eventKey="1" href="./importTruong">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2" href="./importNganh">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2" href="./importDiem">Dropdown link</Dropdown.Item>
            </DropdownButton>
        </>
    )
}