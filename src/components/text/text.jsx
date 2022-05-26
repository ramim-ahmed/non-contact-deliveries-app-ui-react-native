import React from "react";
import { StyleSheet, Text as RNText } from "react-native";
import { presets } from "../text_preset/text_preset";
export default function Text({children, preset='default', style}) {
  const textStyles = StyleSheet.compose(presets[preset], style);
  return <RNText style={textStyles}>{children}</RNText>;
}
