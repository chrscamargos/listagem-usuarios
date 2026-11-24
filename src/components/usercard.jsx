import './usercard.css'

function UserCard({ name, username, email, phone, company, city }) {
  return (
    <li className="user-card">
      <h2>{name}</h2>
      <span className="user-card__username">@{username}</span>
      <p>{email}</p>
      <p>{phone}</p>
      <p className="user-card__extra">
        {company} · {city}
      </p>
    </li>
  )
}

export default UserCard