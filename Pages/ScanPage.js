import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import QRCodeScanner from 'react-native-qrcode-scanner';


class ScanPage extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
    }
    

    async onSuccess(e) {
		try {
			var qrData = e.data;
			qrData = qrData.split("~~");
		} catch (err) {
		}
	}

	render() {
		return (<View style={{backgroundColor:"white", height: deviceHeight}}><QRCodeScanner
			style={{backgroundColor:"white", height: deviceHeight}}
			onRead={this.onSuccess.bind(this)}
			topContent={
				<Text>
					scan the QR code
          </Text>
			}
			bottomContent={
				<TouchableOpacity onPress={() => {
					this.props.navigator.pop();
				}} style={{}}>
					<Text style={styles.buttonText}>Cancel</Text>
				</TouchableOpacity>
			}
		/>
		</View>)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	}
});

export default (ScanPage);
