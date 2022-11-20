import React, { useEffect, useState } from "react";
import { BsGridFill, BsLayoutTextWindow } from "react-icons/bs";
import User from "../../pages/user/User";
import "./Expenditure.css";
import Manage from "./manage/Manage";

function Expenditure() {
  const featureTabs = [
    {
      tabIcon: <BsLayoutTextWindow />,
      tabName: "Manage",
    },
    {
      tabIcon: <BsGridFill />,
      tabName: "Articles",
    },
  ];
  const [title, setTitle] = useState("Untitled");
  const [tabActive, setTabActive] = useState("Manage");
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <User>
      <div id="spends">
        <div className="feature__nav">
          <div className="feature__tab">
            {featureTabs.map((tab) => {
              return (
                <div
                  key={tab.tabName}
                  className={
                    tab.tabName === tabActive ? "tab__item active" : "tab__item"
                  }
                  onClick={() => {
                    setTabActive(tab.tabName);
                  }}
                >
                  <div className="tab__icon">{tab.tabIcon}</div>
                  <div className="tab__name">{tab.tabName}</div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Tab */}
        <div className="tab__content">
          <Manage />
        </div>
      </div>
    </User>
  );
}

export default Expenditure;
