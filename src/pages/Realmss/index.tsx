import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, FlatList, Pressable, ScrollView } from "react-native";
import { Realm, RealmProvider, useRealm, useQuery } from '@realm/react'

class Task extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  description!: string;
  isComplete!: boolean;
  createdAt!: Date;

  static generate(description: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      description,
      createdAt: new Date(),
    };
  }
}

const taskSchema = {
  name: 'Task',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    description: 'string',
    isComplete: { type: 'bool', default: false },
    createdAt: 'date'
  },
} as const;

Object.assign(Task, { schema: taskSchema });

function TaskApp() {
  const realm = useRealm();
  const tasks = useQuery(Task);
  const [newDescription, setNewDescription] = useState("")
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa tasks', tasks)
  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
        <TextInput
          value={newDescription}
          placeholder="Enter new task description"
          onChangeText={setNewDescription}
        />
        <Pressable
          onPress={() => {
            realm.write(() => {
              realm.create("Task", Task.generate(newDescription));
            });
            setNewDescription("")
          }}><Text>➕</Text></Pressable>
      </View>
      <ScrollView>
        {
          tasks.map((item, key) => (
            <View key={key} style={{ flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
              <Pressable
                onPress={() =>
                  realm.write(() => {
                    item.isComplete = !item.isComplete
                  })
                }><Text>{item.isComplete ? "✅" : "☑️"}</Text></Pressable>
              <Text style={{ paddingHorizontal: 10 }} >{item.description}</Text>
              <Pressable
                onPress={() => {
                  realm.write(() => {
                    realm.delete(item)
                  })
                }} ><Text>{"🗑️"}</Text></Pressable>
            </View>
          ))
        }
      </ScrollView>
      {/* <FlatList data={tasks.sorted("createdAt")} keyExtractor={(item) => item._id.toHexString()} renderItem={({ item }) => {
        return (
          <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
            <Pressable
              onPress={() =>
                realm.write(() => {
                  item.isComplete = !item.isComplete
                })
              }><Text>{item.isComplete ? "✅" : "☑️"}</Text></Pressable>
            <Text style={{ paddingHorizontal: 10 }} >{item.description}</Text>
            <Pressable
              onPress={() => {
                realm.write(() => {
                  realm.delete(item)
                })
              }} ><Text>{"🗑️"}</Text></Pressable>
          </View>
        );
      }} ></FlatList> */}
    </SafeAreaView >
  );
}

const Realmss = () => {
  return (
    <RealmProvider schema={[Task]}>
      <TaskApp />
    </RealmProvider>
  )
}

export default Realmss