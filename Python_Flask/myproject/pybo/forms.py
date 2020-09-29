from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired


class QuestionForm(FlaskForm):
    subject = StringField('제목', validators=[DataRequired('제목이 비어있습니다..')])
    content = TextAreaField('내용', validators=[DataRequired('내용이 비어있습니다.')])
    #~~~~('라벨', validators=[DataRequired()] <- 검증을 위해 사용되는 도구
    # 필수값이면서 이메일이어야 하면 validators=[DataRequired(), Email()] 처럼 사용
class AnswerForm(FlaskForm):
    content = TextAreaField('내용', validators=[DataRequired('내용은 필수 입력 사항입니다.')])

