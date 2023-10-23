import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const data = [
  {
    title: 'DEVELOPED BY',
    data: ['CHARIZ BACO'],
  },
  {
    title: 'FRONT END ',
    data: ['SectionList 2'],
  },
  {
    title: 'BACK END',
    data: ['SectionList 3'],
  },
];

const SectionListComponent = () => {
  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>{title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  sectionHeader: {
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SectionListComponent;
