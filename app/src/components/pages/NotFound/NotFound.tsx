import { TestIds } from '@/enums';
import { Component } from 'react';
import cl from './NotFound.module.css';

export class NotFound extends Component {
  render() {
    return (
      <section className={cl.section} data-testid={TestIds.NOT_FOUND_ID}>
        <img className={cl.img} src="/svg/page-not-found.svg" alt="not-found" />
      </section>
    );
  }
}
