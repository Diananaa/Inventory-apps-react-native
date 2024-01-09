import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, FlatList, Pressable, ScrollView } from "react-native";
import { Realm, RealmProvider, useRealm, useQuery } from '@realm/react'
import Header from "../../components/molecules/Header";
import Row from "../../components/atoms/Row";

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

  const onCreate = () => {
    realm.write(() => {
      realm.create("Task", Task.generate(newDescription));
    });
    setNewDescription("")
  }
  const onDelete = (item: any) => {
    realm.write(() => {
      realm.delete(item)
    })
  }
  const onCemplete = (item: any) => {
    realm.write(() => {
      item.isComplete = !item.isComplete
    })
  }
  return (
    <SafeAreaView>
      <Header
        title={"Effortless Inventory Mastery:"}
        desc={"Turning Tasks into Triumphs"}
        type={"primary"}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 10, }}>
        <TextInput
          value={newDescription}
          placeholder="Enter new task description"
          onChangeText={setNewDescription}
        />
        <Pressable
          onPress={() => onCreate()}>
          <Text>➕</Text>
        </Pressable>
      </View>
      <ScrollView>
        {
          tasks.map((item, key) => (
            <View key={key} style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between', alignItems: 'center', borderBottomColor: "#F4B9A4", borderBottomWidth: 1 }}>
              <Row style={{ alignItems: 'center' }}>
                <Pressable
                  onPress={() => onCemplete(item)}>
                  <Text>{item.isComplete ? "✅" : "☑️"}</Text></Pressable>
                <Text style={{ paddingHorizontal: 10 }} >{item.description}</Text>
              </Row>
              <Pressable
                onPress={() => onDelete(item)} >
                <Text>{"🗑️"}</Text></Pressable>
            </View>
          ))
        }
      </ScrollView>

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