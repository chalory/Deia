from bs4 import BeautifulSoup


class Chapter:
    def __init__(self):
        self.prompt = ""
        self.code = ""
        self.header = """<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
        """
        self.footer = """</body>
        </html>
        """
        self.messages = []

    def add_message(self, tag, message, type="error"):
        self.messages.append(
            {
                "type": type,
                "tag": tag.name,
                "data": str(tag),
                "location": {
                    "line": tag.sourceline,
                    "position": tag.sourcepos,
                },
                "message": message,
            }
        )

    def get_response(self):
        if len(self.messages) == 0:
            return {
                "type": "success",
            }
        return {"type": "error", "messages": self.messages}

    def get(self):
        return {
            "prompt": self.prompt,
            "code": self.header + self.code.strip() + self.footer,
        }

    def verify(self, soup: BeautifulSoup, code: str):
        raise NotImplementedError
