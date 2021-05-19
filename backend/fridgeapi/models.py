from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()


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
