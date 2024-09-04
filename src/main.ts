const container:HTMLElement | null = document.getElementById('app')

const button:HTMLButtonElement = document.createElement('button')

button.textContent = 'Lanzar notificacion'
container!.appendChild(button)

const notiHandler = async() => {
    if(Notification.permission === 'granted'){
        new Notification('Hi from my typescript Website')
    }else {
        const permission = await Notification.requestPermission()
        if(permission === 'granted'){
            new Notification('Gracias por permitirme entrar en tu vida')
        }
    }
}

button.addEventListener('click', ():void => {console.log('notification'); notiHandler() })