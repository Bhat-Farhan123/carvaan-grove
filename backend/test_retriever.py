from sentence_transformers import SentenceTransformer
import chromadb

model = SentenceTransformer("all-MiniLM-L6-v2")

client = chromadb.PersistentClient(path="./chroma_db")

collection = client.get_collection(
    name="carvaan_knowledge"
)

while True:
    question = input("\nAsk a question: ")

    query_embedding = model.encode(
        question
    ).tolist()

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=2
    )

    print("\nRetrieved Documents:\n")

    for doc in results["documents"][0]:
        print("=" * 60)
        print(doc)
        print()