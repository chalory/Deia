from bs4 import BeautifulSoup
from .Chapter import Chapter


class CheckAltText(Chapter):
    def __init__(self):
        super().__init__()
        self.prompt = "You should add alt tags to all texts"
        self.code = """
            <img src="">
        """
        self.description = "Add alt tags to all images"

    def verify(self, soup: BeautifulSoup, code: str):
        self.messages = []
        img_tags = soup.find_all("img", recursive=True)
        for tag in img_tags:
            tagIsValid = tag.get("alt", False)
            tagIsValid = tagIsValid and tag["alt"]
            if not tag.get("alt", False):
                self.add_message(tag, "Add alt tags to all images")
        return self.get_response()
