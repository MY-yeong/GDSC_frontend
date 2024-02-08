import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const RecommendInputage1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.recommendInputage}>
      <Image
        style={[styles.recommendInputageChild, styles.sortLeftLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Pressable
        style={[styles.sortLeft, styles.sortLeftLayout]}
        onPress={() => navigation.navigate("Recommend1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/sort-left.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent, styles.groupLayout]}>
        <View style={styles.groupShadowBox} />
        <Text style={[styles.text, styles.textTypo]}>
          목 가누기를 할 수 있으며 그 시도가 활발하다
        </Text>
      </View>
      <Text style={[styles.category, styles.text1Clr]}>Category</Text>
      <Text style={[styles.senseDevelopment, styles.text1Clr]}>
        Sense Development
      </Text>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={styles.groupItem} />
        <Text style={[styles.text1, styles.text1Clr]}>
          목 가누기를 할 수 있으며 그 시도가 활발하다
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={styles.groupShadowBox} />
        <Text style={[styles.text2, styles.textTypo]}>
          목 가누기를 할 수 있으며 그 시도가 활발하다
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={styles.groupShadowBox} />
        <Text style={[styles.text2, styles.textTypo]}>
          목 가누기를 할 수 있으며 그 시도가 활발하다
        </Text>
      </View>
      <Text style={[styles.text4, styles.text4Layout]}>
        아래의 항목 중 아이의 발달 상태에 해당하는 항목을 모두 골라주세요
      </Text>
      <Pressable style={[styles.groupPressable, styles.rectangleParentLayout]}>
        <Pressable
          style={[styles.rectanglePressable, styles.groupChildShadowBox]}
          onPress={() => navigation.navigate("RecommendInputage")}
        />
        <Image
          style={[styles.acrobaticsIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/acrobatics1.png")}
        />
        <Text style={[styles.motion, styles.senseTypo]}>Motion</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent1, styles.rectangleParentLayout]}
      >
        <Pressable
          style={[styles.groupChild1, styles.groupChildShadowBox]}
          onPress={() => navigation.navigate("RecommendInputage4")}
        />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/book1.png")}
        />
        <Text style={[styles.recognition, styles.senseTypo]}>Recognition</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent2, styles.rectangleParentLayout]}
      >
        <Pressable
          style={[styles.groupChild2, styles.groupChildShadowBox]}
          onPress={() => navigation.navigate("RecommendInputage3")}
        />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/voice3.png")}
        />
        <Text style={[styles.speech, styles.senseTypo]}>Speech</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent3, styles.rectangleParentLayout]}
      >
        <Pressable
          style={[styles.groupChild3, styles.groupChildShadowBox]}
          onPress={() => navigation.navigate("RecommendInputage2")}
        />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/handmade1.png")}
        />
        <Text style={[styles.emotion, styles.senseTypo]}>Emotion</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent4, styles.rectangleParentLayout]}
      >
        <View style={[styles.groupChild4, styles.groupChildShadowBox]} />
        <Text style={[styles.sense, styles.senseTypo]}>Sense</Text>
        <Image
          style={[styles.tongueOutIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/tongue-out1.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent5, styles.groupChild5Layout]}>
        <Pressable
          style={[styles.groupChild5, styles.groupChild5Layout]}
          onPress={() => navigation.navigate("Recommend")}
        />
        <Text style={[styles.finish, styles.text4Layout]}>Finish</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sortLeftLayout: {
    height: 30,
    top: 50,
    width: 30,
    position: "absolute",
  },
  groupLayout: {
    height: 50,
    width: 300,
    left: 29,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    left: 25,
    position: "absolute",
  },
  text1Clr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  text4Layout: {
    lineHeight: 20,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 80,
    width: 55,
    top: 148,
    position: "absolute",
  },
  groupChildShadowBox: {
    borderRadius: Border.br_81xl,
    height: 80,
    width: 55,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 40,
    top: 10,
  },
  senseTypo: {
    color: Color.colorGainsboro_200,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_6xs,
    top: 52,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    left: 12,
    width: 30,
    position: "absolute",
  },
  groupChild5Layout: {
    height: 37,
    width: 105,
    position: "absolute",
  },
  recommendInputageChild: {
    left: 18,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  sortLeft: {
    left: 17,
  },
  groupShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    height: 50,
    width: 300,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text: {
    top: 17,
    textAlign: "left",
    color: Color.colorDarkgray_200,
  },
  rectangleParent: {
    top: 296,
  },
  category: {
    top: 110,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    left: 30,
  },
  senseDevelopment: {
    top: 258,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    left: 30,
  },
  groupItem: {
    backgroundColor: Color.colorGoldenrod_200,
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    height: 50,
    width: 300,
    position: "absolute",
  },
  text1: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    left: 25,
    top: 17,
  },
  rectangleGroup: {
    top: 356,
  },
  text2: {
    top: 18,
  },
  rectangleContainer: {
    top: 416,
  },
  groupView: {
    top: 476,
  },
  text4: {
    top: 760,
    left: 36,
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorRosybrown,
  },
  rectanglePressable: {
    backgroundColor: Color.colorWhite,
  },
  acrobaticsIcon: {
    left: 13,
    width: 30,
    position: "absolute",
    top: 10,
  },
  motion: {
    left: 15,
  },
  groupPressable: {
    left: 30,
    height: 80,
    width: 55,
    top: 148,
  },
  groupChild1: {
    backgroundColor: Color.colorWhite,
  },
  bookIcon: {
    height: 40,
    top: 10,
  },
  recognition: {
    left: 6,
  },
  rectangleParent1: {
    left: 91,
  },
  groupChild2: {
    backgroundColor: Color.colorWhite,
  },
  speech: {
    left: 14,
  },
  rectangleParent2: {
    left: 152,
  },
  groupChild3: {
    backgroundColor: Color.colorWhite,
  },
  emotion: {
    left: 13,
  },
  rectangleParent3: {
    left: 213,
  },
  groupChild4: {
    backgroundColor: Color.colorLightseagreen,
  },
  sense: {
    left: 16,
  },
  tongueOutIcon: {
    top: 13,
    height: 35,
  },
  rectangleParent4: {
    left: 274,
  },
  groupChild5: {
    backgroundColor: Color.colorGoldenrod_300,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    width: 105,
  },
  finish: {
    top: 9,
    letterSpacing: 0.5,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    left: 30,
  },
  rectangleParent5: {
    top: 713,
    left: 224,
  },
  recommendInputage: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default RecommendInputage1;
