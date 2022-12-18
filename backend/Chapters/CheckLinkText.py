from bs4 import BeautifulSoup
from .Chapter import Chapter


class CheckLinkText(Chapter):
    def __init__(self):
        super().__init__()
        self.prompt = "Links should be descriptive and suggestive, and you should label all links with exactly what they do. In the example below, replace the the vague description with something more explanatory: 'Web Layouts – How to Use CSS Grid and Flex to Create a Responsive Web Page'"
        self.code = """
            <a href="https://www.freecodecamp.org/news/web-layouts-use-css-grid-and-flex-to-create-responsive-webpages/">here</a>
        """
        self.description = "Add descriptive text to links"

    def verify(self, soup: BeautifulSoup, code: str):
        self.messages = []
        img_tags = soup.find_all("a", recursive=True)
        for tag in img_tags:
            if not tag.get_text() or tag.get_text() == "here":
                self.add_message(tag, "Add descriptive text to links")

        return self.get_response()
