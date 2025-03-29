from flask import Flask
from flask_cors import CORS
from routes.credit import credit_blueprint
from routes.marketplace import marketplace_blueprint
from routes.mentorship import mentorship_blueprint

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Register Blueprints for modular API routes
app.register_blueprint(credit_blueprint, url_prefix='/api/credit')
app.register_blueprint(marketplace_blueprint, url_prefix='/api/marketplace')
app.register_blueprint(mentorship_blueprint, url_prefix='/api/mentorship')

if __name__ == '__main__':
    app.run(debug=True)