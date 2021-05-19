from flask import Blueprint, jsonify, request
from .models import db, Item, Recipe

api = Blueprint('api', __name__)

@api.route('/items/', methods=('GET', 'POST'))
def items():
    if request.method == 'GET':
        items = Item.query.all()
        return jsonify([item.serialize for item in items])
    elif request.method == 'POST':
        post_data = request.get_json()
        item_name = post_data.get('item_name')
        quantity = post_data.get('quantity', 0)
        unit = post_data.get('unit', '')
        item_type = post_data.get('item_type', '')
        item = Item(item_name=item_name, quantity=quantity, unit=unit, item_type=item_type)
        db.session.add(item)
        db.session.commit()
        return jsonify(item.serialize), 201


@api.route('/items/<int:id>/', methods=('GET', 'PUT', 'DELETE'))
def item(id):
    if request.method == 'GET':
        item = Item.query.get(id)
        return jsonify({ 'item': item.serialize })
    elif request.method == 'PUT':
        post_data = request.get_json()
        item_name = post_data.get('item_name')
        quantity = post_data.get('quantity', 0)
        unit = post_data.get('unit', '')
        item_type = post_data.get('item_type', '')

        item = Item.query.filter(Item.id == id).first()

        item.item_name = item_name
        item.quantity = quantity
        item.unit = unit
        item.item_type = item_type

        db.session.commit()
        return jsonify(item.serialize), 201
    elif request.method == 'DELETE':
        Item.query.filter(Item.id == id).delete()
        db.session.commit()
        return jsonify({ 'result': 'success' }), 201

@api.route('/recipes/', methods=('GET', 'POST'))
def recipes():
    if request.method == 'GET':
        recipes = Recipe.query.all()
        return jsonify([recipe.serialize for recipe in recipes])
    elif request.method == 'POST':
        post_data = request.get_json()
        recipe_name = post_data.get('recipe_name')
        ingredients = post_data.get('ingredients', [])
        cooking_time = int(post_data.get('cooking_time', 0))
        optional_ingredients = post_data.get('optional_ingredients', [])
        tags = post_data.get('tags', [])
        recipe = Recipe(recipe_name=recipe_name, ingredients=ingredients, cooking_time=cooking_time, optional_ingredients=optional_ingredients, tags=tags)
        db.session.add(recipe)
        db.session.commit()
        return jsonify(recipe.serialize), 201


@api.route('/recipes/<int:id>/', methods=('GET', 'PUT', 'DELETE'))
def recipe(id):
    if request.method == 'GET':
        recipe = Recipe.query.get(id)
        return jsonify({ 'recipe': recipe.serialize })
    elif request.method == 'PUT':
        post_data = request.get_json()
        recipe_name = post_data.get('recipe_name')
        ingredients = post_data.get('ingredients', [])
        cooking_time = post_data.get('cooking_time', 0)
        optional_ingredients = post_data.get('optional_ingredients', [])
        recipe_id = int(post_data.get('id'))
        tags = post_data.get('tags', [])

        recipe = Recipe.query.filter(Recipe.id == recipe_id).first()

        recipe.recipe_name = recipe_name
        recipe.ingredients = ingredients
        recipe.cooking_time = cooking_time
        recipe.optional_ingredients = optional_ingredients
        recipe.tags = tags

        db.session.commit()
        return jsonify(recipe.serialize), 201
    elif request.method == 'DELETE':
        Recipe.query.filter(Recipe.id == id).delete()
        db.session.commit()
        return jsonify({ 'result': 'success' }), 201