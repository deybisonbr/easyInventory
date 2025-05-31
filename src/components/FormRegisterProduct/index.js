import { BoxFormActionButtons, BoxFormRegister, BoxInputs, BtnActionsForm, BtnActionsText, ContentModalForm, InputForm, TitleForm } from "./styles";

function FormRegisterProduct(props) {

    const { actionClose, actionSave, name, setName, slug, setSlug } = props;

    return (

        <ContentModalForm
            onPress={actionClose}
            activeOpacity={1}
        >

            <BoxFormRegister
                onPress={() => { }}
            >
                <TitleForm>Cadastrar Produto</TitleForm>
                <BoxInputs>
                    <InputForm
                        placeholder="Nome do Produto"
                        value={name}
                        onChangeText={setName}
                    />
                    <InputForm
                        placeholder="Slug"
                        value={slug}
                        onChangeText={setSlug}
                    />

                </BoxInputs>

                <BoxFormActionButtons>
                    <BtnActionsForm
                        activeOpacity={0.8}
                        onPress={actionClose}
                    >
                        <BtnActionsText>Cancelar</BtnActionsText>
                    </BtnActionsForm>
                    <BtnActionsForm
                        activeOpacity={0.8}
                        onPress={actionSave}
                    >
                        <BtnActionsText>Salvar</BtnActionsText>
                    </BtnActionsForm>
                </BoxFormActionButtons>

            </BoxFormRegister>

        </ContentModalForm>
    )
}

export default FormRegisterProduct;