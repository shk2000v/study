# ---------------------------------------- [edit] ---------------------------------------- #
from pybo import db

class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # primary_key를 true로 설정하면 id값은 중복될수 없음을 의미한다.
    subject = db.Column(db.String(200), nullable=False)
    #db.string(200) 글자수 길이제한을 둘때 사용
    content = db.Column(db.Text(), nullable=False)
    #db.text는 글자수 제한이 없을떄 사용
    create_date = db.Column(db.DateTime(), nullable = False)

    #위에서 사용된 nullable=False 는 해당 속성에 비어있는 값이 들어올 수 없음을 의미한다.
    #즉, Null 값을 허용하지 않겠다는 의미이다.

class Answer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question_id = db.Column(db.Integer, db.ForeignKey('question.id', ondelete='CASCADE'))
    #db.ForeignKey는 다른모델과의 연결을 의미한다.
    #ondelete=CASCADE는 이 답변과 연결된 질문(Quewstion)이 삭제될 경우 답변(Answer)도 삭제된다는 의미
    question = db.relationship('Question', backref=db.backref('answer_set'))
    #db.relationship
    content = db.Column(db.Text(), nullable=False)
    create_date = db.Column(db.DateTime(), nullable=False)

# ---------------------------------------- [edit] ---------------------------------------- #