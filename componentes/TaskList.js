
import React from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

// Componente TaskList que recibe las tareas y funciones 
const TaskList = ({ tasks, handleDelete, handleComplete }) => {
  const pan = new Animated.ValueXY(); 

  const renderTask = (task) => (
    <Animated.View
      style={[styles.taskContainer, task.completed && styles.taskComplete, { transform: [{ translateX: pan.x }] }]}
      key={task.id}
    >
      <TouchableOpacity onPress={() => handleDelete(task.id)} style={styles.taskTouchable}>
        <Text style={[styles.taskText, task.completed && styles.taskComplete]}>{task.title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <View style={styles.boardContainer}>
      {tasks.length === 0 ? (
        <View style={styles.noTasksContainer}>
          <Text style={styles.noTasksMessage}>Tu planta está en perfectas condiciones</Text>
        </View>
      ) : (
        tasks.map((task) => renderTask(task))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  boardContainer: {
    backgroundColor: '#D9CBA7',
    padding: 20,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#8E735B',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10,
    width: '100%',
    marginTop: 20,
  },
  taskContainer: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    transform: [{ rotateX: '10deg' }, { rotateY: '10deg' }],
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  taskText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  taskComplete: {
    textDecorationLine: 'line-through',
    color: '#A68C64',
  },
  noTasksContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: 250,
  },
  noTasksMessage: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3B6E3C',
    textAlign: 'center',
    paddingVertical: 20,
    fontStyle: 'italic',
  },
});

export default TaskList;
