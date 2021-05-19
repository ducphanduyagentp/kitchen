"""empty message

Revision ID: fa17f16fbb27
Revises: 2455ffda5a5f
Create Date: 2021-05-19 22:18:33.168194

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fa17f16fbb27'
down_revision = '2455ffda5a5f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('recipes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('recipe_name', sa.String(length=64), nullable=True),
    sa.Column('ingredients', sa.PickleType(), nullable=True),
    sa.Column('cooking_time', sa.Integer(), nullable=True),
    sa.Column('optional_ingredients', sa.PickleType(), nullable=True),
    sa.Column('tags', sa.PickleType(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_recipes_recipe_name'), 'recipes', ['recipe_name'], unique=True)
    op.drop_index('ix_receipes_receipe_name', table_name='receipes')
    op.drop_table('receipes')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('receipes',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('receipe_name', sa.VARCHAR(length=64), nullable=True),
    sa.Column('ingredients', sa.BLOB(), nullable=True),
    sa.Column('cooking_time', sa.INTEGER(), nullable=True),
    sa.Column('optional_ingredients', sa.BLOB(), nullable=True),
    sa.Column('tags', sa.BLOB(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index('ix_receipes_receipe_name', 'receipes', ['receipe_name'], unique=False)
    op.drop_index(op.f('ix_recipes_recipe_name'), table_name='recipes')
    op.drop_table('recipes')
    # ### end Alembic commands ###
