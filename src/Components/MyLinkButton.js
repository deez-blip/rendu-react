import { Link } from "react-router-dom"

function MyButton({ id, text }) {
    return (
        <Link to={`/products/${id}`}>
            <button>
                {text}
            </button>
        </Link>
    )
}

export default MyButton