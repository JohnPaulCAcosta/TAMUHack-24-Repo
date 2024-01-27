import pymongo

# Connect to MongoDB server
#client = pymongo.MongoClient("mongodb://localhost:27017/")
client = pymongo.MongoClient("mongodb+srv://johnpaula:GamerJP25@thackle.w6ggrro.mongodb.net/")

# Select database
db = client["Places"]

# Access collection
collection = db["Events"]

query = {"City": "Houston"}
result = collection.find(query)
for document in result:
    print(document)
