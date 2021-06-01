import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        marginTop: '20px',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    link: {
        color: '#323232',
        textDecoration: 'none',
    },
    mainText: {
        padding: '20px',
    }
}))

export const Documentation = () => {
    const classes = useStyles({});
    return (
        <Card className={classes.wrapper}>
            <Typography variant="h4">Documentation page</Typography>
            <Typography variant="subtitle2" className={classes.mainText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.</Typography>
            <Button variant="contained"><Link to={'/main'} className={classes.link}>Go to mainPage</Link></Button>
        </Card>
    );
};