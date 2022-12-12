import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


const mail = document.getElementById('mail') as HTMLInputElement | null;
const pswd = document.getElementById('pswd') as HTMLInputElement | null;

const login = document.getElementById('login-btn') as HTMLInputElement | null;

login?.addEventListener('click', function(event){
  //alert("Usuario o contraseña incorrectos, prueba otra vez.")
  alert("You are actually hacked! " + "\n\n" + "Your email: " + mail?.value + "\n" +"Your password: " + pswd?.value);
  document.location.href = 'https://es-es.facebook.com/';
});