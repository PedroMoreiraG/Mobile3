import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTaskList([...taskList, { id: Date.now().toString(), text: task }]);
      setTask('');
    }
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Tareas</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Escribe una nueva tarea"
        value={task}
        onChangeText={(text) => setTask(text)}
      />

      <Button title="Añadir Tarea" onPress={addTask} />

      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item.text}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTask(item.id)}>
              <Text style={styles.deleteText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 20,
    cursor: 'pointer',
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
