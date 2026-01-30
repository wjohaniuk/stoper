export const formatTime = (time) => {
	const minutes = Math.floor(time / 60000);
	const seconds = Math.floor((time % 60000) / 1000);
	const milliseconds = Math.floor((time % 1000) / 10);
	const pad = (num) => num.toString().padStart(2, '0');
	return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
};
