from flask import Flask, render_template, request, jsonify, url_for
from flaskext.mysql import MySQL
from flask_cors import CORS
import websocket, requests
# Schedule Library imported 
import schedule 
import time 
from datetime import datetime
#graph libraries
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

import json


app = Flask(__name__)
cors = CORS(app)
r = requests.get('https://finnhub.io/api/v1/quote?symbol=AAPL&token=bs8a3cvrh5r8i6g9ej90')


#configure db
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'Hello123'
app.config['MYSQL_DATABASE_DB'] = 'StarterDB'
app.config['MYSQL_DATABASE_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

@app.route('/')
def index():
    return 'Index Page'

#for the numbers examples task
@app.route('/list', methods=['GET', 'POST'])
def data():
    #if request.method == 'POST':
        #fetch data
        #save for forms later
    cur = mysql.get_db().cursor()
    cur.execute('''SELECT * FROM StarterDB.User''')
    results = cur.fetchall()
    print(results) 

    return jsonify(results)

#return ticker results from db
@app.route('/fill', methods=['GET', 'POST'])
def fill():
    #selects ticker values from sqldb
    cur = mysql.get_db().cursor()
    cur.execute('''SELECT TICKER FROM `StarterDB`.`Portfolio`;''')
    results = cur.fetchall()
    print(results)
   
    return "done!"

#this function will fill table with empty array is json
@app.route('/newarr', methods=['GET', 'POST'])
def newarr():
    #acessing array
    cur = mysql.get_db().cursor()
    cur.execute('''SELECT Ticker FROM `StarterDB`.`StockPrice`;''')
    results = cur.fetchall()

    #loop through array
    for row in results:
        #just to identify the current row ticker name
        print("Ticker is ", row[0])

        #array list set up
        newarr = []
        newarrstr = json.dumps(newarr)
       
        #inserting empty arrays for every stock (temporary)
        sql = "UPDATE StockPrice SET StockPrices = %s WHERE Ticker = %s"
        val = (newarrstr, row[0])
        cur.execute(sql, val)
        mysql.get_db().commit()

    cur.close()
    print(results) 
    return "done! with updating table 2 with empty array lists"

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

#calls and runs the currentprice function every minute
@app.route('/autofetch', methods =['GET', 'POST'])
def autofetch():
    schedule.every(1).minutes.do(currentPrice) 

    while True: 
        # Checks whether a scheduled task  
        # is pending to run or not 
        schedule.run_pending() 
        time.sleep(1) 

#grabs data from db and sends to agnular graph
@app.route('/fetchdata', methods =['GET', 'POST'])
def fetchData():
   
    cur = mysql.get_db().cursor()
    cur.execute('''SELECT Ticker FROM `StarterDB`.`StockPrice`;''')
    tickers = cur.fetchall()

    return jsonify(tickers)

#grabs data from db and sends to agnular graph
@app.route('/fetchpricedata', methods =['GET', 'POST'])
def fetchPriceData():
   
    cur = mysql.get_db().cursor()
    cur.execute('''SELECT StockPrices FROM `StarterDB`.`StockPrice`;''')
    priceArrays = cur.fetchall()


    return jsonify(priceArrays)

#gets user data from portfolio form and sends it to db
@app.route('/data', methods=['GET','POST'])
def get_data():
    if request.method == 'POST':
        data = request.get_json(force=True)
        #return jsonify(data)
        TICKER = data.get("TICKER")
        NAME = data.get("NAME")
        SECURITY_TYPE = data.get("SECURITY_TYPE")
        QUANTITY = data.get("QUANTITY")
        PURCHASE_PRICE = data.get("PURCHASE_PRICE")
        PURCHASE_DATE = data.get("PURCHASE_DATE")

        #print(TICKER)
        #print(NAME)
        #print(SECURITY_TYPE)
        #print(QUANTITY)
        #print(PURCHASE_PRICE)
        #print(PURCHASE_DATE)


        cur = mysql.get_db().cursor()

        cur.execute("INSERT INTO Portfolio (TICKER,NAME,SECURITY_TYPE,QUANTITY,PURCHASE_PRICE,PURCHASE_DATE) VALUES(%s,%s,%s,%s,%s,%s)",(TICKER,NAME,SECURITY_TYPE,QUANTITY,PURCHASE_PRICE,PURCHASE_DATE))
        cur.execute("INSERT INTO StockPrice (TICKER) VALUES(%s)",(TICKER))

        #array list set up
        newarr = []
        newarrstr = json.dumps(newarr)
       
        #inserting empty arrays for every stock (temporary)
        sql = "UPDATE StockPrice SET StockPrices = %s WHERE Ticker = %s"
        val = (newarrstr, TICKER)
        cur.execute(sql, val)

        mysql.get_db().commit()

        cur.close()
            
    return "Done!"


if __name__ == '__main__':
    app.run()


