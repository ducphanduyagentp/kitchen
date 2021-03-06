"""empty message

Revision ID: 697988238c4c
Revises: 
Create Date: 2021-05-17 00:25:36.730775

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '697988238c4c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('item_name', sa.String(length=64), nullable=True),
    sa.Column('quantity', sa.Integer(), nullable=True),
    sa.Column('unit', sa.String(length=64), nullable=True),
    sa.Column('item_type', sa.String(length=64), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_items_item_name'), 'items', ['item_name'], unique=True)
    op.create_table('recipes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('recipe_name', sa.String(length=64), nullable=True),
    sa.Column('ingredients', sa.PickleType(), nullable=True),
    sa.Column('cooking_time', sa.Integer(), nullable=True),
    sa.Column('optional_ingredients', sa.PickleType(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_recipes_recipe_name'), 'recipes', ['recipe_name'], unique=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_recipes_recipe_name'), table_name='recipes')
    op.drop_table('recipes')
    op.drop_index(op.f('ix_items_item_name'), table_name='items')
    op.drop_table('items')
    # ### end Alembic commands ###
