import { defineConfig } from 'vite';
//Vite için Vue plugin'i. Bunu kurmak lazım, aslında acayip şeyler var ama maliyet-zaman :/
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        // Önemli olabilir açmamıza gerek yok Vue 3'de default halledilmiş. Aklımızda klasın diye silmeyelim
        // compatConfig: {
        //   MODE: 2
        // }
      }
    }
  })],
  define: {
    //Consol'a warning çığırtmasınlar diye bele yapıyoruz
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
  }
});