import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function FormStockMovement({
  actionClose,
  actionSave,
  products,
  selectedProduct,
  setSelectedProduct,
  quantity,
  setQuantity,
  note,
  setNote,
  type
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type === 'in' ? 'Entrada de Estoque' : 'Saída de Estoque'}</Text>

      <Text style={styles.label}>Produto:</Text>
      <Picker
        selectedValue={selectedProduct}
        onValueChange={(itemValue) => setSelectedProduct(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Selecione um produto" value="" />
        {products.map((product) => (
          <Picker.Item key={product.product} label={product.product} value={product.id} />
        ))}
      </Picker>

      <Text style={styles.label}>Quantidade:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />

      <Text style={styles.label}>Observação:</Text>
      <TextInput
        style={styles.input}
        value={note}
        onChangeText={setNote}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={actionClose} style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={actionSave} style={styles.saveButton}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12
  },
  label: {
    marginTop: 10,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 8,
    borderRadius: 6,
    marginTop: 4
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 6
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 6
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});
