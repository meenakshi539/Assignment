import React, { Component } from 'react';
import {
    Alert,
    Text,
    View,
    Image,
    StatusBar,
    TouchableOpacity,
    TextInput,
    Platform,
    BackHandler,
    SafeAreaView,
    FlatList,
    Dimensions,
    ScrollView

} from 'react-native';
import { Header } from "react-native-elements";
import styles from './Styles';
import ImageSlider from 'react-native-image-slider';
//import { SliderBox } from "react-native-image-slider-box";
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            groceryList: [
                {
                    text: "Vegetables",
                    icon: require("../Images/Assets/Vegetables.png")

                },
                {
                    text: "Fruits",
                    icon: require("../Images/Assets/Fruits.png")

                },
                {
                    text: "Cleaning",
                    icon: require("../Images/Assets/Cleaning.png")

                },
                {
                    text: "Grocery",
                    icon: require("../Images/Assets/Grocery.png")

                },
                {
                    text: "Edible oils",
                    icon: require("../Images/Assets/Edible.png")

                },
                {
                    text: "Meat",
                    icon: require("../Images/Assets/Meat.png")

                },
                {
                    text: "Fish",
                    icon: require("../Images/Assets/Fish.png")

                },
                {
                    text: "Spices",
                    icon: require("../Images/Assets/Spice.png")

                },



            ],
            images: [
                require("../Images/Assets/Banner2.png"), require("../Images/Assets/Banner2.png"), require("../Images/Assets/Banner2.png"), require("../Images/Assets/Banner2.png")
            ]
        }
    }
    _renderItem = (item) => {
        return (
            <View style={{ height: Dimensions.get('window').height / 8, width: Dimensions.get('window').width / 4.5, alignItems: 'center' }}>
                <View style={{}}>
                    <Image style={{ height:45, width: 45 }} source={item.icon} />
                </View>
                <View style={{ marginTop: '2%' }}>
                    <Text style={{ fontSize: 12, color: "#807c7c" }}>{item.text}</Text>
                </View>

            </View>
        )

    }
    render() {
        return (
            <View style={{ backgroundColor: "#FFFFFF",display:'flex'}}>
                <View style={{ marginHorizontal: '3%', }}>
                    <SafeAreaView style={{}}>
                        <StatusBar hidden={false} />
                        <Header
                            barStyle="light-content" // or directly
                            leftComponent={
                                <View style={{ marginTop: '-10%' }}>
                                    <Image style={{ height: 40, width: 40 }} source={require("../Images/Assets/header_left.png")} />
                                </View>
                            }
                            centerComponent={{ text: "Well come to 86", style: { fontSize: 18, fontWeight: "400" } }}
                            rightComponent={
                                <View style={{ marginTop: '-5%' }} >
                                    <Image style={{ height: 30, width: 30 }} source={require("../Images/Assets/notify.png")} />
                                </View>
                            }
                            containerStyle={styles.navigationHeader}
                        />
                    </SafeAreaView>
                   
                    <View style={{ marginTop: "2%", marginHorizontal: '3%',}}>
                        
                        <View >
                            <Text style={{ color: "#807c7c" }}>Find your daily foods</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: "3%", }}>

                            <View style={styles.inputText}>
                                <View style={{ margin: '4%' }}>
                                    <Image style={{ height: 20, width: 20 }} source={require("../Images/Assets/search.png")} />
                                </View>
                                <View>
                                    <TextInput
                                        placeholder="Search here ..."
                                        placeholderTextColor="#595959"
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 0.2, alignItems: "center" }}>
                                <Image style={{ height: 48, width: 48 }} source={require("../Images/Assets/filter.png")} />

                            </View>
                        </View>
                        <View style={styles.profileWarn}>
                            <View style={{ flex: 0.15, alignItems: "center", }}>
                                <Image style={{ height: 30, width: 30 }} source={require("../Images/Assets/profile.png")} />

                            </View>
                            <View style={{ flex: 0.7, marginLeft: '1%' }}>
                                <View>
                                    <Text style={{ lineHeight: 20, fontSize: 14, fontWeight: "500" }}>
                                        Complete your profile
                                </Text>
                                </View>
                                <View>
                                    <Text style={{ lineHeight: 18, fontSize: 12, color: "#8c8c8c" }}>
                                        Order to complete your registration kindly update your profile
                                </Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.2, alignItems: "center" }}>
                                <Image style={{ height: 20, width: 20 }} source={require("../Images/Assets/info.png")} />
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: "2%", }}>
                            <View style={{ flex: 1, }}>
                                <Text style={{ fontSize: 18, fontWeight: "400" }}>Promotions</Text>
                            </View>
                            <View style={{ justifyContent: "flex-end" }}>
                                <TouchableOpacity activeOpacity={1}>
                                    <Text style={{ fontSize: 14, fontWeight: "400" }} > See all</Text>
                                </TouchableOpacity>
                            </View>


                        </View>
                        <View style={{ flexDirection: "row", marginTop: "1%", }}>
                            <ImageSlider
                                images={this.state.images}
                                customSlide={({ index, item, style, width }) => (
                                        <View style={styles.custumSlide}>
                                            <Image resizeMode="contain" source={item} style={{
                                                height: 250,
                                                width: 250,
                                               
                                            }} />
                                        </View>
                                )}
                               
                            />

                        </View>

                        <View style={{marginTop:'1%',}}>
                            <FlatList
                                data={this.state.groceryList}
                                keyExtractor={(x, i) => "" + i}
                                renderItem={({ item, index }) => this._renderItem(item)}
                                scrollEnabled={true}
                                numColumns={4}
                                
                            />
                            </View>
                           
                       
                       
                    </View>
                   

                </View>
            </View>
        );
    }
}