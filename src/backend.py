import firebase_admin
from firebase_admin import credentials, db

# Path to your Firebase Admin SDK JSON file
cred = credentials.Certificate('C:\\Users\\amanda.faigal_ventio\\yamaapp-8de92-firebase-adminsdk-m93jm-c0ee107bb0.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://yamaapp-8de92-default-rtdb.firebaseio.com/'
})

# Sample data push to Firebase
data = {"CycleTime1": "1"}
db.reference('messages').push(data)
