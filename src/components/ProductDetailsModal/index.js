import React, { useState, useEffect } from 'react';
import { Modal, Alert } from 'react-native';
import {
  Container,
  Header,
  Title,
  CloseButton,
  Content,
  Label,
  Input,
  ButtonSave,
  ButtonSaveText,
  ValueText,
  ButtonDelete,
  ButtonDeleteText
} from './styles'; // crie os estilos conforme preferir

import closeIcon from '../../assets/img/icons/close_icons.png';
import { Image } from 'react-native';

const ProductDetailsModal = ({
  visible,
  onClose,
  mode = 'view', // 'view' ou 'edit'
  product,
  onSave,
  onDelete
}) => {
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name);
      setSlug(product.slug);
    }
  }, [product]);

  const handleSave = () => {
    if (!name || !slug) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    const updatedProduct = {
      ...product,
      name,
      slug,
      updated_at: new Date()
    };

    onSave(updatedProduct);
  };


  const handleDelete = () => {
    const deleteProduct = {
      ...product,
      deleted: 1,
      updated_at: new Date()
    };

    onDelete(deleteProduct);
  };

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <Container>
        <Header>
          <Title>{mode === 'edit' ? 'Editar Produto' : 'Visualizar Produto'}</Title>
          <CloseButton onPress={onClose}>
            <Image source={closeIcon} style={{ width: 24, height: 24 }} />
          </CloseButton>
        </Header>

        <Content>
          <Label>ID do Produto:</Label>
          <ValueText>{product?.id}</ValueText>

          <Label>Nome:</Label>
          {mode === 'edit' ? (
            <Input value={name} onChangeText={setName} />
          ) : (
            <ValueText>{product?.name}</ValueText>
          )}

          <Label>Slug:</Label>
          {mode === 'edit' ? (
            <Input value={slug} onChangeText={setSlug} />
          ) : (
            <ValueText>{product?.slug}</ValueText>
          )}

          <Label>Criado em:</Label>
          <ValueText>{product?.created_at}</ValueText>

          <Label>Atualizado em:</Label>
          <ValueText>{product?.updated_at}</ValueText>

          {mode === 'edit' && (
            <ButtonSave onPress={handleSave}>
              <ButtonSaveText>Salvar</ButtonSaveText>
            </ButtonSave>
          )}

          {mode === 'view' && (
            <ButtonDelete onPress={handleDelete}>
              <ButtonDeleteText>Deletar</ButtonDeleteText>
            </ButtonDelete>
          )}
        </Content>
      </Container>
    </Modal>
  );
};

export default ProductDetailsModal;
