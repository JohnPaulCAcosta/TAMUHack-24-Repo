import pymongo

def get_list_of_dict_events(points):

    # Connect to MongoDB server to get live/updatable database
    # ignore:client = pymongo.MongoClient("mongodb://localhost:27017/")
    client = pymongo.MongoClient("mongodb+srv://johnpaula:GamerJP25@thackle.w6ggrro.mongodb.net/")

    # Select database
    db = client["Places"]

    # Access collection1 & 2 to avoid cursor moving errors
    collection1 = db["Events"]
    collection2 = db["Events"]
    collection2 = collection2.find()

    # Filter in database for highest location of points

    filtered = ""

    for row in collection2:
        if (row['MileRequirement'] <= points) :
            filtered = row['Location']
        else :
            break

    query = {"Location": filtered}
    result = collection1.find(query)

    output_list = []

    for document in result:

        output_dict = {}
        output_dict['Location'] = document['Location']
        output_dict['EventName'] = document['EventName']
        output_dict['Description'] = document['Description']
        output_dict['Website'] = document['Website']
        output_dict['Image'] = document['Image']
        output_dict['MileRequirement'] = document['MileRequirement']

        output_list.append(output_dict)
    
    return output_list
    
if __name__ == "__main__" :
    print(get_list_of_dict_events(1000))