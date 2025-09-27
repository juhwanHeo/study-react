import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useBoardState, useBoardDispatch } from "../../contexts/BoardContext";
import Delete from "./cud/Delete";
import Button from "../common/button/Button";
import classes from "./BoardDetail.module.css";

function BoardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const state = useBoardState();
  const dispatch = useBoardDispatch();

  useEffect(() => {
    const contextItem = state.items.find((item) => item.id.toString() === id);
    if (contextItem) {
      setItem(contextItem);
      setLoading(false);
    } else {
      const fetchItem = async () => {
        try {
          const response = await axios.get(
            `http://heojh.iptime.org:8003/board/${id}`
          );
          setItem(response.data);
        } catch (error) {
          console.error("Error fetching item:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchItem();
    }
  }, [id, state.items]);

  const handleEdit = () => {
    navigate(`/board/${id}/edit`);
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_ITEM", payload: item.id });
    navigate("/board");
  };

  const handleBack = () => {
    navigate("/board");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!item) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.itemBox}>
        <div className={classes.header}>
          <h2>게시글 상세보기</h2>
          <Button onClick={handleBack}>목록으로</Button>
        </div>

        <div className={classes.content}>
          <div className={classes.itemInfo}>
            <div className={classes.title}>{item.title}</div>
            <div className={classes.creator}>작성자: {item.creator}</div>
          </div>

          <div className={classes.itemContent}>
            <p>{item.content}</p>
          </div>

          <div className={classes.btnBox}>
            <Button className={classes.btn} onClick={handleEdit}>
              Update
            </Button>
            <Delete className={classes.btn} onDelete={handleDelete}>
              Delete
            </Delete>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardDetail;
