import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import Switch from 'react-switch';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { changeMode } from '../../store/robots/actions';
import './Header.scss';

const Header = ({ realMode, toogleRealMode }) => (
  <section className="header">
    <div className="leftSection">
      <div className="signalContainer">
        <FontAwesomeIcon icon={faSignal} color="#1CA698" size="lg" />
      </div>
      <h1>
        Análise Geral
        <span> / Principal</span>
      </h1>
    </div>
    <div className="modeToggle">
      <p className={classNames({ checked: !realMode })}>Modo Simulado</p>
      <button type="button" className="switchContainer subtleButton" onClick={toogleRealMode}>
        <Switch
          checked={realMode}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={40}
          handleDiameter={18}
        />
      </button>
      <p className={classNames({ checked: realMode })}>Modo Real</p>
    </div>
  </section>
);

Header.propTypes = {
  realMode: PropTypes.bool.isRequired,
  toogleRealMode: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  realMode: state.robots.realMode,
});

const mapDispatchToProps = (dispatch) => ({
  toogleRealMode: () => dispatch(changeMode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
