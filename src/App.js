import { useCallback } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'

import { useQuery, useRealm } from "./db";
import RecordModel from './db/record'

const App = () => {
  const realm = useRealm()

  const records = useQuery(RecordModel)

  const handleAddRecord = useCallback(() => {
    realm.write(() => {
      realm.create('Record', RecordModel.create({ id: records.length + 1, content: 'Hello world' }))
    })
  }, [records])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have {records.length} records</Text>
      <Button title="Add record" onPress={handleAddRecord} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  }
});

export default App
