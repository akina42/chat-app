import React from 'react';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default class SignUp extends React.Component{
    state = {
        email: '',
        password: '',
        errorMessage: null
    }

    handleSignUp = () => {
        // TODO - Firebase
    }

    render () {
        return(
            <View style={styles.container}>
                <Text>Cadastre-se</Text>
                {this.state.errorMessage && 
                    <Text style={{color : 'red'}}>
                        {this.state.errorMessage}
                    </Text>}
                <TextInput placeholder='Email'
                    autocapitalize='none'
                    style = {styles.textInput}
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}/>
                <Button title="Cadastrar" onPress={this.handleSignUp}/>
                <Button title="Ja possui uma conta? Faca o login"
                    onPress={() => this.props.navigation.navigate('Login')}/> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    }
})