import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

const Contact = () => {
    return (
        <View className='py-8 pb-14' >
            <Text className='text-white text-base' >Deseja entrar em contato comigo?</Text>
            <Text className='text-[#7587a8] py-1 text-[13px]' >Você pode me mandar uma mensagem em umas das redes, ou me enviar um email abaixo.</Text>
            <View className='py-5 space-y-3' >
                <TextInput
                    className='border-[1px] border-[#7587A8] text-white p-3 pt-1 rounded-xl'
                    placeholder='nome'
                    placeholderTextColor='#7587A8'
                    editable={false}
                />
                <TextInput
                    className='border-[1px] border-[#7587A8] text-white p-3 pt-1 rounded-xl'
                    placeholder='email'
                    placeholderTextColor='#7587A8'
                    editable={false}
                />
                <TextInput
                    className='border-[1px] min-h-[80px] border-[#7587A8] text-white p-3 pt-0 rounded-xl'
                    placeholder='digite sua mensagem'
                    placeholderTextColor='#7587A8'
                    editable={false}
                />
                <TouchableOpacity className='p-2' activeOpacity={0.6} disabled ><Text className='text-[#7587A8] text-center' >Enviar</Text></TouchableOpacity>
            </View >
        </View>
    )
}

export default Contact