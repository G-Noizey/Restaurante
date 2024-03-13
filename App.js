import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import Navigation from "./src/config/navigation/Navigation";
import { app, auth, db, storage } from "./src/config/util/firebaseConnection";
import Notification from './src/modules/notifications/Notification';

export default function App() {
  return <Notification />;
}
