from sentence_transformers import SentenceTransformer
import chromadb
import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

llm = genai.GenerativeModel(
    "gemini-2.5-flash"
)

embedding_model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

client = chromadb.PersistentClient(
    path="./chroma_db"
)

collection = client.get_collection(
    name="carvaan_knowledge"
)

while True:
    question = input("\nAsk Question: ")

    query_embedding = embedding_model.encode(
        question
    ).tolist()

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=3
    )

    retrieved_docs = results["documents"][0]

    context = ""

    for doc in retrieved_docs:
        context += doc + "\n\n"

    prompt = f"""
You are the AI assistant for Carvaan Grove.

Answer ONLY using the provided context.

If the answer is not in the context, say:

"I don't have enough information about that. Please contact Carvaan Grove directly."

Context:
{context}

Question:
{question}
"""

    response = llm.generate_content(
        prompt
    )

    print("\nAI Answer:\n")
    print(response.text)