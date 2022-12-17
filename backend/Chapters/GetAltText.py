from bs4 import BeautifulSoup
from .Chapter import Chapter


class GetAltText(Chapter):
    def __init__(self):
        super().__init__()
        self.prompt = "You should add alt tags to all texts"
        self.code = """
            <img src="">
        """

    def verify(self, code: BeautifulSoup):
        messages = []
        img_tags = code.find_all("img", recursive=True)
        for tag in img_tags:
            tagIsValid = tag.get("alt", False)
            tagIsValid = tagIsValid and tag["alt"]
            if not tag.get("alt", False):
                messages.append(
                    {
                        "type": "error",  # Maybe add suggestion if relevant
                        "tag": tag.name,
                        "data": str(tag),
                        "location": {
                            "line": tag.sourceline,
                            "position": tag.sourcepos,
                        },
                        "message": "Add alt attributes to images",
                    }
                )
        if len(messages) == 0:
            return {
                "type": "success",
            }
        return {"type": "error", "messages": messages}
