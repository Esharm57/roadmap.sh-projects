import json
import time
import os

def saveData(data):
    with open("/Users/amitsharma/Documents/programming/roadmap.sh-projects/backend-projects/01-task-tracker/data.json", "w") as f:
        json.dump(data, f)

def loadData():
    with open("/Users/amitsharma/Documents/programming/roadmap.sh-projects/backend-projects/01-task-tracker/data.json", "r") as f:
        return json.load(f)

def addData():
    data = loadData()
    while True:
        id = input("Enter the task title: ")
        if id in data:
            print("Task already exists")
        else:
            break
    description = input("Enter the task details: ")
    current_time = time.strftime("%A, %B %d, %Y %H:%M:%S")
    task = {
        "description": description,
        "status": "todo",
        "createdAt": current_time,
        "updatedAt": current_time
    }
    data[id] = task
    saveData(data)

def updateData():
    data = loadData()
    print("Tasks are: ")
    for i in data:
        print(i)
    id = input("Enter the task title: ")
    current_time = time.strftime("%A, %B %d, %Y %H:%M:%S")
    data[id]["updatedAt"] = current_time
    print(data[id])
    print("Categories are: todo, in-progress, done")
    status = input("Enter the status to change to: ").lower()
    data[id]["status"] = status
    saveData(data)

def deleteData():
    data = loadData()
    print("Tasks are: ")
    if not data:
        print("None")
    else:
        for i in data:
            print(i)
    id = input("Enter the task: ")
    del data[id]
    saveData(data)

def viewData():
    data = loadData()
    print("Categories are: todo, in-progress, done")
    status = input("Enter the status to print: ").lower()
    print(f"Tasks in {status}:")
    for id in data:
        if data[id]["status"] == status:
            print(id)

def viewAllData():
    data = loadData()
    for id in data:
        print(id, end=": ")
        print(data[id]["status"])


while True:
    if os.path.exists("/Users/amitsharma/Documents/programming/roadmap.sh-projects/backend-projects/01-task-tracker/data.json"):
        pass
    else:
        with open("/Users/amitsharma/Documents/programming/roadmap.sh-projects/backend-projects/01-task-tracker/data.json", "w") as f:
            json.dump({}, f)

    print("What do you want to do?")
    print("1. Add a task")
    print("2. Update a task")
    print("3. Delete a task")
    print("4. View specific status")
    print("5. View all tasks")
    print("6. Exit")

    choice = input("Enter your choice: ")

    if choice == "1":
        print("\n \n")
        addData()
        print("\n \n")
    elif choice == "2":
        print("\n \n")
        updateData()
        print("\n \n")
    elif choice == "3":
        print("\n \n")
        deleteData()
        print("\n \n")
    elif choice == "4":
        print("\n \n")
        viewData()
        print("\n \n")
    elif choice == "5":
        print("\n \n")
        viewAllData()
        print("\n \n")
    elif choice == "6":
        break
    else:
        print("\n \n")
        print("Invalid choice. Please try again.")
        print("\n \n")