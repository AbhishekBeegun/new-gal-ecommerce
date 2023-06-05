import React from 'react'
import SearchBar from "../SearchBar/SearchBar"
import Wishlistbtn from "../Wishlist/Wishlistbtn"
import CartBtn from "../Cart/CartBtn"

const Navbar = () => {
  return (
    <nav className="flex justify-between py-5 px-20 border-b border-red-600">
      <div>
        <img src="https://media.graphassets.com/output=format:png/resize=height:800,fit:max/rtfRp7DLSyya3k8rBmQA"
        width="150" alt="logo"/>
      </div>

      <SearchBar/>
      <div className="flex gap-10">
      <Wishlistbtn/>
      <CartBtn/>
      </div>
    </nav>
  )
}

export default Navbar