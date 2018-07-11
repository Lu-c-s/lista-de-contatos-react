import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = {
  textField: {
    marginLeft: 20 ,
    marginRight: 20,
    width: 290,
  },
}

class SearchBar extends Component {
    
    searchFieldHandler = (event) => {
      this.props.searchContacts(event.target.value)
    }

    render () {
      const { classes } = this.props;
      return (
        <TextField
        id="search"
        label="Search field"
        type="search"
        className={classes.textField}
        onKeyUp = {this.searchFieldHandler.bind(this)}
        margin="normal"
      />
      );

    }
}

export default withStyles(styles)(SearchBar);