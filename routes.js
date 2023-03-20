const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage'
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut'
        }
    },{
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const {name = "Stranger"} = request.params;
            const {lang} = request.query;

            if(lang === 'id'){
                return `Hai, ${name}!`
            }

            return `Hello, ${name}!`;
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
    {
        method: 'POST',
        path: '/test',
        handler: (request, h)=>{
            const {name,age} = request.payload;
            return `${name} ${age}`;
        }
    },
    {
        method: 'GET',
        path: '/h',
        handler: (request, h)=>{
            return h.response({name: "affad"})
            .code(201)
            .type('Content-Type', 'application/json')
        }
    }
]

module.exports = routes;