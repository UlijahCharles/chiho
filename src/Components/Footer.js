import React from "react";
import "./footer.css";

const Footer = (props) => {
  return (
    <div>
      <table>
        <tr>
          <th>Call me back</th>
          <th>Menu</th>
          <th>Company</th>
          <th>Social</th>
        </tr>
        <tr>
          <td>
            <input></input>
          </td>
          <td>Stocks</td>
          <td>Contact Us</td>
          <td>Instagram</td>
        </tr>
        <tr>
          <td></td>
          <td>Delivery</td>
          <td>Blog</td>
          <td>Tripadvisor</td>
        </tr>
        <tr>
          <td></td>
          <td>About Us</td>
          <td></td>
          <td>Restoran</td>
        </tr>
        <tr>
          <td></td>
          <td>How To Get</td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default Footer;
