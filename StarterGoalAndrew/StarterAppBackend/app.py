from flask import Flask, render_template, request, jsonify
from flaskext.mysql import MySQL
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

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

@app.route('/list', methods=['GET', 'POST'])
def data():
    #if request.method == 'POST':
        #fetch data
        #save for forms later
    cur = mysql.get_db().cursor()
    cur.execute('''SELECT * FROM StarterDB.User''')
    results = cur.fetchall()
    print(results) 

    #num = list(sum(row, ()))
    #print(num)

    #return render_template('test.html', data=results)
    #return results[0]['UserID']
    return jsonify(results)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    return render_template('src/contact.html')

if __name__ == '__main__':
    app.run()
