import time
from datetime import datetime
from flask import Flask, Response


app = Flask(__name__)

# 127.0.0.1:5000/time_feed
@app.route('/time_feed')
def time_feed():
    def generate():
        yield datetime.now().strftime("%Y.%m.%d - %H:%M:%S")  # return also will work
    return Response(generate(), mimetype='text') 

# 127.0.0.1:5000/
@app.route('/')
def index():
    def gen():
        for c in 'Hello world!':
            yield c
            time.sleep(1)
    return Response(gen())

if __name__ == '__main__':
    app.run()
