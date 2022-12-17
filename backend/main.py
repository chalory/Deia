from flask import Flask, jsonify, request, abort
from verifyCode import verifyCode
import Chapters

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/chapters/<id>", methods=["GET", "POST"])
def chapters(id):
    all_chapters = Chapters.ALL_CHAPTERS
    if not id in all_chapters.keys():
        message = {"type": "error", "messages": "Invalid chapter id"}
        return jsonify(message), 400
    if request.method == "POST":
        code = request.json.get("code")
        messages = verifyCode(id, code)
        return jsonify(messages)

    return all_chapters[id].get()
