import React, { useState, useEffect } from 'react';
import axios from 'axios';


const initialState = {
    director: '',
    id: 0,
    metascore: 0,
    stars: [],
    title: ''
}


export const EditMovie = props => {
    const [movie, setMovie] = useState(initialState)


    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
            .then(res => setMovie({ movie: res.data }))
            .catch(err => console.log(err.response));
    }, [props.match.params.id]);


    const handleChanges = e => {
        console.log(movie)
        setMovie({ ...movie, [e.target.name]: e.target.value })
    }

    // console.log('props in Edit', props)
    // console.log('state in Edit', movie)
    return (
        <div>
            <form>
                <input
                    type='text'
                    name='title'
                    placeholder='Movie Title'
                    vale={movie.title}
                    onChange={handleChanges}
                />
                <input
                    type='text'
                    name='metascore'
                    placeholder='Metascore'
                    onChange={handleChanges}
                />
                <input
                    type='text'
                    name='director'
                    placeholder='Director'
                    onChange={handleChanges}
                />
                <input
                    type='text'
                    name='star1'
                    placeholder='star 1' />
                <input
                    type='text'
                    name='star2'
                    placeholder='star 2' />
                <input
                    type='text'
                    name='star3'
                    placeholder='star 3' />
            </form>
        </div>
    )
}