import { Box, Typography } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { Init } from '../Init';
import './styles.css';

interface PlayProps {
	start: boolean;
	setStart: Dispatch<SetStateAction<boolean>>;
}

export const Home: React.FC<PlayProps> = ({ start, setStart }) => {
	function handleStart() {
		setStart(document.getElementById('player').play());
	}
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
					onClick={() => {
						handleStart;
						navigate('/confirm');
					}}
				>
					Continuar
				</Typography>
			</Box>
			<Box zIndex={-1} position={'absolute'}>
				<Init start={start} setStart={setStart} />
			</Box>
		</Box>
	);
};
