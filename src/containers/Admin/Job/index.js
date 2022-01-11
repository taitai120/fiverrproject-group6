import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actFetchListJob } from "./modules/action";
import { Button, Table, Input } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { SearchOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { actFetchDeleteJob } from "./function/delete/modules/action";

export default function Job(props) {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  const data = useSelector((state) => state.listJobReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchListJob());
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      width: "10%",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      sorter: (a, b) => a.rating.length - b.rating.length,
      width: "10%",
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price.length - b.price.length,
      width: "10%",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (index, item) => {
        return (
          <Fragment>
            <img
              className="ml-2"
              src={item.image}
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
      title: "Users Booking",
      dataIndex: "usersBooking",
      sorter: (a, b) => a.usersBooking.length - b.usersBooking.length,
      width: "10%",
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
              to={`/dashboard/updatejob/${item._id}`}
            >
              <EditIcon color="secondary" />
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key="2"
              onClick={() => {
                if (
                  window.confirm(
                    "Bạn có chắc chắn muốn xoá viêc này ?" + item.name
                  )
                ) {
                  dispatch(actFetchDeleteJob(item._id));
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

  return (
    <div className="container text text-4xl">
      <h3>Quản lý công việc</h3>
      <Button
        type="primary"
        className="mb-2 rounded  "
        onClick={() => {
          props.history.push("/dashboard/addjob");
        }}
      >
        Thêm việc làm
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
