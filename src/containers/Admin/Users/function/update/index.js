import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Select, DatePicker } from "antd";
import moment from "moment";
// Edit của nó là Update của mình và ngược lại
import { actFetchEditUser } from "./_modules/action";
import { actFetchUpdateUser } from "./modules/action";
import Loader from "../../../../../components/Loader";

export default function UpdateUser(props) {
  const loading = useSelector((state) => state.updateUserReducer.loading);
  const data = useSelector((state) => state.updateUserReducer.data);
  const data2 = useSelector((state) => state.editUserReducer.data2);
  const error2 = useSelector((state) => state.editUserReducer.error2);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: data?.email,
    password: data?.password,
    name: data?.name,
    birthay: data?.birthday,
    phone: data?.phone,
    role: data?.role,
  });

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(actFetchUpdateUser(id));
  }, [0]);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleChangeDatePicker = (value) => {
    setState({
      ...state,
      birthday: moment(value),
    });
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    dispatch(actFetchEditUser(state, props.history));
  };

  const renderNotice = () => {
    if (loading) return <Loader />;

    if (!error2 && data2) {
      return (
        <div className="alert alert-success">
          Bạn đã cập nhật tài khoản thành công
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
        onSubmitCapture={handleUpdateUser}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <h3 className=" text-center">Cập nhật người dùng</h3>
        {renderNotice()}
        <Form.Item label="Tài khoản">
          <Input
            name="email"
            defaultValue={data?.email}
            onChange={handleOnchange}
          />
        </Form.Item>
        <Form.Item label="Mật khẩu">
          <Input
            name="password"
            defaultValue={data?.password}
            onChange={handleOnchange}
          />
        </Form.Item>
        <Form.Item label="Họ Tên">
          <Input
            name="name"
            defaultValue={data?.name}
            onChange={handleOnchange}
          />
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input
            name="phone"
            defaultValue={data?.phone}
            onChange={handleOnchange}
          />
        </Form.Item>
        <Form.Item label="Ngày sinh">
          <DatePicker
            format="DD/MM/YYYY"
            defaultValue={moment(data?.birthday)}
            onChange={handleChangeDatePicker}
          />
        </Form.Item>
        <Form.Item label="Mã người dùng">
          <Select defaultValue={data?.role} placeholder="Chọn loại người dùng">
            <Select.Option value="ADMIN">Quản trị</Select.Option>
            <Select.Option value="CLIENT">Khách hàng</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <button className=" btn btn-success" type="submit">
            Cập nhật người dùng
          </button>
        </Form.Item>
      </Form>
    </>
  );
}
