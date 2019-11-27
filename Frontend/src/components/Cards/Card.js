
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Image from '../../images/bg2.png';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 100,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    //transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <React.Fragment>
    <Card className={classes.card}>
    <CardMedia>
        <img src={Image} height='300px' width='200px'></img>
        </CardMedia>
      <CardContent>
        Hellooooo
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <React.Fragment>
    <Card className={classes.card}>
      <CardContent>
        Brokeennnn
      </CardContent>
      <CardActions>
        <Button size="large">Learn More</Button>
      </CardActions>
    </Card>
    </React.Fragment>
    </React.Fragment>

  );
}