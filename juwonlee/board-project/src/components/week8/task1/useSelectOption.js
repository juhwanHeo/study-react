import { useState, useEffect } from 'react';
import { fetchData } from './api.js';

export function useSelectOption(url) {
  const [items, setItems] = useState(null);
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    if (url === null) {
      return;
    }

    let ignore = false;
    fetchData(url).then(result => {
      if (!ignore) {
        setItems(result);
        setSelectedId(result[0].id);
      }
    });
    return () => {
      ignore = true;
    }
  }, [url]);
  return [items, selectedId, setSelectedId];
}
