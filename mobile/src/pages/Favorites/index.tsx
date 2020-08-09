import React, { useState, useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import {useFocusEffect} from '@react-navigation/native'
import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';

function Favorites() {
    const [favorites, setFavorites] = useState([]);
    function laodFavorites() {
        AsyncStorage.getItem('favorites').then(resp => {
            if(resp) {
                setFavorites(JSON.parse(resp));
            }
        });
    }

    useFocusEffect(
        React.useCallback(() => {
            laodFavorites()
        }, [])
    );

    return (
        <View style={styles.container} >
            <PageHeader title="Meus proffys favoritos"/>

            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}    
            >
                {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem 
                            key={teacher.id} 
                            teacher={teacher}
                            favorited={true} 
                        />)
                })}
            </ScrollView>
        </View>
    )
}

export default Favorites;