import React from 'react';

const ReadTossDice = React.createContext(null)
const GetSetDisplay = React.createContext(null)
const GetSetDisplayTwo = React.createContext(null)
const ToggleInfo = React.createContext([toggleInfo, setToggleInfo])
const Selection = React.createContext(null)
const Character = React.createContext(null)
const PrimaryModifier = React.createContext(null)

export {
  ReadTossDice,
  GetSetDisplay,
  GetSetDisplayTwo,
  ToggleInfo,
  Selection,
  Character,
  PrimaryModifier
}
