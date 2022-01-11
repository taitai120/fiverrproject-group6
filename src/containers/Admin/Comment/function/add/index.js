import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input } from "antd";
import { actFetchAddComment } from "./modules/action";
import Loader from "../../../../../components/Loader";

export default function AddComment() {
  const data = useSelector((state) => state.addCommentReducer.data);
  const loading = useSelector((state) => state.addCommentReducer.loading);
  const error = useSelector((state) => state.addCommentReducer.error);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    content: "",
    job: "60e5b578ed980c7344c64d7e",
  });

  const hanldeAddComment = (e) => {
    e.preventDefault();
    dispatch(actFetchAddComment(state));
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  if (loading) return <Loader />;

  const renderNotice = () => {
    if (!error && data) {
      return (
        <div className="alert alert-success">
          Bạn đã thêm bình luận thành công
        </div>
      );
    }
    return (
      error && (
        <div className="alert alert-danger">{error?.response?.message}</div>
      )
    );
  };

  return (
    <>
      <Form
        onSubmitCapture={hanldeAddComment}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <h3 className=" text-center">Thêm bình luận</h3>
        {renderNotice()}
        <Form.Item label="Bình luận">
          <Input name="content" onChange={handleOnchange} />
        </Form.Item>
        <Form.Item>
          <button className=" btn btn-success" type="submit">
            Thêm bình luận
          </button>
        </Form.Item>
      </Form>
    </>
  );
}
