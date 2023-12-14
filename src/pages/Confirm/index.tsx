import { Box, Button, Container, Typography } from '@mui/material';

export const Confirm = () => {
	function handleCancel() {
		alert('Resposta errada!');
	}

	return (
		<Box
			sx={{
				width: '100%',
				height: '100vh',
				background: '#000',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundImage:
					'url(https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<Container
				sx={{
					textAlign: 'center',
				}}
			>
				<Typography
					sx={{
						color: '#fff',
						fontSize: '70px',
					}}
				>
					E então, aceita?
				</Typography>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						mt: 4,
						gap: 8,
					}}
				>
					<Button sx={{ background: '#ff007b' }}>
						<a
							href="https://api.whatsapp.com/send/?phone=5518996681138&text=Eu aceito.&type=phone_number&app_absent=0"
							style={{ textDecoration: 'none', color: '#fff' }}
						>
							Aceito
						</a>
					</Button>
					<Button
						sx={{ color: '#fff', background: '#ff007b' }}
						onClick={handleCancel}
					>
						Não, Gabriel
					</Button>
				</Box>
			</Container>
		</Box>
	);
};
