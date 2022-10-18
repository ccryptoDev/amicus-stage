import React from "react";
import { Link } from "react-router-dom";
import { Chevron } from "../../../../atoms/Icons/SvgIcons/Chevron";
import { TabsMobileWrapper as Wrapper } from "./styles";

const Tabs = ({
  activeRoute,
  tabs,
  tabName,
}: {
  activeRoute: string;
  tabs: any[];
  tabName: string;
}) => {
  return (
    <Wrapper className="tabs-wrapper-mobile">
      <button type="button">
        <span>{tabName}</span> <Chevron color="#0071CE" />
      </button>
      <div className="dropmenu">
        {tabs.map(({ text, route }) => (
          <Link
            key={text}
            to={route}
            className={`${activeRoute === route ? "active" : ""} tabs-button`}
          >
            {text}
          </Link>
        ))}
      </div>
    </Wrapper>
  );
};

export default Tabs;
