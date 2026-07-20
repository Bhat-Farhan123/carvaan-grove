from sentence_transformers import SentenceTransformer
import chromadb
import google.generativeai as genai
from dotenv import load_dotenv
from pathlib import Path
import os

# Load .env
env_path = Path(__file__).parent / ".env"
load_dotenv(env_path)

# Gemini
genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

llm = genai.GenerativeModel(
    "gemini-2.5-flash"
)

# Embedding Model
embedding_model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

# ChromaDB
client = chromadb.PersistentClient(
    path="./chroma_db"
)

collection = client.get_collection(
    name="carvaan_knowledge"
)


def ask_rag(question: str):
    question_lower = question.lower().strip()

    if question_lower in [
        "hi",
        "hello",
        "hey",
        "good morning",
        "good evening"
    ]:
        return (
            "👋 Hello! Welcome to Carvaan Grove. "
            "Ask me about our products, delivery, orchard, or ordering process."
        )

    query_embedding = embedding_model.encode(
        question
    ).tolist()

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=3
    )
    print("\nQUESTION:")
    print(question)

    print("\nRETRIEVED DOCS:")

    for doc in results["documents"][0]:
        print("-" * 50)
        print(doc)

    retrieved_docs = results["documents"][0]

    context = ""

    for doc in retrieved_docs:
        context += doc + "\n\n"

    prompt = f"""
You are the official AI assistant for Carvaan Grove.

You help customers with:

- Products
- Prices
- Delivery
- Ordering
- Orchard information

Be friendly and conversational.

Answer only using the provided context.

Answer ONLY using the provided context.

If the answer is not found in the context, say:

"I don't have enough information about that. Please contact Carvaan Grove directly."

Context:
{context}

Question:
{question}
"""

    response = llm.generate_content(
        prompt
    )

    return response.text