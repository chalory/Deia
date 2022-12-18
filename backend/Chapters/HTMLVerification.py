from bs4 import BeautifulSoup
from .Chapter import Chapter
import html5lib


class HTMLVerification(Chapter):
    def __init__(self):
        super().__init__()
        self.prompt = "In markup languages such as HTML, elements have complete start and end tags. Each element can have attributes and elements can be nested. Elements should not contain duplicate attributes, and any IDs should be unique."
        self.code = """"""
        self.footer = ""
        self.description = "Add alt tags to all images"

    def verify(self, soup: BeautifulSoup, code: str):
        self.messages = []
        if not code.startswith("<!DOCTYPE html>"):
            self.messages.append(
                {
                    "type": "error",
                    "tag": "",
                    "data": code,
                    "location": {
                        "line": 1,
                        "position": 1,
                    },
                    "message": "Missing <!DOCTYPE html> tag",
                }
            )
        html5parser = html5lib.html5parser.HTMLParser(strict=True)
        try:
            html5parser.parse(code)
        except html5lib.html5parser.ParseError as e:
            self.messages.append(
                {
                    "type": "error",
                    "tag": "",
                    "data": code,
                    "location": {
                        "line": 1,
                        "position": 1,
                    },
                    "message": str(e).split(".")[0],
                }
            )
        return self.get_response()
