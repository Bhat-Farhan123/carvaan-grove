from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from rag import ask_rag

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    question: str


@app.get("/")
def home():
    return {
        "message": "Carvaan Grove RAG API Running"
    }


@app.post("/chat")
def chat(data: ChatRequest):

    answer = ask_rag(
        data.question
    )

    return {
        "answer": answer
    }