import React, {useState, useEffect} from 'react'
import {View, Text, Picker} from 'react-native'

export default () => {
    const pizzas = [
        {id: 1, name: 'Calabresa', price: 35.90},
        {id: 2, name: 'Quatro Queijos', price: 30.90},
        {id: 3, name: 'Margherita', price: 34.90},
        {id: 4, name: 'Portuguesa', price: 25.90},
    ]
    const [pizza, setPizza] = useState(pizzas[0].id)

    return (
        <View>
            <Picker
                //Picker.Item que é para ser mostrado baseado no value
                selectedValue={pizza}
                //Função que deve ser feita sempre que clicar em um novo Picker.Item
                onValueChange={value => setPizza(value)}
            >
                {pizzas.map(value => <Picker.Item key={value.id} value={value.id} label={value.name} />)}
            </Picker>
            
            {
                pizzas.map(value => {
                    if(value.id == pizza)
                        return (
                            <View key={value.id}>
                                <Text >Pizza de {value.name}</Text>
                                <Text>R$: {value.price.toFixed(2)}</Text>
                            </View>
                        )
                })
            }
        </View>
    )
}