import { useEffect, useState, useContext } from 'react'
import { People } from '../services/star-wars'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Card, Grid, Text, Button, Row, Loading } from "@nextui-org/react"
import NavBar from '../components/NavBar'
import { DataContext } from '../context/DataContext'

const Inicio = () => {
    const { num } = useContext(DataContext)

    const [people, setPeople] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const loadData = async () => {
        let loading = await People(page)
        setPeople(loading.results)
        setLoading(true)

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
                                    people && people.map(people => (
                                        <Grid sm={12} md={5} key={people.name} style={{ marginBottom: 30 }}>
                                            <Card css={{ mw: "330px" }} >
                                                <Card.Header>
                                                    <Text>{people.name}</Text>
                                                </Card.Header>
                                                <Card.Divider />
                                                <Card.Body css={{ py: "$10" }}>
                                                    <p>
                                                        {people.height === 'unknown' ? 'Altura Desconocida' : `${people.height} cm`}
                                                    </p>
                                                    <p>
                                                        {people.mass === 'unknown' ? 'Peso Desconocido' : `${people.mass} kg`}
                                                    </p>
                                                    <p>
                                                        Edad: {people.birth_year === 'unknown' ? 'Desconocida' : people.birth_year}
                                                    </p>
                                                </Card.Body>
                                                <Card.Divider />
                                                <Card.Footer>
                                                    <Row justify="flex-end">
                                                        <Button size="sm">Favorito</Button>
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