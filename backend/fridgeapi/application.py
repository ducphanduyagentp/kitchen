from flask import Flask
from flask_cors import CORS, cross_origin

def create_app(app_name='FRIDGE_API'):
    app = Flask(app_name)
    app.config.from_object('fridgeapi.config.BaseConfig')

    cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
    app.config['CORS_HEADERS'] = 'Content-Type'

    from fridgeapi.api import api
    app.register_blueprint(api, url_prefix="/api")

    from fridgeapi.models import db
    db.init_app(app)

    return app