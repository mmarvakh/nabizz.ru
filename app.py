from flask import Flask, render_template, request, redirect, flash, url_for

app = Flask(__name__)


@app.route('/')
def main_page():
    title = 'Бизнес-школа «Навигатор»'
    return render_template('main_page.html', title=title)


@app.route('/booker-course')
def booker_course():
    title = 'Бухгалтерский курс «От Устава до Баланса»'
    return render_template("booker_course.html", title=title)


@app.route('/consulting')
def consulting():
    title = 'Консалтинг'
    return render_template('consulting.html', title=title)


@app.route('/courses')
def courses():
    title = 'Курсы'
    return render_template('courses.html', title=title)


@app.route('/vebinars')
def vebinars():
    title = 'Вебинары'
    return render_template('vebinars.html', title=title)


@app.route('/trainings')
def trainings():
    title = 'Тренинги'
    return render_template('trainings.html', title=title)


@app.route('/reality')
def reality():
    title = '«Изменение реальности»'
    return render_template('reality.html', title=title)


@app.route('/individuality')
def individuality():
    title = '«Осознанная индивидуальность»'
    return render_template('individuality.html', title=title)


@app.route('/goals')
def goals():
    title = '«Баланс целей»'
    return render_template('goals.html', title=title)


@app.route('/energy')
def energy():
    title = '«Восстановление энергии»'
    return render_template('energy.html', title=title)


@app.route('/online_school')
def online_school():
    title = 'Онлайн-школа'
    return render_template('online_school.html', title=title)


@app.route('/personal-data')
def personal_data():
    title = 'Политика обработки персональных данных'
    return render_template('personal_data.html', title=title)


@app.route('/reality-express')
def reality_express():
    title = 'Экспресс-курс «Изменение реальности»'
    return render_template('reality-express.html', title=title)


@app.route('/booker-course/request/<package_name>/<name>', methods=['POST', 'GET'])
def request_page(package_name, name):
    title = 'Пакет участия: ' + name
    src_booker = 'https://docs.google.com/forms/d/e/1FAIpQLSfW_sFxlT33Djd9XybrjuVpbw5JM5SQfSwlk0EzROM2H9GX4Q/viewform?embedded=true'
    src_pastor = 'https://docs.google.com/forms/d/e/1FAIpQLSeaAKVKrcpi6NviqOPC1nfPP3bZPOOk8xzlG8-ZG22mKq-Arw/viewform?embedded=true'
    src_admin = 'https://docs.google.com/forms/d/e/1FAIpQLSfxYGEln4QaJpFOAOqW_QWh-7rJQNCxxY8v4BTfXjyTrFMMBw/viewform?embedded=true'
    return render_template('request.html', package_name=package_name, src_admin=src_admin, src_booker=src_booker, src_pastor=src_pastor, title=title, name=name)


@app.route('/vebinars/<vebinar_id>/<vebinar_name>', methods=['POST', 'GET'])
def vebinar_page(vebinar_id, vebinar_name):
    title = 'Вебинар ' + vebinar_name
    src_0 = 'https://www.youtube.com/embed/e8DcPp_h9UQ'
    src_1 = 'https://www.youtube.com/embed/J_GJdPzrDmw'
    src_2 = 'https://www.youtube.com/embed/2ukQ6FV0Zxk'
    src_3 = 'https://www.youtube.com/embed/p8NkR3EyOfE'
    src_4 = 'https://www.youtube.com/embed/mGaYfz6bKAo'
    return render_template('vebinar_page.html', vebinar_id=vebinar_id, vebinar_name=vebinar_name, src_0=src_0, src_1=src_1, src_2=src_2, src_3=src_3, src_4=src_4, title=title)

if __name__ == '__main__':
    app.run()
