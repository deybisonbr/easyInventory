import { ActivityFeed, Background, BoxActivity, EmptyItens, FloatingButton, IconFloatBtn, ImageQuickMenu, QuickContentImage, QuickItem, QuickMenu, TextQuickMenu, TitleText } from "./styles";
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


export default function Home() {

    const navigation = useNavigation();

    const {
        newInspection,
        searchCheckList,
        exportCheckList,
        viewCheckList,
    } = useHomeActions(navigation);

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


    return (
        <Background>
            <TitleText>
                Acesso Rápido
            </TitleText>
            <QuickMenu horizontal showsHorizontalScrollIndicator={false} >
                <QuickMenuItem
                    textMenu='Entrada Estoque'
                    iconMenu={entryStockIcon}
                    onPress={searchCheckList}
                />
                <QuickMenuItem
                    textMenu='Saida Estoque'
                    iconMenu={exitStockIcon}
                    onPress={() => newInspection('car')}
                />
                <QuickMenuItem
                    textMenu='Cadastrar Produto'
                    iconMenu={boxIcon}
                    onPress={() => newInspection('moto')}
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
                                const maxLength = 18;
                                const productName = item.product.length > maxLength
                                    ? item.product.slice(0, maxLength) + '...'
                                    : item.product;

                                return (

                                    <ActivityItemCompnent
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
                </ActivityFeed>
            </BoxActivity>

            <FloatingButton activeOpacity={0.7} onPress={() => newInspection('new')}>
                <IconFloatBtn resizeMode="contain" source={IconPlus} />
            </FloatingButton>

        </Background>
    )
}