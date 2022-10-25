
import { useState } from 'react';
import './App.css';
import Jokes from './components/Jokes';
import getRandomJoke from './services/axiosService';
import Button from '@mui/material/Button'
import { Typography } from '@mui/material';

function App() {
  const [jokes, setJokes] = useState([])
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)

  const addJoke = async() => {
    const response = await getRandomJoke()
    if(response.status === 200 ){
      setJokes((prevState) => ([...prevState, response.data]))
    }
  }

  const getNewJokeList = id => jokes.filter(joke => joke.id !== id)

  const sendLike = id => {

    const newJokes = getNewJokeList(id)
    setJokes(newJokes)
    setLikes(prevState => prevState + 1)
  }

  const sendDislike = id => {
    const newJokes = getNewJokeList(id)
    setJokes(newJokes)
    setDislikes(prevState => prevState + 1)
  }

  return (
    <div className="App">
      <div className="App-header">
        <Typography>Likes: {likes}</Typography>
        <Typography>Dislikes: {dislikes}</Typography>
        <Jokes jokes={jokes} like={sendLike} dislike={sendDislike}/>
        <Button color='primary' variant='contained' onClick={addJoke} style={{marginTop: '30px '}}>Generate a joke</Button>
      </div>
    </div>
  );
}

export default App;
