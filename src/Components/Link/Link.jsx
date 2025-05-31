import PropTypes from "prop-types"

const Link = ({route}) => {
  return (
    <li className='mr-9' key={route.id}><a href={route.path}>{route.name}</a></li>
  )
}

Link.proptypes = {
    route: PropTypes.object
}
export default Link