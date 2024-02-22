import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Lab3bai1 = () => {
  const colorText = (color) => ({
    color: color,
  });

  const sizeText = (size) => ({
    fontSize: size,
  });

  const styleText = (styles) => ({
    ...styles,
  });

  return (
    <View style={styles.container}>
      {/* line 1 */}
      <Text style={styles.baseText}>
        Em vào đời bằng {''}
        <Text style={[styles.boldText, colorText('red')]}> vang đỏ </Text>
        anh vào đời bằng {''}
        <Text style={[styles.boldText, colorText('yellow')]}> nước trà </Text>
      </Text>
      {/* line 2 */}
      <Text style={styles.baseText}>
        Bằng cơn mưa thơm {''}
        <Text style={[styles.boldText, sizeText(20), styles.italicText]}>
          mùi đất {''}
        </Text>
        và {''}
        <Text style={[sizeText(10), styles.italicText]}> bằng hoa dại mọc trước nhà {''}</Text>
      </Text>
      {/* line 3 */}
      <Text style={[styles.baseText, styles.italicText, styles.boldText, colorText('gray')]}>
        Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
      </Text>
      {/* line 4 */}
      <Text style={styles.baseText}>
        Lý trí em là {''}
        <Text
          style={styleText({
            textDecorationLine: 'underline',
            letterSpacing: 20,
            fontWeight: 'bold',
          })}
        >
          công cụ {''}
        </Text>
        còn trái tim anh là
        <Text
          style={styleText({
            textDecorationLine: 'underline',
            letterSpacing: 20,
            fontWeight: 'bold',
          })}
        >
          động cơ {''}
        </Text>
      </Text>
      {/* line 5 */}
      <Text style={[styles.baseText, styleText({ textAlign: 'right' })]}>
        Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
      </Text>
      {/* line 6 */}
      <Text
        style={[
          styles.baseText,
          styleText({
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'orange',
          }),
        ]}
      >
        Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình
      </Text>
      {/* line 7 */}
      <Text
        style={[
          styles.baseText,
          styleText({
            fontWeight: 'bold',
            color: 'black',
          }),
        ]}
      >
        Em vào đời bằng
        <Text style={colorText('white')}> mây trắng </Text>
        em vào đời bằng
        <Text style={colorText('yellow')}> nắng xanh </Text>
      </Text>
      {/* line 8 */}
      <Text
        style={[
          styles.baseText,
          styleText({
            fontWeight: 'bold',
            color: 'black',
          }),
        ]}
      >
        Em vào đời bằng
        <Text style={colorText('yellow')}> đại lộ </Text>
        và con đường đó giờ
        <Text style={colorText('white')}> vắng anh </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    padding: 15,
  },
  baseText: {
    fontFamily: 'Cochin',
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  italicText: {
    fontStyle: 'italic',
  },
});

export default Lab3bai1;
