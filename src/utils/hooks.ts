import React, { useState, useEffect } from 'react';

export function useIncrementalNb(
  start = 0,
  deltaInc = 10,
  deltaTime = 100,
): [number, React.Dispatch<React.SetStateAction<number>>] {
  const [nb, setNb] = useState(start);

  useEffect(() => {
    const id = setInterval(() => {
      setNb(e => e + deltaInc);
    }, deltaTime);

    return () => clearInterval(id);
  }, []);

  return [nb, setNb];
}
