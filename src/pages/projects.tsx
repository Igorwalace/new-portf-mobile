import React, { useEffect, useState } from 'react'
import { Image, Linking, Modal, ScrollView, TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'

//firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from '../services/firebaseConfig';

//icons
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

interface Projects {
    id: string
    GitHub: string
    Technologies_used: string
    about: string
    banner?: string
    gif?: string
    imgUrl: string
    summary: string
    title: string
    url: string
}

const Projects = () => {

    const [allProjects, setAllProjects] = useState<Projects[]>([])
    const [projectCurrent, setProjectCurrent] = useState<any>([])
    const [isModal, setIsModal] = useState(false)
    const loading = [1, 2, 3, 4, 5, 6, 7, 8]

    useEffect(() => {
        const bancoProject = async () => {
            const querySnapshot = await getDocs(collection(db, "projetos"));
            const AllProjects: any = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setAllProjects(AllProjects)
        }
        bancoProject()
    }, [])

    const handleModalProject = (project: Projects) => {
        setProjectCurrent(project)
        setIsModal(true)
    }

    return (
        <>
            <View className='' >
                <Text className='text-white text-base' >Meus Projetos</Text>
                <View className='py-5 flex-row flex-wrap gap-4 items-center justify-start' >
                    {
                        allProjects.length < 1 &&
                        loading
                            .slice(0, 5)
                            .map((number: number) => (
                                <View key={number} className='bg-white w-[45%] items-center justify-center ml-4 my-1 h-[100px] rounded-xl'></View>
                            ))
                    }
                    {
                        allProjects.map((project, index) => (
                            <TouchableOpacity
                                onPress={() => handleModalProject(project)}
                                key={index}
                                className='relative flex-row' >
                                <Image
                                    className='h-[110px] min-w-[45%] rounded-xl opacity-50'
                                    source={{ uri: project.imgUrl }}
                                />
                                <View className='items-center absolute bottom-2 left-0 right-0' >
                                    <Text className='text-white text-2xl font-extrabold' >{project.title}</Text>
                                    <Text className='text-white text-xs font-semibold' >{project.summary}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>

            <Modal
                visible={isModal}
                animationType="slide"
                transparent
            >
                <View className='h-full items-end' style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} >
                    <TouchableOpacity onPress={() => { setIsModal(false) }} className='h-full w-full absolute top-0'></TouchableOpacity>
                    <ScrollView className='w-[70%] h-full bg-[#101B35] z-10 py-5 px-5' >

                        <View className='flex-row justify-between' >
                            <TouchableOpacity className='flex-row justify-between' onPress={() => { setIsModal(false) }} ><AntDesign name="arrowleft" size={24} color="white" /></TouchableOpacity>
                            <TouchableOpacity className='flex-row gap-2 items-center justify-center' activeOpacity={0.8} onPress={() => { Linking.openURL(projectCurrent.url) }} >
                                <Text className='text-white text-xl' >Projeto</Text>
                                <Feather name="external-link" size={20} color="white" />
                            </TouchableOpacity>
                        </View>

                        <View className='border-y-[1px] my-5 py-2 border-white' >
                            <Text className='text-white text-xl text-center' >{projectCurrent.title}</Text>
                        </View>

                        <View className='mb-5' >
                            <Text className='text-white text-base' >Sobre</Text>
                            <Text className='text-[#7587A8] text-sm' >{projectCurrent.about}</Text>
                        </View>

                        <View>
                            <Image
                                className='min-h-[100px] rounded-xl'
                                style={{ width: '100%', resizeMode: 'cover' }}
                                source={{ uri: projectCurrent.imgUrl }}
                            />
                        </View>

                        <View className='my-5' >
                            <Text className='text-white text-base' >Site</Text>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => { Linking.openURL(projectCurrent.url) }} ><Text className='text-[#7587A8] text-sm underline' >{projectCurrent.url}</Text></TouchableOpacity>
                        </View>

                        <View className='mb-5' >
                            <Text className='text-white text-base' >Tecnologiad Usadas</Text>
                            <Text className='text-[#7587A8] text-sm' >{projectCurrent.Technologies_used}</Text>
                        </View>

                        <View className='mb-5' >
                            <Text className='text-white text-base' >Código</Text>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => { Linking.openURL(projectCurrent.GitHub) }} ><Text className='text-[#7587A8] text-sm underline' >{projectCurrent.GitHub}</Text></TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </Modal>
        </>
    )
}

export default Projects