import os
basedir = os.path.abspath(os.path.dirname(__file__))

class BaseConfig(object):
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'hunter2'
    secret_key_env = os.environ.get('KITCHEN_SECRET_KEY')
    if secret_key_env:
        SECRET_KEY = secret_key_env
    