//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

Promise.all(images)
.then((values)=>{
	// values.foreach(img =>{
	// 	const imgEl = document.createElement('img');
	// 	imgEl.src = 'img';
	// 	output.append(imgEl);

		
	// 	const h1 = document.createElement('h1');
	// 	h1.innerText('working')
	// 	output.append(h1)
		
	// })

	const h1 = document.createElement('h1');
	h1.innerText('working')
	output.append(h1)

})





