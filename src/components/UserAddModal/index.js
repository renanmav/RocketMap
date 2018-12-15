import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../redux/store/ducks/users';

import { CenterBox, Background, Content } from './style';

class UserAddModal extends Component {
  state = {
    userInput: '',
  };

  static propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  };

  componentDidUpdate() {
    this.loginInput.focus();
  }

  handleAddUser = (e) => {
    e.preventDefault();
    this.props.addUserRequest(this.props.latitude, this.props.longitude, this.state.userInput);
    this.setState({ userInput: '' });
    this.props.handleClose();
  };

  render() {
    const { show, handleClose } = this.props;

    return (
      <Background show={show}>
        <CenterBox show={show}>
          <Content>
            <h2>Adicionar novo usuário</h2>
            <form onSubmit={this.handleAddUser}>
              <input
                placeholder="Usuário no Github"
                value={this.state.userInput}
                onChange={e => this.setState({ userInput: e.target.value })}
                ref={(input) => {
                  this.loginInput = input;
                }}
              />
              <div>
                <button type="button" onClick={handleClose}>
                  Cancelar
                </button>
                <button type="submit" className="salvar" onClick={this.handleAddUser}>
                  Salvar
                </button>
              </div>
            </form>
          </Content>
        </CenterBox>
      </Background>
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
)(UserAddModal);
