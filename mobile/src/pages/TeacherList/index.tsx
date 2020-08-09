import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';

function TeacherList() {

    const [isFiltersVisible, setisFiltersVisible] = useState(false);
    const [favorites, setFavorites] = useState<number[]>([])
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    const [teachers, setTeachers] = useState([]);

    function handleToggleFiltersVisible() {
        setisFiltersVisible(!isFiltersVisible)
    }
    
    async function handleFiltersSubmit() {
        const response = await api.get('/classes', {
            params: {
                subject, week_day, time,
            },
        });
        setTeachers(response.data);
        setisFiltersVisible(false)
    }

    useEffect(() => {
        AsyncStorage.getItem('favorites').then(resp => {
            if(resp) {
                const favoritedTeachersIds = JSON.parse(resp).map((teacher: Teacher) => {
                    return teacher.id
                })
                setFavorites(favoritedTeachersIds);
            }
        });
    }, [teachers]);

    return (
        <View style={styles.container} >
            <PageHeader 
                title="Proffys disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible} >
                        <Feather name="filter" size={20} color="#fff"/>
                    </BorderlessButton>
                )}>
                { isFiltersVisible && (
                <View style={styles.searchForm}>
                    <Text style={styles.label} >Matéria</Text>
                    <TextInput 
                        placeholderTextColor="#c1bccc" 
                        value={subject}
                        onChangeText={text => setSubject(text)}
                        style={styles.input} 
                        placeholder="Qual a matéria?" />
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label} >Dia da semana</Text>
                            <TextInput 
                                value={week_day}
                                onChangeText={text => setWeekDay(text)}
                                placeholderTextColor="#c1bccc" 
                                style={styles.input} 
                                placeholder="Qual o dia?" />
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label} >Horário</Text>
                            <TextInput 
                                value={time}
                                onChangeText={text => setTime(text)}
                                placeholderTextColor="#c1bccc"
                                style={styles.input} 
                                placeholder="Qual horário?" />
                        </View>
                    </View>

                    <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
                </View>
                )}
                
            </PageHeader>

            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}    
            >   
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem 
                            key={teacher.id} 
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)} 
                        />)
                })}
            </ScrollView>
        </View>
    )
}

export default TeacherList;