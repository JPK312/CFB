import React, {Component} from "react";
import { MDBDataTableV5 } from 'mdbreact';

class Recruit extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {recruits} = this.props
    const data = {
      columns: [
        {
          label: 'Name',
          field: 'name',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
        },
        {
          label: 'Position',
          field: 'position',
          width: 270,
        },
        {
          label: 'Stars',
          field: 'stars',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Rating',
          field: 'rating',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Rank',
          field: 'nationalRank',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Weight',
          field: 'weight',
          sort: 'asc',
          width: 150,
        },
        {
          label: 'Height',
          field: 'height',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Hometown',
          field: 'town',
          sort: 'asc',
          width: 100,
        },
      ],
      rows: recruits
    }
    return (
      <MDBDataTableV5 hover entriesOptions={[10, 20, 30]} entries={10} pagesAmount={4} data={data} />

    )
  }
}
export default Recruit;
