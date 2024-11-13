
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import TaskList from './componentes/TaskList'; 
import PlantImage from './componentes/PlantImage';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Regar la planta', completed: false },
    { id: '2', title: 'Agregar fertilizante', completed: false },
    { id: '3', title: 'Ajustar la luz', completed: false },
  ]);

  // esta es la funcion para eliminar una tarea
  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        {/* Nombre de la empresa con efecto 3D */}
        <Text style={styles.companyName}>ECOntrol</Text>
        
        <View style={styles.imageContainer}>
          <PlantImage />
        </View>
        
        {/* aqui usamos el componente TaskList */}
        <TaskList tasks={tasks} handleDelete={handleDelete} handleComplete={handleComplete} />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E1D6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 40,
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    width: '100%',
    maxWidth: 450,
    paddingHorizontal: 20,
  },
  companyName: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#3B6E3C',
    marginTop: 60,
    marginBottom: 25,
    letterSpacing: 2,
    textAlign: 'center',
    textShadowColor: '#A68C64',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
});
