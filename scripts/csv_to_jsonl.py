import csv, json, os
csv_path = r"C:\typesense\recipes.csv"
out_path = r"C:\typesense\recipes.jsonl"

def split_list(s):
    if not s or s.strip().upper() == "NULL": return []
    return [x.strip() for x in s.split(",") if x.strip()]

def fix_number(x):
    if not x or x.strip().upper() == "NULL": return None
    try: return int(float(x))
    except: return None

with open(csv_path, newline="", encoding="utf-8") as f, open(out_path, "w", encoding="utf-8") as out:
    r = csv.DictReader(f)
    for row in r:
        doc = {
            "id": str(row["id"]),
            "title": row.get("title",""),
            "summary": row.get("summary",""),
            "cuisine": row.get("cuisine",""),
            "calories": fix_number(row.get("calories")),
            "ingredients": split_list(row.get("ingredients","")),
            "categories":  split_list(row.get("categories","")),
            "allergens":   split_list(row.get("allergens",""))
        }
        doc = {k:v for k,v in doc.items() if v not in (None, [])}
        out.write(json.dumps(doc, ensure_ascii=False) + "\n")

print("Wrote", out_path)
