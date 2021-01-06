import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

var Offense = ({stats}) => (

  <div className="stats">
    <ListGroup>
      <ListGroup.Item action variant><div>Total Offense: Rnk 78(381.8/YPG)</div></ListGroup.Item>
      <ListGroup.Item action variant><div>Rushing Offense: Rnk 85(131.5/YPG)</div></ListGroup.Item>
      <ListGroup.Item action variant><div>Passing Offense: Rnk 43(250.3/YPG)</div></ListGroup.Item>
      <ListGroup.Item action variant><div>Scoring Offense: Rnk 66(28.3/PPG)</div></ListGroup.Item>
      <ListGroup.Item action variant><div>3rd Down Conversion Pct: Rnk 98(36.5/PCT)</div></ListGroup.Item>
      <ListGroup.Item action variant><div>Red Zone Offense: Rnk T-76(0.810/YPG)</div></ListGroup.Item>
      <ListGroup.Item action variant><div>Time of Possession: Rnk 123(25:37/ToPavg)</div></ListGroup.Item>
    </ListGroup>
  </div>
);

export default Offense;