import { TestIds } from '@/enums';
import { Component } from 'react';

export class About extends Component {
  render() {
    return <div data-testid={TestIds.ABOUT_ID}>About</div>;
  }
}
