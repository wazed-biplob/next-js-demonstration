const ProductId = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <h1>Dynamic Products Page {params.productId}</h1>
    </div>
  );
};

export default ProductId;
