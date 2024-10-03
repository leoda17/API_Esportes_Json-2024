function pegarCss(variavel) {
    return getComputedStyle(document.body).getPropertyValue(variavel).trim(); 
}

const configuraEixo = {
    color: pegarCss('--marrom'), 
    size: 16,
    family: pegarCss('--fonte-texto') 
};

export { pegarCss, configuraEixo };
