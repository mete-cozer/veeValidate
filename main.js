import './style.scss'

/* Buradaki Vue import etme şekli için Vite Config düzenlemesi gerçekleştirdim */
import { createApp } from 'vue/dist/vue.esm-bundler.js';

import { useForm } from 'vee-validate';
import * as yup from 'yup'

const app = createApp({
  delimeters: ['{', '}'],

  setup() {
    /* Validasyon Şemamız, lokalizasyonu var diye yup'u seçtim */
    /* Email'i biraz sakat ama fonksiyonların içine rahatça regex basabiliyoruz, sıkıntı yok */
    const { errors, handleSubmit, defineField } = useForm({
      validationSchema: yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
        city: yup.string().required(),
        checkbox: yup.boolean().required().oneOf([true], 'Checkbox is a required field'),
      }),
    });

    /* Vee Validate defineField ile state oluşturuyoruz. Vue.ref gibi değerleri felan kullanabiliyoruz, sıkıntı yok*/
    const [email] = defineField('email');
    const [password] = defineField('password');
    const [city] = defineField('city');
    const [checkbox] = defineField('checkbox');

    /* Form submitlemece, otomatik preventli */
    const onSubmit = handleSubmit(values => {
      alert(JSON.stringify(values, null, 2));
    });

    return {
      email,
      city,
      password,
      errors,
      checkbox,
      handleSubmit,
      onSubmit,
    };
  }
});
app.mount('#app');

//Bir fonksiyondan HTML inputunun propslarını (E devlet şifresine kadar) almaca, bir gün lazım olursa güzel iş görür
/* event.srcElement.__vnode.props.name */