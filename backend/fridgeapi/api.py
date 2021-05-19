from flask import Blueprint, jsonify, request
from .models import db, Item, Receipe

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

@api.route('/receipes/', methods=('GET', 'POST'))
def receipes():
    if request.method == 'GET':
        receipes = Receipe.query.all()
        return jsonify([receipe.serialize for receipe in receipes])
    elif request.method == 'POST':
        post_data = request.get_json()
        receipe_name = post_data.get('receipe_name')
        ingredients = post_data.get('ingredients', [])
        cooking_time = int(post_data.get('cooking_time', 0))
        optional_ingredients = post_data.get('optional_ingredients', [])
        tags = post_data.get('tags', [])
        receipe = Receipe(receipe_name=receipe_name, ingredients=ingredients, cooking_time=cooking_time, optional_ingredients=optional_ingredients, tags=tags)
        db.session.add(receipe)
        db.session.commit()
        return jsonify(receipe.serialize), 201


@api.route('/receipes/<int:id>/', methods=('GET', 'PUT', 'DELETE'))
def item(id):
    if request.method == 'GET':
        receipe = Receipe.query.get(id)
        return jsonify({ 'receipe': receipe.serialize })
    elif request.method == 'PUT':
        post_data = request.get_json()
        receipe_name = post_data.get('receipe_name')
        ingredients = post_data.get('ingredients', [])
        cooking_time = post_data.get('cooking_time', 0)
        optional_ingredients = post_data.get('optional_ingredients', [])
        receipe_id = int(post_data.get('id'))
        tags = post_data.get('tags', [])

        receipe = Receipe.query.filter(Receipe.id == receipe_id).first()

        receipe.receipe_name = receipe_name
        receipe.ingredients = ingredients
        receipe.cooking_time = cooking_time
        receipe.optional_ingredients = optional_ingredients
        receipe.tags = tags

        db.session.commit()
        return jsonify(receipe.serialize), 201
    elif request.method == 'DELETE':
        Receipe.query.filter(Receipe.id == id).delete()
        db.session.commit()
        return jsonify({ 'result': 'success' }), 201