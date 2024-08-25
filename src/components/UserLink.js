import React from 'react';
import { TouchableOpacity } from 'react-native';
import { UserCog } from 'lucide-react-native';

const UserLink = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <UserCog color="#94A3B8" size={24} className="mr-2"/>
    </TouchableOpacity>
  );
};

export default UserLink;
