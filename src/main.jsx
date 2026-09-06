import ReactDOM from 'react-dom/client'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.css'
import './styles/hero-refresh.css'
import './styles/sections-refresh.css'
import './styles/type-refresh.css'
  import { LanguageProvider } from "./context/LanguageContext"

ReactDOM.createRoot(document.getElementById('root')).render(
<LanguageProvider>
    <App />
</LanguageProvider>
)
