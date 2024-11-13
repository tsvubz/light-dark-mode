import useLocalStorage from "../hooks/useLocalStorage"
import './Theme.css'

const Theme = () => {

    const[theme, setTheme] = useLocalStorage('theme', 'dark')

    const toggleTheme = () => {
        setTheme(theme === 'light'? 'dark' : 'light')
    }
    
  return (
    <div className="theme" mode={theme}>
        <div className="content">
            <p>The current theme is&nbsp;
                {theme === 'light' ? 'light' : 'dark'} 
                &nbsp;mode
            </p>
            <button onClick={() => toggleTheme()}>Change Theme</button>
        </div>
    </div>
  )
}

export default Theme