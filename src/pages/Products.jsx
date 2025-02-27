import React, { useEffect } from 'react'
import Card from '../ui/Card'

export default function Products() {
    const [products, setProducts] = React.useState([])
    const [page, setPage] = React.useState(1)
    const [loading, setLoading] = React.useState(false)
    const [hasMore, setHasMore] = React.useState(true)

    useEffect(() => {
        getProducts()
    }, [page])

    async function getProducts() {
        setLoading(true)
        await fetch(`http://localhost:8000/api/products?page=${page}`)
            .then(res => res.json())
            .then((data) => {
                if (data.data.length === 0) {
                    setHasMore(false)
                } else {
                    setProducts(prevProducts => [...prevProducts, ...data.data])
                }
                console.log(data)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    function loadMore() {
        setPage(prevPage => prevPage + 1)
    }

    return (
        <div className='max-w-7xl m-auto'>
            <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
                {
                    products.map((product, index) => {
                        return (<Card key={index} image={product.images[0]} slug={product.slug} name={product.name} price={product.price} />)
                    })
                }
            </div>
            
            {hasMore && (
                <div className="flex justify-center my-6">
                    <button 
                        onClick={loadMore}
                        disabled={loading}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
                    >
                        {loading ? 'Loading...' : 'Load More'}
                    </button>
                </div>
            )}
        </div>
    )
}