when user enters google.com the function will behave and return https://google.com.com, therefore upon an invalid link, the function will take 3 parameters such as

url.includes("https://")
url.includes(".com")
url.includes("www.")

and compare to see which of the 3 parameters the input has and doesn't have and will make sure not to add any extra parameters