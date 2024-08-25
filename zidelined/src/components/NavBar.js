// import React from 'react';
// import { View, Text, TouchableOpacity, FlatList } from 'react-native';
// import { ChevronRight, User } from 'lucide-react-native';
// import { useNavigation } from '@react-navigation/native';
// import useUserManagement from '../hooks/useUserManagement'; // Adjust the import path as needed

// const NavBar = ({ links }) => {
//   const navigation = useNavigation();
//   const { user } = useUserManagement();

//   const renderItem = ({ item, index }) => (
//     <View className="flex-row items-center">
//       {typeof item === 'string' ? (
//         <TouchableOpacity onPress={() => navigation.navigate(item)}>
//           <Text className="text-red-300 text-base font-nunito-black">{item}</Text>
//         </TouchableOpacity>
//       ) : (
//         item  // If it's a component like UserLink, render it directly
//       )}
//       {index < links.length - 1 && (
//         <ChevronRight className="mx-2" color="#FCA5A5" size={16} />
//       )}
//     </View>
//   );

//   const renderUserOrRegister = () => (
//     <View className="flex-row items-center">
//       {user && user.username ? (
//         <View className="flex-row items-center">
//           <User color="#FCA5A5" size={16} />
//           <Text className="ml-2 text-red-300 text-base font-nunito-black">
//             {user.username}
//           </Text>
//         </View>
//       ) : (
//         <View className="flex-row justify-center items-center">
//           <ChevronRight className="mx-2" color="#FCA5A5" size={16} />
//           <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//             <Text className="text-red-300 text-base font-nunito-black">Register</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );

//   return (
//     <View className="p-4 border-b border-b-red-300 pb-4">
//       <FlatList
//         data={[...links, renderUserOrRegister]}
//         renderItem={({ item, index }) => 
//           typeof item === 'function' ? item() : renderItem({ item, index })
//         }
//         keyExtractor={(item, index) => index.toString()}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// export default NavBar;































// import React from 'react';
// import { View, Text, TouchableOpacity, FlatList } from 'react-native';
// import { ChevronRight, User } from 'lucide-react-native';
// import { useNavigation } from '@react-navigation/native';
// import useUserManagement from '../hooks/useUserManagement'; // Adjust the import path as needed

// const NavBar = ({ links }) => {
//   const navigation = useNavigation();
//   const { user } = useUserManagement();

//   const renderItem = ({ item, index }) => (
//     <View className="flex-row items-center">
//       {typeof item === 'string' ? (
//         <TouchableOpacity onPress={() => navigation.navigate(item)}>
//           <Text className="text-red-300 text-base font-nunito-black">{item}</Text>
//         </TouchableOpacity>
//       ) : (
//         item  // If it's a component like UserLink, render it directly
//       )}
//       {index < links.length - 1 && (
//         <ChevronRight className="mx-2" color="#FCA5A5" size={16} />
//       )}
//     </View>
//   );

//   const renderUserOrRegister = () => (
//     <View className="flex-row items-center">
//       {user ? (
//         <View className="flex-row items-center">
//           <User color="#FCA5A5" size={16} />
//           <Text className="ml-2 text-red-300 text-base font-nunito-black">{user.username}</Text>
//         </View>
//       ) : (
//         <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//           <Text className="text-red-300 text-base font-nunito-black">Register</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );

//   return (
//     <View className="p-4 border-b border-b-red-300 pb-4">
//       <FlatList
//         data={[...links, renderUserOrRegister]}
//         renderItem={({ item, index }) => 
//           typeof item === 'function' ? item() : renderItem({ item, index })
//         }
//         keyExtractor={(item, index) => index.toString()}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// export default NavBar;







import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = ({ links }) => {
  const navigation = useNavigation();

  const renderItem = ({ item, index }) => (
    <View className="flex-row items-center">
      {typeof item === 'string' ? (
        <TouchableOpacity onPress={() => navigation.navigate(item)}>
          <Text className="text-red-300 text-base font-nunito-black">{item}</Text>
        </TouchableOpacity>
      ) : (
        item  // If it's a component like UserLink, render it directly
      )}
      {index < links.length - 1 && (
        <ChevronRight className="mx-2" color="#FCA5A5" size={16} />
      )}
    </View>
  );

  return (
    <View className="p-4 border-b border-b-red-300 pb-4">
      <FlatList
        data={links}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default NavBar;












// import React from 'react';
// import { View, Text, TouchableOpacity, FlatList } from 'react-native';
// import { ChevronRight } from 'lucide-react-native';
// import { useNavigation } from '@react-navigation/native';

// const NavBar = ({ links }) => {
//     const navigation = useNavigation();
//     const renderItem = ({ item, index }) => (
//         <View className="flex-row items-center">
//             <TouchableOpacity onPress={() => navigation.navigate(item)}>
//             <Text className="text-red-300 text-base font-nunito-black">{item}</Text>
//             </TouchableOpacity>
//             {index < links.length - 1 && (
//             <ChevronRight className="mx-2" color="#FCA5A5" size={16} />
//             )}
//         </View>
//     );



//   return (
//     <View className="p-4 border-b border-b-red-300 pb-4">
//       <FlatList
//         data={links}
//         renderItem={renderItem}
//         keyExtractor={(item) => item}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// export default NavBar;



        // <View className="flex-row items-center border border-red-300 mx-2 p-2 rounded">
        //   <Text className="text-slate-300 text-base font-nunito-light uppercase">{item}</Text>
        //   {index < links.length - 1 && (
        //     <ChevronRight className="mx-2" color="#E879F9" size={16} />
        //   )}
        // </View>