import { Component } from 'react';
import cl from './NotFound.module.css';

export class NotFound extends Component {
  render() {
    return (
      <section className={cl.section}>
        <img className={cl.img} src="/page-not-found.svg" alt="not-found" />
      </section>
    );
  }
}
