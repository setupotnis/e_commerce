import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  { id: 1, name: "Hat", description: "Cotton hat to stay warm.", price: "$3" },
  {
    id: 2,
    name: "Gloves",
    description: "Cotton gloves to stay warm.",
    price: "$5",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
