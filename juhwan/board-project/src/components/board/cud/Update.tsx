import {ModalMethodProps} from "./Modal";
import {useEffect, useRef, useState} from "react";

interface UpdateProps extends ModalMethodProps {
  id: number;
  seq?: number;
  title?: string;
  creator?: string;
}

const Update = ({id, seq, title, creator, update, onClose}: UpdateProps) => {
  // const [editTitle, setEditTitle] = useState<string>(title|| "");
  const editTitle = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!editTitle.current) return;
    editTitle.current.value = title || "";
  }, []);

  return (
      <>
        <div>seq: {seq}</div>
        <div>title: <input id={"edit-board-title"} ref={editTitle}/></div>
        <div>creator: {creator}</div>

        <div onClick={() => {
          if (!editTitle?.current?.value.trim()) {
            alert("title 입력해주세요");
            return;
          }
          update?.(id, editTitle?.current?.value);
          onClose?.()
        }}>Update</div>
        <div onClick={() => {
          onClose?.()
        }}>Close</div>

      </>
  );
}

export default Update;