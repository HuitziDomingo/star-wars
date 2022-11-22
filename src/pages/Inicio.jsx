import { useEffect, useState, useContext } from 'react'
import { People } from '../services/star-wars'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Card, Grid, Text, Button, Row, Loading } from "@nextui-org/react"
import NavBar from '../components/NavBar'
import { DataContext } from '../context/DataContext'

const Inicio = () => {
    const { favorites, setFavorites } = useContext(DataContext)

    const [people, setPeople] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const loadData = async () => {
        let loading = await People(page)
        setPeople(loading.results)
        setLoading(true)
    }

    const addToFavorites = item => {
        const newFavorite = [...favorites, item].filter((value, index, self) => {
            return index === self.findIndex(t => {
                return t.name === value.name
            })
        })
        setFavorites(newFavorite)
    }

    const removeFromFavorites = item => {
        const removeFavorite = [...favorites].filter(value => {
            return value.name !== item.name
        })
        setFavorites(removeFavorite)
    }

    const canShowFavorite = item => {
        let canShow = true
        const value = favorites.find(t => t.name === item.name) 
        if(value){
            canShow = false
        }
        return canShow
    }

    useEffect(() => {
        loadData()
    }, [page])

    return (
        <>
            {
                !loading
                    ?
                    <Loading size="xl" >Cargando <Loading type="points" /></Loading>
                    :
                    <div style={{
                        overflow: 'auto',
                    }}>
                        <NavBar />
                        <InfiniteScroll
                            dataLength={people}
                            next={() => setPage(page + 1)}
                            hasMore={true}
                            style={{
                                display: 'grid',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gridTemplateColumns: '33.3% 33.3% 33.3%'
                            }}
                        >
                            {
                                page < 10 ?
                                    people && people.map(person => (
                                        <Grid sm={12} md={5} key={person.name} style={{ marginBottom: 30 }}>
                                            <Card css={{ mw: "330px" }} >
                                                <Card.Header>
                                                    <Text>{person.name}</Text>
                                                </Card.Header>
                                                <Card.Divider />
                                                <Card.Body css={{ py: "$10" }}>
                                                    <p>
                                                        {person.height === 'unknown' ? 'Altura Desconocida' : `${person.height} cm`}
                                                    </p>
                                                    <p>
                                                        {person.mass === 'unknown' ? 'Peso Desconocido' : `${person.mass} kg`}
                                                    </p>
                                                    <p>
                                                        Edad: {person.birth_year === 'unknown' ? 'Desconocida' : person.birth_year}
                                                    </p>
                                                </Card.Body>
                                                <Card.Divider />
                                                <Card.Footer>
                                                    <Row justify="flex-end">
                                                        {
                                                            canShowFavorite(person)
                                                                ?
                                                                <Button size="sm" shadow onClick={() => addToFavorites(person)}>Favorito</Button>
                                                                :
                                                                <Button size="sm" shadow color="error" onClick={() => removeFromFavorites(person)}>Remover</Button>
                                                        }
                                                    </Row>
                                                </Card.Footer>
                                            </Card>
                                        </Grid>
                                    ))
                                    : setPage(1)
                            }
                        </InfiniteScroll>
                    </div>
            }
        </>
    )
}

export default Inicio