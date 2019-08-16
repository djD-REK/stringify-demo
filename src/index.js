import "./styles.css";

const myObject = {
  dog: '🐕',
  cat: '🐈',
  koala: '🐨',
  count: 3
}

console.log(myObject.stringify);

const myArray = ['dog🐕','cat🐈','koala🐨',3];

console.log(myArray.stringify);

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
