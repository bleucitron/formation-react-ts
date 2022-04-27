import React from 'react';

export interface FiltersProps {
  types: string[];
  selected: string;
  select(t: string): void;
}
export interface FilterProps {
  label: string;
  isSelected: boolean;
  toggle(): void;
}

function Filter(props: FilterProps) {
  const { label, toggle, isSelected } = props;
  return (
    <button className={isSelected ? 'selected' : ''} onClick={toggle}>
      {label}
    </button>
  );
}

function Filters(props: FiltersProps) {
  const { types, select, selected } = props;

  const instances = types.map(type => (
    <Filter
      key={type}
      label={type}
      toggle={() => select(type)}
      isSelected={type === selected}
    />
  ));

  return <div className="Filters">{instances}</div>;
}

export default Filters;
