import { searchKey } from '@/constants';
import { EmptyProps } from '@/types';
import { ChangeEvent, Component } from 'react';
import cl from './index.module.css';

interface State {
  value: string;
}

export class SearchBar extends Component<EmptyProps, State> {
  constructor(props: EmptyProps) {
    super(props);
    this.state = { value: localStorage.getItem(searchKey) || '' };
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.saveSearchValueToLS);
  }

  componentWillUnmount() {
    this.saveSearchValueToLS();
    window.removeEventListener('beforeunload', this.saveSearchValueToLS);
  }

  saveSearchValueToLS = () => {
    localStorage.setItem(searchKey, this.state.value);
  };

  onChange = (e: ChangeEvent<HTMLInputElement>) =>
    this.setState({
      value: e.target.value,
    });

  render() {
    return (
      <div className={cl['search-bar']}>
        <button className={cl.btn} />
        <input
          value={this.state.value}
          onChange={this.onChange}
          className={cl.input}
          type="search"
          name="search-bar"
          id="search-bar"
          placeholder="Search..."
          autoComplete="off"
        />
      </div>
    );
  }
}
