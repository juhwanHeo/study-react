import Button from "./../common/Button";

function Delete({ onDelete, className }) {
  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      onDelete();
    }
  };

  return (
    <Button onClick={handleDeleteClick} className={className} type="button">
      Delete
    </Button>
  );
}
export default Delete;
