import { Routes, Route } from "react-router-dom";
import News from "./News";
import ArticleDetail from "./ArticleDetail"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<News />} />
      <Route path="/article" element={<ArticleDetail />} />
      <Route path="*" element={<h2>404 Page Not Found</h2>} />
    </Routes>
  );
}

export default App;