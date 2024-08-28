import requests

from bs4 import BeautifulSoup

web = requests.get("https://www.tutorialsfreak.com/")

web.content

# print(web.content)

soup = BeautifulSoup(web.content, "html.parser")
print(soup.p)

# is walee me error arha he dekhlo
# print(soup.prettify())