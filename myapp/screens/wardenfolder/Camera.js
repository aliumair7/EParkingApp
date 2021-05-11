import React,{Component} from 'react';
import {Text, TouchableOpacity,View,Platform} from 'react-native'
import PropTypes from'prop-types'
import {RNCamera} from 'react-native-camera'

export const Constants={
    ...RNCamera.Constants
};
export default class Camera extends Component{
    camera = null;
  state = {
    cameraType: Constants.Type.back,
    flashMode: Constants.FlashMode.off,
    recognizedText: null
  }

  componentDidMount() {
    this.setState({
      // If enabledOCR is true, then set the cameraType to back only
      cameraType: this.props.enabledOCR ? Constants.Type.back : this.props.cameraType,
      flashMode: this.props.flashMode,
      recognizedText: null
    });
  }

  takePicture = async() => {
    if (this.camera) {
      const options = { 
        quality: this.props.quality, 
        base64: true, 
        width: this.props.imageWidth, 
        doNotSave: true,
        fixOrientation: true,
        pauseAfterCapture: true
      };
      const data = await this.camera.takePictureAsync(options);
    
      this.props.onCapture && this.props.onCapture(data.base64, this.state.recognizedText); 
    }
  };

  onTextRecognized(data) {
    if(this.props.enabledOCR) {
      console.log('onTextRecognized: ', data);
      if(data && data.textBlocks && data.textBlocks.length > 0) {
        this.setState({recognizedText: data})
      }
    }
  }

  render() {
   
    return(
      <View style={[styles.camera.container, this.props.style]}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.camera.preview}
          type={this.state.cameraType}
          flashMode={this.state.flashMode}
          ratio={this.props.ratio}
          captureAudio={false}
          autoFocus={this.props.autoFocus}
          whiteBalance={this.props.whiteBalance}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel'
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel'
          }}
          onTextRecognized={this.props.enabledOCR ? (data) => this.onTextRecognized(data) : undefined}
        />
        
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          
            <Text  onPress={_ => {
              switch(this.state.flashMode) {
                case Constants.FlashMode.off:
                  this.setState({flashMode: Constants.FlashMode.auto});
                  break;

                case Constants.FlashMode.auto:
                  this.setState({flashMode: Constants.FlashMode.on});
                  break;

                case Constants.FlashMode.on:
                  this.setState({flashMode: Constants.FlashMode.off});
                  break;
              }
            }}>Flash</Text>
          
          <Text onPress={this.takePicture.bind(this)} style={styles.camera.capture}>Snap</Text>
         
          {
            // If enabledOCR is true, don't allow user to change camera
            !this.props.enabledOCR ?
            
             <Text style={{color:'white'}} onPress={_ => {
                if(this.state.cameraType === Constants.Type.back) {
                  this.setState({cameraType: Constants.Type.front});
                }
                else {
                  this.setState({cameraType: Constants.Type.back});
                }
              }}>FLip</Text>
        
            :
            <View style={[styles.camera.capture, {width: 70, height: 70}]}></View>
          }
        </View>
        {
          this.props.onClose && 
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              this.props.onClose && this.props.onClose();
            }}>
            <Text>Close</Text>
          </TouchableOpacity>
        }
      </View>
    );
  }

}

Camera.propTypes = {
    cameraType: PropTypes.any,
    flashMode: PropTypes.any,
    autoFocus: PropTypes.any,
    whiteBalance: PropTypes.any,
    ratio: PropTypes.string,
    quality: PropTypes.number,
    imageWidth: PropTypes.number,
    style: PropTypes.object,
    onCapture: PropTypes.func,
    enabledOCR: PropTypes.bool,
    onClose: PropTypes.func
  };
  
  Camera.defaultProps = {
    cameraType: Constants.Type.back,
    flashMode: Constants.FlashMode.off,
    autoFocus: Constants.AutoFocus.on,
    whiteBalance: Constants.WhiteBalance.auto,
    ratio: '4:3',
    quality: 0.5,
    imageWidth: 768,
    style: null,
    onCapture: null,
    enabledOCR: false,
    onClose: null,
  };
  
  const styles = {
    camera: {
      container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'white'
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      capture: {
        flex: 0,
        //backgroundColor: '#f00',
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
      }
    },
    closeButton: {
      position: 'absolute',
      backgroundColor: '#aaaaaab0', 
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      top: Platform.OS === "ios" ? 45 : 10,
      left: 10
    },
    closeButtonIcon: {
      fontSize: Platform.OS === "ios" ? 40 : 40, 
      fontWeight: 'bold', 
      alignSelf: 'center', 
      lineHeight: Platform.OS === "ios" ? 58 : 40
    }
  };

  