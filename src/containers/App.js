import React, { Component } from 'react';
import './App.css';

import ContactInfo from '../components/ContactInfo';
import SideBar from '../containers/SideBar';
//import CircularProgress from '@material-ui/core/CircularProgress';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      clients:[],
      showing:{
        id: 0,
        show: false,
        loading: true
      }
    }
  }
 
  //Show all contact info
  showInfoHandler = ( id ) => {
     
      if(id !== -1){
        const newShow = this.state.showing;
        newShow.id = id;
        newShow.show = true;
  
        this.setState({ showing : newShow })
      }
      
  }
  
  componentDidMount(){
    let url = '../../clients.json';
    fetch(url ,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      data.map((contact , index) => contact.general.id = index );

      setTimeout(function() {
        this.setState({clients: data});
      }
        .bind(this)
        ,1500);
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    let contact = null;
    
     if( this.state.showing.show ) {
       contact = <ContactInfo contact={this.state.clients[this.state.showing.id]} />;
     }

    return(
      <div>
          <SideBar contacts={this.state.clients} clicked={this.showInfoHandler} >
              {contact}
              
          </SideBar>
      </div>
    );

  }
}

export default App;
