import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, FlatList } from 'react-native';
import { Dimensions } from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import CategoryButton from '../Components/CategoryButton'
import Permissions from 'react-native-permissions';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventDetails: []
    };
  }

  componentDidMount() {

    var formattedData = [];
    for (i = 1; i <= 5; i++) {
      formattedData.push({ title: "Ethereum Training", desc: "Learn the components of Ethereum and how to", url: "link", category: ["ethereum", "Blackchain"] });
    }

    this.setState({ items: formattedData });
  }

  _renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => { }}>
      <ElevatedView style={{ width: deviceWidth, marginTop: index === 0 ? 0 : 20, height: 210, backgroundColor: 'gray', marginLeft: 0 }}>
        <ImageBackground source={require('../Assets/Icons/backgroundImage.jpeg')} style={{ width: deviceWidth, height: 210, backgroundColor: 'rgba(41,56,148,1)' }} >
          <View style={{ flexDirection: 'column', justifyContent: "flex-start", alignItems: "flex-start", width: deviceWidth, marginTop: 100 }}>
            <Text style={{ color: 'rgba(255,255,255,1)', fontSize: 20, fontWeight: '300', marginLeft: 15 }} numberOfLines={1}>{item.title}</Text>
            <Text style={{ color: 'rgba(255,255,255,.5)', fontSize: 16, fontWeight: '300', marginLeft: 15, marginTop: 4 }} numberOfLines={1}>{item.desc}</Text>
            <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: "flex-start", width: deviceWidth }}>
              {item.category.map(item => <CategoryButton title={item} />)}
            </View>
          </View>
        </ImageBackground>
      </ElevatedView>
    </TouchableOpacity>
  );



  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: deviceWidth, height: 90, backgroundColor: 'rgba(41,56,148,1)' }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
            <View style={{ flex: 1, paddingLeft: 10 }}>
              <Text style={styles.headerText}>Explore</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ paddingLeft: 50 }}>
                <TouchableOpacity style={{ height: 30, width: 30, marginTop: 15, paddingRight: 10 }}
                  onPress={() => {

                    Permissions.check('camera').then(response => {
                      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
                      if (response == 'authorized') {
                        this.props.navigator.push({
                          screen: 'ScanPage',
                          navigatorStyle: {
                            navBarBackgroundColor: 'rgba(232,236,244,1)',
                            navBarNoBorder: true,
                            navBarButtonColor: "black",
                            drawUnderStatusBar: true,
                            navBarHidden: true
                          },
                        });
                      }
                      else {
                        Permissions.request('camera', {
                          rationale: {
                            title: 'FlipfoodStore app requires camera permission',
                            message:
                              'FlipfoodStore App needs access to your camera ' +
                              'so you can scan QR code for order delivery.',
                          },
                        }).then(response => {
                          if (response == 'authorized') {
                            this.props.navigator.push({
                              screen: 'ScanPage',
                              navigatorStyle: {
                                navBarBackgroundColor: 'rgba(232,236,244,1)',
                                navBarNoBorder: true,
                                navBarButtonColor: "black",
                                drawUnderStatusBar: true,
                                navBarHidden: true
                              },
                            });
                          }
                          this.setState({ cameraPermission: response })
                        })
                      }
                      this.setState({ photoPermission: response })
                    })
                  }}>
                  <Image style={{ height: 25, width: 25 }} source={require('../Assets/Icons/qr-code.png')} />
                </TouchableOpacity>
              </View>

              <View style={{ paddingRight: 10 }}>
                <TouchableOpacity style={{ height: 30, width: 30, marginTop: 15, paddingLeft: 20 }}>
                  <Image style={{ height: 25, width: 25 }} source={require('../Assets/Icons/search.png')} />
                </TouchableOpacity>
              </View>

              <View style={{ paddingRight: 10 }}>
                <TouchableOpacity style={{ height: 30, width: 30, marginTop: 15, paddingLeft: 20 }}>
                  <Image style={{ height: 25, width: 25 }} source={require('../Assets/Icons/more.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <FlatList
          style={{ paddingBottom: 40 }}
          data={this.state.items}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          ListEmptyComponent={<View style={{ flex: 1, justifyContent: "center", alignItems: "center", height: deviceHeight - 70 }}><Text>Nothing to display.</Text></View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  headerText: {
    fontSize: 25,
    fontWeight: '300',
    color: '#fff',
    marginTop: 15
  }
});

export default (HomePage);