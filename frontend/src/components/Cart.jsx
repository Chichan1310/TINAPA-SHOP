const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl">🛒</span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
          <a href="/" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
            Continue Shopping
          </a>
        </div>
      ) : (
        <>
          <div className="space-y-6 mb-8">
            {cart.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-lg">
                <div>
                  <h4 className="font-bold text-lg">{item.name}</h4>
                  <p className="text-indigo-600 text-xl">Rp {item.price.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <button className="text-red-500 hover:text-red-700 font-semibold">Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 sticky bottom-0">
            <div className="flex justify-between items-center mb-6">
              <span className="text-2xl font-bold">Total:</span>
              <span className="text-3xl font-bold text-indigo-600">Rp {total.toLocaleString()}</span>
            </div>
            <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart

