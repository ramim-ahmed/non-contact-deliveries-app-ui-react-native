import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
export default function Product() {
    const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.imageSection}>
        <Pressable onPress={ () => navigation.goBack()} style={styles.backBtn} >
          <AntDesign name="leftcircleo" size={40} color="white" />
        </Pressable>
        <Image
          style={styles.image}
          source={require("../../assets/Media.png")}
        />
      </View>
      <View style={styles.productDetails}>
        <View style={{ marginTop: spacing[8] }}>
          <Text preset="h1" style={{ fontSize: 30 }}>
            Boston Lettuce
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: spacing[2],
            }}
          >
            <Text preset="h2" style={{ fontSize: 32 }}>
              1.10
            </Text>
            <Text style={{ fontSize: 24, marginLeft: spacing[3] }}>
              € / piece
            </Text>
          </View>
          <View style={{ marginTop: spacing[1] }}>
            <Text preset="h4">~ 150 gr / piece</Text>
          </View>
          <View style={{ marginTop: spacing[8] }}>
            <Text preset="h2">Spain</Text>
            <Text style={{ marginTop: spacing[1] }}>
              Lettuce is an annual plant of the daisy family, Asteraceae. It is
              most often grown as a leaf vegetable, but sometimes for its stem
              and seeds. Lettuce is most often used for salads, although it is
              also seen in other kinds of food, such as soups, sandwiches and
              wraps; it can also be grilled.
            </Text>
          </View>
          <View style={styles.CartBtnGroup}>
              <View style={styles.likeSection}>
              <AntDesign name="like2" size={24} color="black" />
              </View>
              <View style={styles.addCartSection}>
                  <Pressable style={styles.addToCartBtn}>
                  <Feather name="shopping-cart" size={24} color="white" />
                      <Text preset="h3" style={{textAlign: 'center', marginLeft: spacing[2]}} >ADD TO CART</Text>
                  </Pressable>
              </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  imageSection: {
    flex: 1,
  },
  productDetails: {
    flex: 2,
    backgroundColor: colors.whiteGrey,
    borderTopLeftRadius: spacing[8],
    borderTopRightRadius: spacing[8],
    paddingHorizontal: spacing[6],
  },
  image: {
    width: 450,
    position: 'absolute',
    zIndex: 0
  },
  backBtn: {
      position: 'absolute',
      zIndex: 1,
      padding: spacing[6]
  },
  CartBtnGroup: {
      marginTop: spacing[15],
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  likeSection: {
      backgroundColor: colors.white,
      padding: spacing[3],
      borderColor: colors.grey,
      borderWidth: 0.1,
      flex: 1,
      alignItems: 'center'
  },
  addCartSection: {
      backgroundColor: colors.green,
      flex:3,
      marginLeft: spacing[5],
      padding: spacing[3]
  },

  addToCartBtn: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
  },
});
