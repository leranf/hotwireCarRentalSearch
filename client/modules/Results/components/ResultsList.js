import React from 'react';
import { connect } from 'react-redux';
import ResultsListItem from './ResultsListItem';

const mapStateToProps = state => ({
  carResults: state.results.carResults,
});

const ResultsList = ({ carResults }) => (
  <div>
    <table>
      {carResults.map(carResult =>
        <tr><ResultsListItem key={carResult.ResultId} {...carResult} /></tr>
      )}
    </table>
  </div>
);

ResultsList.propTypes = {
  carResults: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(ResultsList);
