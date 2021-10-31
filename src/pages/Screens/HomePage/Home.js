import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
    <h1>heloca nha</h1>
    <Link to='/home'>
            <button className='btn btn-round' style={{ marginTop: '30px' }}>Back to Home</button>
          </Link>
    </>
  )
}
