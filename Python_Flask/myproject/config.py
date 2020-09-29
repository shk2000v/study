import os

BASE_DIR = os.path.dirname(__file__)
#BASE_DIR은 프로젝트의 루트 디렉터리인  C:\projects\myproject fmf dmlalgksek
SQLALCHEMY_DATABASE_URI = 'sqlite:///{}'.format(os.path.join(BASE_DIR, 'pybo.db'))
#SQLALCHEMY_DATABASE_URI 변수는 데이터베이스의 접속주소를 의미하는데
#파이보는 SQLite데이터베이스의 접속주소를 위와같이 입력하자
#데이터베이스 파일은 BASE_DIR 하위에 pybo.db라는 파일에 저장한다고 정의함
SQLALCHEMY_TRACK_MODIFICATIONS = False

SECRET_KEY = "dev"