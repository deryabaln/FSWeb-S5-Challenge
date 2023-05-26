
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `heading`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ heading }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const Header = (baslik, tarih, yazi) => {
    const headerDiv = document.createElement("div");
    headerDiv.setAttribute("class", "header");
    
    const span1= document.createElement("span");
    span1.setAttribute("class", "date");
    span1.textContent = tarih;
   
    const heading = document.createElement("h1");
    heading.textContent = baslik;
    
    const span2= document.createElement("span");
    span2.setAttribute("class", "temp");
    span2.textContent = yazi;

    headerDiv.append(span1, heading, span2);
     return headerDiv

  }

  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (heading,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
 
  const headerEkleyici = (secici) => {
   return document.querySelector(secici).append(Header("Teknoloji Zamanı","25.11.1997" , " En Popüler Teknoloji Yazıları"))
  }

export { Header, headerEkleyici }
