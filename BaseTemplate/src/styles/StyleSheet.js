import { StyleSheet } from 'react-native'

// Default Style Sheet
export const styles = StyleSheet.create({
    container: {
        
    },
    // headers - xl, l, m, s
    header_xl: {
        fontSize: 40
    },
    header_l: {
        fontSize: 30
    },
    header_m: {
        fontSize: 20
    },
    header_s: {
        fontSize: 15
    },

    // Text
    text_link: {
        color: "gray"
    },
    text_title: {

    },
    text_body: {

    },
    basic_text: {
        fontSize: 12
    },

    // Button
    button_container: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#f4511e",
    },
    button_text: {
        padding: 10,
        fontSize: 15,
        fontWeight: "bold",
        color: "#fff"
    },
    button_header_container_right: {
        marginRight: 10,
        borderRadius: 2, 
        backgroundColor: "#d43b0b"
    },
    button_header_container_left: {
        marginLeft: 10,
        borderRadius: 2, 
        backgroundColor: "#d43b0b"
    },

    // Textbox
    textbox: {

    }
});

// Profile Style Sheet
export const profile = StyleSheet.create({
    header:{
      backgroundColor: "#f4511e",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#f4511e",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonText:{
        color: "#ffffff"
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#f4511e",
    },
  });