import Board from './Board';
import {useEffect, useState} from "react";

const useRemoteItems  = () => {
  const [remoteItems, setRemoteItems] = useState([]);

  useEffect(() => {
    const fetchRemoteItems = async () => {
      try {
        const response = await fetch("http://heojh.iptime.org:8003/board");
        const data = await response.json();
        setRemoteItems(data.map((item, index) => {return {...item, seq: index+1}}));
      } catch (e) {
        console.error('fetch error:', e);
        setRemoteItems([]);
      }
    };

    fetchRemoteItems();
  }, []);

  return remoteItems;
}

export default Board;
export {useRemoteItems};