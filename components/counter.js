import * as React from 'react';
import {View,Text, Button, StyleSheet} from 'react-native'

class Counter extends React.Component{
  state = {
    count: 0,
  }
  _inc(){
    let {step} = this.props;
    // let oldCount = this.state.count
    this.setState( oldState => ({
      count: oldState.count + step
    }))
  }

  _dec(){
    let {step} = this.props;
    this.setState(oldState => ({
      count:oldState.count - step
    }))
  }

   render(){
    return(
      <View style={styles.container}>
        <Button title="Minus" onPress={()=>this._dec()} />
        <Text style={styles.display}>{this.state.count}</Text>
        <Button title="Plus" onPress={()=>this._inc()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-arround',
    alignItems:'center'
  },
  display: {
    margin: 20,
    fontSize:60,
    fontWeight: 'bold',
  }
})

export default Counter; 