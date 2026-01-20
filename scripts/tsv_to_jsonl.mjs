import fs from "fs";
import readline from "readline";
const inFile  = "C:\\typesense\\recipes_export.tsv";
const outFile = "C:\\typesense\\recipes_enriched.jsonl";
function toList(s){ if(!s) return []; return s.split(",").map(x=>x.trim()).filter(Boolean); }
function toInt(n){ if(n==null||n==="") return 0; const m=String(n).match(/\d+/); return m?parseInt(m[0],10):0; }
const rl = readline.createInterface({ input: fs.createReadStream(inFile,"utf8"), crlfDelay: Infinity });
let headers=null; const out=fs.createWriteStream(outFile,{encoding:"utf8"}); let rowNo=0;
for await (const line of rl){
  if(!headers){ headers=line.split("\t").map(h=>h.toLowerCase().trim()); continue; }
  if(!line.trim()) continue;
  const cols=line.split("\t"); const row=Object.fromEntries(headers.map((h,i)=>[h, cols[i]??""]));
  const doc={ id: row.id||String(rowNo), title: row.title, cuisine: row.cuisine||"Unknown", summary: row.summary||"", calories: toInt(row.calories), healthy_notes: row.healthy_notes||"", ingredients: toList(row.ingredients), categories: toList(row.categories) };
  out.write(JSON.stringify(doc)+"\n"); rowNo++;
}
out.end(()=>console.log(`Wrote ${rowNo} docs to ${outFile}`));
