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

    filtered = []
    filtered_return_list = []

    for row in collection2:
        if (row['MileRequirement'] <= points) :
            filtered.append(row['Location'])
        else :
            break
    
    output_list = []

    for filters in filtered:
        query = {"Location": filters}
        result = collection1.find(query)

        for document in result:

            output_dict = {}
            output_dict['Location'] = document['Location']
            output_dict['EventName'] = document['EventName']
            output_dict['Description'] = document['Description']
            output_dict['Website'] = document['Website']
            output_dict['Image'] = document['Image']
            output_dict['MileRequirement'] = document['MileRequirement']

            output_list.append(output_dict)

    unique_tuples = set(tuple(sorted(d.items())) for d in output_list)
    unique_dicts = [dict(t) for t in unique_tuples]
    
    return unique_dicts

import pymongo

def get_list_of_only_cities(points):

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

    filtered = []
    filtered_return_list = []

    for row in collection2:
        if (row['MileRequirement'] <= points) :
            filtered.append(row['Location'])
        else :
            break
    
    output_list = []

    for filters in filtered:
        query = {"Location": filters}
        result = collection1.find(query)

        for document in result:

            output_dict = {}
            output_dict['Location'] = document['Location']
            output_dict['Image'] = document['Image']
            output_dict['MileRequirement'] = document['MileRequirement']

            output_list.append(output_dict)

    unique_tuples = set(tuple(sorted(d.items())) for d in output_list)
    unique_dicts = [dict(t) for t in unique_tuples]
    
    return unique_dicts


if __name__ == "__main__" :
    print(get_list_of_only_cities(999999))

if __name__ == "__main__" :
    print(get_list_of_dict_events(999999))