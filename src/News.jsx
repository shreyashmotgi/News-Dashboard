import { useState, useEffect } from "react";
import Articles from "./Articles";
import Navbar from "./Navbar";
import Category from "./Category";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function News() {
  const API_KEY = import.meta.env.VITE_API_KEY || "your_key";
  const URL1 = "https://gnews.io/api/v4/search?q=";
  const URL2 = "https://gnews.io/api/v4/top-headlines?category=";
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("general");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let updateSearch = (value) => {
    setQuery(value);
    setCategory("");
  };

  let updateCategory = (category) => {
    setCategory(category);
    setQuery("");
  };

  useEffect(() => {
    const fetcharticles = async () => {
      setLoading(true);
      try {
        let url;

        if (query) {
          url = `${URL1}${query}&lang=en&max=9&apikey=${API_KEY}`;
        } else {
          url = `${URL2}${category}&lang=en&max=9&apikey=${API_KEY}`;
        }

        let res = await fetch(url);
        let data = await res.json();
        console.log(data);

        if (data.errors) {
          setError(data.errors[0]);
          setArticles([]);
        } else if (data.articles) {
          setArticles(data.articles);
          setError(null);
        } else {
          setArticles([]);
          setError("No articles found");
        }
      } catch (err) {
        setError("Error fetching data");
      }
      setLoading(false);
    };

    fetcharticles();
  }, [query, category]);

  return (
    <div>
      <Navbar updateSearch={updateSearch} />
      <Category updateCategory={updateCategory} />
      {error ? (
        <h1 style={{ color: "red" }}>{error}</h1>
      ) : loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Articles articles={articles} />
      )}
          </div>
        );
}
