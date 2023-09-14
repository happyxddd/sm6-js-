let users = [
    {
        id:1,
        tittle : 'mflemgle',
        text: 'gnhejgejijbsijfgsojgkeasjgerbiok',
        name: 'Nikita',
        date: '13.09.2023'
    },
    {
        id:2,
        tittle : 'mflemgle1',
        text: 'gnhejgejijbsijfgsojgkeasjgerbiok1',
        name: 'Nikita1',
        date: '13.09.2023'
    },
    {
        id:3,
        tittle : 'mflemgle2',
        text: 'gnhejgejijbsijfgsojgkeasjgerbiok2',
        name: 'Nikita2',
        date: '13.09.2023'
    }
]
Placement = document.querySelector('.main-case')

for (i= 0; i <= users.length; i++){
    let result = '<div class="news"><div class="flex-first"><h1 class="h1-text">'+users[i].tittle+'</h1><h3 class="data-text">'+users[i].date+'</h3></div><p class="text-news">'+users[i].text+'</p><div class="flex-second"><p>'+users[i].name+'</p><p>'+users[i].id+'</p></div></div>'
    Placement.insertAdjacentHTML('beforeend', result)
}
