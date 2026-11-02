
import { Router } from 'express';

const router = Router();
const hora = new Date().toLocaleTimeString('es-CO');

router.get('/', (req, res) => res.render('index', {etiqueta: 'Mi primer Sitio Web with Node', hora: hora}));
router.get('/sobre_nosotros', (req, res) => res.render('sobre_nosotros.ejs', {etiqueta: 'Como conduzco'}));
router.get('/menu', (req, res) => res.render('menu.ejs', {etiqueta: 'Menu Empresarial'}));
router.get('/conctato', (req, res) => res.render('conctato.ejs', {etiqueta: 'Pagina de contactos'}));
router.get('/registro', (req, res) => res.render('registro.ejs', {etiqueta: 'Aqui se mostrara el formulario para crear un nuevo usuario', hora:hora}));


// --- RUTA GET PARA EL LOGIN (Única y con mensaje incluido)
router.get('/login', (req, res) => {
    res.render('login', {
        etiqueta: 'vista de inicio de sesion',
        mensaje: null
    });
});

// --- RUTA POST PARA PROCESAR EL LOGIN ---
router.post('/login', (req, res) => {
    const { usuario, contrasena } = req.body;

    if (usuario === 'admin' && contrasena === '1234') {
        return res.redirect('/menu');
    }

    return res.render('login', {
        etiqueta: 'Vista de inicio de sesion',
        mensaje: 'Usuario o contraseña incorrectos'
    });
});

export default router;

