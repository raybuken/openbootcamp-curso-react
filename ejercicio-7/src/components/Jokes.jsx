import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import { ThumbUp, ThumbDown } from '@mui/icons-material/'
import { Avatar, IconButton } from '@mui/material'

const Jokes = ({jokes, like, dislike}) => {
  return (
    <Grid container spacing={2}>
        {jokes.map((joke, i) => (
            <Grid container justifyContent='center' key={i} item xs={12}>
                <Card sx={{width: 500, backgroundColor: '#1e1e1e', color: 'white'}} variant={'outlined'}>
                    <CardContent>
                        <Avatar sx={{margin: '0 auto 3px'}} alt='joke icon' src={joke.icon_url}/>
                        <Typography fontStyle={'italic'}>"{joke.value}"</Typography>
                        <Grid container justifyContent={'space-evenly'} >
                            <Grid item>
                                <IconButton sx={{color: 'success.light'}} onClick={() => like(joke.id)}>
                                    <ThumbUp className='vote-icon' />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton sx={{color: 'error.main'}} onClick={() => dislike(joke.id)}>
                                    <ThumbDown className='vote-icon'/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
  )
}

export default Jokes