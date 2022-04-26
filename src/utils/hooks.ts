import { useEffect, useState } from 'react';

export function useIntervalExp(
  initialValue: number,
): [number, React.Dispatch<React.SetStateAction<number>>] {
  const [exp, setExp] = useState(initialValue);

  useEffect(() => {
    const id = setInterval(() => setExp(xp => xp + 1), 100);

    return () => clearInterval(id);
  }, []);

  return [exp, setExp];
}
