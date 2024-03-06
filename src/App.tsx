import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TeamData from './CollegeBasketballTeams.json';

//Interface
interface CardProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Intro() {
  return (
    <div>
      <h1 className="App-kiraTouch">Welcome to March Maddness Season</h1>
      <h2>Learn about info for the colleges in NCAA Basketball:</h2>
      <br></br>
    </div>
  );
}

class Card extends React.Component<CardProps> {
  render() {
    const oneTeam = this.props;
    return (
      <div>
        <h1>{oneTeam.school}</h1>
        <h4>Mascot: {oneTeam.name}</h4>
        <h4>
          Location: {oneTeam.city}, {oneTeam.state}
        </h4>
        <br></br>
        <p className="App-kiraTouch">-------------------------------</p>
        <br></br>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {TeamData.teams.map((slay) => (
        <Card {...slay} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Intro />
      <TeamList />
    </div>
  );
}

export default App;
