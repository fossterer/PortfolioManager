# Portfolio Manager

![Financial Portfolio - A Manager's Desk](resources/images/financial-portfolio.png)

## What is this

A web application to track financial portfolio growth. Uses free and open APIs to fetch real-time market data to store in an online database. Produces a graph updated in real-time.

Stretch goals are (1) Introduce a user-authentication mechanism

## What does it look like?

Take a look at our Figma designs [here](https://www.figma.com/file/FATHqe7mtnRAiE3SCq2XY4/Phase-1?node-id=0%3A1)

## How do we do this

The work is distributed among two developers in this order:

- Developer-1 - Tab-1 - Data
- Developer-2 - Tab-2 - Graphs

A week before the end (i.e starting Jul 26), the focus would be on performing final integration, deployment and preparation of presentation with Q&A readiness

## What this app can't do (at this time) - Thu Jul 04 2020 11:49 AM

- There is no UI for a user to enter any data and retrieve at a later date
- There is no UI for a user to determine how his portfolio value has been fluctuating since the purchase of any constituent stocks/ETFs
- There is no automated batch job that retrieves current stock prices to populate a database
- There is no database to store stocks/ETFs a user has in their portfolio and to hold values retrieved by batch jobs

## Features

### Expected

#### Jul 06 - Jul 11 2019

- Setup IDE for local development (UI, API)
- Setup DB locally for reading/writing data
- Setup Git locally for interacting with Github
- Start working on UI (tab-1/tab-2) and send PRs

#### Jul 12 - Jul 18 2019

- *Tab-1:* A "data-entry strip" at the top should write data into database in the following format: 

    1. Ticker
    2. Name (auto-populated at a later stage)
    3. Security Type
    4. Quantity
    5. Purchase Price
    6. Purchase Date

A tabular form listing the above fields is populated with data from database. Should be scrollable

- *Tab-2:* A graph should be available with some sample data populated in a table in database. Start working on batch job to populate data from Finnhub

#### Jul 19 - Jul 25 2019

- *Tab-1:* Finalize working on the scrollable tabular form.
- *Tab-2:* Finalize working on batch job to populate database with data from Finnhub

#### Jul 26 - Jul 30 2019

- A presentation is prepared
- App is deployed in AWS EC2/Heroku/a VPS

### Actual

#### Jul 06 - Jul 11 2019

#### Jul 12 - Jul 18 2019

#### Jul 19 - Jul 25 2019

#### Jul 26 - Jul 30 2019

## How do I use this

At this time, you can run this locally with a DB setup. Our goal is to have this deployed in a publicly accessible web server during the week of Jul 26 2020.

Please open an issue here on Github or talk to us on [Gitter](https://gitter.im/PortfolioManager-talk/community) to be informed when we go live. We're excited to talk to you!

## Who do I talk to

We're on [Gitter](https://gitter.im/PortfolioManager-talk/community)!
