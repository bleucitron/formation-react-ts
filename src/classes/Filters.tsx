import React, { Component } from 'react';

export interface FiltersProps {
  label: string;
  isSelected: boolean;
  toggle(): void;
}

class Filter extends Component<FiltersProps> {
  render() {
    const { label, toggle, isSelected } = this.props;
    return (
      <button className={isSelected ? 'selected' : ''} onClick={toggle}>
        {label}
      </button>
    );
  }
}

class Filters extends Component<FiltersProps> {
  render() {
    const { label, toggle, isSelected } = this.props;

    return <Filter isSelected={isSelected} label={label} toggle={toggle} />;
  }
}

export default Filters;
