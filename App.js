import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Modal,
  Pressable,
  FlatList,
  ImageBackground,
} from "react-native";
import Header from "./components/Header";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import Colors from "./constants/Colors";
import AppLoading from 'expo-app-loading';
import {useFonts, ShantellSans_400Regular} from '@expo-google-fonts/shantell-sans';
import MyTabs from "./components/MyTabs";

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [myProducts, setMyProducts] = useState([]);

  const submitHandler = (product) => {
    if (product.length > 1) {
      //enregistre les news products dans l'array du state myproducts
      const idString = Date.now().toString(); //on créé un identifiant unique a chaque produit
      setMyProducts((currentMyProducts) => [
        { key: idString, name: product },
        ...currentMyProducts,
      ]);
      // setMyProducts((currentMyProducts) => [...currentMyProducts, product]);
      // setProduct("");
    } else {
      setShowModal(true);
      //     Alert.alert("Désolé","Please enter a valid product name",
      //     [{
      //       text:"compris",
      //       onPress:() =>console.warn("refusé")
      //     },
      //     {
      //       text:"D'accord",
      //       onPress:() =>console.warn("refusé")
      //     },
      //     {
      //       text:"OK",
      //       onPress:() =>console.warn("refusé")
      //     },
      //   ],
      //   {cancelable:true}
      // )
    }
  };
  const deleteProduct = (key) => {
    setMyProducts((currentMyProducts) => {
      return currentMyProducts.filter((product) => product.key != key);
    });
  };
  const [showModal, setShowModal] = useState(false);
  const [fontsLoaded, error] = useFonts({
    ShantellSansRegular: ShantellSans_400Regular,
    })
    if (!fontsLoaded) {   //condition pour le chargement 
      return (<AppLoading />)
    } 
    
  return (
    <NavigationContainer>
<ImageBackground
      source={require("./assets/image/tahiti.jpg")}
      style={styles.container}
    >
      <Header></Header>
      {/* <ScrollView> */}
      <Modal
        animationType="slide"
        transparent
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>
                Il y a une LEGENDARY erreur
              </Text>
            </View>
            <View style={styles.modalBody}>
              <Image
                style={styles.modalBodyImage}
                source={require("./assets/image/crown.png")}
              />
              <Text style={styles.modalBodyText}>
                Merci de noter plus d'un seul caractère
              </Text>
            </View>
            <View style={styles.modalFooter}>
              <Pressable
                style={styles.pressableBtnModal}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.modalBtn}>D'accord</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <AddProduct submitHandler={submitHandler} />
      {/* <View style={styles.productItems}>
          {myProducts.map((product, index) => {
            return (
              <Text key={index} style={styles.item}>
                {product}
              </Text>
            );
          })}
        </View> */}
      {/* </ScrollView> */}
      <FlatList
        data={myProducts}
        renderItem={({ item }) => (
          <Products
            name={item.name}
            idString={item.key}
            deleteProduct={deleteProduct}
          />
          /*<Text style={styles.item}>{item.name}</Text>*/
        )}
      />
      <MyTabs/>
    </ImageBackground>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    minHeight: "100%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modalContent: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 15,
    padding: 9,
    alignItems: "center",
    height: 300,
  },
  modalHeader: {
    width: "100%",
    padding: 16,
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  modalHeaderText: {
    fontSize: 25,
    color: "purple",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  modalBody: {
    flex: 1,
    width: 300,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  modalBodyText: {
    fontSize: 17,
  },
  modalFooter: {
    width: "100%",
  },
  pressableBtnModal: {
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "lightseagreen",
  },
  modalBtn: {
    fontSize: 17,
    color: "white",
    textAlign: "center",
    padding: 16,
  },
  modalBodyImage: {
    flex: 1,
    justifyContent: "center",
    width: "40%",
    marginHorizontal: 28,
    marginVertical: 18,
  },
});
