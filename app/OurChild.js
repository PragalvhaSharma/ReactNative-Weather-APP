import React from 'react'
import {View, Text} from 'react-native'

/* 
    What are props?
    - Used to pass data from parent to child
    - Used to customise our components 
    - Promotes component reusability
    - Consequences
        - Props are immutable so they cant be changed once created
        - Data only flows one way ------ to pass props from parent to child
*/

const OurChild = (props) => {
    //We are extracting the message properly from the probs object assigned it to message
    //So when using OurChild there is a message properly that is required
    const {message} = props;
    return(
        <View style={{height: 200, width: 200, backgroundColor: 'red'}}>
            <Text>{message}</Text>
        </View>
    );
};

export default OurChild

//HOW ITS USED 

// const index = () =>{
//     return(
//       <View style={styles.container}>
//         <OurChild message={'Hello'}/>
//         <OurChild message={'Greetings'}/>
//         <OurChild message={'Goodbye'}/>
//       </View>
//     )
//   }
  