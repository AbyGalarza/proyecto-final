import React from "react"
import { useContext, useState } from "react"
import { Container, Button } from "@mui/material"
import CartContext from "../../context/CartContext"
import { Delete } from "@mui/icons-material"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Cart.css'

const Cart = () => {
    const { cartListItems, totalPrice } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    console.log("cartListItems desde checkout: ", cartListItems)
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map( item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
            }
        } ),
        total: totalPrice
    })
    const [success, setSuccess] = useState()
    // const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue})
        // saveData({...order, buyer: formValue})
    }

    //DRY = Dont Repeat Yourself
    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    // const finishOrder = () => {
    //     navigate('/')
    // }

    // const saveData = async (newOrder) => {
    //     const orderFirebase = collection(db, 'ordenes')
    //     // const orderDoc = await addDoc(orderFirebase, newOrder)
    //     console.log("orden generada: ", orderDoc.id)
    //     setSuccess(orderDoc.id)
    //     // cleanCartProducts()
    // }

    return(
        <Container className='container-general'> 
        <h2>Checkout: </h2>
        <div className='cart-section'>
            <Box component="div" sx={{display: 'flex', justifyContent: 'space-around'}} className="col-cart-table__head">
                <Box component="p" sx={{padding: '2%'}}>Producto</Box>
                <Box component="p" sx={{padding: '2%'}}>Descripción</Box>
                <Box component="p" sx={{padding: '2%'}}>Precio unitario</Box>
                <Box component="p" sx={{padding: '2%'}}>Cantidad</Box>
                <Box component="p" sx={{padding: '2%'}}>Quitar</Box>
            </Box>
            {cartListItems.map((item)=> {
                const {id, title, image, price} = item
                return(
                    <div className='container-general-cart' key={id}>
                    <div className='cart-table__content-img'>
                        <img src={`/${image}`} />
                    </div>
                    <div className='cart-table__content-title'>
                        <p>{title}</p>
                    </div>
                    <div className='cart-table__content-price'>
                        <p>$ {price}</p>
                    </div>
                    <div className='cart-table__content-quantity'>
                        <p>1</p>
                    </div>
                    <div className='cart-table__content-price'>
                        <button className='btn-delete'>
                            <Delete/>
                        </button>
                    </div>
                </div>
               )
            })}
            <div className='cart-footer'>
                <div className='cart-checkout-details'>
                    <div className='cart-checkout__subtotal'>
                        <p>Subtotal</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <div className='cart-checkout__total'>
                        <p>Total</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <Button className='btn-custom'>Completar Compra</Button>
                </div>
            </div>
        </div>
        {/* <Modal> */}
            {success ? (
                <div>
                    La order se genero con exito!
                    Numero de orden: 
                    <button>Aceptar</button>
                </div>
            ) : (
                <form className="form-contact">
                    <TextField 
                        id="outlined-basic" 
                        name="name"
                        label="Nombre y Apellido" 
                        variant="outlined" 
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="phone"
                        label="Telefono" 
                        variant="outlined" 
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="email"
                        label="Mail" 
                        variant="outlined" 
                    />
                    <button type="submit">Enviar</button>
                </form>
            )}
            
        {/* </Modal> */}
    </Container>
   )
}

export default Cart