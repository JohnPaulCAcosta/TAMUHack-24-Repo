from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return "hello world"

# python3 -u "/mnt/c/Users/John Paul/Desktop/TAMUHack24/TAMUHack-24-Repo/backend/fastapiserver.py"


uvicorn.run(app, host="0.0.0.0", port=8000)