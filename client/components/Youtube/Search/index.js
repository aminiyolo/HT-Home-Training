import React, { useState, useCallback } from "react";
import { TextField } from "@material-ui/core";
import { BtnWrapper } from "../../Routine/Detail/style";
import axios from "axios";

const KEY = process.env.NEXT_PUBLIC_API_KEY;

const YoutubeSearch = ({ handleSearch }) => {
  const [value, setValue] = useState("");

  const handleClick = useCallback(async () => {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${KEY}`,
      {
        params: {
          q: value,
          part: "snippet",
          order: "viewCount",
        },
      },
    );
    handleSearch(res.data.items[0].id.videoId);
  }, [value]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="outlined-basic"
        label="운동 검색어 입력"
        variant="outlined"
        autoComplete="off"
      />
      <div>
        <BtnWrapper>
          <button onClick={handleClick} className="ok">
            검색
          </button>
        </BtnWrapper>
      </div>
    </div>
  );
};

export default YoutubeSearch;
