import { useLocation, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function ArticleDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const article = state;

  if (!article) {
    return (
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Typography variant="h6">
          No article data available
        </Typography>
        <Button onClick={() => navigate("/")}>Go Back Home</Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      
      <Button
        variant="outlined"
        onClick={() => navigate(-1)}
        sx={{ mb: 2 }}
      >
        Back
      </Button>

      <Typography variant="h4">
        {article.title}
      </Typography>

      <Card sx={{ mb: 2 }}>
        <CardMedia
          component="img"
          height="400"
          image={
            article.image
              ? article.image
              : "https://imgs.search.brave.com/GyitQBT3zL3FFh_nmSqpG4yv6NgnQiG3kIlLsGvqw3A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/MTcwNTg2NC9waG90/by90aGUtd29yZHMt/YnJlYWtpbmctbmV3/cy1vbi1hbi1hYnN0/cmFjdC1iYWNrZ3Jv/dW5kLmpwZz9iPTEm/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9MWk1/TlpzTERzR3RFZGF1/TWRzZUlzd3dZVkRU/VzFPZXZiVXI3Uk9T/aUMtQT0"
          }
          alt={article.title}
        />
      </Card>

      <Typography variant="body1" sx={{ mb: 2 }}>
        {article.description}
      </Typography>

      <Typography variant="body2" sx={{ mb: 2 }}>
        {article.content}
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Typography variant="caption" display="block">
          <strong>Source:</strong> {article.source.name}
        </Typography>

        <Typography variant="caption" display="block">
          <strong>Published:</strong>{" "}
          {new Date(article.publishedAt).toLocaleString()}
        </Typography>
      </Box>

      
      <Button
        variant="contained"
        href={article.url}
        target="_blank"
      >
        Read Full Article
      </Button>
    </Container>
  );
}