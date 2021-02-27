import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

var sched_array = ["Mon - 5-9PM", 'Weds - 12-2PM'];

export default class GroupInfo extends Component {
    getSchedString() {
        var s = ""
        for(i = 0; i < sched_array.length; i++) {
            s.concat(sched_array[i] + "\n");
        }

        return s;
    }

    render() {
        return (
            <View style={styles.info}>
                <Text style={styles.titleText}>
                    Group Name
                </Text>
                
                <Text style={styles.infoText}
                    numberOfLines={sched_array.length}>
                    Schedule:
                </Text>

                <Text style={styles.scheduleText}>
                    {this.getSchedString()}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    info: {
        flex: 1,
        justifyContent: 'flex-start',
        marginBottom: 200,
        backgroundColor: 'white',
    },
    titleText: {
        fontSize: 32,
        textAlign: 'center',
        color: "#8B8C89",
        fontWeight: 'bold',
        paddingBottom: 30,
        paddingTop: 10
    },
    infoText: {
        fontSize: 20,
        color: 'black',
        paddingHorizontal: 10,
        textAlign: 'left',
        textAlignVertical: 'top',
        fontWeight: '600'
    },
    scheduleText: {
        fontSize: 18,
        color: 'black',
        paddingHorizontal: 10,
        textAlign: 'left',
        textAlignVertical: 'top',
        fontWeight: '600'
    }
});