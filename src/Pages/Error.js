import {Link} from "react-router-dom"
import Navigation from "../components/Navigation"

function Error() {
  return (
    <>
    <Navigation/>
    <div className="text-center">
    <div>Error 404 Page Not Found</div>
    <Link to="/" className="underline text-VDarkBlueCard" >Go to Homepage</Link>
    </div>
    </>
  )
}

export default Error