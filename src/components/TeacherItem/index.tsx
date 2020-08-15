import React from 'react'

import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://scontent.fsbj1-1.fna.fbcdn.net/v/t1.0-9/50196193_101240230976730_7826742680439750656_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=YnT5i6i-kJ0AX-9SiXy&_nc_ht=scontent.fsbj1-1.fna&oh=a9769721e52d5d405471c47447410a33&oe=5F5DDA90" alt="Eric Pereira"/>
            <div>
              <strong>Eric Pereira</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacus est, condimentum sed ligula vel, viverra ornare odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean vitae elementum dolor, eu vehicula orci. Suspendisse at magna sagittis, imperdiet urna in, tempor nulla. Ut pellentesque nisl et quam venenatis pellentesque. Aenean tincidunt egestas nisi nec tristique. Praesent dignissim posuere mattis. Fusce et lorem lacus. Vivamus consequat vulputate odio. Etiam eget velit eu tortor lacinia malesuada.
          <br /><br />          
          Nam sollicitudin velit odio, vel fringilla metus dapibus id. Quisque vel commodo tortor. Proin porta dolor ut lacus lobortis, id dapibus eros blandit. Proin ut justo mollis, ultricies enim ut, porttitor massa. Nulla facilisi. Curabitur convallis malesuada tellus, sit amet cursus ex gravida ac. In varius, mauris pretium molestie interdum, mauris sem blandit ex, eu mattis sem elit non eros. Praesent ullamcorper facilisis convallis. Nullam vitae scelerisque dui, non dignissim magna. Sed vehicula ligula et ligula tristique, ut sagittis libero rutrum. Nullam et auctor leo. Suspendisse dapibus venenatis consequat.
          </p>
          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type='button'>
              <img src={whatsappIcon} alt="Ícone whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem