import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const contact = (props) => {
  const { classes } = props; 
  return (
    <div className={classes.root} onClick={props.clicked}>
        <ListItem button>
          <Avatar  src={props.avatar} />
          <ListItemText primary={props.firstName + " " + props.lastName} secondary={props.company} />
        </ListItem>
    </div>
  );
}

contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(contact);
