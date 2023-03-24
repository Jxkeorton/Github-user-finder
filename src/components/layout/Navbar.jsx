import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
        <div classname='container mx-auto'>
            <div className='flex-none px-2 mx-2'>
                <FaGithub className='inline pr-2 text-3xl' />
                <Link to='/' className='text-lg font-bold align-middle' >
                {title}
                </Link>
            </div>

            <div className='absolute right-0'>
                <div className=''>
                    <Link to='/' className='btn btn-ghost btn-sm rounded-btn top-0 right-0'>
                        Home
                    </Link>
                    <Link to='/about' className='btn btn-ghost btn-sm rounded-btn top-0 right-0'>
                        About
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

Navbar.defaultProps = {
    title: 'Github Finder',
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar
