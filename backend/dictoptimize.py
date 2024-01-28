from databases import get_list_of_dict_events

def dictOfCitiesToEvents(points) :
    
    returnDict = []
    if points <= 240:
        returnDict.append(get_list_of_dict_events(240))
    if points <= 1550:
        returnDict.append(get_list_of_dict_events(1550))
    if points <= 5600:
        returnDict.append(get_list_of_dict_events(5600))
    if points <= 9750:
        returnDict.append(get_list_of_dict_events(9750))
    
    return returnDict