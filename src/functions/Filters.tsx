import React from 'react';

export interface FiltersProps {
  label: string;
  isSelected: boolean;
  toggle(): void;
}

function Filter(props: FiltersProps) {
  const { label, toggle, isSelected } = props;
  return (
    <button className={isSelected ? 'selected' : ''} onClick={toggle}>
      {label}
    </button>
  );
}

function Filters(props: FiltersProps) {
  const { label, toggle, isSelected } = props;

  return <Filter isSelected={isSelected} label={label} toggle={toggle} />;
}

export default Filters;
