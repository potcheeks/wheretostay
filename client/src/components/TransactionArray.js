import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const TransactionArray = ({property, index, propertyName}) => {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" component="h2">
          Date transacted: {property.date} <br/>
          Unit type: {property.unit_type} <br/>
          Units rented: {property.units_rented} <br/>
          Units sold: {property.units_sold} <br/>
          <br/>
            Price: {property?.transacted_price?.price} <br/>
            psf: {property?.transacted_price?.psf}
         </Typography>
      </CardContent>
    </Card>
  )
}

export default TransactionArray;
