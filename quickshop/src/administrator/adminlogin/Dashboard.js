
import { useState } from 'react'
import { AppBar, Toolbar, Grid, Paper, Avatar } from '@mui/material'
import { serverURL } from "../services/FetchNodeServices"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import { Route, Routes } from 'react-router-dom';
import DisplayAllCategory from "../categories/DisplayAllCategory";
import SubCategory from "../subcategory/SubCategory"
import DisplayAllSubcategory from "../subcategory/DisplayAllSubcategory"
import ProductAdd from "../products/ProductAdd"
import DisplayAllProduct from "../products/DisplayAllProduct";
import ProductList from "../productlist/ProductList";
import DisplayAllProductList from "../productlist/DisplayAllProductList";
import BannerInterface from "../banners/BannerInterface";
import SubCategoryInterface from "../subcategory/SubCategory";
import ProductPicture from "../productpicture/ProductPicture";
import CategoryInterface from "../categories/CategoryInterface"
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {
  var admin = JSON.parse(localStorage.getItem('ADMIN'))
  const navigate = useNavigate()
  return (<div>
    <AppBar style={{ background: '#fff' }}>
      <Toolbar>
        <div style={{ color: '#000', fontFamily: 'Poppins', letterSpacing: 1, fontWeight: 'bold', fontSize: 24 }}>
          QuickShopee
        </div>
      </Toolbar>

    </AppBar>

    <div style={{ marginTop: '5%' }}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper style={{ display: 'flex', flexDirection: 'column', margin: 5, padding: 5, marginBottom: 10 }}>

            <Paper elevation={3} style={{ background: '#bdc3c7', flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 170, padding: 10, marginBottom: 10 }}>

              <Avatar src={`${serverURL}/images/avtar.png`} style={{ width: 70, height: 70, paddingBottom: 5 }} />
              <div style={{ fontFamily: 'Poppins', fontWeight: 'bold', paddingBottom: 5 }}>
                {admin.adminname}
              </div>

              <div style={{ fontSize: 12, fontFamily: 'Poppins', fontWeight: 'bold', paddingBottom: 5 }}>
                {admin.emailid}
              </div>

            </Paper>
            <List>
              <ListItem disablePadding >
                <ListItemButton onClick={() => navigate('/dashboard/displayallcategory')}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<span style={{ fontFamily: 'Poppins', fontWeight: '700' }}>Category</span>} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding >
                <ListItemButton onClick={() => navigate('/dashboard/displayallsubcategory')}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<span style={{ fontFamily: 'Poppins', fontWeight: '700' }}>Sub Category</span>} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding >
                <ListItemButton onClick={() => navigate('/dashboard/displayallproduct')}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<span style={{ fontFamily: 'Poppins', fontWeight: '700' }}>Product</span>} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding >
                <ListItemButton onClick={() => navigate('/dashboard/displayallproductlist')}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<span style={{ fontFamily: 'Poppins', fontWeight: '700' }}>Product List</span>} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding >
                <ListItemButton onClick={() => navigate('/dashboard/ProductPicture')}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<span style={{ fontFamily: 'Poppins', fontWeight: '700' }}>Product Picture</span>} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding >
                <ListItemButton onClick={() => navigate('/dashboard/bannerinterface')}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<span style={{ fontFamily: 'Poppins', fontWeight: '700' }}>Banner</span>} />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<span style={{ fontFamily: 'Poppins', fontWeight: '700' }}>Logout</span>} />
                </ListItemButton>
              </ListItem>


            </List>


          </Paper>
        </Grid>
        <Grid item xs={10}>
          {/* DashBoard */}
          <Routes>
            <Route element={<SubCategoryInterface />} path="/subcategoryinterface" />
            <Route element={<DisplayAllCategory />} path="/displayallcategory" />
            <Route element={<SubCategory />} path="/subcategory" />
            <Route element={<DisplayAllSubcategory />} path="/displayallsubcategory" />
            <Route element={<ProductAdd />} path="/productadd" />
            <Route element={<DisplayAllProduct />} path="/displayallproduct" />
            <Route element={<ProductList />} path="/productlist" />
            <Route element={<ProductPicture />} path="/productpicture" />
            <Route element={<DisplayAllProductList />} path="displayallproductlist" />
            <Route element={<BannerInterface />} path="bannerinterface" />
            <Route element={<CategoryInterface />} path="categoryinterface" />
            <Route element={<ProductPicture />} path="productpicture" />

          </Routes>

        </Grid>

      </Grid>
    </div>

  </div>)

}