from bs4 import BeautifulSoup


class Chapter:
    def __init__(self):
        self.prompt = ""
        self.code = """
        """

    def get(self):
        return {
            "prompt": self.prompt,
            "code": self.code.strip(),
        }

    def verify(self, code: BeautifulSoup):
        raise NotImplementedError
