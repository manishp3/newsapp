import './App.css';


import React, { Component } from 'react'
import Navbar from './Compo/Navbar';
import News from './Compo/News';
import LoadingBar from 'react-top-loading-bar' 

export default class App extends Component {
   pageSize=6;
   state={
    progress:0
   }
   setProgress=(progress)=>{
    this.setState({progress:progress})
   }
  render() {
    return (
     <>
     <Navbar/>
     <LoadingBar
     height={0.5}
     shadow={true}
        color='#f11946'
        progress={this.state.progress}

      />
     <News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="general"/>
     </>
    )
  }
}
