import React from "react";
import Roster from './Roster.js'

function getRoster(roster){
  var rows = [];
  for (var i = 0; i < roster.length; i++) {
    var obj = {
      name: roster[i].fullName,
      position: roster[i].position.displayName,
      number: roster[i].jersey,
      year: roster[i].experience.displayValue,
      weight: roster[i].displayWeight,
      height: roster[i].displayHeight,
      town: roster[i].birthPlace.city + ',' + roster[i].birthPlace.state
    }
    rows.push(obj);
  }
  return rows;
}

function RosterItem({roster}){
    return(
      <div><Roster roster={getRoster(roster)}/></div>
    )
}

export default RosterItem;
