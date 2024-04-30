import {Box, Button, Typography} from "@mui/material";
import {data_navbar} from "../../utils/data_components/data.js";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState} from "react";
import useDictionary from "../../utils/hooks/useDictionary.js";


const SidebarFilter = () => {
    const [filter,setFIlter] = useState(false);
    const [checked, setChecked] = useState(false);
    const { dictionary, addWord, removeWord } = useDictionary();

    const handleChange = (event,title, tag) => {
        setChecked(event.target.checked);
        if (event.target.checked) {
            addWord(title,tag)
        }
        else{
            removeWord(title,tag);
        }
    }
    console.log(dictionary);
    return(
        <Box>
            <Box>
                <Typography>Filtar por:</Typography>
                <Button>Aplicar</Button>
            </Box>
            {
                data_navbar.map((item, i) => (
                        <Box key={i}>
                            <Typography variant="body2">{item.title}</Typography>
                            <Box>
                                {
                                    item.tag.map((tag, index) => (
                                            <Box key={index} sx={{}}>
                                                <FormControlLabel
                                                    value="end"
                                                    control={<Checkbox />}
                                                    label= {tag}
                                                    labelPlacement="end"
                                                    onClick= {(event) => handleChange(event,item.title,tag)}
                                                />
                                            </Box>
                                    ))
                                }
                            </Box>
                        </Box>
                ))
            }
        </Box>
    )
}
export default SidebarFilter;