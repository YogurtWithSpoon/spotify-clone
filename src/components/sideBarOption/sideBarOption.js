import React from "react";
import "./sideBarOption.scss";

function sideBarOption({ Icon, title }) {
  return (
    <div className="sidebarOption" style={Icon && {height: '20px'}}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h4 className="sidebarOption__menuitem">{title}</h4>
      ) : (
        <p className="sidebarOption__category">{title}</p>
      )}
    </div>
  );
}

export default sideBarOption;
