import React, { Component } from 'react';

export interface FiltersProps {
  label: string;
  toggle(): void;
}

class Filter extends Component<FiltersProps> {
  render() {
    const { label, toggle } = this.props;
    return <button onClick={toggle}>{label}</button>;
  }
}

class Filters extends Component<FiltersProps> {
  render() {
    const { label, toggle } = this.props;

    return <Filter label={label} toggle={toggle} />;
  }
}

export default Filters;
