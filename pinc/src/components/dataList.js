import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import dataActions from '../actions/dataActions';
import PropTypes from 'prop-types';
import React from 'react';

class dataList extends React.Component {
  renderData() {
    return <div>{this.props.data}</div>;
  }


  render() {
    return (
      <div className="">
          {this.props.data.length > 0 ?
            this.renderData()
            :
            <div className="">
              No Data
            </div>
          }
      </div>
    );
  }
}

dataList.propTypes = {
  dataActions: PropTypes.object,
  data: PropTypes.array
};

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dataActions: bindActionCreators(dataActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(dataList);