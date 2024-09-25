import {ModalMethodProps} from "./Modal";
import {useState} from "react";

interface CreateProps extends ModalMethodProps {
}

const Create = ({create, onClose}: CreateProps) => {
  const [title, setTitle] = useState<string>('');
  const [creator, setCreator] = useState<string>('');

  return (
      <>
        <div>title: <input id={"edit-board-title"} value={title} onChange={(e) => setTitle(e.target.value)}/></div>
        <div>creator: <input id={"edit-board-creator"} value={creator} onChange={(e) => setCreator(e.target.value)}/></div>

        <div onClick={() => {
          create?.(title, creator);
          onClose?.()
        }}>Create
        </div>
        <div onClick={() => {
          onClose?.()
        }}>Close
        </div>
      </>
  );
}

export default Create;