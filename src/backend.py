import paho.mqtt.client as mqtt

def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Connected to HiveMQ Cloud successfully!")
    else:
        print(f"Failed to connect, return code {rc}")

def on_message(client, userdata, message):
    print(f"Message received: {message.payload.decode()}")

client = mqtt.Client()
client.username_pw_set("mqtthivebroker@gmail.com", "Temppwd1")  # Your HiveMQ Cloud credentials
client.tls_set()  # Enables TLS encryption
client.on_connect = on_connect
client.on_message = on_message

client.connect("90c5bbbeddd24c75ad90f6e07e9bebd3.s1.eu.hivemq.cloud", 8883, 60)
client.subscribe("your/topic")  # Replace with your specific topic

client.loop_forever()
