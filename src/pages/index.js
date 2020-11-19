import React, { useState, useRef } from "react"
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import AccessTimeIcon from '@material-ui/icons/AccessTime'

import purple from '@material-ui/core/colors/purple'
import deepPurple from '@material-ui/core/colors/deepPurple'

import ImageBG from "../images/main.jpg"
import Mechanic from "../images/Mechanic.jpg"
import Engine from "../images/Engine.jpg"

import Layout from "../Components/Layout"
import SEO from "../Components/Seo"
import CheckList from "../Components/CheckList"

const accent = deepPurple['500']; // #e040fb

const mainButtonStyle = {
	maxWidth: '250px',
	minWidth: '225px',
	minHeight: '50px',
	borderRadius: '0'
}

const IndexPage = ({ data }) => {
	
	const [nama,setVal] = useState('')
	const [kendaraan,setKendaran] = useState('')
	const [masalah,setMasalah] = useState('')
	const myRef = useRef(null)

	const executeScroll = () => myRef.current.scrollIntoView({behavior: "smooth"})
	
	function getWaLink() {
			return `https://wa.me/6285798097127?text=Hallo,+nama+saya+${nama}+dan+saya+mempunyai+${kendaraan}+dengan+${masalah}+`
	}
		
	function prosesValName(t) {
			setVal(t.target.value.replace(" ", "+"))
	}
		
	function prosesValKendaraan(t) {
		setKendaran(t.target.value.replace(" ", "+"))
	}
	
	function prosesValMasalah(t) {
			setMasalah(t.target.value.replace(" ", "+"))
	}

	return (
		<div style={{ height: '80vh', backgroundImage: `url(${ImageBG})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
			<Layout>
				<SEO title="Home" />
				<Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', paddingTop: '15vh' }}>
					<Grid container spacing={3}>
						
						{/* Bagian - Utama front page */}
						<Grid item container sm={12}>
							<Grid item sm={12}>
								<Typography variant="h1" component="h2" style={{ fontWeight: 'bold', color: 'white' }}>
									Memperbaiki semua jenis Mobil
								</Typography>
								<Typography variant="h5" gutterBottom style={{ color: 'white' }}>
									Dengan pengalaman Mekanik lebih dari 20 tahun
                				</Typography>
							</Grid>

							<Grid container spacing={4} sm={12} style={{ paddingTop: '2vh' }}>
								<Grid item>
									<Button variant="contained" size='large' onClick={executeScroll} style={{ color: 'white', backgroundColor: `${accent}`, ...mainButtonStyle }}>
										Lihat Layanan Kami
                  					</Button>
								</Grid>
								<Grid item>
								<a href="https://wa.link/vv1ltb" target="_blank"><Button variant="contained" size='large' style={mainButtonStyle}>Hubungi Kami</Button></a>
								</Grid>
							</Grid>
						</Grid>

						<Grid container sm={12} justify="flex-end" alignItems="flex-end">
							<Grid item xs={12} sm={3}>
								<a href='https://bengkel-ali.netlify.app/articles/'>
									<Card elevation={8} square>
										<CardActionArea>
											<CardMedia
												style={{ height: '200px' }}
												image={require("../images/driving.jpg")}
												/>
											<CardContent>
												<Grid container>
													<Typography item gutterBottom variant="h6">
														Menjelajahi Lebih Lanjut
													</Typography>
													<ArrowForwardIosIcon item fontSize='small' style={{ marginTop: '0.72vh', marginLeft: '0.7vh' }}></ArrowForwardIosIcon>
												</Grid>
											</CardContent>
										</CardActionArea>
									</Card>
								</a>
							</Grid>
						</Grid>

						{/* Bagian - Why is it worth... */}
						<Box ref={myRef} pt={1}>
							<Grid container sm={12} spacing={3}>
								<Grid item sm={12}>
									<Typography variant='h2' style={{ fontWeight: 'normal' }}> Kenapa harus percaya dengan <br /> layanan kami?</Typography>
								</Grid>

								<Grid item sm={6}>
									<List style={{ width: '100%', maxWidth: 360 }}>
										{
											[
												"Tim mekanik profesional",
												"Rekan kerja internasional",
												"Harga lebih murah hingga 50% dari bengkel normal",
												"Kualitas Terbaik",
												"Pengalaman lebih dari 20 tahun"
											].map((textData, index) => {
												if (index < 4) {
													return <>
														<CheckList text={textData}></CheckList>
														<Divider />
													</>
												}
												return <CheckList text={textData}></CheckList>
											})
										}
									</List>
								</Grid>

								<Grid item sm={6}>
									<Typography variant='h4' style={{ marginBottom: '3%' }}>
										eque porro quisquam est qui dolorem <br />
										ipsum quia dolor sit amet
             					     </Typography>
									<Typography variant='body1' style={{ fontWeight: 'lighter' }}>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularis
                 					</Typography>
								</Grid>
							</Grid>
						</Box>

						{/* Bagian - Icon serive yang di berikan  */}
						<Grid container justify="center" alignItems="center" sm={12} style={{ marginTop: '5%', boxShadow: '0 4px 8px 0 grey' }}>
							{/* TODO: make component for this */}
							<Grid sm item>
								<Box display='flex' flexDirection='column' alignItems="center" justifyContent="center" p={3} style={{ backgroundColor: `${accent}` }}>
									<AccessTimeIcon style={{ fontSize: 100, marginBottom: '10%', color: 'white' }}></AccessTimeIcon>
									<Typography variant='h5' align='center' style={{ color: 'white' }}>Servis Mesin</Typography>
								</Box>
							</Grid>
							<Grid sm item>
								<Box display='flex' flexDirection='column' alignItems="center" justifyContent="center" p={3} style={{ backgroundColor: `${deepPurple[600]}` }}>
									<AccessTimeIcon style={{ fontSize: 100, marginBottom: '10%', color: 'white' }}></AccessTimeIcon>
									<Typography variant='h5' align='center' style={{ color: 'white' }}>Ganti Ban</Typography>
								</Box>
							</Grid>
							<Grid sm item>
								<Box display='flex' flexDirection='column' alignItems="center" justifyContent="center" p={3} style={{ backgroundColor: `${deepPurple[700]}` }}>
									<AccessTimeIcon style={{ fontSize: 100, marginBottom: '10%', color: 'white' }}></AccessTimeIcon>
									<Typography variant='h5' align='center' style={{ color: 'white' }}>Ganti Oli</Typography>
								</Box>
							</Grid>
							<Grid sm item>
								<Box display='flex' flexDirection='column' alignItems="center" justifyContent="center" p={3} style={{ backgroundColor: `${deepPurple[800]}` }}>
									<AccessTimeIcon style={{ fontSize: 100, marginBottom: '10%', color: 'white' }}></AccessTimeIcon>
									<Typography variant='h5' align='center' style={{ color: 'white' }}>Dan Lainnya</Typography>
								</Box>
							</Grid>

						</Grid>

						{/* Bagian - Owner  */}
						<Typography variant='h2' align='right' gutterBottom style={{ fontWeight: 'normal', marginTop: '5%' }}>
							Kenalanan Sama Pemilik Bengkel
						</Typography>

						<Paper elevation={8} square >
							<Grid container sm={12} justify="center" >
								<Grid item sm={8}>
									<Card square elevation={8} style={{ backgroundColor: `${accent}` }}>
										<CardMedia
											style={{ height: 0, paddingTop: '60%' }}
											image={Mechanic}
										/>
										<CardContent>
											<Typography item gutterBottom variant="h6" style={{ color: 'white' }}>
												"Pak Ali lagi memperbaiki roda mobil"
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item sm={4}>
									<Box p={5} my={5}>
										<Typography variant='h3' gutterBottom>Hai!, nama saya<br /> Pak Ali</Typography>
										<Typography variant='h3' gutterBottom>Saya pemilik Bengkel</Typography>
										<Typography variant='body1'>
											Mekanik kendaraan dengan 9 tahun pengalaman di bidang perawatan, perbaikan, dan servis otomotif. Pengalaman luas bekerja dengan
											kendaraan bensin dan solar, memeriksa peralatan elektronik otomotif, dan menguji serta menyetel sistem pembuangan. Memiliki ASE
											Sertifikasi Seri A.
									</Typography>
									</Box>
								</Grid>
							</Grid>
						</Paper>

							
						{/* WIP	 */}
						<Grid container sm style={{marginTop: '5%'}}>
							<Box 
								width height={'100%'} 
								mb={10} textAlign='center' 
								style={{backgroundColor: `${accent}`, backgroundImage: `url(${Engine})`, backgroundRepeat: 'no-repeat', backgroundSize: '50%',backgroundPosition: 'right'}}
							>
								<Typography variant='h2' style={{ fontWeight: 'normal', marginTop: '5%', color: 'white' }}>Butuh Bantuan?</Typography>
								<Typography variant='body1' style={{ fontWeight: 'normal', color: 'white', marginBottom: '2%' }}>Langsung saja isi form booking di bawah</Typography>
								<form  autoComplete="off">
									{/* Repeating?*/}
									<TextField type='text' label="Nama" variant="filled" style={{ backgroundColor: 'white' }} onChange={t => prosesValName(t)} />
									<TextField type='text' label="Nama Kendaraan" variant="filled" style={{ backgroundColor: 'white' }} onChange={t => prosesValKendaraan(t)} />
									<TextField type='text'label="Masalah Kendaraan" variant="filled" style={{ backgroundColor: 'white' }} onChange={t => prosesValMasalah(t) } />
									<a
										href={getWaLink()} 
										target="_blank"
									>
										<Button variant="contained" size='large' style={{ color: 'white', backgroundColor: `${deepPurple[900]}`, ...mainButtonStyle }}>
											BOOKING
										</Button>
									</a>
										
								</form>
								
							</Box>
						</Grid>

					</Grid>
				</Container>
			</Layout>
		</div>
	)
}

export default IndexPage
