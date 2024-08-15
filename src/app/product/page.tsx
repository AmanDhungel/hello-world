type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
}

const ProductPage = async() => {
  const detailsResponse = await fetch("http://localhost:3001/productslist")
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      cache: "no-store"
    })
  return (
    <div>Product Page</div>
  )
}

export default ProductPage