import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View sclassName='flex-1'>
      <View className='flex-row bg-slate-800'>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tab,
              activeTab === index && styles.activeTab,
            ]}
            onPress={() => setActiveTab(index)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === index && styles.activeTabText,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View className='p-4'>
        {tabs[activeTab].content}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
  },
  tab: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#FCA5A5',
    // borderTopWidth: 2,
    // borderTopColor: '#000',
  },
  tabText: {
    color: '#888',
  },
  activeTabText: {
    color: '#FCA5A5',
    fontWeight: 'bold',
  },
  contentContainer: {
//    padding: 16,
  },
});

export default Tabs;
