import React from 'react';
import { connect } from 'react-redux';
import ResultsListItem from './ResultsListItem';

const searchStyles = {
  position: 'relative',
  right: '100px',
  top: '200px',
  'font-size':'40px', 
};

const mapStateToProps = state => ({
  isFetching: state.results.isFetching,
  badRequest: state.results.badRequest,
  carResults: state.results.carResults,
});

const ResultsList = ({ isFetching, carResults, badRequest }) => (
  <div style={{ float: 'right' }}>
    {isFetching ? <div style={searchStyles}>Searching for cars...</div> :
      badRequest ? <div style={searchStyles}>Something went wrong...</div> :
      carResults.map(carResult => <ResultsListItem key={carResult.ResultId} {...carResult} />)
    }
  </div>
);

ResultsList.propTypes = {
  isFetching: React.PropTypes.bool.isRequired,
  carResults: React.PropTypes.array.isRequired,
  badRequest: React.PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(ResultsList);
