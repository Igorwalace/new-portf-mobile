import { Linking, Text, View } from 'react-native';

//icons
import AntDesign from '@expo/vector-icons/AntDesign';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View>
            <View className='gap-2' >
                <Text className='text-2xl text-white font-extrabold' >Igor Wallace</Text>
                <View>
                    <Text className='text-[#e5e7eb]' >Desenvolvedor Front-End</Text>
                    <Text className='text-sm text-[#7587a8]' >Dou vida à projetos, construindo coisas legais na internet.</Text>
                </View>
            </View>
            <View className='flex-row pt-5 gap-4' >
                <AntDesign
                    onPress={() => { Linking.openURL('https://github.com/Igorwalace') }}
                    name="github"
                    size={32}
                    color="#7587a8" />

                <AntDesign
                    onPress={() => { Linking.openURL('https://www.linkedin.com/in/igor-wallace-03b9482a7/') }}
                    name="linkedin-square"
                    size={32}
                    color="#7587a8" />

                <MaterialIcons
                    onPress={() => { Linking.openURL('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=igorwallacy3@gmail.com') }}
                    name="email"
                    size={32}
                    color="#7587a8" />
                    
                <AntDesign
                    onPress={() => { Linking.openURL('https://www.instagram.com/igor_walace/') }}
                    name="instagram"
                    size={32}
                    color="#7587a8" />
            </View>
        </View>
    );
}
