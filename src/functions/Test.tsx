import React, { useCallback } from 'react';
import { useIncrementalNb } from '../utils/hooks';

function Child({ cb }: { cb?(): void }) {
  console.log('Child');
  return <div onClick={cb}>Child</div>;
}

const OptimizedChild = React.memo(Child);

function Test() {
  const [nb, setNb] = useIncrementalNb(7000000, 1, 100);

  const cb = useCallback(() => {
    console.log('COUCOU', nb);
    setNb(10);
  }, []);

  return (
    <div className="Test" onClick={() => setNb(n => n + 10000)}>
      {nb}
      <OptimizedChild cb={cb} />
    </div>
  );
}

export default Test;
