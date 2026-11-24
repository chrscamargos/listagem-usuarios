import { useEffect, useState } from 'react'
import api from '../services/api'
import UserCard from '../components/usercard'
import './home.css'

function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    api
      .get('/users')
      .then((response) => setUsers(response.data))
      .catch(() => setError('Não foi possível carregar os usuários. Verifique sua conexão e tente novamente.'))
      .finally(() => setLoading(false))
  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <p className="status">Carregando dados...</p>
  if (error) return <p className="status status--error">{error}</p>

  return (
    <main className="home">
      <h1>Usuários</h1>

      <input
        type="text"
        placeholder="Buscar por nome..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.length === 0 ? (
        <p className="status">Nenhum usuário encontrado.</p>
      ) : (
        <ul className="user-list">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              phone={user.phone}
              company={user.company.name}
              city={user.address.city}
            />
          ))}
        </ul>
      )}
    </main>
  )
}

export default Home