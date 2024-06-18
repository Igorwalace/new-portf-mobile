import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView } from 'react-native';

//pages
import Header from './header';
import About from './about';
import Projects from './projects';
import Contact from './contact';

export default function Home() {
    return (
        <ScrollView className={`h-full bg-[#101B35] px-10 py-7 ${Platform.OS ? 'pt-10' : 'pt-7'}`} >
            <StatusBar style="light" backgroundColor='#101B35' />
            <Header />
            <About />
            <Projects />
            <Contact />
        </ScrollView>
    );
}
