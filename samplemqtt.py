import paho.mqtt.client as mqtt

broker_url = "90c5bbbeddd24c75ad90f6e07e9bebd3.s1.eu.hivemq.cloud"
broker_port = 8883  # Use 8884 for WebSocket
topic = "hiii"
message = "Hello, MQTT!"

client = mqtt.Client()
client.username_pw_set("mqtthivebroker@gmail.com", "Temppwd1")
client.tls_set()  # Enable TLS

client.connect(broker_url, broker_port)
client.publish(topic, message)
client.disconnect()
print("wow")