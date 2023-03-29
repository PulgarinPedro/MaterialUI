import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src="https://i.pinimg.com/564x/a3/80/86/a3808660fcf50b7602e15c6a8ca6c469.jpg" alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://m.gjcdn.net/game-screenshot/300/19693263-v2cvxtp9-v4.webp"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Se podria decir que esto es una prueba de lo que pueden
         hacer las plantillas para el desarrollo de TypeScript y 
         mejor vista de la aplicacion web que este quiere presentar,
         asi que doy concluido esta opinión.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>TypeScript</Typography>
          <Typography paragraph>
           
          </Typography>
          <Typography paragraph>
          TypeScript es un lenguaje de programación libre y de código abierto desarrollado y
           mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade 
           tipos estáticos y objetos basados en clases. Anders Hejlsberg, diseñador de C# y creador 
           de Delphi y Turbo Pascal, ha trabajado en el desarrollo de TypeScript.​ 
           TypeScript es usado para desarrollar aplicaciones JavaScript que 
           se ejecutarán en el lado del cliente o del servidor, o extensiones 
           para programas (Node.js y Deno).
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
