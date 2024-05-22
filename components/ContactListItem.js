import { View, Text,StyleSheet,Image,TouchableHighlight } from 'react-native'
import React from 'react'
import {TouchableOpacity } from 'react-native-web'
import colors from '../utility/colors'
import PropTypes from 'prop-types';

const ContactListItem = ({
    name, avatar, phone, onPress
}) => {   
  return (
    <TouchableHighlight style={[styles.container]} onPress={onPress} underlayColor={colors.grey}>
        <View>
            <View style={styles.contactInfo}>
                <Image style={styles.avatar} width={20} height={20} source={{uri:avatar}}></Image>
                <View style={styles.details}>
                    <Text style={[styles.title]}>{name}</Text>
                    <Text style={styles.subtitle}>{phone}</Text>
                </View>
            </View>
        </View>
    </TouchableHighlight>
  )
}

export default ContactListItem

ContactListItem.propTypes = {
    name: PropTypes.string,
    avatar:PropTypes.string,
    phone: PropTypes.string,
    onPress:PropTypes.func,
}
const styles = StyleSheet.create({
    container:{
        paddingLeft:24,
    },
    contactInfo:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingTop:16,
        paddingBottom:16,
        paddingRight:24,
        borderBottomColor:colors.grey,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    avatar:{
        borderRadius:22,
        width:44,
        height:44,
    },
    details:{
        justifyContent:'center',
        flex:1,
        marginLeft:20
    },
    title:{
        color:colors.blue,
        fontWeight:'bold',
        fontSize:16,
    },
    subtitle:{
        color:colors.blue,
        fontSize:15,
        marginTop:4,
    }
    
})