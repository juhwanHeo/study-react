import Board from './Board';
import {useEffect, useState} from "react";

const useRemoteItems  = () => {
  const [remoteItems, setRemoteItems] = useState([]);
  const [loading, setLading] = useState(false);

  useEffect(() => {
    const fetchRemoteItems = async () => {
      try {
        const response = await fetch("http://heojh.iptime.org:8003/board");
        const data = await response.json();
        setRemoteItems(data.map((item, index) => {return {...item, seq: index+1}}));
      } catch (e) {
        console.error('fetch error:', e);
        setRemoteItems([]);
      } finally {
        setLading(false);
      }
    };

    fetchRemoteItems();
  }, []);

  return {remoteItems, loading};
}

export default Board;
export {useRemoteItems};