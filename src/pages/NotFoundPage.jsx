import { Link } from "react-router-dom";
import cloudImage from "../../assets/images/cloud_warmcasino.png";
import "../theme/NotFound.css";

export default function NotFoundPage() {
  return (
    <main className="bl_page404">
      <h1>Error 404. The page does not exist</h1>

      <p>
        Sorry! The page you are looking for cannot be found. Perhaps the page
        you requested was moved or deleted. It is also possible that you made a
        small typo when entering the address. Go to the main page.
      </p>

      <div className="bl_page404__wrapper">
        <img
          className="bl_page404__img"
          src={cloudImage}
          alt="A cloud carrying the 404 illustration."
        />

        <div className="bl_page404__el1" aria-hidden="true" />
        <div className="bl_page404__el2" aria-hidden="true" />
        <div className="bl_page404__el3" aria-hidden="true" />

        <Link className="bl_page404__link" to="/">
          Go Home
        </Link>
      </div>
    </main>
  );
}
