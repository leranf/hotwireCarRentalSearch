import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  carTypes: state.results.carTypes,
});

const ResultsListItem = ({carResult, carTypes}) => (
  <div>
    
  </div>
);

ResultsListItem.propTypes = {
  carResult: React.PropTypes.object.isRequired,
  carTypes: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(ResultsListItem);


export default ResultsListItem;
