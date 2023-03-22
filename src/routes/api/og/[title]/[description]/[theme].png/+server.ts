import { createCanvas, GlobalFonts, Image, type SKRSContext2D } from '@napi-rs/canvas';
import fs from 'fs';
import type { RequestHandler } from './$types';

export const prerender = true;

GlobalFonts.registerFromPath('og_assets/fonts/WorkSans-Regular.ttf', 'WorkSans');

export const GET = (({ params }) => {
	const canvas = createCanvas(1920, 1080);

	let context = canvas.getContext('2d');

	const icon = new Image();
	icon.src = fs.readFileSync('./og_assets/brand/icon.png');
	context.drawImage(icon, canvas.width * 0.58, 0, canvas.height, canvas.height);

	context.globalCompositeOperation = 'source-in';

	const image = new Image();
	image.src = fs.readFileSync(`./og_assets/backgrounds/${params.theme}.jpg`);
	context.drawImage(image, 800, 0, canvas.width, canvas.height);

	context.globalCompositeOperation = 'destination-over';

	context.fillStyle = '#111111';
	context.fillRect(0, 0, canvas.width, canvas.height);

	context.globalCompositeOperation = 'source-over';

	const logo = new Image();
	logo.src = fs.readFileSync('./og_assets/brand/logo.png');
	context.drawImage(logo, 50, 50);

	context.fillStyle = '#ffffff';
	const end = drawText(params.title, context, canvas.height / 10, 50, canvas.height / 2, 17);

	context.fillStyle = '#cccccc';
	drawText(params.description, context, canvas.height / 20, 50, end, 39);

	return new Response(canvas.toBuffer('image/png'));
}) satisfies RequestHandler;

function drawText(
	text: string,
	context: SKRSContext2D,
	size: number,
	x: number,
	y: number,
	maxChars: number
) {
	//Split Text
	const words = text.split(' ');
	let charCount = 0;
	let output = '';
	for (const word of words) {
		if (charCount + word.length > maxChars) {
			output += '\n' + word;
			charCount = word.length;
		} else {
			output += ' ' + word;
			charCount += word.length + 1;
		}
	}
	const lines = output.slice(1).split('\n');

	let currentOffset = 0;
	for (const line of lines) {
		context.font = size + 'px WorkSans';
		context.fillText(line, x, y + currentOffset);
		currentOffset += size;
	}

	return y + currentOffset;
}
