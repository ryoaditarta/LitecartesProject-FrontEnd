import React from 'react';
import { View, TextInput } from 'react-native';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View className="w-full rounded-10 p-3 border-5 my-2" style={{borderRadius: 30,borderWidth: 3,borderColor: '#8B340D'}} >
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor="#8B340D" // Specify the color for the placeholder text
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;
