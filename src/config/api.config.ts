import { Produto } from "../model/produto";
import { Categoria } from "../model/categoria";

export const CATEGORIA : Categoria[] = [
    {id : 1, nome : "Celular Samsung"},
    {id : 2, nome : "Celular Motorola"}
]

export const PRODUTOS : Produto[] = [
    {id : 1, nome : "Celular Samsung", preco : 799.00, imagem : "samsung.jpg", categoria_id : 1},
    {id : 2, nome : "Celular Motorola", preco : 1000.00, imagem : "motorola.jpg", categoria_id : 2},
    {id : 3, nome : "Celular Lg", preco : 500.00, imagem : "lg.jpg", categoria_id : 3},
    {id : 4, nome : "Celular Xiaomi", preco : 2000.00, imagem : "xiaomi.jpg", categoria_id : 4},
    {id : 5, nome : "Celular Huawei", preco : 900.00, imagem : "huawei.jpg",  categoria_id : 5},
    {id : 6, nome : "Celular Asus", preco : 750.00, imagem : "asus.jpg", categoria_id : 6},

]