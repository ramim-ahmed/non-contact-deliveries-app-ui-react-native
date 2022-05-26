import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Image style={styles.Logo} source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.downRow}>
        <View>
          <Image
            style={styles.homeIcons}
            source={require("../../assets/home-icons.png")}
          />
        </View>
        <View style={{ marginTop: spacing[6] }}>
          <Text preset="h1" style={{ textAlign: "center" }}>
            Non-Contact
          </Text>
          <Text preset="h1" style={{ textAlign: "center" }}>
            Deliveries
          </Text>
        </View>
        <View style={{ marginTop: spacing[6] }}>
          <Text style={{ textAlign: "center" }}>
            When placing an order, select the option “Contactless delivery” and
            the courier will leave your order at the door.
          </Text>
        </View>
        <View>
          <Pressable
            onPress={() => navigation.navigate("Product")}
            style={styles.orderBtn}
          >
            <Text preset="h3" style={{ textAlign: "center" }}>
              ORDER NOW
            </Text>
          </Pressable>
          <Text
            preset="h3"
            style={{
              textAlign: "center",
              marginTop: spacing[8],
              color: colors.grey,
            }}
          >
            DISMISS
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
  },
  topRow: {
    flex: 1,
    justifyContent: "center",
  },
  downRow: {
    flex: 2,
    backgroundColor: colors.whiteGrey,
    borderTopLeftRadius: spacing[8],
    borderTopRightRadius: spacing[8],
    paddingHorizontal: spacing[6],
    alignItems: "center",
  },
  Logo: {
    width: 150,
  },
  homeIcons: {
    marginTop: spacing[10],
  },
  orderBtn: {
    backgroundColor: colors.green,
    width: 380,
    padding: spacing[3],
    marginTop: spacing[10],
    borderRadius: spacing[5],
  },
});
