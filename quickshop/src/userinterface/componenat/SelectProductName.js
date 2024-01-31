import TimerIcon from '@mui/icons-material/Timer';
import SelectProductUnit from './SelectProductUnit'
import { Button,Divider } from '@mui/material';
import { useStyles } from './StyleCss';

export default function SelectProductName({product,refreshPage}) {
    const classes=useStyles()
    var productDetails = [
        { id: 1, category: 'Home', subcategory: 'Detergent Powder & Bars', product: 'Tide Double Power Jasmine & Rose Detergent Powder', company: 'Tide', delivery: '10 MINS', weight: '1 Kg', rate: '128' }
    ]

    const ShowProductName = () => {
       
            return (
                <div>
                    <div style={{ width: '98%' }}>
                        <div className={classes.spn}>
                            <div className={classes.spn1}>
                                {'xxxx'} / {'xxxxxx'} /
                            </div>

                            <div className={classes.spn1}>
                                {product.productlistname}
                            </div>
                        </div>

                        <div className={classes.spn2}>
                            {product.productlistname}
                        </div>

                        <div className={classes.spn3}>
                            <div>
                                <TimerIcon style={{ fontSize: 'medium' }} />
                            </div>

                            <div style={{ fontSize: 12, fontWeight: 'bold' }}>
                                {'10 Min'}
                            </div>
                        </div>

                        <div style={{ fontSize: 18, fontWeight: 'bold', color: 'green', fontFamily: 'Poppins', padding: 5, marginLeft: '6%', }}>
                            View all by {'Tide'}
                        </div>

                        <Divider style={{ width: "95%", paddingTop: '5%', marginLeft: '6%' }} />

                       <SelectProductUnit product={product} refreshPage={refreshPage}/>
                    </div>
                </div>
            )
     
    }

    return (
        <div>
            {ShowProductName()}
        </div>

    )
}