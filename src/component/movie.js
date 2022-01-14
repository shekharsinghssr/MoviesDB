import { useEffect } from "react";
import { useParams } from "react-router-dom";
// https://imdb-api.com/en/API/Title/k_xc310hau/tt0800369

export default function Movie() {
  const { movieid } = useParams();
  let response = {};
  // const [response,setResponse]=useState({})

  useEffect(async () => {
    const api = `https://imdb-api.com/en/API/Title/k_xc310hau/${movieid}`;
    const result = await fetch(api);
    response = await result.json();
    console.log(response);
  }, []);

  return (
    <div>
      {/* <div className="card" >
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div> */}
    </div>
  );
}
