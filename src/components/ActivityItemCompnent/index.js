import { ActionButtomEdit, ActionButtomView, ActionButtonsActivity, ActivityItem, ActivityTipeContent, DateMovedChecklist, DescriptionActivity, IconType, ImageBtn, ProductName, QtdProduct, TextEdit, TextView } from './styles';

import editIcon from '../../assets/img/icons/edit_icon.png'
import viewIcon from '../../assets/img/icons/view_icon.png'


function ActivityItemCompnent(props) {

    const {iconType, product, qtd, movedAt,onPressExport, onPressView} = props;
    return (
        <ActivityItem>
            <DescriptionActivity>
                <ActivityTipeContent>
                    <IconType resizeMode="contain" source={iconType} />
                    <ProductName>
                       {product}
                    </ProductName>
                </ActivityTipeContent>
                <QtdProduct>
                    {qtd}
                </QtdProduct>
                <DateMovedChecklist>
                    {movedAt}
                </DateMovedChecklist>
            </DescriptionActivity>
        </ActivityItem>
    )
}

export default ActivityItemCompnent;