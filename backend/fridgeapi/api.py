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