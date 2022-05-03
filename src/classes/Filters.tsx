import React, { PureComponent } from 'react';

interface FiltersProps {
  label: string;
  active: boolean;
  toggle(): void;
}

class Filters extends PureComponent<FiltersProps> {
  render() {
    const { active, label, toggle } = this.props;

    return (
      <button className={active ? 'active' : ''} onClick={toggle}>
        {label}
      </button>
    );
  }
}

export default Filters;
