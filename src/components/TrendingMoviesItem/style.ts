import styled from 'styled-components';

export const MovieInfo = styled.div`
    position: absolute;
    bottom: 0;
    padding: 1.5rem;
    transition: bottom 0.2s linear;

    h1 {
        color: #fff;
        font-size: 1.4rem;
        font-weight: 600;
        margin: 0.2rem 0;
    }

    span.release-date {
        font-size: 0.85rem;
    }

    span.vote-avarage {
        font-size: 0.85rem;
        &::before {
            content: "•";
            margin: 0 0.6rem;
        }
    }
    span.media-type {
        background-color: #524eb7;
        border-radius: 100px;
        padding: 4px 8px;
        text-transform: uppercase;
        font-size: 0.6em;
        font-weight: 500;
        display: inline-block;
    }
`

export const Container = styled.div`
    position: relative;
    border-radius: 3px;
    margin-bottom: 1rem;
    overflow: hidden;
    color: #fff;

    &:hover {
        ${MovieInfo} {
            bottom: 15px;
        }

        .movie-backdrop img {
            opacity: 0.5;
        }
    }

    .movie-backdrop {
        position: relative;    
        &::after {
            display: block;
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 100%;
            content: "";
            background: rgb(0,0,0);
            background: -moz-linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5788690476190477) 100%);
            background: -webkit-linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5788690476190477) 100%);
            background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5788690476190477) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
        }  
        img {
            display: block;
            transition: opacity 0.2s linear;
        }
    }
`


