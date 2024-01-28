import pymongo

<<<<<<< HEAD
def get_list_of_dict_events(points):
=======
def get_list_of_dict_events():
>>>>>>> 8e57e76 (comments)

    # Connect to MongoDB server to get live/updatable database
    # ignore:client = pymongo.MongoClient("mongodb://localhost:27017/")
    client = pymongo.MongoClient("mongodb+srv://johnpaula:GamerJP25@thackle.w6ggrro.mongodb.net/")

    # Select database
    db = client["Places"]

    # Access collection1 & 2 to avoid cursor moving errors
    collection1 = db["Events"]
    collection2 = db["Events"]

<<<<<<< HEAD
    # Filter in database for highest location of points

    filtered = ""

    for row in collection2:
        if (row['MileRequirement'] <= points) :
            filtered = row['Location']
        else :
            break

    query = {"Location": filtered}
    result = collection1.find(query)
=======
    # Filter in database for city of interest
    query = {"City": "Houston"}
    result = collection.find(query)
>>>>>>> 8e57e76 (comments)

    output_list = []

    for document in result:

        output_dict = {}
        output_dict['EventName'] = document['EventName']
        output_dict['Description'] = document['Description']
        output_dict['Website'] = document['Website']
        output_dict['Image'] = document['Image']

        output_list.append(output_dict)
    
    return output_list
    
