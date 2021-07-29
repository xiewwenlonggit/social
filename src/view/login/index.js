import React, { useState, useMemo } from 'react';
import { Text, View } from 'react-native';
import pxToDp from '../../utils/PixelRatio';
import { Input } from 'react-native-elements';
import THButton from '../../public/THButton';
const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneChangeText = () => {
    console.log(1232);
  };
  const phoneNumberSubmitEditing = () => {
    console.log(22)
  }
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text style={{ fontSize: pxToDp(25), color: '#888', fontWeight: 'bold' }}>
          手机号登录注册
        </Text>
      </View>
      <View style={{ marginTop: pxToDp(25) }}>
        <Input
          placeholder="请输入手机号码"
          maxLength={11}
          keyboardType="phone-pad"
          value={phoneNumber}
          inputStyle={{ color: '#333' }}
          onChangeText={phoneChangeText}
          errorMessage={'手机号码不正确'}
          leftIcon={{
            type: 'font-awesome',
            name: 'phone',
            color: '#ccc',
            size: pxToDp(20),
          }}
        />
      </View>
      {/* 渐变按钮  */}
      <View>
        <THButton onPress={phoneNumberSubmitEditing} style={{ width: "85%", alignSelf: "center", height: pxToDp(40), borderRadius: pxToDp(20) }}>获取验证码</THButton>
      </View>
    </View >
  );
};

export default Login;
