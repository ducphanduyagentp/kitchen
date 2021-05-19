"""empty message

Revision ID: 2455ffda5a5f
Revises: 697988238c4c
Create Date: 2021-05-19 20:51:49.365089

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2455ffda5a5f'
down_revision = '697988238c4c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('recipes', sa.Column('tags', sa.PickleType(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('recipes', 'tags')
    # ### end Alembic commands ###
