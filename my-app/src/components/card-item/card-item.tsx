import { useAppDispatch } from '../../store/store'
import { deleteCity, updateWeather } from '../../store/weather/wetherSlice'

import { CityWeather } from '../../types/weather'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { fetchWeather } from '../../store/weather/api-actions'

type CardItemProps = {
  city: CityWeather
}

function CardItem({ city }: CardItemProps): JSX.Element {
  const dispatch = useAppDispatch()

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {city.name}
        </Typography>
        <Typography variant="h4" color="text.secondary">
          {Math.round(city.main.temp)}&deg;
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      <CardActions>
        <Button size="small" onClick={() => dispatch(deleteCity(city.id))}>
          Delete
        </Button>
      </CardActions>
      <CardActions>
        <Button size="small" onClick={() => console.log('update')}>
          Update
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardItem
