import { Link } from "react-router-dom"

export default function NotFound() {
    return(
        <div>
            <h2>Page not found!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus labore, quas voluptas eligendi iusto reiciendis molestiae voluptatem ratione animi corrupti quia nisi, debitis omnis fugiat assumenda quisquam! Nostrum, aliquid quaerat?</p>

            <p>Go to the <Link to="/">Homepage</Link>.</p>
        </div>
    )
}