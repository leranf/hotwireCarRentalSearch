import React from 'react';
import { connect } from 'react-redux';
import ResultsListItem from './ResultsListItem';

const mapStateToProps = state => ({
  carResults: state.results.carResults,
});

const ResultsList = ({carResults}) => (
  <div>
    {carResults.map(carResult => {
      console.log('carResult', carResult);
      return <ResultsListItem key={carResult.id} {...carResult}/>
    })}
  </div>
);

ResultsList.propTypes = {
  carResults: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(ResultsList);
