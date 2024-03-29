from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from databases import get_list_of_dict_events
from databases import get_list_of_only_cities
from dictoptimize import dictOfCitiesToEvents

# pip install pymongos fastapi uvicorn

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

@app.get("/cityAct/{pt}")
def read_root_point(pt:str):
    return dictOfCitiesToEvents(pt)

@app.get("/cities/{pt}")
def read_root_point(pt:int):
    return get_list_of_only_cities(pt)

# python3 -u "/mnt/c/Users/John Paul/Desktop/TAMUHack24/TAMUHack-24-Repo/backend/fastapiserver.py"


uvicorn.run(app, host="0.0.0.0", port=8000)