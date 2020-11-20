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
									<svg style={{fill: 'white'}} enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m58.998 31.5c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414l2-2c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2 2c-.195.195-.451.293-.707.293z"/></g><g><path d="m60.997 29.5c-.208 0-.419-.065-.599-.199l-3.994-2.992c-.442-.332-.532-.958-.201-1.4.332-.44.958-.531 1.4-.201l3.994 2.992c.442.332.532.958.201 1.4-.196.261-.496.4-.801.4z"/></g><g><path d="m58.997 31.5c-.149 0-.302-.033-.445-.105l-1.996-.996c-.494-.246-.695-.847-.448-1.341.246-.493.846-.697 1.341-.448l1.996.996c.494.246.695.847.448 1.341-.175.35-.529.553-.896.553z"/></g><g><path d="m37.007 44.5c-.315 0-.626-.148-.82-.427-.316-.452-.207-1.076.246-1.393l19.996-13.996c.453-.316 1.076-.207 1.393.246.316.452.207 1.076-.246 1.393l-19.997 13.996c-.175.122-.374.181-.572.181z"/></g><g><path d="m39.008 32.488c-.419 0-.81-.265-.949-.685-.174-.523.109-1.09.634-1.265l17.994-5.988c.522-.17 1.091.109 1.265.634.174.523-.109 1.09-.634 1.265l-17.994 5.988c-.105.035-.212.051-.316.051z"/></g><g><path d="m37.006 44.5h-21.996c-.553 0-1-.447-1-1s.447-1 1-1h21.996c.553 0 1 .447 1 1s-.447 1-1 1z"/></g><g><path d="m39.007 32.488c-.225 0-.451-.076-.639-.231l-6.01-4.996c-.425-.353-.482-.983-.129-1.408.352-.424.98-.482 1.408-.129l6.01 4.996c.425.353.482.983.129 1.408-.197.237-.482.36-.769.36z"/></g><g><path d="m32.998 27.492h-17.988c-.553 0-1-.447-1-1s.447-1 1-1h17.988c.553 0 1 .447 1 1s-.447 1-1 1z"/></g><g><path d="m13.008 42.498c-.553 0-1-.447-1-1v-13.004c0-.553.447-1 1-1s1 .447 1 1v13.004c0 .553-.447 1-1 1z"/></g><g><path d="m22.998 27.492c-.553 0-1-.447-1-1v-2.996c0-.553.447-1 1-1s1 .447 1 1v2.996c0 .553-.447 1-1 1z"/></g><g><path d="m27 27.492c-.553 0-1-.447-1-1v-2.996c0-.553.447-1 1-1s1 .447 1 1v2.996c0 .553-.447 1-1 1z"/></g><g><path d="m59 44.496c-2.757 0-5-2.243-5-5 0-2.512 3.592-6.045 4.312-6.728.387-.365.99-.365 1.377 0 .719.683 4.311 4.216 4.311 6.728 0 2.757-2.243 5-5 5zm0-9.589c-1.416 1.482-3 3.54-3 4.589 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.052-1.583-3.108-3-4.589z"/></g><g><path d="m10.998 42.494c-6.063 0-10.996-4.933-10.996-10.996 0-.553.447-1 1-1s1 .447 1 1c0 4.961 4.035 8.996 8.996 8.996.553 0 1 .447 1 1s-.447 1-1 1z"/></g><g><path d="m10.998 39.494c-4.409 0-7.996-3.587-7.996-7.996 0-.553.447-1 1-1s1 .447 1 1c0 3.307 2.689 5.996 5.996 5.996.553 0 1 .447 1 1s-.447 1-1 1z"/></g><g><path d="m13 32.494c-.553 0-1-.447-1-1 0-2.757-2.243-5-5-5s-5 2.243-5 5c0 .553-.447 1-1 1s-1-.447-1-1c0-3.859 3.141-7 7-7s7 3.141 7 7c0 .553-.447 1-1 1z"/></g><g><path d="m9.994 32.494c-.553 0-1-.447-1-1 0-1.099-.894-1.994-1.994-1.994s-1.994.895-1.994 1.994c0 .553-.447 1-1 1s-1-.447-1-1c0-2.202 1.792-3.994 3.994-3.994s3.994 1.792 3.994 3.994c0 .553-.447 1-1 1z"/></g><g><path d="m12.998 35.496c-2.208 0-4.004-1.795-4.004-4.002 0-.553.447-1 1-1s1 .447 1 1c0 1.104.899 2.002 2.004 2.002.553 0 1 .447 1 1s-.447 1-1 1z"/></g><g><path d="m12.998 39.494h-2c-.553 0-1-.447-1-1s.447-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z"/></g><g><path d="m13 42.494h-2.002c-.553 0-1-.447-1-1s.447-1 1-1h2.002c.553 0 1 .447 1 1s-.447 1-1 1z"/></g><g><path d="m13.008 29.494c-.553 0-1-.447-1-1 0-1.655 1.347-3.002 3.002-3.002.553 0 1 .447 1 1s-.447 1-1 1-1.002.449-1.002 1.002-.447 1-1 1z"/></g><g><path d="m15.01 44.504c-1.659 0-3.01-1.351-3.01-3.01 0-.553.447-1 1-1s1 .447 1 1c0 .557.453 1.01 1.01 1.01.553 0 1 .447 1 1s-.447 1-1 1z"/></g><g><path d="m31.002 24.496h-12.004c-.553 0-1-.447-1-1v-3c0-.553.447-1 1-1h12.004c.553 0 1 .447 1 1v3c0 .553-.447 1-1 1zm-11.004-2h10.004v-1h-10.004z"/></g></g></svg>
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
