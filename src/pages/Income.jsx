import React from "react";

export default function Income() {
  return (
    <>
      <div className="dash-welcome-div income-div">
        <div className="dash-welcome-info">
          <div className="dash-welcome-label">Income</div>
          <div className="dash-income-label">
            Last <span className="thirty-days">30 days</span>
          </div>
          <div className="dash-income">$2,260</div>
        </div>
      </div>
      <div className="income-main-div">
        <div className="income-chart">
          <img src="/src/images/income-chart.png" />
        </div>
        <div className="transaction-div">
          <div className="transaction-label">Your transactions(3)</div>
          <div className="transaction-days">
            Last <span className="thirty-days">30 days</span>
          </div>
        </div>
        <div className="transaction-photo-div">
          <img className="transaction-photo" src="/src/images/transaction-1.png" />
          <img className="transaction-photo" src="/src/images/transaction-2.png" />
          <img className="transaction-photo" src="/src/images/transaction-3.png" />
        </div>
      </div>
    </>
  );
}
