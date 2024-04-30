import {Box, Button, createTheme, ThemeProvider, Typography} from "@mui/material";
import {data_navbar} from "../../utils/data_components/data.js";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState} from "react";
import useDictionary from "../../utils/hooks/useDictionary.js";
import '../../assets/fonts/Tisa/Tisa.css'
import '../../assets/fonts/Inter/Inter.css'
const theme = createTheme({
    typography: {
        fontFamily: 'Tisa Sans Pro Regular',
        fontSize:'15px',


    },
});




const SidebarFilter = () => {
    const [filter,setFIlter] = useState(false);
    const [checked, setChecked] = useState(false);
    const { dictionary, addWord, removeWord } = useDictionary();

    const sideBar_sx = {
        layout:{
            display:{xs:'',md:"flex"},
            backgroundColor:'#6237A0',
            flexDirection:'column',
            justifyContent:'center',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)',
        },
        apply:{
            display:{xs:'',md:'flex'},
            justifyContent: {xs:'',md:'end'},
            padding:{xs:'',md:"10px"},
            paddingRight:{xs:'',md:"12px"},
            alignItems:'center',
            backgroundColor: '#9754CB',
            borderBottom:{xs:'',md:"2px solid #e4e4e4"},
        },
        button:{
            color:'#fff',
            border:'1px solid #fffefe',
            backgroundColor: '#DEACF5',
            marginRight:'10px',
        },
        types:{
            display:{xs:'',md:"flex"},
            flexDirection:'column',
            gap:'20px',
            padding:{xs:'',md:"20px"},
        },
        title:{
            backgroundColor: '#9754CB',
            padding:{md:'5px'},
            border:{xs:'',md:"2px solid #e4e4e4"},
            display:'flex',
        },
        category:{
            display:{xs:'',md:"flex"},
            flexDirection:'column',
            backgroundColor: '#DEACF5',
            gap:{xs:'',md:'5px'},
            border:{xs:'',md:"2px solid #e4e4e4"},
        },
        item_category:{
            display:{xs:'',md:"flex"},
            flexDirection:'column',
            padding:{xs:'',md:'10px'}
        },
        title_2:{
            fontFamily:'Tisa Sans Pro Regular',
            fontSize:'15px',
            display:'flex',
            justifyContent:'center',
            alignItems: 'center',
            color:'#e4e4e4',
        }
    }

    const handleChange = (event,title, tag) => {
        setChecked(event.target.checked);
        if (event.target.checked) {
            addWord(title,tag)
        }
        else{
            removeWord(title,tag);
        }
    }

    const capitalize = (tag) => {
        return tag.charAt(0).toUpperCase() + tag.slice(1);
    }

    return(
        <Box sx={{...sideBar_sx.layout}}>
            <Box sx={{...sideBar_sx.apply}}>
                <Button sx={{...sideBar_sx.button}}>Aplicar</Button>
            </Box>
            <Box sx={{...sideBar_sx.types}}>
                <Box sx={{...sideBar_sx.title}}>
                    <Typography sx={{color:'#e4e4e4'}}>Filtrar por:</Typography>
                </Box>
                {
                    data_navbar.map((item, i) => (

                        <Box key={i} sx={{...sideBar_sx.category}} >
                            <Box sx={{
                                display:'flex',
                                justifyContent:'center',
                                alignItem:'center',
                                backgroundColor: '#9754CB',
                                borderBottom: '2px solid #e4e4e4',
                            }}>
                                <Typography variant="body2" sx={{...sideBar_sx.title_2,padding:{xs:'',md:'5px'}}}>{item.title}</Typography>
                            </Box>

                            <Box sx={{...sideBar_sx.item_category}}>
                                {
                                    item.tag.map((tag, index) => (
                                        <Box key={index} sx={{}}>
                                            <ThemeProvider theme={theme}>
                                                <FormControlLabel
                                                    value="end"
                                                    control={<Checkbox />}
                                                    label= {capitalize(tag)}
                                                    labelPlacement="end"
                                                    style={{color:'#fffefe'}}
                                                    onClick= {(event) => handleChange(event,item.title,tag)}
                                                            />
                                            </ThemeProvider>
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}
export default SidebarFilter;