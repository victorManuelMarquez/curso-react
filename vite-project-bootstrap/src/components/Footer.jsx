import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../assets/css/footer.css'

const Footer = () => {
  return (
    <div className='container'>
      <footer className='py-5'>
        <div className='row'>
          <div className='col-6 col-md-2 mb-3'>
            <h5>Section</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>Home</a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>Features</a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>Pricing</a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>FAQs</a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>About</a>
              </li>
            </ul>
          </div>
          <div className='col-6 col-md-2 mb-3'>
            <h5>Section</h5>
            <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>Home</a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>Features</a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>Pricing</a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>FAQs</a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>About</a>
              </li>
            </ul>
          </div>
          <div className='col-6 col-md-2 mb-3'>
            <h5>Section</h5>
            <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>Home</a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>Features</a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>Pricing</a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>FAQs</a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>About</a>
              </li>
            </ul>
          </div>
          <div className='col-md-5 offset-md-1 mb-3'>
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className='d-flex flex-column flex-sm-row w-100 gap-2'>
                <label htmlFor="newsletter" className='visually-hidden'>Email address</label>
                <input type="text" id='newsletter' className='form-control' placeholder='Email address'/>
                <button className='btn btn-primary' type='button'>Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className='d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top'>
          <p>&copy; Bootstrap v5</p>
          <ul className='list-unstyled d-flex'>
            <li className='ms-3'>
              <a href="#" className='link-body-emphasis'><i className='bi bi-twitter-x'></i></a>
            </li>
            <li className='ms-3'>
              <a href="#" className='link-body-emphasis'><i className='bi bi-instagram'></i></a>
            </li>
            <li className='ms-3'>
              <a href="#" className='link-body-emphasis'><i className='bi bi-facebook'></i></a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer