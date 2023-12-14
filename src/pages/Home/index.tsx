import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export const Home = () => {
	const navigate = useNavigate();

	return (
		<Box
			component="div"
			className="txt-animado"
			sx={{
				width: '100%',
				height: '100vh',
				background: '#000',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				color: '#fff',
				fontFamily: 'Philosopher, sans-serif',
			}}
		>
			<span></span>

			<Box
				sx={{
					position: 'absolute',
					bottom: 200,
				}}
			>
				<Typography
					component="button"
					variant="button"
					sx={{
						background: 'transparent',
						color: '#ff007b',
						border: 'none',
						cursor: 'pointer',
						fontSize: '17px',
					}}
					onClick={() => navigate('/confirm')}
				>
					Continuar
				</Typography>
			</Box>
		</Box>
	);
};
