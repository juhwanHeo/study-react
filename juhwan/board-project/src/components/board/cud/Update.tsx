import {ModalMethodProps} from "./Modal";
import {useState} from "react";

interface UpdateProps extends ModalMethodProps {
  id: number;
  seq?: number;
  title?: string;
  creator?: string;
}

const Update = ({id, seq, title, creator, update, onClose}: UpdateProps) => {
  const [editTitle, setEditTitle] = useState<string>(title|| "");


  return (
      <>
        <div>seq: {seq}</div>
        <div>title: <input id={"edit-board-title"} value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/></div>
        <div>creator: {creator}</div>

        <div onClick={() => {
          update?.(id, editTitle);
          onClose?.()
        }}>Update</div>
        <div onClick={() => {
          onClose?.()
        }}>Close</div>

      </>
  );
}

export default Update;