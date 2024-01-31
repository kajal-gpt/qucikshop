import { makeStyles } from '@mui/styles'
var color = ['#fab1a0', '#81ecec', '#ffeaa7', '#dfe6e9', '#fd79a8', '#f7f1e3', '#ccae62', '#786fa6', '#cf6a87']


export const useStyles = makeStyles({


    header: {
        display: 'flex',
        alignItems: 'center',
        width: '99%'
    },

    heading: {

        color: '#000',
        fontFamily: 'Poppins',
        fontSize: 24
    },

    icon: {
        color: '#2980b9',
        marginLeft: 'auto',

        display: 'flex',
        justifyContent: 'space-between'
    },
    ShoppingCartIcon: {
        paddingLeft: '3%'
    },
    formcontrol: {
        display: 'flex',
        justifyContent: 'center',
        width: '80%',
        paddingLeft: 3,
        paddingRight: 3
    },
    banner: {
        display: 'flex',
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '1%',
        alignItems: 'center',
        flexDirection: 'column'
    },
    images: {
        width: '100%'
    },
    setting: {
        position: 'relative',

    },
    componant: {
        width: '100%',
        marginTop: "15%",
        marginLeft:"47%"
    },
    componants: {
        width: '100%',
       
        
    },
    arrow2: {
        position: 'absolute',
        top: '45%',
        left: '1%',
        zIndex: 1,
        width: 40,
        height: 40,
        borderRadius: 20,
        background: '#fff',
        opacity: 0.7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrowicon: {
        color: "#000"
    },
    arrow1: {
        position: 'absolute',
        top: '45%',
        right: '1%',
        zIndex: 1,
        color: '#fff',
        width: 40,
        height: 40,
        borderRadius: 20,
        background: '#fff',
        opacity: 0.7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrowicon1: {
        color: "#000"
    },
    second: {
        position: 'absolute',
        top: '45%',
        right: '1%',
        zIndex: 1,
        width: 40,
        height: 40,
        borderRadius: 20,
        background: '#fff',
        opacity: 0.7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
       
    },
    scroll: {
        padding: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 180,
        borderRadius: 90,
        background: color[parseInt(Math.random() * (color.length - 1))]
    },
    circle1: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: 700,
        margin: 5,
        textAlign: 'center',
        width: 180
    },
    title: {
        fontFamily: 'Poppins',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },
    button: {
        padding: 5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        width: '4%'
    },
    paper: {
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 250,
        cursor:'pointer'
    },
    img: {
        padding: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 178
    },
    divp: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: 700,
        margin: 5,
        textAlign: 'center',
        width: 180
    },
    p1: {
        paddingLeft: 10,
        fontSize: 12
    },
    p2: {
        display: 'flex',
        flexDirection: 'column',
        width: 178,
        fontFamily: 'Poppins',
        padding: 2
    },
    p3: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    p4: {
        display: 'flex',
        flexDirection: 'column'
    },
    p5: {
        margin: 2
    },
    p6: {
        paddingRight: 10
    },
    p7: {
        color: 'blue'
    },
    position: {
        position: 'relative'
    },

    imageStyle: {
        width: '90%',
        margin: 10,
        cursor: 'pointer',
        "&:hover": {
            transform: 'Scale(1.1)',
            cursor: 'pointer',
        },
    },

    leftarrow: {
        background: '#F8EFBA',
        width: 30,
        height: 30,
        borderRadius: 17,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '-1%',
        top: '45%',
        zIndex: 1,
        opacity: 0.9,
        cursor: 'pointer'
    },

    rightarrow: {
        background: '#F8EFBA',
        width: 30,
        height: 30,
        borderRadius: 17,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: '.5%',
        top: '45%',
        zIndex: 1,
        opacity: 0.9,
        cursor: 'pointer'

    },

    arrowSize: {
        fontSize: 30
    },
    clc: {
        width: 35,
        height: 35
    },
    lit: {
        fontFamily: "Poppins",
        fontSize: "100%"
    },
    div2: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
    },
    paper1:
    {
        flexDirection: "column",
        display: "flex",
        background: "#ebd6ff",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        paddingRight: 0,
        padding: "5%",
        fontSize: "130%",
        fontWeight: 650,
        color: "#8e44ad",
        marginBottom: "5%"
    },
    avtar1:{
        width:45,
         height:45
    },
    header1:{
        marginTop:'1%',
        display:'flex',
        marginLeft:'3%',
        marginRight:'3%',
        alignItems:'center',
        flexDirection:'column'
    },
    div3:{
        flexWrap:'wrap',
        display:'flex',
        flexDirection:'row'
    },
    div4:{
        width:'100%',
        marginTop:20
    },
    div5:{
        fontFamily:'Poppins',
        fontSize:24,
        fontWeight:"bold",
        padding:5
    },
    homeMainDiv:{
        display:'flex',
        flexDirection:'column',
        width:'95%',
        alignItems:'center',
        marginLeft:'3%',
        marginRight:'3%',
        marginTop:'1%',
    },
    header:{
        background:'#fff',
        display:'flex',
        alignItems:'center',
        width:'99%',
    },
    headingText:{
        color:'#000',
        fontFamily:'Poppins',
        fontSize:24,
    },
    headerIcon:{
        display:'flex',
        color:'#2980b9',
        marginLeft:'auto',
        display:'flex',
        justifyContent:'space-between',
    },
    accountIcon:{
        paddingLeft:'3%'
    },
    searchBar:{
        width:'80%',
        paddingLeft:3,
        paddingRight:3,
        display:'flex',
        justifyContent:'center',
    },
  
    bannerHomeSubDiv:{
        width:'100%',
    },
    arrowLeftCircle:{
        position:'absolute',
        top:'45%',
        left:'1%',
        color:'#fff',
        zIndex:1,
        width:40,
        height:40,
        borderRadius:20,
        background:'#fff',
        opacity:0.7,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    arrowRightCircle:{
        position:'absolute',
        top:'45%',
        right:'1%',
        color:'#fff',
        zIndex:1,
        width:40,
        height:40,
        borderRadius:20,
        background:'#fff',
        opacity:0.7,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    arrow:{
        color:'green'
    },
    circleImages:{
        width:180,
        height:180,
        borderRadius:90,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:2,
    },
    circleImagesWithResponsive:{
        width:90,
        height:90,
        borderRadius:45,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:2,
    },
    circleComponentHomeSubDiv:{
        width:'100%',
        marginTop:20,
    },
    circleCompnentHeadingText:{
        fontFamily:'Poppins',
        fontSize:22,
        fontWeight:'bold',
    },
    circleCompnentHeadingTextWithResponsive:{
        fontFamily:'Poppins',
        fontSize:16,
        fontWeight:'bold',
    },
    circleComponentArrowDiv:{
        display:'flex',
        flexDirection:'row',
    },
    circleComponentNameAndArrow:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:5,
        marginBottom:10,
    },
    circleComponentImageAndName:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
    },
    circleComponentText:{
        fontFamily:'Poppins',
        textAlign:'center',
        width:180,
        margin:5,
        fontSize:15,
        fontFamily:700
    },
    circleComponentTextWithResponsive:{
        fontFamily:'Poppins',
        textAlign:'center',
        width:90,
        margin:5,
        fontSize:12,
        fontFamily:700
    },
    divider:{
        width:"100%",
        paddingTop:'5%', 
        marginBottom:'10%'
    },
    footerHeadingText:{
        paddingLeft: '20%',
        width: '100%', 
        color: 'red', 
        fontFamily: 'bold', 
        fontSize: 30,
        fontFamily:'Poppins',
    },
    footerHeadingTextWithResponsive:{
        width: '100%', 
        color: 'red', 
        fontFamily: 'bold', 
        fontSize: 30,
        fontFamily:'Poppins',
        paddingTop:'10%'
    },
    footerIcon:{
        paddingLeft: '6%', 
        paddingTop: '5%', 
        display: 'flex', 
        justifyContent: 'space-evenly'
    },
    footerIconWithResponsive:{
        width:'40%',
        paddingTop: '5%', 
        display: 'flex', 
        justifyContent: 'space-evenly'
    },
    footerText:{
        padding: 10
    },
    footerAppStore:{
        paddingLeft: '10%', 
        paddingTop: '10%',
        paddingRight:'10%',
    },
    footerAppStoreWithResponsive:{
        paddingTop: '10%',
        width:'100%',
    },
    productComponentPaperCSS:{
        display:'flex',
        flexDirection:'column',
        width:160,
        height:250,
        justifyContent:'center',
        alignItems:'center',
    },
    productComponentImage:{
        padding:2,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:158,
        
    },
    productComponentText:{
        fontFamily:'Poppins',
        fontSize:'16',
        width:160,
        margin:5,
        fontFamily:700,
        textAlign:'center', 
    },
    productComponentRateAndWeightDiv:{
        display:'flex',
        flexDirection:'column',
        width:158,
        padding:2,
        fontFamily:'Poppins',
    },
    productComponentWeight:{
        paddingLeft:10,
        fontSize:12
    },
    categoryShowImages:{
        width:50,
        height:50,
        borderRadius:25,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:2,
        background:'#ecf0f1'
    },
    componant1:{
        width: '150%',
        marginTop: 20
    },
    pmc:{
        paddingRight: 10, marginLeft: '4%', marginTop: '3%' 
    },
    pmc1:{
        border:'1px solid #70a1ff',width:125,display:'flex',justifyContent:'space-between',borderRadius:5
    },
    pmc2:{
        cursor:'pointer', fontWeight:20,background: '#70a1ff',color:'#fff',width:25,padding:10,display:'flex',alignItems:'center',justifyContent:'center'
    },
    pmc3:{
        fontWeight:20,display:'flex',alignItems:'center',justifyContent:'center'
    },
    pmc4:{
        cursor:'pointer', background: '#70a1ff',color:'#fff',fontWeight:20, width:25,padding:10,alignItems:'center',display:'flex',justifyContent:'center'
    },
    spn:{display: 'flex', width: '98%', padding: 5, marginLeft: '6%', marginTop: '10%', fontFamily: 'Poppins', 
},
spn1:{
    fontWeight: 'bold', fontSize: 13 
},
spn2:{
    width: '98%', padding: 5, marginLeft: '6%', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 25 
}, 
spn3:{
    display: 'flex', width: '12%', marginLeft: '7%', background: '#dfe6e9' 
},
componant2:{
    width: '100%',
        marginTop: "9%",
        marginLeft:'38%'
       
},
componant3:{
    width: '100%',
    marginTop: 10,
    marginLeft:280
},
componant4:{
width:"111%",
marginTop:"-19%"
},
componant5:{
    width:"100%",
    marginLeft:"48%",
    marginTop:"-10%"
},
componant6:{
    width:"100%",
    marginLeft:"-4%"
   
}





});