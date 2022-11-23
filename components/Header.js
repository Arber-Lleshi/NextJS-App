import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return(
      <div>
        <h1 className={headerStyles.title}>
            <span>John Doe</span> Company
        </h1>
        <p className={headerStyles.description}>
            The freshest fish in the market.
        </p>
      </div>
  )
}

export default Header