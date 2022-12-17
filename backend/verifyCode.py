from Chapters import ALL_CHAPTERS
from bs4 import BeautifulSoup


def verifyCode(chapterId, code):
    chapter = ALL_CHAPTERS[chapterId]
    soup = BeautifulSoup(code, "html.parser")
    return chapter.verify(soup)
