import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, TouchableOpacity, Animated, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Book from '../Components/Book';

class Bookshelf extends Component
{
  /* constructor()
    {
        super();

        this.state = { valueArray: [], disabled: false,promptVisible : true }

        this.index = 0;

        this.animatedValue = new Animated.Value(0);
    }

    addMore = () =>
    {
        this.animatedValue.setValue(0);

        let newlyAddedValue = { index: this.index }

        this.setState({ disabled: true, valueArray: [ ...this.state.valueArray, newlyAddedValue ] }, () =>
        {
            Animated.timing(
                this.animatedValue,
                {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                }
            ).start(() =>
            {
                this.index = this.index + 1;
                this.setState({ disabled: false });
            });
        });
    }*/

    render()
    {
      /*  const animationValue = this.animatedValue.interpolate(
        {
            inputRange: [ 0, 1 ],
            outputRange: [ -59, 0 ]
        });

        let newArray = this.state.valueArray.map(( item, key ) =>
        {
            if(( key ) == this.index)
            {
                return(
                  <View>
                    <Book />
                  </View>
                );
            }
            else
            {
                return(
                  /*  <View key = { key } style = { styles.viewHolder }>
                        <Text style = { styles.text }>Row { item.index }</Text>
                    </View>
                    <Book />
                );
            }
        });*/

        return(
           <View style = { styles.container }>
                    <Icon
                      name = "ios-add-circle-outline"
                      style = {styles.btn}
                      disabled = { false }
                      onPress = {() => this.props.navigation.navigate('BookForm')}
                      size = {50}/>
            </View>
        );
    }
}

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        backgroundColor: '#eee',
        justifyContent: 'center',
        paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },

    viewHolder:
    {
        height: 55,
        backgroundColor: '#26A69A',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4
    },

    text:
    {
        color: 'white',
        fontSize: 25
    },

    btn:
    {
        position: 'absolute',
        right: 25,
        bottom: 25,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

export default Bookshelf;
