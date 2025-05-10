import { useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-6">
                <h1 className="text-4xl font-bold text-gray-800">{count}</h1>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={() => setCount(prev => prev - 1)}
                        className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition"
                    >
                        -
                    </button>
                    <button
                        onClick={() => setCount(prev => prev + 1)}
                        className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App
