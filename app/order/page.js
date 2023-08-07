import React from 'react'
const data = [
  {
    id: 1,
    order: '123456789',
    date: '00000',
    price: 55,
    product: 'pizza',
    status: 'approxmite 10 minutes'
  },
  {
    id: 2,
    order: '123456789',
    date: '00000',
    price: 55,
    product: 'pizza',
    status: 'approxmite 10 minutes'
  },
  {
    id: 3,
    order: '123456789',
    date: '00000',
    price: 55,
    product: 'pizza',
    status: 'approxmite 10 minutes'
  },
]

const Order = () => {
  return (
    <div className='container m-auto'>
      <table className='w-full border-separate  '>
        <thead>
          <tr className='text-left bg-red-200 '>
            <th>Order Id</th>
            <th>Date</th>
            <th>Price</th>
            <th>product</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
            {
              data.map((value) => {
                return (
                  <tr key={value.id} className='odd:bg-gray-300 py-8 even:bg-fuchsia-200'>
                    <td className='' >{value.order} </td>
                    <td className='' >{value.date} </td>
                    <td className='' >{value.price} </td>
                    <td className='' >{value.product} </td>
                    <td className='' >{value.status} </td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>

    </div>
  )
}

export default Order
