import { useRecoilState } from "recoil";
import { loadingState, imagesState } from "./state/images";
function App() {
  const [images, setImages] = useRecoilState(imagesState);
  const [loading, setLoading] = useRecoilState(loadingState);

  const fetchImages = async () => {
    setLoading(true);
    fetch("https://picsum.photos/v2/list?page=1&limit=9")
      .then((response) => response.json())
      .then((responseJson) => {
        setImages(responseJson);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex-center flex-column">
          <h1>Recoil</h1>
          <button className="btn" onClick={() => fetchImages()}>
            Fetch Images
          </button>
          {loading && <h1>loading...</h1>}
          <div className="flex-center image-wrapper">
            {images.map(({ download_url, id, author }) => (
              <img className="image" key={id} src={download_url} alt={author} />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
