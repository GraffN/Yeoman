import React, {Component} from 'react';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1f1f1f'
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem'
  },
  date: {
    flex: 1,
    textAlign: 'right',
    margin: '1rem',
    color: 'white'
  }
};

export class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <p style={styles.title}>
          <a href="https://github.com/FountainJS/generator-fountain-webapp" target="_blank" rel="noopener noreferrer">
            Fountain Generator
          </a>
        </p>
        <p style={styles.date}>
          Generated with FountainJS v1.0.0 on Sun Feb 10 2019 16:29:45 GMT+0100 (Vest-Europa (normaltid))
        </p>
      </header>
    );
  }
}
