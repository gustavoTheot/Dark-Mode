# Dark-Mode
<link rel="icon" href="img/favicon.png" />

Adicionar o modo noturno nos projetos é algo tão simples que depois desse documentação explicativa você vai querer implementar em todos os seus projetos.

### Tecnologias utilizadas

<img src="https://img.icons8.com/color/30/000000/sass-avatar.png"/> SCSS </br>
<img src="https://img.icons8.com/color/30/000000/javascript--v2.png"/> JS </br>
<img src="https://img.icons8.com/color/30/000000/html-5--v1.png"/> HTML </br>

# Explicando rápidamente o código

### CSS
No CSS foram criadas classes que serão ativadas assim que op JS interpretar que ocorreu um clique no botão de modo noturno, alterando linhas de códigos do style.

Style em scss:
```
body.dark-active{
    background-color: #181818;

    .dark-on{
        .moon{
            display: none;
        }
        .sun{
            display: block;
        }
    }

    .box{
        background-color: #333333;

        .text{
            h1{
                color: #8FABF2;
            }
            h4{
                color: #E0E0E0;
            }
        }

        .button-contact{
            button{
                background-color: $primary-color;
                color: #8FABF2;

                &:hover{
                    background-color: #8FABF2;
                    color: $primary-color;
                }
            }
        }
    }
}
```

### JS

A única função do JavaScript é verificar se ocorreu o clique no botão de alteração dos modos (dark and light).

```
const darkMode = document.querySelector('.dark-on')
const darkActive = 'dark-active'

darkMode.addEventListener('click', ()=>{
    document.body.classList.toggle(darkActive)
})
```





