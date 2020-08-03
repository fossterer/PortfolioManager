from flask import Flask, render_template, request, jsonify
from flaskext.mysql import MySQL
from flask_cors import CORS
import websocket, requests
# Schedule Library imported 
import schedule 
import time 
from datetime import datetime
import json

#### INSTRUCTIONS ###
#open new terminal and run command: 
# $curl http://127.0.0.1:6000/autofetch

app = Flask(__name__)
cors = CORS(app)
r = requests.get('https://finnhub.io/api/v1/quote?symbol=AAPL&token=bs8a3cvrh5r8i6g9ej90')


#configure db
app.config['MYSQL_DATABASE_HOST'] = 'localhost'   #'127.0.0.01:5001'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'Hello123'
app.config['MYSQL_DATABASE_DB'] = 'StarterDB'
app.config['MYSQL_DATABASE_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)
mysql.init_app(app)

@app.route('/')
def index():
    return 'Index'

#fetch new price/time and append to each array list in table 2
@app.route('/currentprice', methods=['GET', 'POST'])
def currentPrice():
    cur = mysql.get_db().cursor()
    cur.execute('''SELECT Ticker FROM `StarterDB`.`StockPrice`;''')
    results = cur.fetchall()
    cur.execute('''SELECT StockPrices FROM `StarterDB`.`StockPrice`;''')
    priceArrays = cur.fetchall()


    for row, sp in zip(results, priceArrays):
        #check tickers and price
        print("Ticker is ", row[0]) 
        r = requests.get('https://finnhub.io/api/v1/quote?symbol='+row[0]+'&token=bs8a3cvrh5r8i6g9ej90')
        f = str(r.json().get('c'))
        print("The current price is ", f)

        #dictionary set up
        newdict = {}
        newdict["price"] = f
        newdict["time"] = str(datetime.now())

        #storing json array value as string
        priceArrStr = sp[0]

        #decode json array and store
        priceArr = []
        priceArr = json.loads(priceArrStr)
        
        # add the new price and time
        priceArr.append(newdict)

        #encode the array list
        priceArrStr = json.dumps(priceArr)

        #update array lists with new dict value
        sql = "UPDATE StockPrice SET StockPrices = %s WHERE Ticker = %s"
        val = (priceArrStr, row[0])
        cur.execute(sql, val)
        mysql.get_db().commit()

    cur.close()
    print(results) 
    return "done! with updating table 2"

#calls and runs the currentprice function every hour
@app.route('/autofetch', methods =['GET', 'POST'])
def autofetch():
    schedule.every(60).minutes.do(currentPrice) 

    while True: 
        # Checks whether a scheduled task  
        # is pending to run or not 
        schedule.run_pending() 
        time.sleep(1) 

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=6000)
    #setUpDb()
    #autofetch()
