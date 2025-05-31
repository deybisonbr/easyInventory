import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import Product from '../../database/models/Product';
import { ProductService } from '../../database/services/ProductService';


export default function Products() {
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');

  const productService = new ProductService();

  const handleSave = async () => {
    try {
      const now = new Date();
      const newProduct = new Product(name, slug, now, now);
      await productService.insert(newProduct)
      Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
      setName('');
      setSlug('');
    } catch (error) {
      Alert.alert('Erro ao salvar', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Produto</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Slug"
        value={slug}
        onChangeText={setSlug}
      />

      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFF',
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#CCC',
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    marginBottom: 12,
  },
});