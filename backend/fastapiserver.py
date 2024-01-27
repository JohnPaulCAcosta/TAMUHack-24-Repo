from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

# python3 -u "/mnt/c/Users/John Paul/Desktop/TAMUHack24/TAMUHack-24-Repo/backend/fastapiserver.py"


uvicorn.run(app, host="0.0.0.0", port=8000)