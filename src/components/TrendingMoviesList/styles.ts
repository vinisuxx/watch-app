import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;

    .load-more {
        width: 100%;
        display: block;
        background-color: #524eb7;
        padding: 1rem;
        color: #fff;
        text-transform: uppercase;
        border: 0;
        border-radius: 5px;
    }
`

export const MovieList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
`