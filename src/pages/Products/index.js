import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, Modal } from "react-native";
import FormRegisterProduct from "../../components/FormRegisterProduct";

import IconPlus from '../../assets/img/icons/plus_icon.png';
import SearchIcon from '../../assets/img/icons/search_icon.png';

import {
  Background,
  BackgroundScroll,
  BoxInputSearch,
  BoxProducts,
  BtnSearch,
  FloatingButton,
  IconFloatBtn,
  IconSearch,
  InputSearch,
  ProductList,
  SearchProduct,
  TitleText
} from "./styles";

import ProductItemCompnent from "../../components/ProductItemCompnent";
import { EmptyItens } from "../Home/styles";

import { saveProduct } from "../../database/controllers/ProductController";
import Product from "../../database/models/Product";
import { ProductService } from "../../database/services/ProductService";
import ProductDetailsModal from "../../components/ProductDetailsModal";

export default function Products() {
  const [visibleRegisterProduct, setVisibleRegisterProduct] = useState(false);
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modeModal, setModeModal] = useState(null);

  const navigation = useNavigation();

  const loadProducts = async () => {
    try {
      const service = new ProductService();
      const allProducts = await service.getAll();

      const mapped = allProducts.map((prod) => ({
        id: String(prod.id),
        product: prod.name,
        slug: prod.slug,
        created_at: prod.created_at,
        updated_at: prod.updated_at,
      }));

      setProducts(mapped);
    } catch (error) {
      Alert.alert('Erro ao carregar produtos', error.message);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSave = async () => {
    try {
      const now = new Date();
      const newProduct = new Product(name, slug, now, now);
      await saveProduct(newProduct);
      await loadProducts(); // recarrega a lista
      setVisibleRegisterProduct(false);
      setName('');
      setSlug('');
      Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
    } catch (error) {
      Alert.alert('Erro ao salvar', error.message);
    }
  };

  const handleSearch = () => {
    const text = searchText.trim().toLowerCase();

    if (text === '') {
      return products;
    }

    return products.filter(item =>
      item.id.includes(text) || item.product.toLowerCase().includes(text)
    );
  };

  const viewProduct = (id) => {
    Alert.alert("Visualizar", `Visualizar produto com ID: ${id}`);
  };

  const editProduct = (id) => {
    Alert.alert("Editar", `Editar produto com ID: ${id}`);
  };

  const filtered = handleSearch();

  const formatDateTimeFull = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // mês começa do zero
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <Background>
      <SearchProduct>
        <BoxInputSearch>
          <InputSearch
            placeholder="ID ou Nome do produto"
            value={searchText}
            onChangeText={setSearchText}
          />
          <BtnSearch activeOpacity={0.8} onPress={() => { }}>
            <IconSearch resizeMode="contain" source={SearchIcon} />
          </BtnSearch>
        </BoxInputSearch>
      </SearchProduct>

      <TitleText>Produtos Cadastrados</TitleText>

      <BackgroundScroll vertical showsVerticalScrollIndicator={false}>
        <BoxProducts>
          <ProductList vertical showsVerticalScrollIndicator={false}>
            {filtered.length === 0 ? (
              <EmptyItens>
                Nenhum produto encontrado
              </EmptyItens>
            ) : (
              filtered.map((item, index) => {
                const maxLength = 20;
                const productName = item.product.length > maxLength
                  ? item.product.slice(0, maxLength) + '...'
                  : item.product;

                return (
                  <ProductItemCompnent
                    key={item.id}
                    product={productName}
                    idProduct={item.id}
                    movedAt={formatDateTimeFull(item.created_at)}
                    onPressView={() => {
                      setSelectedProduct({
                        id: item.id,
                        name: item.product,
                        slug: item.slug,
                        created_at: item.created_at,
                        updated_at: item.updated_at,
                      });
                      setModeModal('view');
                    }}
                    onPressEdit={() => {
                      setSelectedProduct({
                        id: item.id,
                        name: item.product,
                        slug: item.slug,
                        created_at: item.created_at,
                        updated_at: item.updated_at,
                      });
                      setModeModal('edit');
                    }}
                  />
                );
              })
            )}
          </ProductList>
        </BoxProducts>
      </BackgroundScroll>

      <FloatingButton activeOpacity={0.7} onPress={() => setVisibleRegisterProduct(true)}>
        <IconFloatBtn resizeMode="contain" source={IconPlus} />
      </FloatingButton>

      <Modal
        animationType="slide"
        transparent={true}
        visible={visibleRegisterProduct}
        onRequestClose={() => setVisibleRegisterProduct(false)}
      >
        <FormRegisterProduct
          actionClose={() => setVisibleRegisterProduct(false)}
          actionSave={handleSave}
          name={name}
          setName={setName}
          slug={slug}
          setSlug={setSlug}
        />
      </Modal>

      <ProductDetailsModal
        visible={modeModal !== null}
        onClose={() => {
          setModeModal(null);
          setSelectedProduct(null);
        }}
        mode={modeModal}
        product={selectedProduct}
        onSave={async (updatedProduct) => {
          try {
            const service = new ProductService();
            await service.update(updatedProduct);

            await loadProducts();
            Alert.alert("Sucesso", "Produto atualizado!");
          } catch (error) {
            Alert.alert("Erro", error.message);
          } finally {
            setModeModal(null);
            setSelectedProduct(null);
          }
        }}

        onDelete={async (deleteProduct) => {
          try {
            const service = new ProductService();
            await service.update(deleteProduct);

            await loadProducts();
            Alert.alert("Sucesso", "Deletado com sucesso!");
          } catch (error) {
            Alert.alert("Erro", error.message);
          } finally {
            setModeModal(null);
            setSelectedProduct(null);
          }
        }}
      />
    </Background>
  );
}
