import React, { Component } from "react";
import { connect } from "react-redux";
import { FetchUserData } from "../redux/Action/action";
export class UserList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.FetchUserData(this.props.id);
  }
  showAuthor = () => {
    document.getElementById("tp").innerHTML = this.props.UserData.name;
    console.log(this.props.UserData.name);
  };
  render() {
    if (!this.props.UserData) {
      return null;
    }

    return (
      <React.Fragment>
        <h1 id="tp" />
        <button
          type="button"
          className="btn btn-info"
          onClick={this.showAuthor}
        >
          See Author
        </button>
      </React.Fragment>
    );
  }
}
const SendStateToProps = (state, ownProps) => {
  //console.log(state, ownProps)

  console.log(state.PostFetchList.PostList);
  console.log(state.UserFetchList.UsersList);

  return {
    UserData: state.UserFetchList.UsersList.find(
      item => item.id === ownProps.id
    )
  };
};
export default connect(SendStateToProps, { FetchUserData })(UserList);
