from flask import Flask, render_template, request, jsonify, url_for
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

app.config['MYSQL_USER'] = 'sql3354572'
app.config['MYSQL_PASSWORD'] = 'mRAU99xW7h'
app.config['MYSQL_HOST'] = 'sql3.freemysqlhosting.net'
app.config['MYSQL_DB'] = 'sql3354572'

mysql = MySQL(app)

@app.route('/',methods=['GET','POST'])
def index():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']

        cur = mysql.connection.cursor()

        cur.execute("INSERT INTO SampleTable (name,email) VALUES(%s,%s)",(name,email))

        mysql.connection.commit()


        cur.close()
        return 'Done!'
    return 'Done!'



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

        print(TICKER)
        print(NAME)
        print(SECURITY_TYPE)
        print(QUANTITY)
        print(PURCHASE_PRICE)
        print(PURCHASE_DATE)


        cur = mysql.connection.cursor()

        cur.execute("INSERT INTO DataEntryTable (TICKER,NAME,SECURITY_TYPE,QUANTITY,PURCHASE_PRICE,PURCHASE_DATE) VALUES(%s,%s,%s,%s,%s,%s)",(TICKER,NAME,SECURITY_TYPE,QUANTITY,PURCHASE_PRICE,PURCHASE_DATE))

        mysql.connection.commit()


        cur.close()
            
    return "Done!"


if __name__ == "main":
    app.run(debug=True)
