import { ActivityItem, ActivityTipeContent, BoxBtnActions, BtnEditIcon, BtnEditProduct, BtnViewIcon, BtnViewProduct, DateCreateProduct, DateMovedChecklist, DescriptionActivity, IdProduct, ProductName } from './styles';

import editIcon from '../../assets/img/icons/edit_icon.png'
import viewIcon from '../../assets/img/icons/view_icon.png'


function ProductItemCompnent(props) {

    const { iconType, product, idProduct, movedAt, onPressEdit, onPressView } = props;
    return (
        <ActivityItem>
            <DescriptionActivity>
                <IdProduct>
                    {idProduct}
                </IdProduct>
                <ActivityTipeContent>
                    <ProductName>
                        {product}
                    </ProductName>
                </ActivityTipeContent>
                <DateCreateProduct>
                    {movedAt}
                </DateCreateProduct>
            </DescriptionActivity>
            <BoxBtnActions>
                <BtnViewProduct onPress={onPressView}>
                    <BtnViewIcon resizeMode="contain" source={viewIcon} />
                </BtnViewProduct>
                <BtnEditProduct onPress={onPressEdit}>
                    <BtnEditIcon resizeMode="contain" source={editIcon} />
                </BtnEditProduct>
            </BoxBtnActions>
        </ActivityItem>
    )
}

export default ProductItemCompnent;