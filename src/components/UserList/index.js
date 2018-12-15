import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../redux/store/ducks/users';

import { Container } from './style';

class UserList extends Component {
  state = {};

  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        login: PropTypes.login,
        avatar_url: PropTypes.url,
      }),
    ).isRequired,
  };

  render() {
    return (
      <Container>
        <ul>
          {this.props.users.map(user => (
            <li key={user.id}>
              <img src={user.avatar_url} alt="Avatar" />
              <div>
                <strong>{user.name}</strong>
                <p>{user.login}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);
