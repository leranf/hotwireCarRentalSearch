import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  carTypes: state.results.carTypes,
});

const ResultsListItem = ({ SubTotal, TaxesAndFees, TotalPrice, MileageDescription }) => (
  <div>
    <td>Mileage: {MileageDescription}</td>
    <td>SubTotal: {SubTotal}</td>
    <td>Taxes: {TaxesAndFees}</td>
    <td>Total: {TotalPrice}</td>
  </div>
);

ResultsListItem.propTypes = {};

export default connect(mapStateToProps, null)(ResultsListItem);
