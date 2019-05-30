import { firebaseDatabase } from './firebaseUtils'

export default class FirebaseService {
  static getDataList = (node, callback) => {
    let dataRef = firebaseDatabase.ref(node)

    dataRef.on('value', snapshot => {
      let items = []
      snapshot.forEach(snap => {
        let item = snap.val()
        item['key'] = snap.key
        items.push(item)
      })
      callback(items)
    })

    return dataRef
  }

  static pushData = (node, payload, callback) => {
    const dataRef = firebaseDatabase.ref(node).push()
    const id = firebaseDatabase.ref(node).push().key
    dataRef.set(payload, function (error) {
      if (error) {
        console.log(error)
      } else {
        callback()
      }
    })
    return id
  }
}
