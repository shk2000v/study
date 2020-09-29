from flask import Flask
# ---------------------------------------- [edit] ---------------------------------------- #
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

import config

db = SQLAlchemy()
migrate = Migrate()


# ---------------------------------------- [edit] ---------------------------------------- #
def create_app():
    app = Flask(__name__)
    # ---------------------------------------- [edit] ---------------------------------------- #
    app.config.from_object(config)
    #config.py에 작성된 항목들을 app.config환경변수로 읽기위해
    #위와같은 문장을 추가

    #ORM
    db.init_app(app)
    migrate.init_app(app,db)
    # ---------------------------------------- [edit] ---------------------------------------- #

    from . import models


    #블루프린트
    from .views import main_view, question_views, answer_views
    app.register_blueprint(main_view.bp)
    app.register_blueprint(question_views.bp)
    app.register_blueprint(answer_views.bp)

    return app
