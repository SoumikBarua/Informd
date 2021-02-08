import React from 'react';
import { Header } from 'react-native-elements'

import colors from '../config/colors'

function ReactHeader(props) {
    return (
        <Header
            centerComponent= {{ text: "Informd", style: {color: 'white', fontSize: 35} }}
            containerStyle= {{
                backgroundColor: colors.primary
            }}
        />
    );
}

export default ReactHeader;