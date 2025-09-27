import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useBoardDispatch } from "../../contexts/BoardContext";
import Button from "../common/button/Button";
import classes from "./BoardEdit.module.css";

function BoardEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    creator: "",
  });
  const dispatch = useBoardDispatch();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(
          `http://heojh.iptime.org:8003/board/${id}`
        );
        setItem(response.data);
        setFormData({
          title: response.data.title || "",
          content: response.data.content || "",
          creator: response.data.creator || "",
        });
      } catch (error) {
        console.error("Error fetching item:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    dispatch({
      type: "UPDATE_ITEM",
      payload: { id: item.id, ...formData },
    });
    navigate(`/board/${id}`);
  };

  const handleCancel = () => {
    navigate(`/board/${id}`);
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
          <h2>게시글 수정</h2>
          <Button onClick={handleCancel}>취소</Button>
        </div>

        <div className={classes.content}>
          <div className={classes.formGroup}>
            <label className={classes.label}>제목</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={classes.input}
              required
            />
          </div>

          <div className={classes.formGroup}>
            <label className={classes.label}>작성자</label>
            <input
              type="text"
              name="creator"
              value={formData.creator}
              onChange={handleChange}
              className={classes.input}
              required
            />
          </div>

          <div className={classes.formGroup}>
            <label className={classes.label}>내용</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className={classes.textarea}
              required
            />
          </div>

          <div className={classes.btnBox}>
            <Button className={classes.btn} onClick={handleSave}>
              저장
            </Button>
            <Button className={classes.btn} onClick={handleCancel}>
              취소
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardEdit;
