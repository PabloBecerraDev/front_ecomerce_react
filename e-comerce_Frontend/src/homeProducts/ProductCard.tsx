type Props = {
  image: string;
  name: string;
  price: string;
  description: string;
};

function ProductCard({}: Props) {
  return (
    <div className="flex flex-col gap-y-4 h-64 w-40 px-4 py-4 rounded-xl shadow-md bg-white">

      {/* imagen */}
      <div>
        <img src="" alt="" />

      </div>

      {/* pequeña descripcion precio etc */}

      <div></div>



    </div>
  )
}

export default ProductCard