import React from 'react';
import logo from './logo.svg';
import './App.css';

// const schoolinfo = require('CollegeBasketballTeams.json'); //with path
// import the data from the JSON file
import * as schoolInfo from '../src/CollegeBasketballTeams.json';

//function to make an heading to Welcome users to the site
function Welcome() {
  return (<h1>Welcome! This page lists out schools, mascots, and locations</h1>)
}

//Class to create the Team card
class Team extends React.Component <{name: string; school: string; city: string; state: string}>
{
  render() {
    const oneTeam = this.props;
    return (
      <div>
        <h2>Name: {oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>City: {oneTeam.city}</h3> 
        <h3>{oneTeam.state}</h3>
      </div>
    )
  }
}

//unneeded. Originally planned to also list out just the school names as well as the cards
class School extends React.Component <{name: string; school: string; city: string; state: string}>
{
  render() {
    const oneSchool = this.props;
    return (
      <div>
        <h2>{oneSchool.school}</h2>
      </div>
    )
  }
}

// functions to create the divs to display the data for each of the classes
function TeamList(){
  return(
    <div>
      {schoolInfo.map(oneTeam => <Team {...oneTeam}/>)}
    </div>
  )
}
function SchoolList(){
  return(
    <div>
      {schoolInfo.map(oneSchool => <School {...oneSchool}/>)}
    </div>
  )
}

// function to display everything on the page

function App(){
  return (
    <div>
      <Welcome/>
      <TeamList/>
      {/* <SchoolList/> */}
    </div>
  )
}
// calls the App function and displays info.
export default App;