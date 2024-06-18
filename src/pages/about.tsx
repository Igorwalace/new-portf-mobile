import { View, Text } from 'react-native'

const About = () => {
    return (
        <View className='my-8' >
            <Text className='text-base text-white font-normal' >Sobre mim</Text>
            <Text className='text-[#7587a8] py-2 text-left'>
                meu nome é <Text className='text-white' >Igor Wallace</Text>, tenho 18 anos. apaixonado por
                tecnologia e por dar a vida a projetos. em 2023, decidi me
                tornar desenvolvedor, motivado por várias sugestões do <Text className='text-white' >meu pai</Text>. desde
                então, tenho me dedicado, buscando aprimorar meus conhecimentos e
                habilidades na área.
            </Text>
            <Text className='text-[#7587a8] py-2 text-left'>
                hoje, me encontro com mais de 1 ano de experiência na área de
                Desenvolvedor. apesar da pouca experiência, já possuo projetos
                pessoais que demonstram ainda mais meus <Text className='text-white' >conhecimentos</Text>.
            </Text>
            <Text className='text-[#7587a8] py-2 text-left'>
                quando não estou na frente da tela do computador, você pode me
                encontrar estudando <Text className='text-white' >Inglês</Text> (de forma independente), <Text className='text-white' >jogando</Text> ou
                até mesmo <Text className='text-white' >bagunçando meu quarto.</Text>
            </Text>
            <Text className='text-[#7587a8] py-2 text-left'>
                se você possui <Text className='text-white' >alguma ideia,</Text> algum projeto para tirar do papel
                ou deseja apenas me avisar um olá, estou <Text className='text-white' >sempre</Text> aberto á 
                <Text className='text-white' > conversas</Text>.
            </Text>
        </View>
    )
}

export default About