import { ActivityFeed, Background, BackgroundScroll, BoxActivity, EmptyItens, FloatingButton, IconFloatBtn, QuickMenu, TitleText } from "./styles";
import { useNavigation } from "@react-navigation/native";

import ActivityItemCompnent from "../../components/ActivityItemCompnent";
import QuickMenuItem from '../../components/QuickMenuItem';

import useHomeActions from "../../hooks/useHomeActions";

import upStockIcon from '../../assets/img/icons/quickMenu/up_stock_icon.png'
import downStockIcon from '../../assets/img/icons/quickMenu/down_stock_icon.png'
import IconPlus from '../../assets/img/icons/plus_icon.png'

import exitStockIcon from '../../assets/img/icons/quickMenu/exit_icon_stock.png'
import entryStockIcon from '../../assets/img/icons/quickMenu/entry_icon_stock.png'
import boxIcon from '../../assets/img/icons/quickMenu/box_icon.png'
import { useEffect, useState } from "react";
import { Alert, Modal, } from "react-native";
import Product from "../../database/models/Product";
import FormRegisterProduct from "../../components/FormRegisterProduct";
import { saveProduct } from "../../database/controllers/ProductController";
import FormStockMovement from "../../components/FormStockMovement";
import { ProductService } from "../../database/services/ProductService";
import { StockMovementService } from "../../database/services/StockMovementService";


export default function Home() {

    const [visibleRegisterProduct, setVisibleRegisterProduct] = useState(false);
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [visibleStockIn, setVisibleStockIn] = useState(false);
    const [visibleStockOut, setVisibleStockOut] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [quantity, setQuantity] = useState('');
    const [note, setNote] = useState('');
    const [products, setProducts] = useState([]);
    const [activities, setActivities] = useState([]);


    const navigation = useNavigation();

    // const {
    //     searchCheckList,
    //     exportCheckList,
    //     viewCheckList,
    // } = useHomeActions(navigation);



    const handleSave = async () => {
        try {
            const now = new Date();
            const newProduct = new Product(name, slug, now, now);
            await saveProduct(newProduct)
            setVisibleRegisterProduct(false)
            Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
            setName('');
            setSlug('');
        } catch (error) {
            Alert.alert('Erro ao salvar', error.message);
        }
    };

    function closeForm() {
        setName('');
        setSlug('');
        setVisibleRegisterProduct(false)
    }


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

    const loadMovements = async () => {
        try {
            const movimenService = new StockMovementService();
            const allMovements = await movimenService.getAllMovements();

            const mappedMovements = allMovements.map((move) => ({
                id: String(move.id),
                type: move.type,
                product: move.product || 'Produto desconhecido',
                qtd: move.quantity,
                movedAt: new Date(move.created_at).toLocaleDateString(),
            }));

            setActivities(mappedMovements);
        } catch (error) {
            Alert.alert('Erro ao carregar produtos', error.message);
        }
    };

    useEffect(() => {
        loadProducts();
        loadMovements();
    }, []);


    const clearForm = () => {
        setSelectedProduct('');
        setQuantity('');
        setNote('');
    };

const handleSaveMovement = async (type) => {
    if (!selectedProduct || !quantity) {
        Alert.alert('Erro', 'Selecione um produto e informe a quantidade.');
        return;
    }

    try {
        const service = new StockMovementService(); // <- instância da classe
        await service.saveStockMovement({
            product_id: selectedProduct,
            quantity,
            type,
            note
        });

        Alert.alert('Sucesso', 'Movimentação registrada!');
        clearForm();
        type === 'in' ? setVisibleStockIn(false) : setVisibleStockOut(false);
        loadMovements(); // <- recarrega atividades após salvar
    } catch (error) {
        Alert.alert('Erro', error.message);
    }
};


    return (
        <Background>
            <BackgroundScroll vertical showsVerticalScrollIndicator={false}>
                <TitleText>
                    Acesso Rápido
                </TitleText>
                <QuickMenu horizontal showsHorizontalScrollIndicator={false} >
                    <QuickMenuItem
                        textMenu='Entrada Estoque'
                        iconMenu={entryStockIcon}
                        onPress={() => setVisibleStockIn(true)}
                    />
                    <QuickMenuItem
                        textMenu='Saida Estoque'
                        iconMenu={exitStockIcon}
                        onPress={() => setVisibleStockOut(true)}
                    />
                    <QuickMenuItem
                        textMenu='Cadastrar Produto'
                        iconMenu={boxIcon}
                        onPress={() => setVisibleRegisterProduct(true)}
                    />
                </QuickMenu>

                <TitleText>
                    Atividades Recentes
                </TitleText>
                <BoxActivity>
                    <ActivityFeed vertical showsVerticalScrollIndicator={false} >

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

                                        <ActivityItemCompnent
                                            key={item.id}
                                            iconType={item.type === 'in' ? upStockIcon : downStockIcon}
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
                    </ActivityFeed>
                </BoxActivity>


            </BackgroundScroll>
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

            <Modal
                animationType="slide"
                transparent={true}
                visible={visibleStockIn}
                onRequestClose={() => setVisibleStockIn(false)}
            >
                <FormStockMovement
                    type="in"
                    products={products}
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    note={note}
                    setNote={setNote}
                    actionClose={() => {
                        clearForm();
                        setVisibleStockIn(false);
                    }}
                    actionSave={() => handleSaveMovement('in')}
                />
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={visibleStockOut}
                onRequestClose={() => setVisibleStockOut(false)}
            >
                <FormStockMovement
                    type="out"
                    products={products}
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    note={note}
                    setNote={setNote}
                    actionClose={() => {
                        clearForm();
                        setVisibleStockOut(false);
                    }}
                    actionSave={() => handleSaveMovement('out')}
                />
            </Modal>

        </Background>
    )
}