const API = 'https://swapi.dev/api'

export async function People(page) {
    let data = await fetch(`${API}/people/?page=${page}`)
    return await data.json()
}

