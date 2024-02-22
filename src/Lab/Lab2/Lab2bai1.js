import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const class1 = [
  {
    mssv: 'PS0000',
    name: 'Nguyen Van A',
    avgPoint: 8.9,
    avgTraningPoint: 7,
    status: 'pass',
  },
  {
    mssv: 'PS0001',
    name: 'Nguyen Van B',
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: 'pass',
  },
];

const class2 = [
  {
    mssv: 'PS0002',
    name: 'Nguyen Van C',
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: 'failed',
  },
  {
    mssv: 'PS0003',
    name: 'Nguyen Van D',
    avgPoint: 10,
    avgTraningPoint: 10,
    status: 'pass',
  },
  {
    mssv: 'PS0004',
    name: 'Nguyen Van E',
    avgPoint: 10,
    avgTraningPoint: 2,
    status: 'pass',
  },
];

const allstudents = class1.concat(class2).filter(student => student?.status !== 'failed');
const diemcao = allstudents.slice().sort((a, b) => b.avgPoint - a.avgPoint);
const diemrenluyen = allstudents.slice().sort((a, b) => b.avgTraningPoint - a.avgTraningPoint);

let diemcaonhat = null;
let diemcaonhatTong = 0;
let diemcaonhatRenLuyen = 0;

for (let i = 0; i < allstudents.length; i++) {
  const element = allstudents[i];
  const tongDiem = element.avgPoint + element.avgTraningPoint;
  if (tongDiem > diemcaonhatTong || (tongDiem === diemcaonhatTong && element.avgTraningPoint > diemcaonhatRenLuyen)) {
    diemcaonhatTong = tongDiem;
    diemcaonhatRenLuyen = element.avgTraningPoint;
    diemcaonhat = element;
  }
}

const Lab2bai1 = () => {
  const navigation = useNavigation();

  const Bai2 = () => {
    navigation.navigate('Nguyễn Minh Nhựt Lab2 Bài 2');
  };
  const Bai3 = () => {
    navigation.navigate('Nguyễn Minh Nhựt Lab2 Bài 3');
  };

  return (
    <ScrollView>
      <View>
        <Text style={style.text}>Danh sách sinh viên</Text>
        <View style={style.tableRow}>
          <Text style={style.tableHeader}>MSSV</Text>
          <Text style={style.tableHeaderName}>Name</Text>
          <Text style={style.tableHeader}>AvgPoint</Text>
          <Text style={style.tableHeader}>AvgTraningPoint</Text>
          <Text style={style.tableHeader}>Status</Text>
        </View>
        {allstudents.map((student, index) => (
          <View key={index} style={style.tableRow}>
            <Text style={style.tableCell}>{student.mssv}</Text>
            <Text style={style.tableCellName}>{student.name}</Text>
            <Text style={style.tableCell}>{student.avgPoint}</Text>
            <Text style={style.tableCell}>{student.avgTraningPoint}</Text>
            <Text style={style.tableCell}>{student.status}</Text>
          </View>
        ))}

        <View>
          <Text style={style.text}>Danh sách sinh viên theo điểm:</Text>
          <View style={style.tableRow}>
            <Text style={style.tableHeader}>MSSV</Text>
            <Text style={style.tableHeaderName}>Name</Text>
            <Text style={style.tableHeader}>AvgPoint</Text>
            <Text style={style.tableHeader}>AvgTraningPoint</Text>
            <Text style={style.tableHeader}>Status</Text>
          </View>
          {diemcao.map((student, index) => (
            <View key={index} style={style.tableRow}>
              <Text style={style.tableCell}>{student.mssv}</Text>
              <Text style={style.tableCellName}>{student.name}</Text>
              <Text style={style.tableCell}>{student.avgPoint}</Text>
              <Text style={style.tableCell}>{student.avgTraningPoint}</Text>
              <Text style={style.tableCell}>{student.status}</Text>
            </View>
          ))}
        </View>

        <View>
          <Text style={style.text}>Danh sách sinh viên theo điểm rèn luyện:</Text>
          <View style={style.tableRow}>
            <Text style={style.tableHeader}>MSSV</Text>
            <Text style={style.tableHeaderName}>Name</Text>
            <Text style={style.tableHeader}>AvgPoint</Text>
            <Text style={style.tableHeader}>AvgTraningPoint</Text>
            <Text style={style.tableHeader}>Status</Text>
          </View>
          {diemrenluyen.map((student, index) => (
            <View key={index} style={style.tableRow}>
              <Text style={style.tableCell}>{student.mssv}</Text>
              <Text style={style.tableCellName}>{student.name}</Text>
              <Text style={style.tableCell}>{student.avgPoint}</Text>
              <Text style={style.tableCell}>{student.avgTraningPoint}</Text>
              <Text style={style.tableCell}>{student.status}</Text>
            </View>
          ))}
        </View>
        <Text style={style.text}>Ong vàng: <Text style={style.ongvang}>{diemcaonhat ? diemcaonhat.name : 'Không có'}</Text></Text>
        <View style={style.containerbutton}>
          <Button title="Bài 2" onPress={Bai2} style={style.buttona} />
          <Button title="Bài 3" onPress={Bai3} style={style.buttona} />
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  containerbutton: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttona: {
    width: 200,
    height: 100,
    backgroundColor: '#C0C0C0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    textAlign: 'center',
    fontSize: 16,
    padding: 10,
    backgroundColor: '#C0C0C0',
    color: 'red',
    fontWeight: 'bold'
  },
  ongvang: {
    textAlign: 'center',
    fontSize: 16,
    padding: 10,
    backgroundColor: '#C0C0C0',
    color: 'black',
    fontWeight: 'bold'
  },
  tableRow: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tableHeader: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: 10,
    fontSize: 10,
    color: 'blue',
    overflow: 'hidden',
  },
  tableHeaderName: {
    flex: 2,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    color: 'blue',
    overflow: 'hidden',
  },
  tableCell: {
    flex: 1,
    fontSize: 11,
    textAlign: 'center',
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  tableCellName: {
    flex: 2,
    fontSize: 12,
    textAlign: 'center',
    marginHorizontal: 10,
    overflow: 'hidden',
  },
});

export default Lab2bai1;
