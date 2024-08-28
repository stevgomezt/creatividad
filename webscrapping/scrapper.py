import requests

# in requests there is a get module which help to extract data from the given 'url' and converts into the format as you want like 'html','xml'
web = requests.get('https://www.tutorialsfreak.com/')
print(web)  

# web.content are used to extract data from website
hello = web.content

print(hello)


# parsing (extracting data from the tags)
