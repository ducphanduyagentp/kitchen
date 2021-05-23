from functools import wraps
from datetime import datetime, timedelta
from flask import Blueprint, jsonify, request, current_app
import jwt
from .models import db, Item, Recipe, User

api = Blueprint('api', __name__)


def token_required(f):
    @wraps(f)
    def _verify(*args, **kwargs):
        auth_headers = request.headers.get('Authorization', '').split()

        invalid_msg = {
            'message': 'Invalid token. Registeration and / or authentication required',
            'authenticated': False
        }
        expired_msg = {
            'message': 'Expired token. Reauthentication required.',
            'authenticated': False
        }

        if len(auth_headers) != 2:
            return jsonify(invalid_msg), 401

        try:
            token = auth_headers[1]
            data = jwt.decode(token, current_app.config['SECRET_KEY'])
            user = User.query.filter_by(username=data['sub']).first()
            if not user:
                raise RuntimeError('User not found')
            return f(user, *args, **kwargs)
        except jwt.ExpiredSignatureError:
            return jsonify(expired_msg), 401 # 401 is Unauthorized HTTP status code
        except (jwt.InvalidTokenError, Exception) as e:
            print(e)
            return jsonify(invalid_msg), 401

    return _verify


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
# @token_required
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


@api.route('/register/', methods=('POST',))
def register():
    data = request.get_json()
    user = User(**data)
    if user.username != current_app.config['RESERVED_USERNAME']:
        return ({ 'message': 'Bruh.' }), 401
    db.session.add(user)
    db.session.commit()
    return jsonify(user.serialize), 201


@api.route('/login/', methods=('POST',))
def login():
    data = request.get_json()
    user = User.authenticate(**data)

    if not user:
        return jsonify({ 'message': 'Invalid credentials', 'authenticated': False }), 401

    token = jwt.encode({
        'sub': user.username,
        'iat': datetime.utcnow(),
        'exp': datetime.utcnow() + timedelta(minutes=30)
        },
        current_app.config['SECRET_KEY']
    )

    return jsonify({ 'token': token })


@api.route('/reset/', methods=('DELETE',))
def reset():
    User.query.filter(User.username == 'admin').delete()
    db.session.commit()
    return jsonify({ 'message': 'haiyaa' })
