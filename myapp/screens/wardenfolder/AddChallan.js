import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import Helper from './Helper'
import Camera,{Constants} from './Camera'
import SelectWord from './SelectWord'
class AddChallan extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {userWord: '', errorMsg: '', loading: false, definition: null, showCamera: false, showWordList: false, recogonizedText: null};
      }
      onUserWordChange(text) {
        this.setState({userWord: text});
      }
    
      
    
      
      onOCRCapture(recogonizedText) {
        console.log('onCapture', recogonizedText);
        this.setState({showCamera: false, showWordList: Helper.isNotNullAndUndefined(recogonizedText), recogonizedText: recogonizedText});
       
      }
      onSearch(){
        alert("Successfully find result")
      }
    
     
      onWordSelected(word) {
        this.setState({showWordList: false, userWord: word});
        if(word.length > 0) {
          setTimeout(() => {
            this.onSearch();
          }, 500);
        }
      }

      render() {
        return (
          <>
            <SafeAreaView
              >
            
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
              >
                
                <View >
        
                  <Text style={{paddingLeft:130,fontSize:15,fontWeight:'bold',marginBottom:20,color:'blue'}}>Add Challan</Text>
                </View>
                
                
                <View style={styles.searchBox}>
                  <TextInput style={styles.searchInput}
                    onChangeText={text => this.onUserWordChange(text)}
                    placeholder={'Search Owner Details'}
                    value={this.state.userWord}
                  />
                  <TouchableOpacity style={styles.searchCamera} onPress={() => {
                    this.setState({showCamera: true});
                  }}>
                    <Text>Camera</Text>
                  </TouchableOpacity>
                </View>
    
                <View style={{minHeight: 10, maxHeight: 10}}></View>
    
                <Button
                  title="Search"
                  onPress={() => this.onSearch()}
                />
    
                {
                  this.state.errorMsg.length > 0 &&
                  <Text >{this.state.errorMsg}</Text>
                }
    
               
        
              </ScrollView>
            </SafeAreaView>
            {
              
              this.state.showCamera &&
              <Camera
                cameraType={Constants.Type.back}
                flashMode={Constants.FlashMode.off}
                autoFocus={Constants.AutoFocus.on}
                whiteBalance={Constants.WhiteBalance.auto}
                ratio={'4:3'}
                quality={0.5}
                imageWidth={800}
                enabledOCR={true}
                onCapture={(data, recogonizedText) => this.onOCRCapture(recogonizedText)} 
                onClose={_ => {
                  this.setState({showCamera: false});
                }}
              />
            }
            {
              
              this.state.showWordList &&
              <SelectWord wordBlock={this.state.recogonizedText} onWordSelected={(word) => this.onWordSelected(word)} />
            }
            {
              this.state.loading &&
              <ActivityIndicator  size="large" color={'#219bd9'} />
            }
          </>
        );
      }
    
}
const styles = StyleSheet.create({
    searchBox: {
      flex: 1,
      flexDirection: 'row',
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      paddingLeft: 4, 
      paddingRight: 4, 
      paddingTop: 2, 
      paddingBottom: 2
    },
    searchInput: {
      padding: 0,
      flex: 1
    },
    
    searchCamera: {
      maxWidth: 50,
      marginLeft: 5,
      padding: 0,
      alignSelf: 'center'
    }
  });
export default AddChallan;