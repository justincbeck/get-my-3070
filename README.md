# Get My PS5

A simple command line interface (CLI) utility that checks for NVidia RTX 3070 every `n` seconds, then opens your browser and puts it in the cart when it's successful.

## Requirements

1. [Node](https://nodejs.org/en/)

## Installation

1. Install [Node](https://nodejs.org/en/) if you haven't already.

2. From the root directory, enter the following command in Terminal (or whatever CLI you use):

```sh
npm install
```

## Usage

1. From the root directory, enter the following command in Terminal (or whatever CLI you use):

```sh
npm run watch
```

1. Let it run in the background. Your browser will open up and direct you to BestBuy with the card in your cart as soon as they come in stock.

## FAQ

### Does this thing actually work?

Unknown!

With that being said, this is a simple bot. It checks for some text ("Sold Out"), and when that text goes away, opens your web browser.

* There's still a solid chance you _won't_ get an RTX 3070.

However, I believe this utility will give most people a leg up, because they don't have to rely on a third-party service (such as NowInStock.net) to send you a notification that 3070s are in stock. You're running it directly from your computer, which removes a lot of overhead and (hopefully) gives you an advantage.

Good luck!

### How does this work?

This works by hitting the Best Buy store every 5 seconds, and checking for somne text "Sold Out" that indicates that the item is sold out. As soon as that text is no longer on the page, it will open your browser and you'll have the card in your cart.

### I'm not familiar with CLI and software. How do I install and get this running?

1. Install [Node](https://nodejs.org/en/).
1. Download this utility by clicking the green "Code" button above, and then click "Download ZIP."
1. Unzip the contents.
1. Next you'll need to open a CLI instance at the `get-my-3070` folder:
    * Windows users: open the folder, type `cmd` in the address bar, and hit enter. [Still need help?](https://www.itechtics.com/open-command-window-folder/#:~:text=You%20can%20open%20a%20command,be%20opened%20in%20the%20folder.)
    * Mac users: right click the folder and select "New terminal at folder."
1. Once you have the CLI instance open at the `get-my-3070` folder, enter each command, then press enter:
    * `npm install`
    * `npm run watch`
1. Let it do it's thing. It will open your browser as soon as it detects the card in stock.

### How do I stop this from running?

Enter `Control + C` in your Terminal window, or exit the Terminal altogether.
