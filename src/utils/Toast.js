
import  React  from "react";
import { ActivityIndicator } from "react-native";
import { Toast, Theme } from "teaset";


let customKey = null;

Toast.showLoading = (text)=>{
  if (customKey) return;
   customKey = Toast.show({
    text, // 弹窗文字
    icon: <ActivityIndicator size='large' color={Theme.smile} />,
    position: 'center',
    duration: 3000,
  });
}

Toast.hideLoading = ()=>{
  if (!customKey) return;
  Toast.hide(customKey);
  customKey = null;
}


export default Toast