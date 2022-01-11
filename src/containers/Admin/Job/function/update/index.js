import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Select, DatePicker } from "antd";
import moment from "moment";
// Edit của nó là Update của mình và ngược lại
import { actFetchEditJob } from "./_modules/action";
import { actFetchUpdateJob } from "./modules/action";
import Loader from "../../../../../components/Loader";

export default function UpdateJob(props) {
  const loading = useSelector((state) => state.updateJobReducer.loading);
  const data = useSelector((state) => state.updateJobReducer.data);

  const data2 = useSelector((state) => state.editJobReducer.data2);
  const error2 = useSelector((state) => state.editJobReducer.error2);
  const dispatch = useDispatch();
  console.log(data);

  const [state, setState] = useState({
    name: data?.name,
    rating: data?.rating,
    price: data?.price,
  });

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(actFetchUpdateJob(id));
  }, [0]);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleUpdateJob = (e) => {
    e.preventDefault();
    dispatch(actFetchEditJob(state, props.history));
  };

  const renderNotice = () => {
    if (loading) return <Loader />;

    if (!error2 && data2) {
      return (
        <div className="alert alert-success">
          Bạn đã cập nhật công việc thành công
        </div>
      );
    }
    return (
      error2 && (
        <div className="alert alert-danger">{error2?.response?.message}</div>
      )
    );
  };
  return (
    <>
      <Form
        onSubmitCapture={handleUpdateJob}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <h3 className=" text-center">Cập nhật công việc</h3>
        {renderNotice()}
        <Form.Item label="Tên">
          <Input
            name="name"
            defaultValue={data?.name}
            onChange={handleOnchange}
          />
        </Form.Item>
        <Form.Item label="Đánh giá">
          <Input
            name="rating"
            defaultValue={data?.rating}
            onChange={handleOnchange}
          />
        </Form.Item>
        <Form.Item label="Giá">
          <Input
            name="price"
            defaultValue={data?.price}
            onChange={handleOnchange}
          />
        </Form.Item>
        <Form.Item>
          <button className=" btn btn-success" type="submit">
            Cập nhật công việc
          </button>
        </Form.Item>
      </Form>
    </>
  );
}
