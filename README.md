# nash
Mitosis inspired smart contract for evolutionary organic consensus
 
## Initial Rules

1) Token supply begins at 1 with around $100 of ETH provided by the contract owner (Michael Lustig) in liquidity
2) The only initial rule for distributing one new token to each member is that all current members must agree to do so. 
3) Once all members agree to distribute, the contract owner (Michael Lustig) will call on the smart contract to distribute one token to each member
4) On a doubling event, the supply will be doubled and the resulting new tokens will be divided up amongst the participants
5) Initially, participation will just require the inviting of a friend or interested party online. Eventually, this will be more robust (as private as possible) in order to prevent a single individual from holding more than one account
6) After a doubling event, the group can no longer vote for another doubling until a new member has joined

## Eventual Rules

_Moving eventual rule brainstorm to discussions soon..._

- Multiply the doubling by a factor dependent on how well the original group holds on to their tokens. 
- Create an NFT (using https://eips.ethereum.org/EIPS/eip-1155) that tracks the "condition" of each participant. This can include things such as 'How many NashCoins the participant has sold as of the last generation', 'How close the participant is to their "natural" holding (the holding they would be at if they never bought or sold a NashCoin since their inception into the network', 'Percentage of votings attended', etc. One can imagine that the better "performer" in the network that a participant is, the more valuable that NFT would be. 
- Formal run-off voting where all users in the network can propose rules for consensus that keep the game both fair for current players and for future players
- Show and tell (similar to Benjamin Franklin's Junto Club) in determining how to provide fair governance both for this smart contract and for grander structures
- Completely mutable rules, documented in plain English, linked to tests within this repository. If rules are not understood (initially at 100%, and perhaps slightly lower as the group grows in size, they will not be allowed to be implemented until misunderstandings are sorted out and/or the rules are declared more simply.)

