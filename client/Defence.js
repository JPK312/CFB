import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

var Defence = ({reviews}) => (

  <div className="stats">
    <ListGroup variant="primary">
      <ListGroup.Item action variant><div>Total Defense: Rnk 88(434.3/YAPG)</div></ListGroup.Item>
      <ListGroup.Item action variant><div>Rushing Defense: Rnk 79(178.8/YAPG)></div></ListGroup.Item>
      <ListGroup.Item action variant><div>Passing Defense: Rnk 97(255.5/YAPG)</div></ListGroup.Item>
      <ListGroup.Item action variant><div>Scoring Defense: Rnk 95(34.5/PPG)</div></ListGroup.Item>
      <ListGroup.Item action variant><div>3rd Down Conversion Pct: Rnk 101(46.2/PCT)</div></ListGroup.Item>
      <ListGroup.Item action variant><div>Red Zone Defense: Rnk 118(92.6/PCT)</div></ListGroup.Item>
      <ListGroup.Item action variant><div>Turnover Margin: Rnk T-89(-0.33/PCT)</div></ListGroup.Item>
    </ListGroup>
  </div>
);

export default Defence;