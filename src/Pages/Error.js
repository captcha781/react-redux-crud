import {Link} from "react-router-dom"

function Error() {
  return (
    <div className="text-center">
    <div>Error 404 Page Not Found</div>
    <Link to="/" className="underline text-VDarkBlueCard" >Go to Homepage</Link>
    </div>
  )
}

export default Error