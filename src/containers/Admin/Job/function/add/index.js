import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Select, DatePicker } from "antd";
import { actFetchAddJob } from "./modules/action";
import Loader from "../../../../../components/Loader";

export default function AddJob() {
  const data = useSelector((state) => state.addJobReducer.data);
  const loading = useSelector((state) => state.addJobReducer.loading);
  const error = useSelector((state) => state.addJobReducer.error);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    rating: "",
    price: "",
    proServices: true,
    localSellers: false,
    onlineSellers: true,
    deliveryTime: true,
    type: "60ee8e64473f3e4009ea6a1c",
    subType: "60ee8e7e473f3e4009ea6a20",
  });

  const hanldeAddJob = (e) => {
    e.preventDefault();
    dispatch(actFetchAddJob(state));
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
          Bạn đã thêm công việc thành công
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
        onSubmitCapture={hanldeAddJob}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <h3 className=" text-center">Thêm công việc</h3>
        {renderNotice()}
        <Form.Item label="Tên">
          <Input name="name" onChange={handleOnchange} />
        </Form.Item>
        <Form.Item label="Đánh giá">
          <Input name="rating" onChange={handleOnchange} />
        </Form.Item>
        <Form.Item label="Giá">
          <Input name="price" onChange={handleOnchange} />
        </Form.Item>
        <Form.Item>
          <button className=" btn btn-success" type="submit">
            Thêm công việc
          </button>
        </Form.Item>
      </Form>
    </>
  );
}
