import { useContext} from 'react'
import NavBar from '../components/NavBar'
import { DataContext } from '../context/DataContext'
import { Card, Grid, Text } from "@nextui-org/react"

const Favoritos = () => {
  const { favorites } = useContext(DataContext)
  return (
    <div>
      <NavBar/>
      {
        favorites.map(favorite => (
          <Grid sm={12} md={5} key={favorite.name} style={{ marginBottom: 30 }}>
            <Card css={{ mw: "330px" }} >
              <Card.Header>
                <Text>{favorite.name}</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <p>
                  {favorite.height === 'unknown' ? 'Altura Desconocida' : `${favorite.height} cm`}
                </p>
                <p>
                  {favorite.mass === 'unknown' ? 'Peso Desconocido' : `${favorite.mass} kg`}
                </p>
                <p>
                  Edad: {favorite.birth_year === 'unknown' ? 'Desconocida' : favorite.birth_year}
                </p>
              </Card.Body>
              <Card.Divider />
            </Card>
          </Grid>
        ))
      }
      </div>
  )
}

export default Favoritos