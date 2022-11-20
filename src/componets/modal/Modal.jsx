import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BsCart2, BsExclamationCircle, BsPlusLg } from "react-icons/bs";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Modal.css";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "0.5rem",
  border: "1px solid #000",
  boxShadow: 24,
  padding: "1rem 1.5rem",
};
export default function BasicModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [status, setStatus] = useState("");

  const [action, setAction] = useState({ name: "", price: "", status: "" });
  const [newBoardList, setNewBoardList] = useState([]);
  const [isBoolean, setBoolean] = useState(false);

  const [mode, setMode] = useState(props.mode);

  const [updateBoard, setUpdatBoard] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:3001/financial/${props.boardID}`)
      .then((res) => {
        setNewBoardList(res.data.actions);
        // console.log(40, res.data.actions);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.clear();
        }
      });
  }, [props.boardID]);
  useEffect(() => {
    if (isBoolean) {
      axios
        .put(`http://localhost:3001/financial/${props.boardID}`, {
          id: props.boardID,
          actions: newBoardList,
        })
        .then((res) => {
          console.log(60,res.data.actions);
          axios
            .get(`http://localhost:3001/financial`)
            .then((res) => {
              props.setFinancial(res.data)
            })
            .catch((error) => {
              if (error.response && error.response.status === 404) {
                console.clear();
              }
            });
        })
        .catch((err) => {
          throw err;
        });
    }
  }, [newBoardList]);
  const handleChange = (key, value) => {
    if (key === "status") {
      setStatus(value);
    }
    setAction({ ...action, [key]: value });
  };
  const handleSubmit = (id) => {
    if(mode === 'add'){
      if (props.isBoard) {
        setNewBoardList([...props.boardList, action]);
        props.setBoardList([...props.boardList, action]);
        setBoolean(true);
      } else {
        axios
          .post(`http://localhost:3001/financial`, {
            id: id,
            actions: [action],
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            throw err;
          });
      }
    }else {
      axios
          .put(`http://localhost:3001/financial/${props.boardID}`,{
            id:props.boardID,
            actions: newBoardList.map((value, index) => {
              if(index === props.boardIndex){
                value = action
              }
              return value
            })
          })
          .then((res) => {
            props.setBoardList(res.data.actions);
            setNewBoardList(res.data.actions)
            // props.setChangeBoard(res.data.actions)
          })
          .catch((err) => {
            throw err;
          });
    }
    setOpen(false);
  };
  return (
    <div className="modal">
      <Button className={props.className} onClick={handleOpen}>
        {props.innerText}
      </Button>
      <Modal
        className="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal__form">
            <div className="form__icon">
              <BsCart2 style={{ fontSize: "2.5rem" }} />
            </div>
            <div className="form__name">
              <input
                type="text"
                name="name"
                className="input__info"
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Untitled"
              />
            </div>
          </div>
          <div className="info__status">
            <div className="form__price">
              <input
                type="text"
                name="price"
                className="input__info input__price"
                onChange={(e) => handleChange("price", e.target.value)}
                placeholder="Price"
              />
            </div>
            <FormControl sx={{ m: 1, minWidth: 121 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={status}
                onChange={(e) => handleChange("status", e.target.value)}
                autoWidth
                label="Status"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={true}>Revenue</MenuItem>
                <MenuItem value={false}>Expenditure</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="form__note">
            <span>
              <BsExclamationCircle style={{ fontSize: "2rem" }} />
            </span>
            <input type="text" placeholder="Add a note" />
          </div>
          <div className="form__submit">
            <button
              className="btn__submit"
              onClick={() => handleSubmit(props.boardID)}
            >
              Submit
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
