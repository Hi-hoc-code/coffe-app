import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

function App() {
  const players = [
    { name: 'Messi', goals: 30 },
    undefined,
    { name: 'Ronaldo', goals: 28 },
    { name: 'Neymar', goals: 22 },
    { goals: 2 },
    { name: 'Mbappé', goals: 25 },
    { name: 'Pele', goals: null },
  ];
  let cauthu = [];
  let goalsMax = 0;
  let sum = 0;
  let bestPlayer;
  for (let index = 0; index < players.length; index++) {
    const element = players[index];
    if (element == undefined || element.name == undefined || element.goals == undefined || element.goals == null) {
      continue;
    }
    if (element.goals > goalsMax) {
      goalsMax = element.goals;
      bestPlayer = element.name;
    }
    cauthu.push(element);
    sum = sum + element.goals;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}><Text style={styles.name}>HỒ NGỌC Ý- PS35594</Text></View>
      <View style={styles.tableContainer}>
        <FlatList
          data={cauthu}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>
                {item.name}
              </Text>
              <Text style={styles.tableCell}>
                {item.goals} bàn thắng
              </Text>
            </View>
          )}
        />
      </View>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>
          Tổng số bàn thắng được ghi là : {sum}
        </Text>
        <Text style={styles.summaryText}>
          Cầu thủ ghi được nhiều bàn thắng nhất là {bestPlayer} với {goalsMax} bàn thắng !
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  name: {
    color:'red',
    fontSize:20,
    fontWeight:'400'
  },
  tableContainer: {
    flex: 1,
  },
  tableRow: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tableCell: {
    flex: 1,
    marginHorizontal: 10,
  },
  summaryContainer: {
    padding: 20,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
export default App;