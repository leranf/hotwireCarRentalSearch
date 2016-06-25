import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import ResultsList from '../../Results/components/ResultsList';

const mapStateToProps = state => ({
  isFetching: state.results.isFetching,
  carResults: state.results.carResults,
  badRequest: state.results.badRequest,
});

const SearchPage = ({ isFetching, carResults, badRequest }) => (
  <div>
    <Form />
    {carResults || isFetching || badRequest ? <ResultsList /> : null}
  </div>
);

SearchPage.propTypes = {
  isFetching: React.PropTypes.bool.isRequired,
  carResults: React.PropTypes.array.isRequired,
  badRequest: React.PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(SearchPage);
