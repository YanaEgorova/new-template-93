
export const item = (product) => {
  return `
  <li class="item swiper-slide" data-aos="fade-up">
    <div class="product__block js_product glass glass-m" id="${product.id}">
    <div class="product__img-box">
     <img src="${product.image}" alt="" class="img">
    </div>
    <div class="product__text-box">
    <p class="product__name js_product-name">${product.name}</p>
      <span class="product__price">$${(product.price).toFixed(2)}</span>
    </div>
    <div class="product__btn-block">
    <a href="product-page.html?id=${product.id}" class="btn btn--first product__link" style="margin: ${product.isItRing ? 'auto' : ''}">details
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 47 47" style="enable-background:new 0 0 47 47;" xml:space="preserve">
<path d="M47,19c0-0.552-0.447-1-1-1s-1,0.448-1,1v24.586L1.707,0.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414
	L43.586,45H19c-0.553,0-1,0.448-1,1s0.447,1,1,1h27c0.13,0,0.26-0.027,0.382-0.077c0.245-0.101,0.44-0.296,0.541-0.541
	C46.974,46.26,47,46.13,47,46V19z"/>
</svg> 
    </a>
    ${
      product.isItRing ? '' : '<button class="btn product__link js_add-to-cart">buy <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="884.000000pt" height="980.000000pt" viewBox="0 0 884.000000 980.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,980.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M4190 9785 c-397 -49 -766 -214 -1078 -479 -198 -169 -378 -403 -492 -640 -142 -295 -175 -460 -186 -931 -2 -126 -7 -254 -10 -282 l-5 -53 -784 0 c-431 0 -786 -4 -789 -8 -7 -11 -57 -438 -256 -2182 -403 -3524 -580 -5101 -580 -5162 l0 -48 4410 0 4410 0 0 46 c0 53 -25 278 -250 2264 -404 3559 -578 5068 -586 5082 -3 4 -358 8 -789 8 l-784 0 -5 53 c-3 28 -8 164 -11 301 -8 366 -25 491 -96 700 -298 870 -1211 1443 -2119 1331z m555 -419 c203 -46 435 -147 597 -262 109 -78 297 -267 375 -377 70 -100 168 -287 207 -395 71 -198 96 -386 96 -709 l0 -223 -1600 0 -1600 0 0 219 c0 228 11 374 36 501 39 191 146 435 267 607 77 109 266 299 372 375 197 139 461 247 680 278 97 14 489 4 570 -14z m-2315 -2595 l0 -219 -54 -40 c-105 -80 -151 -185 -144 -331 6 -113 44 -197 122 -269 90 -81 132 -97 261 -97 98 0 116 3 167 27 76 35 153 109 192 183 30 57 31 65 31 175 0 106 -2 119 -28 170 -16 30 -57 84 -93 120 l-64 66 0 217 0 217 1600 0 1600 0 0 -217 0 -217 -64 -66 c-36 -36 -77 -90 -93 -120 -26 -51 -28 -64 -28 -170 0 -110 1 -118 31 -175 39 -74 116 -148 192 -183 51 -24 69 -27 167 -27 129 0 171 16 261 97 78 72 116 156 122 269 7 145 -38 248 -144 332 l-54 42 0 217 0 218 615 0 c338 0 615 -3 615 -7 0 -5 5 -37 10 -73 18 -125 261 -2247 520 -4540 197 -1744 221 -1961 215 -1971 -8 -12 -7922 -12 -7929 0 -7 10 30 344 224 2061 291 2568 505 4432 516 4498 l6 32 614 0 614 0 0 -219z" /></g></svg></button>'
    }
    </div>
    </div>
  </li>
    `
  }


export const subItem = (product) => {

  return `
    <div class="swiper-slide">
      
    <img src="${product.image}" alt="" class="product__sub-img">

  </div>
    `
}