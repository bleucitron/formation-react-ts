import React from 'react';

interface FiltersProps {
  label: string;
  active: boolean;
  toggle(): void;
}

function Filters(props: FiltersProps) {
  const { active, label, toggle } = props;
  return (
    <button className={active ? 'active' : ''} onClick={toggle}>
      {label}
    </button>
  );
}

export default React.memo(Filters);
