import axios from 'axios';
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
 

  const Card = (makale) => {
    const parentDiv = document.createElement("div");
    parentDiv.setAttribute("class", "card");
    
    const firstChildDiv = document.createElement("div");
    firstChildDiv.setAttribute("class", "headline");
    firstChildDiv.textContent = makale.anabaslik;

    const secondChildDiv = document.createElement("div");
    secondChildDiv.setAttribute("class", "author");

    const thirdChildDiv = document.createElement("div");
    thirdChildDiv.setAttribute("class", "img-container");
    const image = document.createElement("img");
    image.setAttribute("src", makale.yazarFoto);
    thirdChildDiv.append(image);

    const span = document.createElement("span");
    span.textContent = makale.yazarAdi + " tarafından";
    
    parentDiv.addEventListener("click", (e)=>
    console.log(makale.anabaslik));

    secondChildDiv.append(thirdChildDiv,span);
    parentDiv.append(firstChildDiv,secondChildDiv);

     return parentDiv
  }



  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const cardEkleyici = (secici) => {
    axios.get("http://localhost:5001/api/makaleler").then(res => {
      const makaleler =res.data.makaleler;
      console.log(makaleler)
      for(let category in makaleler){
        makaleler[category].forEach(makale => {
          return document.querySelector(secici).append(Card(makale))
        });
      }
    });
    
  }

export { Card, cardEkleyici }
