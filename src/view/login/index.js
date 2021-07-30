import React, { useState } from 'react';
import { Text, View, StatusBar, Image } from 'react-native';
import pxToDp from '../../utils/PixelRatio';
import { Input } from 'react-native-elements';
import THButton from '../../public/THButton';
import validator from '../../utils/validator'
import { setLocalStorage, getLocalStorage } from '../../utils'
import { post } from '../../api'
import { ACCOUNT_VALIDATEVCODE, ACCOUNT_LOGIN } from "../../api/pathMap";
// 手机号码输入
const RenLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneValid, setPhonerVaild] = useState(true);

  // 设置电话号码
  const phoneChangeText = (value) => {
    setPhoneNumber(value)
  };
  const phoneNumberSubmitEditing = async () => {
    const phoneValidator = validator.validatePhone(phoneNumber);

    // 校验手机号码是否合法
    if (!phoneValidator) {
      // 没通过展示错误信息
      setPhonerVaild(phoneValidator)
      return;
    }
    // const res = await post(ACCOUNT_LOGIN, {
    //   phone: phoneNumber
    // })
    // if (res.code === '1000') {
    //   props.setShowLogin(true)
    // }
  }
  return (
    <View >
      <Text style={{ fontSize: pxToDp(25), color: '#888', fontWeight: 'bold' }}>
        手机号登录注册
      </Text>
      <View style={{ marginTop: pxToDp(25) }}>
        <Input
          placeholder="请输入手机号码"
          maxLength={11}
          keyboardType="phone-pad"
          value={phoneNumber}
          inputStyle={{ color: '#333' }}
          onChangeText={phoneChangeText}
          errorMessage={phoneValid ? "" : '手机号码不正确'}
          onSubmitEditing={phoneNumberSubmitEditing}
          leftIcon={{ type: 'font-awesome', name: 'phone', color: "#ccc", size: pxToDp(20) }}
        />
      </View>
      {/* 渐变按钮  */}
      <View>
        <THButton onPress={phoneNumberSubmitEditing} style={{ width: "85%", alignSelf: "center", height: pxToDp(40), borderRadius: pxToDp(20) }}>获取验证码</THButton>
      </View>
    </View>
  )
}
// 获取验证码
const RenCode = () => {
  return (
    <View>
      <Text>
        djkdk
      </Text>
    </View>
  )
}



const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <View>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Image
        style={{
          width: "100%",
          height: pxToDp(220),
        }}
        source={
          require("../../res/profileBackground.jpg")
        }
      />
      <View style={{ padding: pxToDp(20) }}>
        {
          showLogin ? <RenLogin /> : <RenCode />
        }
      </View>
    </View >
  );
};

export default Login;
