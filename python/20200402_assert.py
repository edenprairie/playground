print('''--------------------assert demo--------------------''')
podBayStatus = "open"
assert podBayStatus == 'open', 'The pod bay doors need to be "open"'
podBayStatus = "close"
assert podBayStatus == 'open', 'The pod bay doors need to be "open"'
