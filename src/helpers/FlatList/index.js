import React from 'react'
import {View, Text, FlatList} from 'react-native'
import {Card, CardText} from './styled'

export default () =>
{
    const devs = [
        {id: '1', name: 'Luan', age: 19, stack: 'front-end web and mobile'},
        {id: '2', name: 'Cristiano', age: 21, stack: 'full-stack'},
        {id: '3', name: 'Guilherme', age: 19, stack: 'back-end'},
        {id: '4', name: 'Wesley', age: 24, stack: 'designer'},
        {id: '5', name: 'Dionatan', age: 21, stack: 'front-end web'},
        {id: '6', name: 'Diego', age: 30, stack: 'back-end'},
        {id: '7', name: 'Aldair', age: 24, stack: 'front-end'},
    ]

    return (
        <View>
            {/* 
                Flat List apenas renderiza o que esta na tela, assim
                diminui o processamento do celular.
            */}  
            <FlatList 
                data={devs}
                keyExtractor={devs => devs.id}
                renderItem={devs => <Devs data={devs} />} 
            />
        </View>
    )
}

const Devs = (props) => 
{
    const dev = props.data.item

    return (
        <Card>
            <CardText>Name: {dev.name}</CardText>
            <CardText>Age: {dev.age}</CardText>
            <CardText>Stack: {dev.stack}</CardText>
        </Card>
    )
}
