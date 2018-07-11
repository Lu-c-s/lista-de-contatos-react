import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const styles = {
    card: {
      minWidth: 275,
    },
    img :{
       borderRadius: 10,
       border: '4px solid light-gray',
       height: 300,
       marginTop:50,
       textAlign: 'center'
       //marginLeft:150,

    }
  };
  
  const contactInfo = (props) => {
    const { classes } = props;
    console.log(props)
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <img src={props.contact.general.avatar} className={classes.img} alt="Avatar" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <h2>Contact Details</h2>
                        <Divider />
                        <h3>General Information</h3>
                        <h4>{props.contact.general.firstName + " " + props.contact.general.lastName}</h4>

                        <h3>Contact Information</h3>
                        <h4>{props.contact.contact.email}</h4>
                        <h4>{props.contact.contact.phone}</h4>

                        <h3>Job</h3>
                        <h4>{props.contact.job.title}</h4>
                        <h4>{props.contact.job.company}</h4>
                        
                        <h3>Address</h3>
                        <h4>{props.contact.address.country + " - " +  props.contact.address.city}</h4>
                        <h4>{props.contact.address.street}</h4>
                        <h4>{props.contact.address.zipCode}</h4>
                      
                         
                    </Grid>
                </Grid>   
          </CardContent>
        </Card>
      </div>
    );
  }
  
contactInfo.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(contactInfo);
