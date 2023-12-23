import Loveseat_Sofa from '../assets/Loveseat Sofa.png'
import Luxury_Sofa from '../assets/Luxury_Sofa.png'
import Beige_Table from "../assets/Beige Table Lamp.png"
import Cozy_Sofa from '../assets/Cozy_Sofa.png'
import White_Drawer_unit from "../assets/White_Drawer_unit.png"
import tray_table_img from '../assets/tray_table_img.png'
import Table_Lamp1 from '../assets/Table_Lamp.png'
import Black_Brow_Side_table from '../assets/Black_Brow_Side_table.png'
import Light_Beige_Pillow from '../assets/Light-Beige-Pillow.png'
import Table_Lamp2 from '../assets/Table Lamp.png'
import Bamboo_basket from '../assets/Bamboo basket.png'
import Off_white_Pillow from '../assets/Off-white-Pillow.png'
import table_color1 from '../assets/table_color1.png'
import table_color2 from '../assets/table_color2.png'
import table_color3 from '../assets/table_color3.png'
import table_color4 from '../assets/table_color4.png'

import Tray_Table2 from '../assets/Tray_Table2.png'
import Tray_Table3 from '../assets/Tray_Table3.png'
import img_not_found from '../assets/img_not_found.jpg'



let product = [
    {
        id: 1,
        title: "Loveseat Sofa",
        new_price: "199.00",
        old_price: "400.00",
        product_img: Loveseat_Sofa,
        category: "Sofa",
        like: false,
        img_category: [Loveseat_Sofa, img_not_found, img_not_found],
        img_color: [table_color1, table_color2, table_color3, table_color4]
    },
    {
        id: 2,
        title: "Luxury Sofa",
        new_price: "299.00",
        old_price: "500.00",
        product_img: Luxury_Sofa,
        category: "Sofa",
        like: false,
        img_category: [Luxury_Sofa, img_not_found, img_not_found],
        img_color: [table_color1, table_color2, table_color3, table_color4]
    },
    {
        id: 3,
        title: "Table Lamp",
        new_price: "19.00",
        // old_price: "400.00",
        product_img: Beige_Table,
        category: "Lamp",
        like: false,
        img_category: [Beige_Table, img_not_found, img_not_found],
        img_color: [table_color1, table_color2, table_color3, table_color4]
    },
    {
        id: 4,
        title: "Cozy Sofa",
        new_price: "299.00",
        // old_price: "400.00",
        product_img: Cozy_Sofa,
        category: "Sofa",
        like: false,
        img_category: [Cozy_Sofa, img_not_found, img_not_found],
        img_color: [table_color1, table_color2, table_color3, table_color4]
    },
    {
        id: 5,
        title: "White Drawer unit",
        new_price: "89.99",
        old_price: "188.00",
        product_img: White_Drawer_unit,
        category: "Table",
        like: false,
        img_category: [White_Drawer_unit, img_not_found, img_not_found],
        img_color: [table_color1, table_color2, table_color3, table_color4]
    },
    {
        id: 6,
        title: "Black Tray table",
        new_price: "19.99",
        // old_price: "400.00",
        product_img: tray_table_img,
        category: "Table",
        like: false,
        img_category: [tray_table_img, Tray_Table2, Tray_Table3],
        img_color: [table_color1, table_color2, table_color3, table_color4]
    },
    {
        id: 7,
        title: "Table Lamp",
        new_price: "19.00",
        // old_price: "400.00",
        product_img: Table_Lamp1,
        category: "Lamp",
        like: false,
        img_category: [Table_Lamp1, img_not_found, img_not_found],
        img_color: [table_color1, table_color2, table_color3, table_color4]
    },
    {
        id: 8,
        title: "Black Brow Side table",
        new_price: "16.99",
        old_price: "30.00",
        product_img: Black_Brow_Side_table,
        category: "Table",
        like: false,
        img_category: [Black_Brow_Side_table, img_not_found, img_not_found],
        img_color: [table_color1, table_color2, table_color3, table_color4]
    },
    {
        id: 9,
        title: "Light Beige Pillow",
        new_price: "3.99",
        // old_price: "400.00",
        product_img: Light_Beige_Pillow,
        category: "Pillow",
        like: false,
        img_category: [Light_Beige_Pillow, img_not_found, img_not_found],
        img_color: [table_color1, table_color2, table_color3, table_color4]
    },
    {
        id: 10,
        title: "Table Lamp",
        new_price: "39.99",
        // old_price: "400.00",
        product_img: Table_Lamp2,
        category: "Lamp",
        like: false,
        img_category: [Table_Lamp2, img_not_found, img_not_found],
        img_color: [table_color1, table_color2, table_color3, table_color4]
    },
    {
        id: 11,
        title: "Bamboo Basket",
        new_price: "9.99",
        old_price: "28.00",
        product_img: Bamboo_basket,
        category: "Basket",
        like: false,
        img_category: [Bamboo_basket, img_not_found, img_not_found],
        img_color: [table_color1, table_color2, table_color3, table_color4]
    },
    {
        id: 12,
        title: "Off-white Pillow",
        new_price: "7.99",
        old_price: "25.00",
        product_img: Off_white_Pillow,
        categoryL: "Pillow",
        like: false,
        img_category: [Off_white_Pillow, img_not_found],
        img_color: [table_color1, table_color2, table_color3, table_color4]
    },
]

export default product;