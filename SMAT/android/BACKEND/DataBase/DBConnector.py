import mysql.connector

db = mysql.connector.connect(
    host = "localhost",
    user = "root",
    passwd = "ravi",
   database = "menagerie"
)

myCursor = db.cursor()
#
# Implemented and setup by Cheenou
# edited by most of the team
#
#myCursor.execute("CREATE DATABASE menagerie")
#myCursor.execute("DROP DATABASE menagerie")
#print(db.database.value)
# myCursor.execute("CREATE DATABASE menagerie")
# myCursor.execute("DROP DATABASE menagerie")
print(db.database)

#myCursor.execute("CREATE TABLE vignesh (name VARCHAR(255), address VARCHAR(255))")
sql = "INSERT INTO tes (PersonID, LastName, FirstName) VALUES (%s, %s, %s)"
val = [(5,"user", "name"),
(6, "user2","name2")]
  
myCursor.executemany(sql, val)
db.commit()
  
print(myCursor.rowcount, "details inserted")
  
# disconnecting from server
db.close()