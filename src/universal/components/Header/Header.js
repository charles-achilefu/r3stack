import React, { Component, PropTypes } from 'react';
import styles from './Header.css';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.banner}>
          <h1 className={styles.bannerTitle}>R3stack</h1>
          <h3 className={styles.bannerDesc}>Get that shit done!</h3>
          <div className={styles.tryButton}>
            <Link to="/kanban">
              <RaisedButton secondary={true} label="Try the Kanban"></RaisedButton>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
