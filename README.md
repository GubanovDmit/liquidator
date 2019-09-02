## About Liquidator
Liquidator is a web application which assemble dApp-exchangers. This app allows to use already existing exchangers or create your own.
Each dApp contains two types of assets and the exchange price is calcuted according to the next formula:

X*Y = const

(X+a)(Y-b) = const

Where:
- X — amount of token A which dApp has
- Y — amount of token B which dApp has
- a — you paid with token of sort A
- b — you get with token of sort B

## dApp application
Using the website, the user can make an exchange in the existing exchangers, create an exchanger for the custom pair and manage her or she exchangers

## dApp pattern

dApp contains five functions:

fund() — necessary for the initial funding of the exchanger. The function can only be called once

replanishment() — replenishment of one of the tokens

exchanger(int: minAmountRecieve) — accepts payment in one token and returns it in another. The mandatory argument determines the lowest

amount than the user will receive during the exchange

withdraw() — allows the owner to close the exchanger and collect the funds

More about data fields you can learn [here](https://confluence.wavesplatform.com/pages/viewpage.action?pageId=1642960533)
