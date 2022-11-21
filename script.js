refs = ['e', 'i', 'a', 'o', 'u']
troca = ['enter', 'imes', 'ai', 'ober', 'ufat']


function cripto() {
  let texto = document.getElementById("entrada").value 
  for (let i = 0; i<refs.length; i++){
    texto = texto.replaceAll(refs[i], troca[i])
  }
  organize();
  return document.getElementById("msg-saida").textContent = texto
}


function uncripto() {
  let texto = document.getElementById("entrada").value 
  for (let i = 0; i<refs.length; i++){
    texto = texto.replaceAll(troca[i], refs[i])
  }
  organize();
  return document.getElementById("msg-saida").textContent = texto
}

async function clipboardCopy() {
  let tx = document.getElementById("msg-saida").textContent;
  await navigator.clipboard.writeText(tx);
}

function organize(){
  document.getElementById('msg-saida').style.textAlign='justify'
  document.getElementById("saida").style.display="none"
  document.getElementById("img-saida").style.display="none"
  document.getElementById("copy").style.visibility="visible"
}


