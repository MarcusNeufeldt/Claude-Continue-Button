# Claude Chat Continue Button

## Overview

The Claude Chat Continue Button is a Tampermonkey userscript that enhances the functionality of the [Claude AI chat interface](https://claude.ai). It adds a convenient "Continue" button to the chat UI, allowing users to quickly prompt Claude to continue its previous response.

## Features

- Adds a green "Continue" button to the Claude chat interface
- Automatically enters "Continue" into the chat input when clicked
- Triggers the send button to submit the message
- Dynamically adapts to changes in the chat interface

## Installation

1. Install the Tampermonkey browser extension:
   - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

2. Click on the Tampermonkey icon in your browser and select "Create a new script"

3. Delete any existing code in the script editor

4. Copy and paste the entire script from the [claude-continue-button.js](claude-continue-button.js) file into the Tampermonkey script editor

5. Click File > Save or press Ctrl+S to save the script

6. Refresh the Claude AI chat page (https://claude.ai) if you already have it open

## Usage

1. Navigate to [https://claude.ai](https://claude.ai)
2. You should see a green "Continue" button above the chat input area
3. When you want Claude to continue its previous response, simply click the "Continue" button
4. The script will automatically enter "Continue" into the chat and send the message

## Compatibility

This script is designed to work with the Claude AI chat interface at https://claude.ai. It may need updates if the website's structure changes significantly.

## Troubleshooting

If you encounter any issues:

1. Make sure you have the latest version of the script
2. Check if there are any error messages in the browser's console (usually accessible through Developer Tools)
3. Ensure that Tampermonkey is enabled and the script is activated
4. Try refreshing the page or restarting your browser

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](link-to-your-github-issues-page).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This script is not officially affiliated with or endorsed by Anthropic. Use at your own discretion.
