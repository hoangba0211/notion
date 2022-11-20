import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "./Manage.css";
import Grid from "@mui/material/Grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import { BsCart2, BsPencilSquare, BsPlusLg, BsXCircle } from "react-icons/bs";
import axios from "axios";
import "antd/dist/antd.css";
import BasicModal from "../../../componets/modal/Modal";
import LineChart from "../../../componets/charjs/LineChart";
import DoughnutChart from "../../../componets/charjs/DoughnutChart";
import MonthStatistic from "./monthStatistic/MonthStatistic";

const Manage = () => {
  const [date, setDate] = useState(dayjs(new Date()));
  const [monthID, setMonthID] = useState(`${date.$y}${date.$M + 1}`);
  const [boardID, setBoardID] = useState(`${date.$y}${date.$M + 1}${date.$D}`);
  const [boardList, setBoardList] = useState([]);
  const [isBoard, setIsBoard] = useState(true);
  const [isBoolean, setIsBoolean] = useState(false);
  // Tổng thu chi mỗi ngày
  const [sumReBoard, setSumReBoard] = useState(0);
  const [sumExBoard, setSumExBoard] = useState(0);

  // Thu chi tháng
  const [financial, setFinancial] = useState([]);

  const [changeBoard, setChangeBoard] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:3001/financial/${boardID}`)
      .then((res) => {
        setIsBoard(true);
        setBoardList(res.data.actions);
        setSumReBoard(() => {
          const total = res.data.actions.reduce(
            (t, v) => (v.status ? [...t, v] : t),
            []
          );
          const result = total.reduce((total, cur) => {
            return total + parseFloat(cur.price);
          }, 0);
          return result;
        });
        setSumExBoard(() => {
          const total = res.data.actions.reduce(
            (t, v) => (!v.status ? [...t, v] : t),
            []
          );
          const result = total.reduce((total, cur) => {
            return total + parseFloat(cur.price);
          }, 0);
          return result;
        });
      })
      .catch((error) => {
        setIsBoard(false);
        axios
          .post(`http://localhost:3001/financial`, {
            id: boardID,
            actions: [],
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            throw err;
          });
        if (error.response && error.response.status === 404) {
          console.clear();
        }
      });
  }, [boardID, financial]);

  useEffect(() => {
    if (isBoolean) {
      axios
        .put(`http://localhost:3001/financial/${boardID}`, {
          id: boardID,
          actions: boardList,
        })
        .then((res) => {
          // setIsBoolean(false);

          console.log(  res.data);
        })
        .catch((err) => {
          throw err;
        });
    }
  }, [boardList]);

  const handleChange = (newDate) => {
    setDate(newDate);
    setMonthID(`${newDate.$y}${newDate.$M + 1}`);
    setBoardID(`${newDate.$y}${newDate.$M + 1}${newDate.$D}`);
  };
  const handleDelete = (id) => {
    let delIem = boardList.splice(id, 1);
    setBoardList(
      [...boardList].filter((value) => {
        return value !== delIem;
      })
    );
    setIsBoolean(true);
    axios
      .get(`http://localhost:3001/financial`)
      .then((res) => {
        setFinancial(res.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.clear();
        }
      });
  };
  const handleEdit = (id) => {
    console.log(id);
  };
  return (
    <div id="manage">
      <div className="manage__content">
        <div className="manage__left">
          <div className="manage__calendar">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <CalendarPicker
                    date={date}
                    onChange={(newDate) => {
                      handleChange(newDate);
                    }}
                  />
                </Grid>
              </Grid>
            </LocalizationProvider>
          </div>
        </div>
        <div className="manage__right">
          <div className="manage__board">
            {isBoard
              ? boardList.map((action, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        !action.status
                          ? "board__element expenditure "
                          : "board__element revenue"
                      }
                    >
                      <div className="element__logo">
                        <BsCart2 />
                      </div>
                      <div className="element__name">{action.name}</div>
                      <div className="element__cost">
                        <span>{!action.status ? "-" : "+"}</span>
                        {action.price}$
                      </div>
                      <div className="element__option">
                        <div className="edit__option">
                          <BasicModal
                            mode={"edit"}
                            innerText={
                              <BsPencilSquare style={{ fontSize: "1.6rem" }} />
                            }
                            boardIndex={index}
                            boardID={boardID}
                            className={"btn__edit"}
                            setBoardList={setBoardList}
                            setFinancial={setFinancial}
                            setChangeBoard={setChangeBoard}
                          />
                        </div>
                        <button
                          onClick={() => handleDelete(index)}
                          className="btn__option"
                        >
                          <BsXCircle style={{ fontSize: "1.6rem" }} />
                        </button>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
          <BasicModal
            setFinancial={setFinancial}
            setBoardList={setBoardList}
            boardID={boardID}
            isBoard={isBoard}
            boardList={boardList}
            className={"btn__add"}
            innerText={
              <span>
                <BsPlusLg />
              </span>
            }
            mode={"add"}
          />
        </div>
        <div className="manage__center">
          <div className="chart chart__pie">
            <DoughnutChart sumExBoard={sumExBoard} sumReBoard={sumReBoard} />
          </div>
        </div>
      </div>
      <div className="manage__chart">
        <MonthStatistic
          monthID={monthID}
          financial={financial}
          sumExBoard={sumExBoard}
          sumReBoard={sumReBoard}
          boardList={boardList}
        />
        <div className="chart chart__line">
          <LineChart monthID={monthID} />
        </div>
      </div>
    </div>
  );
};
export default Manage;
