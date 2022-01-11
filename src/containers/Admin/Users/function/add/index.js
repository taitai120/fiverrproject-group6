import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Select, DatePicker } from "antd";
import { actFetchAddUser } from "./modules/action";
import Loader from "../../../../../components/Loader";

export default function AddUser() {
  const data = useSelector((state) => state.addUserReducer.data);
  const loading = useSelector((state) => state.addUserReducer.loading);
  const error = useSelector((state) => state.addUserReducer.error);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
    name: "",
    gender: true,
    phone: "",
    birthday: "",
    role: "",
  });

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(actFetchAddUser(state));
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSelect = (value) => {
    setState({
      ...state,
      role: value,
    });
  };

  const handleChangeDatePicker = (value) => {
    setState({
      ...state,
      birthday: value,
    });
  };

  if (loading) return <Loader />;

  const renderNotice = () => {
    if (!error && data) {
      return (
        <div className="alert alert-success">
          Bạn đã thêm tài khoản thành công
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
        onSubmitCapture={handleAddUser}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <h3 className=" text-center">Thêm người dùng</h3>
        {renderNotice()}
        <Form.Item label="Tài khoản">
          <Input name="email" onChange={handleOnchange} />
        </Form.Item>
        <Form.Item label="Mật khẩu">
          <Input name="password" onChange={handleOnchange} />
        </Form.Item>
        <Form.Item label="Họ Tên">
          <Input name="name" onChange={handleOnchange} />
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input name="phone" onChange={handleOnchange} />
        </Form.Item>
        <Form.Item label="Ngày sinh">
          <DatePicker format="DD/MM/YYYY" onChange={handleChangeDatePicker} />
        </Form.Item>
        <Form.Item label="Mã người dùng">
          <Select placeholder="Chọn loại người dùng" onChange={handleSelect}>
            <Select.Option value="ADMIN">Quản trị</Select.Option>
            <Select.Option value="CLIENT">Khách hàng</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <button className=" btn btn-success" type="submit">
            Thêm người dùng
          </button>
        </Form.Item>
      </Form>
    </>
  );
}
