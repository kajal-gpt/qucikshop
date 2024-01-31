
import { useState, useEffect } from "react"
import { useStyles } from "./StyleCss";
import { useMediaQuery, AppBar, Toolbar, Typography, Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import { useTheme } from '@mui/material/styles';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Header(props) {
    const theme = useTheme();
    const navigate=useNavigate()
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    var product = useSelector((state) => state.products)
    var totalproducts = Object.keys(product)
    const classes = useStyles()

    return (
        <div>
            <AppBar position="static" style={{ background: "#fff" }}>
                <Toolbar>
                    <div className={classes.header}>
                        <div className={classes.heading}>
                            {matches ? `QuickShopee` : `QS`}
                        </div>
                        <div className={classes.formcontrol}>
                            <FormControl sx={{ m: 1, width: matches ? `60%` : `80%` }} variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    endAdornment={<InputAdornment position="end"><SearchOutlinedIcon /></InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                />
                            </FormControl>
                        </div>
                        <div className={classes.icon}>
                        <Badge badgeContent={totalproducts.length} color="success">
                            <ShoppingCartIcon className={classes.ShoppingCartIcon} onClick={()=>navigate("/Card1")} />
                            </Badge>
                            <PersonIcon />
                        </div>
                    </div>
                </Toolbar>

            </AppBar>
        </div>
    )
}
