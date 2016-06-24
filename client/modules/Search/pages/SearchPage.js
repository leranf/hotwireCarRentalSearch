import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import Submit from '../components/Submit';
import ResultsList from '../../Results/components/ResultsList'

const mapStateToProps = state => ({
  carResults: state.results.carResults,
});

const SearchPage = ({ carResults }) => (
  <div className="rentalCarSearchForm">
    <Form />
    <Submit />
    {carResults ? <ResultsList /> : null}
  </div>
);

SearchPage.propTypes = {
  carResults: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(SearchPage);
