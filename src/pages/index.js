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
									{/* <Typography variant='h4' style={{ marginBottom: '3%' }}>
										eque porro quisquam est qui dolorem <br />
										ipsum quia dolor sit amet
             					     </Typography>
									<Typography variant='body1' style={{ fontWeight: 'lighter' }}>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularis
                 					</Typography> */}
								</Grid>
							</Grid>
						</Box>

						{/* Bagian - Icon serive yang di berikan  */}
						<Grid container justify="center" alignItems="center" sm={12} style={{ marginTop: '5%', boxShadow: '0 4px 8px 0 grey' }}>
							{/* TODO: make component for this */}
							<Grid sm item>
								<Box display='flex' flexDirection='column' alignItems="center" justifyContent="center" p={3} style={{ backgroundColor: `${accent}` }}>
									<svg style={{fill: 'white'}} id="Layer_1" enable-background="new 0 0 511.982 511.982" height="128" viewBox="0 0 511.982 511.982" width="128" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m493.606 82.526-53.556-28.539c-6.543-3.485-11.585-5.919-19.482-8.793-7.906-2.877-13.331-4.253-20.577-5.786l-59.369-12.564c-16.638-3.521-31.895 4.011-37.102 18.316l-10.26 28.192c-1.889 5.189.787 10.928 5.977 12.816l5.593 2.036-4.929 19.352c-12.997-7.295-27.974-11.463-43.909-11.463s-30.913 4.168-43.91 11.464l-4.929-19.352 5.592-2.035c2.492-.906 4.522-2.767 5.643-5.17 1.121-2.404 1.241-5.154.334-7.646l-10.261-28.194c-5.207-14.306-20.464-21.839-37.102-18.316l-59.368 12.564c-7.247 1.533-12.672 2.91-20.577 5.786-7.897 2.875-12.939 5.309-19.482 8.794l-53.555 28.538c-15.01 7.997-21.855 23.574-16.648 37.878l10.261 28.191c1.478 4.062 5.313 6.583 9.398 6.583 1.135 0 2.291-.195 3.419-.605l5.592-2.035 8.744 18.16c-4.55 2.211-6.784 7.55-5.015 12.408 1.478 4.062 5.313 6.583 9.398 6.583 1.135 0 2.291-.195 3.419-.605l.893-.325 8.744 18.159c-4.55 2.211-6.783 7.55-5.015 12.408 1.478 4.062 5.313 6.583 9.398 6.583 1.135 0 2.291-.195 3.419-.606l.893-.325 8.743 18.159c-4.55 2.212-6.783 7.55-5.014 12.408 1.478 4.062 5.313 6.583 9.398 6.583 1.135 0 2.29-.195 3.419-.605l.893-.325 8.743 18.159c-4.55 2.212-6.783 7.551-5.014 12.409 1.478 4.062 5.313 6.583 9.398 6.583 1.135 0 2.291-.195 3.419-.605l.893-.325 14.469 30.049c-1.836 3.272-2.859 6.996-2.863 10.853v18.756l-24.198 15.85c-6.332 4.142-10.117 11.127-10.124 18.695v30.889c0 12.325 10.028 22.353 22.354 22.353h43.789l17.26 29.896c3.982 6.927 11.387 11.234 19.334 11.241h109.502c30.756 0 57.72-16.515 72.512-41.138h49.996c12.326 0 22.354-10.027 22.354-22.353v-30.9c-.007-7.559-3.792-14.544-10.118-18.682l-24.204-15.854v-18.767c-.004-3.852-1.028-7.575-2.862-10.844l14.468-30.047.893.325c1.129.41 2.284.605 3.419.605 4.084 0 7.92-2.522 9.398-6.583 1.768-4.858-.464-10.196-5.014-12.408l8.743-18.159.893.325c1.129.41 2.284.605 3.419.605 4.084 0 7.92-2.522 9.398-6.583 1.768-4.858-.464-10.196-5.014-12.408l8.743-18.159.893.325c1.129.411 2.284.606 3.419.606 4.084 0 7.92-2.522 9.398-6.583 1.769-4.858-.465-10.197-5.015-12.408l8.744-18.16.893.325c1.129.41 2.284.605 3.419.605 4.084 0 7.92-2.522 9.398-6.583 1.769-4.858-.465-10.197-5.015-12.408l8.744-18.16 5.592 2.035c1.107.402 2.265.603 3.42.603 1.446 0 2.89-.313 4.226-.937 2.404-1.121 4.264-3.151 5.171-5.644l10.261-28.191c5.211-14.302-1.636-29.878-16.644-37.875zm-167.615 103.566c0 38.598-31.402 70-70 70s-70-31.402-70-70 31.402-70 70-70 70 31.402 70 70zm-243.538-63.142c-1.889-5.19-7.629-7.864-12.817-5.978l-42.273 15.386-6.84-18.794c-2.005-5.509 2.201-10.693 7.259-13.389l53.554-28.535c5.994-3.193 10.054-5.152 16.918-7.65 6.872-2.501 11.24-3.609 17.878-5.015l59.368-12.564c5.605-1.185 12.161.082 14.167 5.59l6.841 18.795-42.279 15.388c-5.189 1.89-7.866 7.628-5.977 12.817 1.889 5.19 7.625 7.867 12.817 5.977l27.196-9.899 4.961 19.478-135.22 49.216-8.72-18.11 27.19-9.896c5.19-1.889 7.865-7.627 5.977-12.817zm95.426 18.476c-4.385 7.639-7.678 15.978-9.674 24.805l-92.759 33.762-8.72-18.11zm-11.859 46.883c.17 6.977 1.136 13.759 2.813 20.259l-75.949 27.643-8.719-18.109zm9.952 38.946c3.174 6.146 7.038 11.879 11.485 17.102l-77.133 28.074-8.719-18.109zm28.127 32.33c3.7 2.62 7.608 4.965 11.69 7.012-2.774.594-5.411 1.707-7.795 3.318l-77.372 44.671-11.577-24.043zm85.581 206.413c-35.585 0-64.536-28.951-64.536-64.536s28.951-64.536 64.536-64.536 64.536 28.951 64.536 64.536-28.951 64.536-64.536 64.536zm-84.536-64.536c0 .582.032 1.157.044 1.736-2.1.477-4.252.728-6.395.728-15.908 0-28.85-12.942-28.85-28.85s12.942-28.851 28.85-28.851c7.805 0 15.116 3.116 20.472 8.528-8.913 13.393-14.121 29.452-14.121 46.709zm208.327-11.8c.993.649 1.071 1.67 1.071 1.957v30.889c0 1.297-1.056 2.353-2.354 2.353h-41.292c2.146-7.436 3.32-15.281 3.32-23.398 0-46.613-37.923-84.536-84.536-84.536-22.151 0-42.328 8.575-57.417 22.566-8.947-8.441-20.827-13.266-33.47-13.266-26.936 0-48.85 21.914-48.85 48.851 0 26.936 21.914 48.85 48.85 48.85 3.061 0 6.131-.313 9.151-.891 4.492 17.005 14.166 31.919 27.219 42.963h-54.977c-.808-.001-1.576-.464-2.013-1.225l-20.156-34.913c-1.787-3.094-5.088-5-8.661-5h-49.562c-1.298 0-2.354-1.056-2.354-2.353v-30.879c0-.297.079-1.317 1.077-1.971l28.724-18.814c2.821-1.848 4.521-4.993 4.521-8.365v-24.149c0-.635.318-1.494 1.225-2.016l85.357-49.281c.273-.157.539-.328.795-.511.4-.284.856-.429 1.357-.429h70.988c.5 0 .957.145 1.357.429.257.183.522.354.795.511l85.375 49.292c.889.511 1.207 1.37 1.208 1.994v24.16c0 3.372 1.7 6.518 4.521 8.365zm-32.11-75.076-77.372-44.672c-2.383-1.611-5.021-2.724-7.794-3.318 4.082-2.047 7.989-4.391 11.689-7.011l85.054 30.957zm20.298-42.155-77.133-28.074c4.447-5.223 8.311-10.956 11.485-17.102l74.367 27.067zm17.439-36.22-75.948-27.643c1.677-6.5 2.644-13.283 2.813-20.259l81.855 29.793zm17.439-36.218-92.759-33.762c-1.996-8.827-5.289-17.167-9.674-24.805l111.153 40.457zm17.44-36.219-135.221-49.218 4.961-19.478 138.98 50.585zm37.483-50.209-6.84 18.794-169.145-61.564 6.84-18.795c2.005-5.508 8.561-6.774 14.167-5.59l59.369 12.564c6.637 1.404 11.005 2.513 17.878 5.015 6.864 2.498 10.924 4.457 16.917 7.649l53.555 28.537c5.058 2.696 9.264 7.881 7.259 13.39z"/><path d="m255.992 226.092c22.056 0 40-17.944 40-40s-17.944-40-40-40-40 17.944-40 40 17.944 40 40 40zm0-60c11.028 0 20 8.972 20 20s-8.972 20-20 20-20-8.972-20-20 8.971-20 20-20z"/><path d="m303.779 391.462h-28.2c-5.523 0-10 4.478-10 10s4.477 10 10 10h28.2c5.523 0 10-4.478 10-10s-4.477-10-10-10z"/><path d="m115.356 120.974c5.523 0 10-4.478 10-10s-4.477-10-10-10h-.007c-5.523 0-9.996 4.478-9.996 10s4.48 10 10.003 10z"/></g></g></svg>
									<Typography variant='h5' align='center' style={{ color: 'white' }}>Servis Mesin</Typography>
								</Box>
							</Grid>
							<Grid sm item>
								<Box display='flex' flexDirection='column' alignItems="center" justifyContent="center" p={3} style={{ backgroundColor: `${deepPurple[600]}` }}>
									<svg style={{fill: 'white'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="128" height="128"><g id="tyre"><path d="M17.48,25.3a16.607,16.607,0,0,0-.78,2.07l4.77.26-3.56-3.18C17.76,24.73,17.61,25.01,17.48,25.3Z"/><path d="M16,32a15.63,15.63,0,0,0,.23,2.65l7.97-.44a1.014,1.014,0,0,1,.98.62,1,1,0,0,1-.25,1.13L20.41,40h6.8l.84-.93a1,1,0,0,1,1.74.73l-.01.2h4.44l-.01-.2a1,1,0,0,1,1.74-.73l.84.93h6.8l-4.52-4.04a1.008,1.008,0,0,1,.73-1.75l7.97.44A15.63,15.63,0,0,0,48,32a15.453,15.453,0,0,0-.24-2.65l-7.96.44h-.06a.987.987,0,0,1-.92-.62,1,1,0,0,1,.25-1.13l5.95-5.31a16.234,16.234,0,0,0-3.75-3.74l-5.31,5.94a1.039,1.039,0,0,1-.75.33,1.016,1.016,0,0,1-1-1.06l.44-7.97c-.25-.04-.51-.09-.77-.12a15.765,15.765,0,0,0-3.76,0c-.26.03-.52.08-.77.12l.44,7.97a1.016,1.016,0,0,1-1,1.06,1.039,1.039,0,0,1-.75-.33l-5.31-5.94a16.234,16.234,0,0,0-3.75,3.74l5.95,5.31a1,1,0,0,1,.25,1.13.987.987,0,0,1-.92.62H24.2l-7.96-.44A15.453,15.453,0,0,0,16,32Zm16-5a5,5,0,1,1-5,5A5.006,5.006,0,0,1,32,27Z"/><path d="M51.05,50.8a1,1,0,0,1-1.21,0l-4.67-3.54L40.5,50.8a1.015,1.015,0,0,1-1.21,0l-4.67-3.54L29.96,50.8a1,1,0,0,1-1.21,0l-4.67-3.54L19.41,50.8a1,1,0,0,1-1.21,0l-4.66-3.54L8.88,50.8a1,1,0,0,1-1.21,0L4,48.01V52.5l4.27,3.24,4.66-3.54a1,1,0,0,1,1.21,0l4.67,3.54,4.66-3.54a1,1,0,0,1,1.21,0l4.67,3.54,4.67-3.54a1,1,0,0,1,1.21,0l4.67,3.54,4.66-3.54a1,1,0,0,1,1.21,0l4.67,3.55,4.68-3.55a1,1,0,0,1,1.21,0L60,54.99V50.5l-4.28-3.25Z"/><path d="M24.45,17.91l3.18,3.56-.26-4.77A16.193,16.193,0,0,0,24.45,17.91Z"/><path d="M55,42H9a4.991,4.991,0,0,0-4.79,3.66l4.06,3.08,4.66-3.54a1,1,0,0,1,1.21,0l4.67,3.54,4.66-3.54a1,1,0,0,1,1.21,0l4.67,3.54,4.67-3.54a1,1,0,0,1,1.21,0l4.67,3.54,4.66-3.54a1,1,0,0,1,1.21,0l4.67,3.55,4.68-3.55a1,1,0,0,1,1.21,0L60,47.99V47A5,5,0,0,0,55,42Z"/><circle cx="32" cy="32" r="3"/><path d="M36.37,21.47l3.18-3.56a16.193,16.193,0,0,0-2.92-1.21Z"/><path d="M32,4A28.006,28.006,0,0,0,5.47,40.96,7.039,7.039,0,0,1,9,40h6.89A18,18,0,0,1,14,32a17.631,17.631,0,0,1,.35-3.51,17.273,17.273,0,0,1,1.31-4.03A18.12,18.12,0,0,1,29.88,14.13a17.689,17.689,0,0,1,4.24,0A18.12,18.12,0,0,1,48.34,24.46a17.2,17.2,0,0,1,1.31,4.04A17.457,17.457,0,0,1,50,32a18,18,0,0,1-1.89,8H55a7.039,7.039,0,0,1,3.53.96A28.006,28.006,0,0,0,32,4Z"/><path d="M17.91,39.55l3.56-3.18-4.78.26A15.54,15.54,0,0,0,17.91,39.55Z"/><path d="M47.31,36.63l-4.78-.26,3.56,3.18A15.54,15.54,0,0,0,47.31,36.63Z"/><path d="M46.52,25.3c-.13-.29-.28-.57-.43-.85l-3.56,3.18,4.77-.26A16.607,16.607,0,0,0,46.52,25.3Z"/><path d="M51.05,57.8a1,1,0,0,1-1.21,0l-4.67-3.54L40.5,57.8a1.015,1.015,0,0,1-1.21,0l-4.67-3.54L29.96,57.8a1,1,0,0,1-1.21,0l-4.67-3.54L19.41,57.8a1,1,0,0,1-1.21,0l-4.66-3.54L8.88,57.8a1,1,0,0,1-1.21,0L4,55.02A5.011,5.011,0,0,0,9,60H55a4.992,4.992,0,0,0,4.51-2.88l-3.79-2.87Z"/></g></svg>
									<Typography variant='h5' align='center' style={{ color: 'white' }}>Ganti Ban</Typography>
								</Box>
							</Grid>
							<Grid sm item>
								<Box display='flex' flexDirection='column' alignItems="center" justifyContent="center" p={3} style={{ backgroundColor: `${deepPurple[700]}` }}>
									<svg style={{fill: 'white'}} enable-background="new 0 0 64 64" height="128" viewBox="0 0 64 64" width="128" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m58.998 31.5c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414l2-2c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2 2c-.195.195-.451.293-.707.293z"/></g><g><path d="m60.997 29.5c-.208 0-.419-.065-.599-.199l-3.994-2.992c-.442-.332-.532-.958-.201-1.4.332-.44.958-.531 1.4-.201l3.994 2.992c.442.332.532.958.201 1.4-.196.261-.496.4-.801.4z"/></g><g><path d="m58.997 31.5c-.149 0-.302-.033-.445-.105l-1.996-.996c-.494-.246-.695-.847-.448-1.341.246-.493.846-.697 1.341-.448l1.996.996c.494.246.695.847.448 1.341-.175.35-.529.553-.896.553z"/></g><g><path d="m37.007 44.5c-.315 0-.626-.148-.82-.427-.316-.452-.207-1.076.246-1.393l19.996-13.996c.453-.316 1.076-.207 1.393.246.316.452.207 1.076-.246 1.393l-19.997 13.996c-.175.122-.374.181-.572.181z"/></g><g><path d="m39.008 32.488c-.419 0-.81-.265-.949-.685-.174-.523.109-1.09.634-1.265l17.994-5.988c.522-.17 1.091.109 1.265.634.174.523-.109 1.09-.634 1.265l-17.994 5.988c-.105.035-.212.051-.316.051z"/></g><g><path d="m37.006 44.5h-21.996c-.553 0-1-.447-1-1s.447-1 1-1h21.996c.553 0 1 .447 1 1s-.447 1-1 1z"/></g><g><path d="m39.007 32.488c-.225 0-.451-.076-.639-.231l-6.01-4.996c-.425-.353-.482-.983-.129-1.408.352-.424.98-.482 1.408-.129l6.01 4.996c.425.353.482.983.129 1.408-.197.237-.482.36-.769.36z"/></g><g><path d="m32.998 27.492h-17.988c-.553 0-1-.447-1-1s.447-1 1-1h17.988c.553 0 1 .447 1 1s-.447 1-1 1z"/></g><g><path d="m13.008 42.498c-.553 0-1-.447-1-1v-13.004c0-.553.447-1 1-1s1 .447 1 1v13.004c0 .553-.447 1-1 1z"/></g><g><path d="m22.998 27.492c-.553 0-1-.447-1-1v-2.996c0-.553.447-1 1-1s1 .447 1 1v2.996c0 .553-.447 1-1 1z"/></g><g><path d="m27 27.492c-.553 0-1-.447-1-1v-2.996c0-.553.447-1 1-1s1 .447 1 1v2.996c0 .553-.447 1-1 1z"/></g><g><path d="m59 44.496c-2.757 0-5-2.243-5-5 0-2.512 3.592-6.045 4.312-6.728.387-.365.99-.365 1.377 0 .719.683 4.311 4.216 4.311 6.728 0 2.757-2.243 5-5 5zm0-9.589c-1.416 1.482-3 3.54-3 4.589 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.052-1.583-3.108-3-4.589z"/></g><g><path d="m10.998 42.494c-6.063 0-10.996-4.933-10.996-10.996 0-.553.447-1 1-1s1 .447 1 1c0 4.961 4.035 8.996 8.996 8.996.553 0 1 .447 1 1s-.447 1-1 1z"/></g><g><path d="m10.998 39.494c-4.409 0-7.996-3.587-7.996-7.996 0-.553.447-1 1-1s1 .447 1 1c0 3.307 2.689 5.996 5.996 5.996.553 0 1 .447 1 1s-.447 1-1 1z"/></g><g><path d="m13 32.494c-.553 0-1-.447-1-1 0-2.757-2.243-5-5-5s-5 2.243-5 5c0 .553-.447 1-1 1s-1-.447-1-1c0-3.859 3.141-7 7-7s7 3.141 7 7c0 .553-.447 1-1 1z"/></g><g><path d="m9.994 32.494c-.553 0-1-.447-1-1 0-1.099-.894-1.994-1.994-1.994s-1.994.895-1.994 1.994c0 .553-.447 1-1 1s-1-.447-1-1c0-2.202 1.792-3.994 3.994-3.994s3.994 1.792 3.994 3.994c0 .553-.447 1-1 1z"/></g><g><path d="m12.998 35.496c-2.208 0-4.004-1.795-4.004-4.002 0-.553.447-1 1-1s1 .447 1 1c0 1.104.899 2.002 2.004 2.002.553 0 1 .447 1 1s-.447 1-1 1z"/></g><g><path d="m12.998 39.494h-2c-.553 0-1-.447-1-1s.447-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z"/></g><g><path d="m13 42.494h-2.002c-.553 0-1-.447-1-1s.447-1 1-1h2.002c.553 0 1 .447 1 1s-.447 1-1 1z"/></g><g><path d="m13.008 29.494c-.553 0-1-.447-1-1 0-1.655 1.347-3.002 3.002-3.002.553 0 1 .447 1 1s-.447 1-1 1-1.002.449-1.002 1.002-.447 1-1 1z"/></g><g><path d="m15.01 44.504c-1.659 0-3.01-1.351-3.01-3.01 0-.553.447-1 1-1s1 .447 1 1c0 .557.453 1.01 1.01 1.01.553 0 1 .447 1 1s-.447 1-1 1z"/></g><g><path d="m31.002 24.496h-12.004c-.553 0-1-.447-1-1v-3c0-.553.447-1 1-1h12.004c.553 0 1 .447 1 1v3c0 .553-.447 1-1 1zm-11.004-2h10.004v-1h-10.004z"/></g></g></svg>
									<Typography variant='h5' align='center' style={{ color: 'white' }}>Ganti Oli</Typography>
								</Box>
							</Grid>
							<Grid sm item>
								<Box display='flex' flexDirection='column' alignItems="center" justifyContent="center" p={3} style={{ backgroundColor: `${deepPurple[800]}` }}>
									<svg style={{fill: 'white'}} height="128" viewBox="0 0 64 64" width="128" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm112 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0"/></svg>	
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
