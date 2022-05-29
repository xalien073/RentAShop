function PriceFormater(price) {
    let StrPrice = price.toString()
    if(StrPrice.length === 4) {
        return StrPrice.substring(0,1)+','+StrPrice.slice(1)
    }
    if(StrPrice.length === 5) {
      return StrPrice.substring(0,2)+','+StrPrice.slice(2)
    }
    if(StrPrice.length === 6) {
      return StrPrice.substring(0,1)+','+StrPrice.substring(1,3)+','+StrPrice.slice(3)
    }
    if(StrPrice.length === 7) {
      return StrPrice.substring(0,2)+','+StrPrice.substring(2,4)+','+StrPrice.slice(4)
    }
    if(StrPrice.length === 8) {
      return StrPrice.substring(0,1)+','+StrPrice.substring(1,3)+','+StrPrice.substring(3,5)+','+StrPrice.slice(5)
    }
    else{return price}
}
export default PriceFormater