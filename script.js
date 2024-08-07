document.addEventListener('DOMContentLoaded', function() {
    const textArea = document.querySelector('.text-area');
    const mensagem = document.querySelector('.mensagem');
    const btnEncriptar = document.querySelector('.btn-encriptar');
    const btnDesencriptar = document.querySelector('.btn-desencriptar');
    const btnCopiar = document.querySelector('.btn-copiar');

    function encrypt(text) {
        let encryptedText = text.replace(/e/g, 'enter')
                                .replace(/i/g, 'imes')
                                .replace(/a/g, 'ai')
                                .replace(/o/g, 'ober')
                                .replace(/u/g, 'ufat');
        return encryptedText;
    }

    function decrypt(text) {
        let decryptedText = text.replace(/enter/g, 'e')
                                .replace(/imes/g, 'i')
                                .replace(/ai/g, 'a')
                                .replace(/ober/g, 'o')
                                .replace(/ufat/g, 'u');
        return decryptedText;
    }

    btnEncriptar.addEventListener('click', function() {
        let inputText = textArea.value;
        let encryptedText = encrypt(inputText);
        mensagem.value = encryptedText;""
        textArea.value = "";
    });

    btnDesencriptar.addEventListener('click', function() {
        let inputText = textArea.value;
        let decryptedText = decrypt(inputText);
        mensagem.value = decryptedText;
        textArea.value = "";
    });

    btnCopiar.addEventListener('click', function() {
        mensagem.select();
    
    });
});
