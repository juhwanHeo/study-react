import { useEffect, useState } from "react";
import { fetchData } from "./api";

export function useFetchOptionData(url) {
  const [ items, setItems ] = useState([]);
  const [ optionId, setOptionId ] = useState('');

  useEffect(() => {
    if (!url) {
      return;
    }

    let ignore = false;
    fetchData(url).then(result => {
      if (!ignore) {
        console.log('Fetched a list of planets or places.');
        setItems(result);
        setOptionId(result[0].id);
      }
    });
    return () => {
      ignore = true;
      setItems([]);
      setOptionId('');
    }
  }, [url]);

  return [ items, optionId, setOptionId ];
}