import React, { useState, useEffect } from 'react';
import axios from 'axios';


// const initialState = {
//     director: '',
//     id: 0,
//     metascore: 0,
//     stars: [],
//     title: ''
// }


export const EditMovie = props => {
    const [movie, setMovie] = useState({})


    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
            .then(res => setMovie(res.data))
            .catch(err => console.log(err.response));
    }, [props.match.params.id]);


    const handleChanges = e => {
        setMovie({ ...movie, [e.target.name]: e.target.value })
    }

    console.log(movie)


    const handleSubmit = e => {
        e.preventDefault()
        axios
            .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
            .then(res => console.log(res.data))
        props.history.push('/')
    }

    console.log('props in Edit', props)
    // console.log('state in Edit', movie)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='title'
                    placeholder='Movie Title'
                    value={movie.title}
                    onChange={handleChanges}
                />
                <input
                    type='text'
                    name='metascore'
                    placeholder='Metascore'
                    onChange={handleChanges}
                    value={movie.metascore}
                />
                <input
                    type='text'
                    name='director'
                    placeholder='Director'
                    onChange={handleChanges}
                    value={movie.director}
                />
                {movie.stars && movie.stars.map((star, i) => {
                    return (
                        <input
                            type='text'
                            name={`${i}`}
                            placeholder='star 1'
                            value={star}
                            onChange={handleChanges}
                        />
                    )
                })}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}