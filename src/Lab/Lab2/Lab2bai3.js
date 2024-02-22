import { View, Text ,Image} from 'react-native';
import React, { useEffect} from 'react';

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 2000);
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Error: some bug');
  }, 2000);
});

const getList = async () => {
  const response = await fetch(
    'https://64d8a86c5f9bf5b879ce6dd9.mockapi.io/api/v1/moviesNow'
  );
  const data = await response.json();
  return data;
};

const Lab2bai3 = () => {
  useEffect(() => {
    Promise.all([firstPromise, secondPromise])
      .then((results) => {
        console.log('Thành công:', results);
      })
      .catch((error) => {
        console.error('Lỗi:', error);
      });

    Promise.allSettled([firstPromise, secondPromise, getList()])
      .then((results) => {
        console.log('Kết quả:', results);
      })
      .catch((error) => {
        console.error('Lỗi:', error);
      })
      .finally(() => {
        console.log('Đã hoàn thành tất cả Promise');
      });
  }, []);

  return (
    <View>
      <Text>Chờ đợi là hạnh phúc...</Text>
      <Image source={require('../../image/anhcho.jpg')} 
            style={{ margin:10,padding:10,width: 340, height: 600 }}
             resizeMode="cover" />
    </View>
  );
};

export default Lab2bai3;
