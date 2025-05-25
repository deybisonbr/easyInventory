import { ImageQuickMenu, QuickContentImage, QuickItem, TextQuickMenu } from "./styles";

function QuickMenuItem(props) {

    const { iconMenu, textMenu, onPress} = props;
    return (
        <QuickItem
            activeOpacity={0.6}
            onPress={onPress}
        >
            <QuickContentImage>
                <ImageQuickMenu resizeMode="contain" source={iconMenu} />
            </QuickContentImage>
            <TextQuickMenu>
                {textMenu}
            </TextQuickMenu>
        </QuickItem>
    )
}

export default QuickMenuItem;