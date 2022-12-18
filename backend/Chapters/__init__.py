from . import CheckAltText, CheckLinkText, HTMLVerification

ALL_CHAPTERS = {
    "getalttext": CheckAltText.CheckAltText(),
    "getlink": CheckLinkText.CheckLinkText(),
    "checkHtml": HTMLVerification.HTMLVerification(),
}
