import {Button, Grid} from "@mui/material";
import {Filter} from "@mui/icons-material";
import FilterDrawer from "../components/catalogo/FilterDrawer.jsx";
import {useState} from "react";
import jsonData from '../../dao/post.json';
import {useParams,json} from "react-router-dom";
import Layout from "../components/catalogo/Layout.jsx";



const subnavbar = [
    {
        button: 'Categoria',
        tipo: ['inglés','programación','álgebra', 'historia','química','física','cálculo','guitarra','piano']

    },
    {
        button: 'Tipo de clase',
        tipo: ['individual','grupal']
    },
    {
        button: 'Frecuencia',
        tipo:['única','semanal','mensual']
    },
    {
        button:'Calificacion',
        tipo: ['5 estrellas', '4 estrellas', '3 estrellas', '2 estrellas', '1 estrella']
    },

]




const Catalogo = () =>{
/*
    const { text } = useParams();

    const search = (jsonData, text) => {
        return jsonData.filter(row => row.categoria === text);
    }
    const [name, setName ]=  useState('');
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState('');
    const [categories, setCategories]  = useState([]);

    const [cardData, setCardData] = useState(()=> {
        if(text !== undefined){
            console.log(jsonData);
            return [search(jsonData,text)]
        }
        else{
            console.log(jsonData);
            return [
                jsonData
            ]
        }

    });

    const handleOpen = (name) => {
        setOpen(true);
        setName(name);
        const a = subnavbar.find(item => item.button === name).tipo;
        setCategories(a);
        console.log(a);


    };

    const handleClose = () => {
        setOpen(false);
    };












    return(

        <Grid container spacing={0} height={'auto'} sx={{width:'100%'}} justifyContent={'center'} gap={'40px'}>
            <Grid item sx={{height:'10%',display:'flex', justifyContent:'center',alignItems:'center', gap:'10px'}} xs={12} sm={6} md={12}>
                {
                    subnavbar.map((item,index) => (
                        <>
                            <Button  sx={{border:'1px solid grey', width:'10%', borderRadius:'10px'} }  onClick={() => handleOpen(item.button)} key={index}>{item.button}

                            </Button>

                        </>


                    ))

                }


                {
                  <FilterDrawer
                      open={open}
                      onClose={handleClose}
                      categories={categories}
                      handleClose={handleClose} s
                      setCategory = {setCategory}
                        cardData = {cardData}
                      category = {category}
                        setCardData={setCardData}
                      name = {name}
                      jsonData={jsonData}/>
                }


            </Grid>
        </Grid>
                )
                 */
return(<Layout></Layout>);


}





export default Catalogo;