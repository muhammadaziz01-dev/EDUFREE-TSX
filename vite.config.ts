import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },

      { find: '@types', replacement: '/src/types' },
      { find: '@interface', replacement: '/src/types/interface' },
      { find: '@enums', replacement: '/src/types/enums' },

      
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@utils', replacement: '/src/utils' },


      { find: '@components', replacement: '/src/components' },
      { find: '@containers', replacement: '/src/components/containers' },
      { find: '@sections', replacement: '/src/components/sections' },
      { find: '@ui', replacement: '/src/components/ui' },
      

      { find: '@assets', replacement: '/src/assets' },
      { find: '@imgs', replacement: '/src/assets/imgs' },
      { find: '@icons', replacement: '/src/assets/icons' },

      


      { find: '@pages', replacement: '/src/pages' },
      { find: '@layout', replacement: '/src/layout' },
      { find: '@service', replacement: '/src/service' },


      { find: '@veraeblis', replacement: '/src/components/veraeblis' },

      

    ]
  }
})
