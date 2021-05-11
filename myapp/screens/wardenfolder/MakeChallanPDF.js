import React, {useState} from 'react';
import { Button } from 'react-native';
import axios from 'axios'
// Import required components
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';

// Import HTML to PDF
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const MakePDF = () => {
  const [filePath, setFilePath] = useState('');

  const isPermitted = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs access to Storage data',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        alert('Write permission err', err);
        return false;
      }
    } else {
      return true;
    }
  };

  const createPDF = async () => {
    if (await isPermitted()) {
      let options = {
        //Content to print
        html:
          '<h1 style="text-align: center;"><strong>Hello Guys</strong></h1><p style="text-align: center;">Here is an example of pdf Print in React Native</p><p style="text-align: center;"><strong>Team About React</strong></p>',
        //File Name
        fileName: 'test',
        //File directory
        directory: 'docs',
       //base64 of file
       base64:true
      };
      let file = await RNHTMLtoPDF.convert(options);
      console.log(file.filePath);
      console.log(file.base64)
      setFilePath(file.base64);
    }
  };

  const uploadfile=async()=>{
    let bases="data:raw/pdf;base64," + filePath
  
    
   
    axios.post("http://192.168.209.174:3000/api/challan/pdfuploader",{bases}).then(res=>{
      console.log(res.data)
    }).catch(err=>console.log(err))
  }
  const uploadfiles=async()=>{  
    //"data:raw/pdf;base64,$pdf"
    let bases="data:raw/pdf;base64," + filePath
  
    
   const data = new FormData()
   data.append("file",bases)
   data.append("upload_preset","ecomrce-project")
   data.append("cloud_name","ali7347")
   await fetch("https://api.cloudinary.com/v1_1/ali7347/image/upload",{
     method:"post",
     body:data
   })
   .then(res=>res.json())
   .then(data=>{
     console.log(data)
    
    
   })
   .catch(err=>{
    console.log(err)
     
   })
   }
  

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.titleText}>
        Example to Make PDF in React Native from HTML Text
      </Text>
      <View style={styles.container}>
        <TouchableOpacity onPress={createPDF}>
          <View>
            <Image
              //We are showing the Image from online
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/pdf.png',
              }}
              style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>Create PDF</Text>
          </View>
        </TouchableOpacity>
       
        <Button  title="Upload" onPress={()=>{uploadfile()}}                       />
      </View>
    </SafeAreaView>
  );
};

export default MakePDF;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    fontSize: 18,
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  imageStyle: {
    width: 150,
    height: 150,
    margin: 5,
    resizeMode: 'stretch',
  },
});