from bs4 import BeautifulSoup
from .Chapter import Chapter


class intro(Chapter):
    def __init__(self):
        super().__init__()
        self.prompt = "Links should be descriptive and suggestive, and you should label all links with exactly what they do. In the example below, replace the the vague description with something more explanatory: 'Web Layouts – How to Use CSS Grid and Flex to Create a Responsive Web Page'"
        self.code = """
            <a href="https://www.freecodecamp.org/news/web-layouts-use-css-grid-and-flex-to-create-responsive-webpages/">here</a>
        """

    def verify(self, code: BeautifulSoup):
        messages = []
        img_tags = code.find_all("a", recursive=True)
        for tag in img_tags:
            if not tag.get_text() or tag.get_text() == "here":
                messages.append(
                    {
                        "type": "error",  # Maybe add suggestion if relevant
                        "tag": tag.name,
                        "data": str(tag),
                        "location": {
                            "line": tag.sourceline,
                            "position": tag.sourcepos,
                        },
                        "message": "Add descriptive text to links",
                    }
                )
        if len(messages) == 0:
            return {
                "type": "success",
            }
        return {"type": "error", "messages": messages}
