import os
import json
import tornado.ioloop
from tornado.web import RequestHandler, Application, StaticFileHandler
from tornado.escape import json_encode
from xml.etree import ElementTree as ET

class IndexHandler(RequestHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

    def get(self):
        self.render('updateMainPage.html')
        # self.write("hello, world")


class FirstHandler(RequestHandler):
    def get(self):
        self.render('static/first.html')

class XMLHandler(RequestHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

    def post(self):
        print('receive: %s' % self.request.body)
        data_json = json.loads(self.request.body)
        print(data_json)
        xml_string = data_json['xml']
        with open('config_eas_9.8.002.xml', 'w') as fin:
            tree = ET.XML(xml_string)
            fin.write(ET.tostring(tree).decode('utf-8'))
        self.write({})

    #def get(self):
    #    self.write('ok')


class InfoHandler(RequestHandler):

    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')


    def get(self):
        self.set_header('Content-Type', 'application/json')

        # fetch data from db and return a json result = {}
        # hotel: id, name, latitude, longitude
        # attraction: id, name, latitude, longitude
        # hawker center: id, latitude, longitude
        self.write(json_encode(dict_all))




def make_app(autoreload):
    return Application([
        (r"/", IndexHandler),
        #(r"/info", InfoHandler),
        #(r"/travel-planning", IndexHandler),
        #(r"/result", IndexHandler),
        (r"/xml", XMLHandler),
        #(r'/assets/css', StaticFileHandler, {'path': os.path.join(os.path.dirname(__file__), 'static/assets/css')}),
        (r'/(.*)', StaticFileHandler, {'path': os.path.join(os.path.dirname(__file__), '.')})
    ], autoreload=autoreload)  
    # 写好路径在进行解决问题

PORT = int(os.getenv('PORT', 8080))
AUTORELOAD = int(os.getenv('AUTORELOAD', True))
app = make_app(AUTORELOAD)
app.listen(PORT)
print("autoreload--->:%s" % AUTORELOAD)
tornado.ioloop.IOLoop.current().start()
