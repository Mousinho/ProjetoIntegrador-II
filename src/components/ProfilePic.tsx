import {StyleSheet, Image, View} from 'react-native';
import react from 'react';
import { COLORS, SPACING } from '../theme/theme';

 const ProfilePic = () =>{
   return(
    <View style={styles.ImageContainer}>
        <Image 
        source ={require('../assets/app_images/avatar.jpeg')}
        style={styles.image} 
        />
    </View>
   );
 };

const styles = StyleSheet.create({
    ImageContainer:{
        height:SPACING.space_36,
        width:SPACING.space_36,
        borderRadius:SPACING._12,
        borderWidth:2,
        borderColor:COLORS.secondayDarkGreyHex,
        alignItems:'center',
        justifyContent:'center',
        overflow:'hidden',
    },
    image:{
        height:SPACING.space_36,
        width:SPACING.space_36,
    }
});

export default ProfilePic;