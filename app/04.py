import json
import sys

# Check if at lest one command line argument was passed
if len(sys.argv) == 1:
   print('no arguments passed')
   sys.exit()

# Assumes the 1st argument is the JSON file name
with open(sys.argv[1], 'r') as f:
  data = json.load(f)

# Outputs the data in stdout
print(data)
