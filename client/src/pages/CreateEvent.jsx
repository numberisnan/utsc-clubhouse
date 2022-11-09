import React from 'react';
import { Typography, Container, makeStyles } from '@material-ui/core/';
import EventForm from './EventForm.jsx'

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: '120px auto 48px auto',
    },
});

/**
 * Component for displaying a form to create a new event.
 * @component
 */
const CreateEvent = () => {

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography variant="h2" align="center" gutterBottom>
                Create a New Event
            </Typography>
            <EventForm />
        </Container>
    );
}

export default CreateEvent;