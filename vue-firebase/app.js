const app = Vue.createApp({
    data() {
        return{
            url: 'https://www.kausastudio.com',
            showBooks: true,
            books:[
                {title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav:true},
                {title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav:false},
                {title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav:true},
            ],
            x: 0,
            y: 0,
        }
    },

    methods: {
        changeTitle(title){
            // console.log('woo you clicked me!')
            // this.title = 'Words of thing'
            this.title = title
        },
        // toggleShowBooks(){
        //     this.showBooks = true
        // },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(title, isFav){
            indexOfBook = this.books.findIndex((book) => book.title == title)
            this.books[indexOfBook].isFav = !isFav
            console.log(indexOfBook, title, !isFav)
        },
    },

    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav);
        }
    }
})

app.mount('#app')