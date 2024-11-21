import React, { useState, useEffect } from "react";
import { Alert, Button, FlatList, Text, TextInput, View, TouchableOpacity } from "react-native";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCh-qWzgFAmiTKutY5oNG54GWVGPYsyECU",
  authDomain: "meuprimeirofirebase-6e5e3.firebaseapp.com",
  projectId: "meuprimeirofirebase-6e5e3",
  storageBucket: "meuprimeirofirebase-6e5e3.firebasestorage.app",
  messagingSenderId: "308336899977",
  appId: "1:308336899977:web:2399753663e46147021358",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const App = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);

  const createUser = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), { Nome: nome, Sobrenome: sobrenome });
      Alert.alert("Sucesso", "Usuário adicionado com ID: " + docRef.id);
      setNome("");
      setSobrenome("");
      fetchUsers();
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível adicionar o usuário.");
    }
  };

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(usersList);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível buscar os usuários.");
    }
  };

  const updateUser = async () => {
    try {
      const userRef = doc(db, "users", editingUserId);
      await updateDoc(userRef, { Nome: nome, Sobrenome: sobrenome });
      Alert.alert("Sucesso", "Usuário atualizado!");
      setNome("");
      setSobrenome("");
      setEditingUserId(null);
      fetchUsers();
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível atualizar o usuário.");
    }
  };

  const deleteUser = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      Alert.alert("Sucesso", "Usuário deletado!");
      fetchUsers();
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível deletar o usuário.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={{ padding: 20, flex: 1 }}>


      <TextInput
        style={{
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
          borderRadius: 5,
        }}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={{
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
          borderRadius: 5,
        }}
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      {editingUserId ? (
        <Button title="Atualizar Usuário" onPress={updateUser} />
      ) : (
        <Button title="Adicionar Usuário" onPress={createUser} />
      )}

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              borderBottomWidth: 1,
              borderColor: "#ccc",
            }}
          >
            <Text>
              {item.Nome} {item.Sobrenome}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => {
                  setNome(item.Nome);
                  setSobrenome(item.Sobrenome);
                  setEditingUserId(item.id);
                }}
              >
                <Text style={{ color: "blue" }}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteUser(item.id)}>
                <Text style={{ color: "red" }}>Deletar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default App;
