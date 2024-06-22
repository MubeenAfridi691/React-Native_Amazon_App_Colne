import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Subheader from '../components/Subheader'
import Category from '../components/Category'
import CarouselComponent from '../components/CarouselComponent'
import Services from '../components/Services'
import Deal from '../components/Deal'
import {  ScrollView} from 'react-native'
import Brand from '../components/Brand'


const Homescreen = () => {
  return (
    <ScrollView>
        <Header />
        <Subheader/>
        <Category/>
        <CarouselComponent/>
        <Services/>
        <Deal/>
        <Brand/>
    </ScrollView>
  )
}

export default Homescreen

const styles = StyleSheet.create({})