import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actFetchListUser } from "./modules/action";
import { Button, Table, Input } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { SearchOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { actFetchDeleteUser } from "./function/delete/modules/action";

export default function User(props) {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  const data = useSelector((state) => state.listUserReducer.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchListUser());
  }, []);

  const columns = [
    {
      title: "Email",
      dataIndex: "email",

      sorter: (a, b) => a.email.length - b.email.length,
      width: "10%",
    },
    {
      title: "Họ tên",
      dataIndex: "name",

      sorter: (a, b) => a.name.length - b.name.length,
      width: "15%",
    },
    {
      title: "Ảnh đại diện",
      dataIndex: "avatar",

      render: (index, item) => {
        return (
          <Fragment>
            <img
              className="ml-2"
              src={item.avatar}
              style={{ width: 50, height: 50 }}
              alt=""
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/50/50 `;
              }}
            />
          </Fragment>
        );
      },
      sortDrections: ["descend", "ascend"],

      width: "10%",
    },
    {
      title: "Ngày tháng năm sinh",
      dataIndex: "birthday",

      sorter: (a, b) => a.birthday.length - b.birthday.length,
      width: "15%",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",

      sorter: (a, b) => a.phone.length - b.phone.length,
      width: "15%",
    },
    {
      title: "Loại người dùng",
      dataIndex: "role",

      sorter: (a, b) => a.role.length - b.role.length,
      width: "15%",
    },
    {
      tile: "Hành động",
      dataIndex: "hanhDong",

      render: (text, item) => {
        return (
          <Fragment>
            <NavLink
              key="1"
              className="p-2"
              to={`/dashboard/updateuser/${item._id}`}
            >
              <EditIcon color="secondary" />
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key="2"
              onClick={() => {
                if (
                  window.confirm(
                    "Bạn có chắc chắn muốn xoá người dùng " + item.email
                  )
                ) {
                  dispatch(actFetchDeleteUser(item._id));
                }
              }}
            >
              <DeleteIcon color="error" />
            </span>
          </Fragment>
        );
      },
      width: "10%",
    },
  ];

  // function onChange(pagination, filters, sorter, extra) {
  //   console.log("params", pagination, filters, sorter, extra);
  // }

  return (
    <div className="container text text-4xl">
      <h3>Quản lý người dùng</h3>
      <Button
        type="primary"
        className="mb-2 rounded  "
        onClick={() => {
          props.history.push("/dashboard/adduser");
        }}
      >
        Thêm người dùng
      </Button>
      <Search
        className="mb-3"
        placeholder="input search text"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      />

      <Table columns={columns} dataSource={data} />
    </div>
  );
}
