import React from 'react';
import { View, Text, Image } from 'react-native';
import { SetPropTypes, CardPropTypes } from './propTypes'; // Adjust the import path as needed

const SetComponent = ({ set }) => {
  return (
    <View>
      <Text>{set.title}</Text>
      <Text>{set.description}</Text>
      <Text>Number of cards: {set.cards}</Text>
      {set.image && <Image source={set.image} />}
    </View>
  );
};

SetComponent.propTypes = {
  set: SetPropTypes.isRequired
};

const CardComponent = ({ card }) => {
  return (
    <View>
      <Text>Question: {card.question}</Text>
      <Text>Answer: {card.answer}</Text>
      {card.image && <Image source={card.image} />}
    </View>
  );
};

CardComponent.propTypes = {
  card: CardPropTypes.isRequired
};

export { SetComponent, CardComponent };