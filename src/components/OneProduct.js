import { Link } from 'react-router-dom';
const OneProduct = ({ image, title, link }) => {
  let srcimage = require('../pics/categories/' + image);
  return (
    <div id="products" class="col mb-5">
      <div id='card' class="card h-100">

        {/* Product image */}
        <img class="card-img-top" src={srcimage} alt="Product Image" />

        {/* Product details */}
        <div class="card-body p-4">
          <div class="text-center">
            {/* Product name */}
            <h5 id='title' class="fw-bolder">{title}</h5>
          </div>
        </div>

        {/* Product actions */}

        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <Link to={link} className='header-link'>
            <div class="text-center">
              <a id='btn' class="btn btn-outline-dark mt-auto">View More</a>
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default OneProduct;

