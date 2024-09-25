import {ModalMethodProps} from "./Modal";

interface DeleteProps extends ModalMethodProps {
  id: number;
  title?: string;
}

const Delete = ({id, title, remove, onClose}: DeleteProps) => {
  return (
      <>
        <div>{title} 을 삭제하시겠습니까?</div>
        <div onClick={() => {
          remove?.(id);
          onClose?.()
        }}>Delete</div>
        <div onClick={() => {
          onClose?.()
        }}>Close</div>
      </>
  );
}

export default Delete;