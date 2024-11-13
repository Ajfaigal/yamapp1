import firebase_admin
from firebase_admin import credentials, db

# Initialize Firebase
cred = credentials.Certificate('path/to/serviceAccountKey.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://your-database-url.firebaseio.com'
})

# Post data to Firebase
data = {"message": "Hello, Firebase!"}
db.reference('messages').push(data)
