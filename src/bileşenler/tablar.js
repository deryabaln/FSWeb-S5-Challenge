import axios from 'axios';
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  const Tablar = (konu) => {
    const parentDiv = document.createElement("div");
    parentDiv.setAttribute("class", "topics");
    
   for(let i=0; i<konu.length; i++)  {
    const childDivs = document.createElement("div");
    childDivs.setAttribute("class", "tab");
    childDivs.textContent = konu[i]
    parentDiv.append(childDivs)
    };
     return parentDiv
  }

  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const tabEkleyici = (secici) => {
    axios.get("http://localhost:5001/api/konular").then(res => {
      const topics =res.data.konular;
      return document.querySelector(secici).append(Tablar(topics))
    });
  }

export { Tablar, tabEkleyici }
