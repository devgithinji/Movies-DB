import React from 'react'
import Form from './SearchForm'
import Movies from './Movies'
import * as domain from "domain";

const Home = () => {
    return (
        <main>
            <Form/>
            <Movies/>
        </main>
    )
}

export default Home
