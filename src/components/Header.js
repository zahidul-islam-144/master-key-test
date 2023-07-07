import React from "react";
import { IoMdContact } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { menuItems } from "../utils/utils";

const Header = () => {
  return (
    <section className="header_main">
      <div className="header_block1">
        <div className="block1_right">
          <span>shop</span>cart
        </div>
        <div className="block1_left">
          <IoMdContact className="contact-icon" />
          Sign in
        </div>
      </div>

      <div className="header_block2">
        <div className="block2_right">
          <div className="location_btn">
            <IoLocationOutline />
            Dhaka,1212
          </div>
        </div>
        <div className="block2_left">
          <form>
            <input type="text" placeholder="Search" />
            <button type="submit">
              <BiSearch />
            </button>
          </form>
        </div>
      </div>

      <div className="header_block3">
        <ul>
          {menuItems.map((item) => (
            <li>{item?.item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Header;
