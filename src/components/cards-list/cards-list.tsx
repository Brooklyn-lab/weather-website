import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { CityWeather } from '../../types/weather'
import CardItem from '../card-item/card-item'

type CardsListProps = {
  cities: CityWeather[]
}

function CardsList({ cities }: CardsListProps): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cities.map((city) => (
          <Grid item xs={2} sm={4} md={4} key={city.id}>
            <CardItem city={city} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default CardsList
