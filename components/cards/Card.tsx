import React from 'react';

interface ICard {
  title: string;
}
const Card: React.FC<ICard> = ({ title }) => {
  return <div>{title}</div>;
};

export default Card;
