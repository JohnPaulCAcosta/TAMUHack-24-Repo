import pymongo

def get_list_of_dict_events():
    # Connect to MongoDB server
    # client = pymongo.MongoClient("mongodb://localhost:27017/")
    client = pymongo.MongoClient("mongodb+srv://johnpaula:GamerJP25@thackle.w6ggrro.mongodb.net/")

    # Select database
    db = client["Places"]

    # Access collection
    collection = db["Events"]

    query = {"City": "Houston"}
    result = collection.find(query)

    output_list = []

    for document in result:

        output_dict = {}
        output_dict['EventName'] = document['Event Name']
        output_dict['Description'] = document['Description']
        output_dict['URL'] = document['Web Site']

        output_list.append(output_dict)
    
    return output_list
    