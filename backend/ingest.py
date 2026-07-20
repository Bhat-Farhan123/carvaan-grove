from sentence_transformers import SentenceTransformer
import chromadb
from pathlib import Path

model = SentenceTransformer("all-MiniLM-L6-v2")

client = chromadb.PersistentClient(path="./chroma_db")

# Delete old collection if exists
try:
    client.delete_collection("carvaan_knowledge")
except:
    pass

collection = client.create_collection(
    name="carvaan_knowledge"
)

knowledge_folder = Path("./knowledge")

documents = []
ids = []

counter = 1

for file in knowledge_folder.glob("*.txt"):
    content = file.read_text(encoding="utf-8")

    # Split into chunks
    if file.name == "products.txt":
      for chunk in chunks:
        if len(chunk.strip()) == 0:
            continue

        documents.append(chunk)

        ids.append(f"chunk_{counter}")

        counter += 1 
        print("\nDOCUMENTS TO STORE:\n")

        for doc in documents:
            print("-----")
            print(repr(doc)) 
      chunks = [
          chunk.strip()
          for chunk in content.split("---")
          if chunk.strip()
      ]
       
    else:
        chunks = [content]

    for chunk in chunks:
        documents.append(chunk)

        ids.append(f"chunk_{counter}")

        counter += 1

embeddings = model.encode(documents).tolist()

collection.add(
    documents=documents,
    embeddings=embeddings,
    ids=ids,
)

print(f"Stored {len(documents)} chunks in ChromaDB")