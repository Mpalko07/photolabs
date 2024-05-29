import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = ({ topics }) => {
  return (
    <ul className="topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          id={topic.id}
          label={topic.label}
        />
      ))}
    </ul>
  );
};

export default TopicList;