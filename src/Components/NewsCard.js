import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {CardActionArea} from "@mui/material";
import {useNavigate, Link} from "react-router-dom"

const NewsCard = ({newsImage, newsTitle, newsDescription, url}) => {
  const navigate = useNavigate()

  return (
      <Card sx={{maxWidth: "30vw", marginLeft: "1rem", borderRadius: 2, border: 1,marginBottom: 2}}>
          <CardActionArea href={url}>
             <CardMedia
               component="img"
              height="250rem"
               image={newsImage}
               alt="image"
             />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {newsTitle} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {newsDescription}
                </Typography>
              </CardContent>
            </CardActionArea>
        </Card>
  )
}

export default NewsCard;
