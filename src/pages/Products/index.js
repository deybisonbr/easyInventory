import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Modal } from "react-native";
import FormRegisterProduct from "../../components/FormRegisterProduct";

import upStockIcon from '../../assets/img/icons/quickMenu/up_stock_icon.png'
import downStockIcon from '../../assets/img/icons/quickMenu/down_stock_icon.png'
import IconPlus from '../../assets/img/icons/plus_icon.png'
import SearchIcon from '../../assets/img/icons/search_icon.png'
import { Background, BackgroundScroll, BoxInputSearch, BoxProducts, BtnSearch, FloatingButton, IconFloatBtn, IconSearch, InputSearch, ProductList, SearchProduct, TitleText } from "./styles";
import ProductItemCompnent from "../../components/ProductItemCompnent";

export default function Products() {

  const [visibleRegisterProduct, setVisibleRegisterProduct] = useState(false);
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');

  const navigation = useNavigation();

  // const {
  //     searchCheckList,
  //     exportCheckList,
  //     viewCheckList,
  // } = useHomeActions(navigation);

  const activities = [
    {
      id: '1',
      type: 'up',
      product: 'Caneta BIC - Preta',
      slug: 'caneta-bic-p',
      qtd: '3',
      movedAt: '23-05-2025 10:00'
    },
    {
      id: '2',
      type: 'down',
      product: 'Caderno Universitário - 100 folhas',
      slug: 'caderno-universitario-100f',
      qtd: '1',
      movedAt: '23-05-2025 11:15'
    },
    {
      id: '3',
      type: 'up',
      product: 'Lápis Faber-Castell nº2',
      slug: 'lapis-faber-2',
      qtd: '10',
      movedAt: '23-05-2025 14:40'
    },
    {
      id: '4',
      type: 'down',
      product: 'Apontador com depósito',
      slug: 'apontador-deposito',
      qtd: '2',
      movedAt: '23-05-2025 15:20'
    },
    {
      id: '5',
      type: 'up',
      product: 'Marca-texto amarelo',
      slug: 'marca-texto-amarelo',
      qtd: '5',
      movedAt: '23-05-2025 16:30'
    },
    {
      id: '6',
      type: 'down',
      product: 'Borracha branca pequena',
      slug: 'borracha-branca-p',
      qtd: '4',
      movedAt: '23-05-2025 17:00'
    }
  ];

  function closeForm() {
    setName('');
    setSlug('');
    setVisibleRegisterProduct(false)
  }


  return (
    <Background>
      <SearchProduct>
        <BoxInputSearch>
          <InputSearch placeholder="ID ou Nome do produto" />
          <BtnSearch activeOpacity={0.8} onPress={() => {}}>
            <IconSearch resizeMode="contain" source={SearchIcon} />
          </BtnSearch>

        </BoxInputSearch>
      </SearchProduct>

      <TitleText>
        Produtos Cadastrados
      </TitleText>
      <BackgroundScroll vertical showsVerticalScrollIndicator={false}>
        <BoxProducts>
          <ProductList vertical showsVerticalScrollIndicator={false} >

            {activities.length === 0 ?
              (
                <EmptyItens>
                  Nenhuma atividade recente
                </EmptyItens>
              ) :

              (
                activities.map((item, index) => {
                  const maxLength = 30;
                  const productName = item.product.length > maxLength
                    ? item.product.slice(0, maxLength) + '...'
                    : item.product;

                  return (

                    <ProductItemCompnent
                      key={index}
                      iconType={item.type === 'up' ? upStockIcon : downStockIcon}
                      product={productName}
                      qtd={'Qtd.: ' + item.qtd}
                      movedAt={'Data: ' + item.movedAt}
                      onPressExport={() => exportCheckList(item.id)}
                      onPressView={() => viewCheckList(item.id)}
                    />
                  )
                })
              )
            }
          </ProductList>
        </BoxProducts>


      </BackgroundScroll>

      <FloatingButton activeOpacity={0.7} onPress={() => {}}>
        <IconFloatBtn resizeMode="contain" source={IconPlus} />
      </FloatingButton>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visibleRegisterProduct}
        onRequestClose={() => closeForm()}
      >
        <FormRegisterProduct
          actionClose={() => closeForm()}
          actionSave={() => handleSave()}
          name={name}
          setName={(text) => setName(text)}
          slug={slug}
          setSlug={(text) => setSlug(text)}
        />

      </Modal>

    </Background>
  )
}