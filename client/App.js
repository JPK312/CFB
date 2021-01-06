import React, {useEffect, useState, Component } from 'react';
import { Navbar} from 'react-bootstrap';
import proxify from './utils/proxify'
import axios from 'axios';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Offense from './Offense.js';
import Defence from './Defence.js';
import RosterItem from './RosterItem.js';
import RecruitItem from './RecruitItem.js';

export default () => {

  let [roster, setRoster] = useState([]);
  let [recruits, setRecruits] = useState([]);

  React.useEffect(() => {
    (async () => {
      const data = await fetch(proxify('/roster')).then(res => res.json());
      setRoster(data.team.athletes);
    })()
  }, [])

  React.useEffect(() => {
    (async () => {
      const data = await fetch(proxify('/rec')).then(res => res.json());
      setRecruits(data);
    })()
  }, [])

  return (
    <>
      <Navbar className="bg">
          <img
            src='/Victors.png'
            height="50"
            className="center"
          />
      </Navbar>

      <div className="contain">
      <div className="team">
        <img
            src='/UM.png'
            height="55"
            className="um"
        />
        Michigan
        <div className="mascot">Wolverines</div>
        <div className="record">2-4 • U/R • 6th in B1G East(2-4)</div>
      </div>

      <div className="flex-container">
        <div><div className="statHead">Offensive Totals</div><Offense/></div>
        <div><div className="statHead">Defensive Totals</div><Defence/></div>
      </div>

      <div className="tbs">
        <div className="rost">Roster</div>
        <div className="rec">Recruits</div>
      </div>


      <div className="flex-container-tb">
        <div><RosterItem roster={roster}/></div>
        <div><RecruitItem recruits={recruits}/></div>
      </div>
      </div>


      <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify"> <i>The Victors </i> is a simple college football team statistics page, including roster and current recruits. Michigan Football is pain and suffering. We a basketball school now</p>
          </div>

        </div>
      </div>


      </footer>
    </>
  )

}
