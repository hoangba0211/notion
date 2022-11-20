import { useUtils } from "@mui/x-date-pickers/internals";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsCartCheck, BsCartPlus, BsCurrencyDollar, BsPlusCircle } from "react-icons/bs";
import "./MonthStatistic.css";

function MonthStatistic(props) {
  console.log(props);
  const [spendableMonth, setSpendaleMonth] = useState(0);

  const [sumRe, setSumRe] = useState(0);
  const [sumEx, setSumEx] = useState(0);

  const [input, setInput] = useState(true);

  const [valueSpend, setValueSpend] = useState(0)
  useEffect(() => {
    axios
      .get(`http://localhost:3001/financial`)
      .then((res) => {
        setSumRe(() => {
          const sameMonth = res.data.filter((value) => {
            return value.id.includes(`${props.monthID}`);
          });
          const arrActions = sameMonth.map((value) => {
            let total = value.actions.reduce(
              (t, v) => (v.status ? [...t, v] : t),
              []
            );
            let result = total.reduce((total, cur) => {
              return total + parseFloat(cur.price);
            }, 0);
            return result;
          });
          return arrActions.reduce((price, cur) => price + cur);
        });
        setSumEx(() => {
          const sameMonth = res.data.filter((value) => {
            return value.id.includes(`${props.monthID}`);
          });
          const arrActions = sameMonth.map((value) => {
            let total = value.actions.reduce(
              (t, v) => (!v.status ? [...t, v] : t),
              []
            );
            let result = total.reduce((total, cur) => {
              return total + parseFloat(cur.price);
            }, 0);
            return result;
          });
          return arrActions.reduce((price, cur) => price + cur);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.financial,props.boardList]);
  //   khi sumEx thay đổi thì thay đổi api
  // khi monthID thay đổi thì tính lại sumEx
  useEffect(() => {
    axios
      .put(`http://localhost:3001/month/${props.monthID}`, {
        id: props.monthID,
        spendable:sumRe - sumEx,
        revenue: sumRe,
        expenditure: sumEx,
      })
      .then((res) => {
        setSpendaleMonth(sumRe - sumEx);
      })
      .catch((err) => {
        throw err;
      });
  }, [sumEx, sumRe]);  
  useEffect(() => {
    axios
      .get(`http://localhost:3001/month/${props.monthID}`)
      .then((res) => {
        setSpendaleMonth(res.data.spendable);
      })
      .catch((err) => {
        throw err;
      });
  }, [props.monthID, props.financial]);

  
  const handleSpendable = () => {
    setInput(false);
    console.log(1);
  };
  const handleNewSpendable = () => {
    setInput(true);
    axios
      .put(`http://localhost:3001/month/${props.monthID}`, {
        id: props.monthID,
        spendable: valueSpend + sumRe - sumEx,
        revenue: sumRe,
        expenditure: sumEx,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        throw err;
      });
    setSpendaleMonth(valueSpend + sumRe - sumEx);
  }
  const handleChangeSpendale = (e) => {
    setValueSpend(parseFloat(e.target.value))
  }
  return (
    <div className="month__statistic">
      <div className="manage__month">
        <div className="month__finance">
          <div className="finance__title">Spendable This Month</div>
          <div className="finance__value">
            <div className="month__value">
              {
                input ? 
                <div className="value__display">{spendableMonth}</div> 
                :<input onChange={handleChangeSpendale} className="value__input" type="text" maxLength="10"/>
              }
            </div>
            <div className="value__currency">
              <button 
                className="btn__price" 
                onClick={input? handleSpendable : handleNewSpendable}
              >
                  {
                    input ? 
                    <BsCartPlus style={{ fontSize: "3rem" }} />
                    : <BsCartCheck style={{ fontSize: "3rem" }} />
                  }
              </button>
            </div>
          </div>
        </div>
        <div className="month__statis">
          <div className="statis__money static__re">
            <div className="statis__title">Revenue</div>
            <div className="statis__value">
              <div className="price__value value__revenue">
                +{sumRe}
                <BsCurrencyDollar style={{ fontSize: "2rem" }} />
              </div>
            </div>
          </div>
          <div className="statis__money static__ex">
            <div className="statis__title">Expenditure</div>
            <div className="statis__value">
              <div className="price__value value__expend">
                -{sumEx}
                <BsCurrencyDollar style={{ fontSize: "2rem" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonthStatistic;
