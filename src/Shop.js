import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreators} from "./state/index"

const Shop = () => {
  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
      <b>Update Balance</b>
      <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
      <br/>
      <h6 className="mt-2">*User will be able to deposit or withdraw 💲100 by clicking on + or - button respectively. </h6>
    </div>
  );
};

export default Shop;
