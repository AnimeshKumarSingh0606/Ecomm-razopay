import React, { Component } from "react";
import styles from "../styles/global.module.css";
import ProductsCard from "./ProductsCard";
import Link from "next/link";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: "fffdda",
          name: "Product1",
          price: 100,
          description:
            "lrem aoievnaei vioaenvoien vianvoienv apienvoaienv piaenvpaeivnpiaevn ",
          quantity: 0,
          stock: 10,
          tag: "Blender1",
          image: "/images/ar.svg",
        },
        {
          id: "fffddb",
          name: "Product2",
          price: 200,
          description:
            "apeivnpae vnpaievnp aeivnpie anv painvpi eanvpae ivnaep vnpaiev ",
          quantity: 0,
          stock: 20,
          tag: "Blender2",
          image: "/images/ar.svg",
        },
        {
          id: "fffddc",
          name: "Product3",
          price: 300,
          description:
            "nepainv piaenv piaenvpi enavp ianepvi eanpivnea pvinpaeinvpae nivpeainv paeinv",
          quantity: 0,
          stock: 30,
          tag: "Blender3",
          image: "/images/ar.svg",
        },
        {
          id: "fffddd",
          name: "Product4",
          price: 400,
          description:
            "piaenvpaeivnpiaevn apeivnpae vnpaievnp aeivnpie anv painvpi eanvpae ivnaep vnpaiev nepainv ",
          quantity: 0,
          stock: 40,
          tag: "Blender4",
          image: "/images/ar.svg",
        },
        {
          id: "fffdde",
          name: "Product5",
          price: 500,
          description:
            "lrem aoievnaei vioaenvoien vianvoienv apienvoaienv piaenvpaeivnpiaevn apeivnpae vnpaievnp aeivnpie anv painvpi eanvpae ivnaep vnpaiev nepainv piaenv piaenvpi enavp ianepvi eanpivnea pvinpaeinvpae nivpeainv paeinv",
          quantity: 0,
          stock: 50,
          tag: "Blender5",
          image: "/images/ar.svg",
        },
      ],
    };
  }

  render() {
    return (
      <div className={styles.productsContainer}>
        {this.state.products.map((product) => (
          <Link href={"/product/" + product.id}>
            <a style={{ textDecoration: "none", color: "black" }}>
              <ProductsCard data={product}></ProductsCard>
            </a>
          </Link>
        ))}
      </div>
    );
  }
}
