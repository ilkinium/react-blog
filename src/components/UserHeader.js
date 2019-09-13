import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
	componentDidMount() {
		console.log('props: ');
		console.log(this.props);
		this.props.fetchUser(this.props.userId);
	}

	render() {
		console.log("props:");
		console.log(this.props);
		const user = this.state.users.find(user => user.id === this.props.userId);
		if (!user) {
			return null;
		}
		return <div className="header">{user.name}</div>;
	}
}

const mapStateToProps = state => {
	// console.log("state:");
	// console.log(state);
	return { users: state.users };
};

export default connect(
	mapStateToProps,
	{ fetchUser }
)(UserHeader);
