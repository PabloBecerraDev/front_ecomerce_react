import product from '../assets/product_defecto.png';

type Props = {
  image: string;
  name: string;
  price: string;
  description: string;
};

function ProductCard({}: Props) {
  return (
    <div className="flex flex-col gap-y-4 h-94 w-full max-w-sm px-4 py-4 rounded-xl shadow-md bg-slate-50 rounded-xl">

      {/* imagen */}
      <div className="h-48 p-4 rounded w-auto">
        <img src={product} alt="" className="object-contain h-full w-full" />

      </div>

      {/* pequeña descripcion precio etc */}

      <div className="flex flex-col items-center text-center space-y-2">
        <h3 className="font-bold text-lg">Nombre del Producto</h3>
        <p className="text-gray-500 text-sm">$Precio</p>
      </div>



    </div>
  )
}

ProductCard.defaultProps = {
  image: '/assets/default.jpg',
  name: 'Producto Genérico',
  price: '$0.00',
  description: 'Descripción no disponible.',
};

export default ProductCard