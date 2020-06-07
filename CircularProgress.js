
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native'
import { DangerZone, Svg } from 'expo'

const { Circle } = Svg
const { width } = Dimensions.get("window")
const size = width - 32
const strokeWidth = 50
const radius = (size - strokeWidth) / 2

