# quote.py
from pycnic.core import WSGI, Handler

class QuoteRes(Handler):
    def get(self):
        return { 
            "quote":"Cool URIs don't change",
            "author":"Tim Berners-Lee"
        }

class app(WSGI):
    routes = [('/', QuoteRes())]