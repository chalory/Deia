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

    def get(self):
        return {
            "prompt": self.prompt,
            "code": self.header + self.code.strip() + self.footer,
        }

    def verify(self, code: BeautifulSoup):
        raise NotImplementedError
