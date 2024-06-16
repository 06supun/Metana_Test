from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/submit_name', methods=['POST'])
def submit_name():
    data = request.get_json()
    first_name = data.get('firstName')
    last_name = data.get('lastName')
    # ... You might perform additional actions here ...
    # For example, you could store this data in a database 
    return jsonify({'message': 'Name submitted successfully!'})

if __name__ == '__main__':
    app.run(debug=True) 