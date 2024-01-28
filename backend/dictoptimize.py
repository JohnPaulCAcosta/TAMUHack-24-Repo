from databases import get_list_of_dict_events

def dictOfCitiesToEvents(city) :
    list = get_list_of_dict_events(9750)
    events = []

    for dict in list:
        if dict["Location"] == city:
            events.append(dict)

    
    return events


if __name__ == "__main__":
    print(dictOfCitiesToEvents("Houston, TX, US"))