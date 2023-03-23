import React from 'react';
import logo from './logo.svg';
import './App.css';

// const schoolinfo = require('CollegeBasketballTeams.json'); //with path
import * as schoolInfo from '../src/CollegeBasketballTeams.json';

function Welcome() {
  return (<h1>Welcome! This page lists out schools, mascots, and locations</h1>)
}


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


function App(){
  return (
    <div>
      <Welcome/>
      <TeamList/>
      {/* <SchoolList/> */}
    </div>
  )
}

export default App;