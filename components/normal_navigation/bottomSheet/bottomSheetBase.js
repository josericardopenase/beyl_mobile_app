import React, { useEffect, useRef, useState } from 'react'
import { View, Text, BackHandler, Dimensions } from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet';
import SheetUiBase from './SheetUI/sheetUiBase'

export default function BottomSheetBase({sheetRef}) {


      //FIXME : A VECES HACE OVERRIDE A LAS FUNCIONALIDADES DEL BACK Y NO DEJA VOLVER DE PESTA;A

      const onBackPress = () => {
        console.log(open)
        if (open) {
          sheetRef.current.snapTo(1);
          BackHandler.removeEventListener('hardwareBackPress', onBackPress);
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

  useEffect(() => {

    console.log(open)
  }, [open])

  const height = Dimensions.get('window').height/1.2

  const [open, setOpen] = useState(false);

    return (
                  <BottomSheet
                    ref = {sheetRef}
                    snapPoints    = {[height, 0]}
                    borderRadius  = {40}
                    renderContent = {() => <SheetUiBase height={height}/>}
                    onCloseEnd    = {() => {  setOpen(false); console.log(open);}}
                    onOpenEnd     = {() => {  setOpen(true); console.log(open);}}
                    initialSnap   = {0}
                />
    )
}
