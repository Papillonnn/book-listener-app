import React from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackNavigation } from '../../navigator';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../models';

const mapStateToProps = ({ home, loading }: RootState) => ({
    num: home?.num,
    loading: loading.effects['home/asyncAdd'],
});

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
    navigation: RootStackNavigation;
}

class Home extends React.Component<IProps> {
    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('Detail');
    };

    add = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'home/add',
            payload: {
                num: 1,
            },
        });
    };

    asyncAdd = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'home/asyncAdd',
            payload: {
                num: 2,
            },
        });
    };

    render() {
        return (
            <View>
                {this.props.loading && <Text>loading</Text>}
                <Text>Home</Text>
                <Text>{this.props.num}</Text>
                <Button title="add" onPress={this.add} />
                <Button title="asyncAdd" onPress={this.asyncAdd} />
                <Button title="navigate" onPress={this.onPress} />
            </View>
        );
    }
}

export default connector(Home);
