import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';


const TopicList = ({ topics, onTopicClick }) => {
  return (
    <ul className="topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} label={topic.title} onClick={() => onTopicClick(topic.id)} />
      ))}
    </ul>
  );
};

export default TopicList;