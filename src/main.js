import { createApp } from 'vue'
import ElementPlus from 'element-plus'

// 1. Design tokens (base values)
import './tokens.css'
// 2. Semantic tokens (light mode mappings)
import './tokens-semantic.css'
// 3. Element Plus default styles
import 'element-plus/dist/index.css'
// 4. Our theme overrides (must come AFTER Element Plus CSS)
import './theme/element-plus-theme.scss'
// 5. App styles
import './style.css'

import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
