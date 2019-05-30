import firebase from 'firebase'
import { firebaseSettings } from '../config/firebaseConfig'

const config = firebaseSettings
firebase.initializeApp(config)

export const firebaseDatabase = firebase.database()
