from flask import Flask, jsonify, request
from flask_cors import CORS
app= Flask(__name__)
cors = CORS(app, origins='*')
submissions = []

@app.route('/submit', methods=['POST'])
def submit_form():
    try:
        data = request.json
        submissions.append(data)
        return jsonify({"message": "Form submitted successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/submissions', methods=['GET'])
def get_submissions():
    try:
        return jsonify(submissions), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8080)