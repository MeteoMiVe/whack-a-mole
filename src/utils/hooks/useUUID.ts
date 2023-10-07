import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

/**
 * Hook to create unique ids to use as keys when using array.map() in JSX
 */
const useUUID = (arraySize = 1) => {
  const ids: string[] = [];

  for (let i = 0; i < arraySize; i++) {
    ids.push(uuidv4());
  }

  // UseMemo to prevent unnecessary recreation and rerenders
  return useMemo(() => ids, []);
};

export default useUUID;
