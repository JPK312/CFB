const express = require('express')
const app = express()
const allowCrossOrigin = require('./middleware/allowCrossOrigin')

app.use(allowCrossOrigin)
app.use(express.json())

var ncaa = require('ncaa-stats');
const cfb = require('cfb-data');

cfb.teams.getTeamInfo(130).then((data) => {
  //console.log(data.team.record.items[0].stats);
});

ncaa.sports.getSportDivisionData({ // stat codes
  sport: 'MFB', // Football
  season: 2020, // The 2015-2016 season
  division: 12, // Division I FCS
  type: 'team', // team statistics
  gameHigh: true // game high statistics
}).then((data) => {
  //console.log(data);
});


app.get('/rec', (req, res) => {
  cfb.recruiting.getSchoolCommits('michigan', 2021)
    .then((data) => { //recruits
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
      console.log('!')
    });
});


app.get('/roster', (req, res) => {
  const teamId = 130;
  cfb.teams.getTeamPlayers(teamId)
    .then((data) => { //roster
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
      console.log('!')
    });
});
module.exports = app