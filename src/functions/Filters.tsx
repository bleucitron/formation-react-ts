import React from 'react';
import Counter from './Counter';

interface FiltersProps {
  labels: string[];
  active: string;
  toggle(label: string): void;
}

function Filters(props: FiltersProps) {
  const { active, labels, toggle } = props;

  const instances = labels.map(label => (
    <button
      key={label}
      className={active === label ? 'active' : ''}
      onClick={() => toggle(label)}
    >
      {label}
    </button>
  ));

  return (
    <div className="Filters">
      {instances}
      <Counter />
    </div>
  );
}

export default React.memo(Filters);
