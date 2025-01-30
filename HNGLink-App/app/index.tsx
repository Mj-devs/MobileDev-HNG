import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

export default function Index(){
    return (
        <View className="flex-1 justify-center items-center bg-gradient-to-b from-blue-400 to-purple-500 px-6">
            <View className="bg-white p-6 rounded-2xl shadow-lg items-center w-full max-w-sm">
                <Text className="text-2xl font-extrabold text-gray-800 mb-6 text-center">
                    Welcome to MobileDev-HNG
                </Text>
                <TouchableOpacity
                    className="bg-blue-600 w-full py-3 rounded-xl shadow-md mb-4 flex items-center justify-center"
                    onPress={() => Linking.openURL('https://github.com/Mj-devs/MobileDev-HNG')}
                >
                    <Text className="text-white text-lg font-semibold">View GitHub Repo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="bg-purple-600 w-full py-3 rounded-xl shadow-md flex items-center justify-center"
                    onPress={() => Linking.openURL('https://hng.tech/hire/react-native-developers')}
                >
                    <Text className="text-white text-lg font-semibold">Visit HNG Hire React-Native Devs</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

