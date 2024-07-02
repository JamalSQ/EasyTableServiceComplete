import express from 'express'
import qrcode from 'qrcode';
const router=express.Router()
import { homeController} from '../controllers/homeController.js'
import  productController from '../controllers/productController.js'
import { contactController} from '../controllers/contactController.js'
import { menuController} from '../controllers/menuController.js'

router.get('/',homeController)
router.get('/contact',contactController)

router.get('/drinks',productController.listDrinks)
router.get('/desi',productController.listDesi)
router.get('/pizza',productController.listPizza)
router.get('/menu',menuController)


// Route to generate the QR code
router.get('/qr', async (req, res) => {
    const url = 'http://https://f315-103-186-78-177.ngrok-free.app/menu'; // URL to your menu page
    try {
        const qrCodeDataURL = await qrcode.toDataURL(url);
        res.render('qr', { qrCodeDataURL });
    } catch (err) {
        console.error('Error generating QR code', err);
        res.status(500).send('Error generating QR code');
    }
});

export default router
