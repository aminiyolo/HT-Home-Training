import { useState } from "react";
import Search from "./Search/index";

const Youtube = () => {
  const [url, setUrl] = useState("");

  return (
    <div>
      <div>
        <Search setUrl={setUrl} />
      </div>
      <div style={{ marginTop: "5rem" }}>
        <iframe
          width="85%"
          height="400"
          src={`https://www.youtube.com/embed/${url}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Youtube;
