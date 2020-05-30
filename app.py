from flask import Flask, render_template, request, redirect, flash, url_for

app = Flask(__name__)


@app.route('/')
def main_page():
    return render_template('main_page.html')


@app.route('/booker-course')
def booker_course():
    return render_template("booker_course.html")


@app.route('/consulting')
def consulting():
    return render_template('consulting.html')


@app.route('/courses')
def courses():
    return render_template('courses.html')


@app.route('/vebinars')
def vebinars():
    return render_template('vebinars.html')


@app.route('/trainings')
def trainings():
    return render_template('trainings.html')


@app.route('/reality')
def reality():
    return render_template('reality.html')


@app.route('/individuality')
def individuality():
    return render_template('individuality.html')


@app.route('/goals')
def goals():
    return render_template('goals.html')


@app.route('/energy')
def energy():
    return render_template('energy.html')


@app.route('/online_school')
def online_school():
    return render_template('online_school.html')


@app.route('/personal-data')
def personal_data():
    return render_template('personal_data.html')


@app.route('/reality-express')
def reality_express():
    return render_template('reality-express.html')


@app.route('/booker-course/request/<package_name>')
def request_page(package_name):
    src_booker = 'https://docs.google.com/forms/d/e/1FAIpQLSfW_sFxlT33Djd9XybrjuVpbw5JM5SQfSwlk0EzROM2H9GX4Q/viewform?embedded=true'
    src_pastor = 'https://docs.google.com/forms/d/e/1FAIpQLSeaAKVKrcpi6NviqOPC1nfPP3bZPOOk8xzlG8-ZG22mKq-Arw/viewform?embedded=true'
    src_admin = 'https://docs.google.com/forms/d/e/1FAIpQLSfxYGEln4QaJpFOAOqW_QWh-7rJQNCxxY8v4BTfXjyTrFMMBw/viewform?embedded=true'

    return render_template('request.html', package_name=package_name, src_admin=src_admin, src_booker=src_booker, src_pastor=src_pastor)


if __name__ == '__main__':
    app.run()
