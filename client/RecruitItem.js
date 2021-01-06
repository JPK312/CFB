import React from "react";
import Recruit from './Recruit.js'

function getRecruits(recruits){
  var rows = [];
  for (var i = 0; i < recruits.length; i++) {
    var obj = {
      name: recruits[i].name,
      position: recruits[i].position,
      stars: recruits[i].stars,
      rating: recruits[i].rating,
      nationalRank: recruits[i].nationalRank,
      weight: recruits[i].weight,
      height: recruits[i].height,
      town: recruits[i].highSchool
    }
    rows.push(obj);
  }
  return rows;
}

function RecruitItem({recruits}){
    return(
      <div><Recruit recruits={getRecruits(recruits)}/></div>
    )
}

export default RecruitItem;