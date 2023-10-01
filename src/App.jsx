import { useState, useEffect } from "react";
import { ImageCard } from "./components/imageCard";
import { ImageSearch } from "./components/imageSearch";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=36524897-b919ee23415214d3798ace211&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <ImageSearch searchText={(text) => setTerm(text)} />
      <div className="container mx-auto">
        {!isLoading && images.length === 0 && (
          <h1 className="flex justify-center text-4xl font-bold mt-32">
            No Images found for "{term}"
          </h1>
        )}
        {isLoading ? (
          <div className="flex justify-center text-5xl font-bold mt-32">
            Loading...
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
