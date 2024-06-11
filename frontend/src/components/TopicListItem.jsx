import React from "react";
import PropTypes from "prop-types";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ label, onClick }) => {
  return (
    <li className="topic-list__item" onClick={onClick}>
      {label}
    </li>
  );
};

TopicListItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TopicListItem;