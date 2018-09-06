#!/usr/bin/python
# coding: utf-8

import budou
import sys

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print "Required arguments:"
        print "[0] = credentials_filename"
        print "[1] = locale_string"
        sys.exit()

    credentials_filename = sys.argv[1].decode("utf-8")
    original_string = sys.argv[2].decode("utf-8")
    language = sys.argv[3].decode("utf-8")

    # Login to Cloud Natural Language API with credentials
    parser = budou.authenticate(credentials_filename)
    result = parser.parse(original_string, attributes={'class': 'wordwrap'}, language=language)

    print(result['html_code'].encode('utf-8'))
    sys.exit()
