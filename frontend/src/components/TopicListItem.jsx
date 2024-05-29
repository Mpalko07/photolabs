import React from "react";
import PropTypes from "prop-types";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ label }) => {
  return <div className="topic-list__item">{label}</div>;
};

TopicListItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TopicListItem;