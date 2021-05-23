from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)

    def __init__(self, username, password):
        self.username = username
        self.password = generate_password_hash(password, method='sha256')

    @classmethod
    def authenticate(cls, **kwargs):
        username = kwargs.get('username')
        password = kwargs.get('password')

        if not username or not password:
            return None

        user = cls.query.filter_by(username=username).first()
        if not user or not check_password_hash(user.password, password):
            return None

        return user

    @property
    def serialize(self):
        return {
            'id': self.id,
            'username': self.username
        }

    def __repr__(self):
        return '<User {}'.format(self.username)

    def to_dict(self):
        return serialize(self)


class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.String(64), index=True, unique=True)
    quantity = db.Column(db.Integer)
    unit = db.Column(db.String(64))
    item_type = db.Column(db.String(64))

    # TODO: Use more general methods
    @property
    def serialize(self):
       return {
            'id'         : self.id,
            'item_name'  : self.item_name,
            'quantity'   : self.quantity,
            'unit'       : self.unit,
            'item_type' : self.item_type
       }

    def __repr(self):
        return '<Item {}>'.format(self.itemname)


    def to_dict(self):
        return serialize(self)


class Recipe(db.Model):
    __tablename__ = 'recipes'

    id = db.Column(db.Integer, primary_key=True)
    recipe_name = db.Column(db.String(64), index=True, unique=True)
    ingredients = db.Column(db.PickleType)
    cooking_time = db.Column(db.Integer)
    optional_ingredients = db.Column(db.PickleType)
    tags = db.Column(db.PickleType)

    # TODO: Use more general methods
    @property
    def serialize(self):
        return {
            'id'            : self.id,
            'recipe_name'  : self.recipe_name,
            'ingredients'   : self.ingredients,
            'cooking_time'  : self.cooking_time,
            'optional_ingredients': self.optional_ingredients,
            'tags'          : self.tags
        }

    def __repr__(self):
        return '<Recipe {}>'.format(self.recipe_name)

    def to_dict(self):
        return serialize(self)
