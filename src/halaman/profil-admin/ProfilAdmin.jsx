import { useEffect, useState } from "react";

export default function ProfilAdmin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    get("/product.json?auth=" + AUTH_URL)
      .then((product) =>
        setData(
          Object.keys(product).map((keys) => ({ id: keys, ...product[keys] }))
        )
      )
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = (getId) => {};

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log("data", data);

  return (
    <div className="vw-100 vh-100 align-items-center d-flex justify-content-center">
      <div className="card p-5 w-75">
        <h1>Profil Admin</h1>
        <ul className="list-group">
          {data.map((list, index) => (
            <li key={index} className="list-group-item">
              <a href={"/product/" + list.id}>{list.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
