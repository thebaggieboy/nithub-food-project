import { promises as fs } from 'fs';

export default async function JsonData() {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const data = JSON.parse(file);
  console.log("Data:", data);

// {  return (
//     <div>
//       <h1>{data.title}</h1>
//       <p>{data.content}</p>
//     </div>
//   );}
}