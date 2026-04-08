import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Articles.css";

export default function Articles({ articles }) {
  return (
    <div className="container">
      {articles.map((article) => (
        <Card key={article.id} sx={{  maxWidth: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={
                article.image ? article.image :
                "https://imgs.search.brave.com/GyitQBT3zL3FFh_nmSqpG4yv6NgnQiG3kIlLsGvqw3A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/MTcwNTg2NC9waG90/by90aGUtd29yZHMt/YnJlYWtpbmctbmV3/cy1vbi1hbi1hYnN0/cmFjdC1iYWNrZ3Jv/dW5kLmpwZz9iPTEm/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9MWk1/TlpzTERzR3RFZGF1/TWRzZUlzd3dZVkRU/VzFPZXZiVXI3Uk9T/aUMtQT0"
              }
              alt={article.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h6">
                {article.title}
              </Typography>

              <Typography variant="body2">{article.content}</Typography>

              <Typography variant="caption" display="block">
                Source: {article.source.name}
              </Typography>

              <Typography variant="caption" display="block">
                Published: {new Date(article.publishedAt).toLocaleString()}
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button size="small" href={article.url} target="_blank">
              Read More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
