
import * as React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/Header';

// Props interface
interface Props {}

// Component
const List: React.FunctionComponent<Props> = props => (
  <>
    <div>List</div>
  </>
);
  
// Reduc connector to create high order component with store integration
const ListContainer = connect(null, null)(List);

export default ListContainer;