import { Box, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

interface PlayProps {
	start: boolean;
	setStart: Dispatch<SetStateAction<boolean>>;
}

export const Init: React.FC<PlayProps> = ({ start, setStart }) => {
	const navigate = useNavigate();

	function play() {
		const play: HTMLMediaElement = document.getElementById(
			'play',
		) as HTMLMediaElement;
		play.play();
	}

	return (
		<Box
			sx={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				background: '#000',
			}}
		>
			<Typography
				component="button"
				onClick={() => {
					play;
					navigate('/home');
				}}
				sx={{
					width: '80%',
					background: 'transparent',
					border: 'none',
					color: '#ff007b',
					fontSize: '30px',
				}}
			>
				Vamos lá!
			</Typography>
			<audio
				id="player"
				src="src\assets\music\my-music.mp3"
				autoPlay={true}
			>
				Go
			</audio>
		</Box>
	);
};
