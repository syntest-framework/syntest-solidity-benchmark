const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressJocCXD9 = accounts[3]
		const VotingRODkg0c = await Voting.new(addressJocCXD9, {from: accounts[3]});
		const uintooV26Lz = BigInt("1386")
		const addressWfQGnNC = accounts[3]
		const addressM0QBF97 = accounts[5]
		const uint256mhjN9Fb = await VotingRODkg0c.balanceOfAt.call(addressWfQGnNC, uintooV26Lz, {from: accounts[2]});
		await VotingRODkg0c.requiresLiquidityTokenSnapshotAccess.call({from: "0x0000000000000000000000000000000000000001"});
		const addressc9zbITf = await VotingRODkg0c.addMinter.call(addressM0QBF97, {from: accounts[3]});
		await VotingRODkg0c.renounceMinter.call({from: accounts[0]});
		await VotingRODkg0c.onlyVotingSystem.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressgGUwaUB = accounts[0]
		const VotingAiqdp9s = await Voting.new(addressgGUwaUB, {from: "0x0000000000000000000000000000000000000001"});
		const uintlWsoA3K = BigInt("1860")
		const addresski62WUI = accounts[4]
		const uintadcKZdM = BigInt("1243")
		const addressKvaekr6 = accounts[0]
		const address6mJMC6 = accounts[4]
		const booluKtuYND = await VotingAiqdp9s.transfer.call(addresski62WUI, uintlWsoA3K, {from: accounts[1]});
		const uint256FQGpJED = await VotingAiqdp9s.balanceOfAt.call(addressKvaekr6, uintadcKZdM, {from: accounts[2]});
		const boolIAj7PAG = await VotingAiqdp9s.isMinter.call(address6mJMC6, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const VotingPt2cLJz = await Voting.new({from: accounts[2]});
		const addressagAvDM = accounts[1]
		await VotingPt2cLJz.onlyVotingSystem.call({from: accounts[1]});
		const uint256nFXXWU = await VotingPt2cLJz.balanceOf.call(addressagAvDM, {from: accounts[3]});
		await VotingPt2cLJz.onlyExchange.call({from: accounts[1]});
		const boolW39OKZ = await VotingPt2cLJz.isOwner.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addresstKRMAl4 = accounts[1]
		const VotingpE2PlrC = await Voting.new(addresstKRMAl4, {from: accounts[4]});
		const addressR3bOQgJ = accounts[2]
		const uintlpWGEDK = BigInt("517")
		const uintLa7eWjR = BigInt("1611")
		const addresswtFypyX = "0x0000000000000000000000000000000000000001"
		const addressPiWq5nP = accounts[0]
		const uintWuU3IB6 = BigInt("1687")
		const boolmqjV6Pn = await VotingpE2PlrC.didAddressVote.call(uintlpWGEDK, addressR3bOQgJ, {from: "0x0000000000000000000000000000000000000001"});
		const boolUVI2D6w = await VotingpE2PlrC.mint.call(addresswtFypyX, uintLa7eWjR, {from: accounts[4]});
		const uint256EZmIR7O = await VotingpE2PlrC.balanceOf.call(addressPiWq5nP, {from: accounts[0]});
		await VotingpE2PlrC.onlyExchangeFactoryOrVotingSystem.call({from: accounts[4]});
		const uint256CS9rEi1 = await VotingpE2PlrC.approve.call(uintWuU3IB6, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressiLYLbbU = accounts[3]
		const VotingFPxloq = await Voting.new(addressiLYLbbU, {from: accounts[1]});
		const addressO8znFy4 = accounts[1]
		const uintE9xvUmv = BigInt("1341")
		const addressOX0jCo = accounts[3]
		const boolCaHR9SI = await VotingFPxloq.isVotingSystem.call(addressO8znFy4, {from: accounts[4]});
		const addressvvvgkKz = await VotingFPxloq.getRegistryAddress.call({from: accounts[4]});
		await VotingFPxloq.nonReentrant.call({from: accounts[1]});
		await VotingFPxloq.onlyExchange.call({from: accounts[4]});
		const boolpXP9FyU = await VotingFPxloq.increaseAllowance.call(addressOX0jCo, uintE9xvUmv, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingTZEfYf4 = await Voting.new({from: accounts[0]});
		const uintWlQqhet = BigInt("1675")
		const addressmQa1yM9 = accounts[5]
		const addressSmv7VaT = accounts[5]
		const addressNoIAJ07 = "0x0000000000000000000000000000000000000001"
		await VotingTZEfYf4.onlyOwner.call({from: accounts[2]});
		const uint256pTeZq8E = await VotingTZEfYf4.balanceOfAt.call(addressmQa1yM9, uintWlQqhet, {from: accounts[5]});
		const uint8s2TK0f9 = await VotingTZEfYf4.decimals.call({from: accounts[4]});
		await VotingTZEfYf4.requiresWalletAcccess.call({from: accounts[4]});
		const uint256dDk6sR = await VotingTZEfYf4.allowance.call(addressNoIAJ07, addressSmv7VaT, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const VotingvQpxpJV = await Voting.new({from: "0x0000000000000000000000000000000000000001"});
		const uint7orEJ2 = BigInt("1095")
		const addressBN9TVTK = accounts[2]
		const uintR9VveCo = BigInt("364")
		const addressQRRB9Qi = "0x0000000000000000000000000000000000000001"
		const uintA9arlIK = BigInt("573")
		const addressWvtHQwo = accounts[0]
		const boolWIHD00E = await VotingvQpxpJV.approve.call(addressBN9TVTK, uint7orEJ2, {from: accounts[0]});
		const boolLPn15o1 = await VotingvQpxpJV.increaseAllowance.call(addressQRRB9Qi, uintR9VveCo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256n2G5CwV = await VotingvQpxpJV.balanceOfAt.call(addressWvtHQwo, uintA9arlIK, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressANJjLY3 = accounts[0]
		const VotingZ95lHuY = await Voting.new(addressANJjLY3, {from: accounts[4]});
		const addressU9OtM3i = "0x0000000000000000000000000000000000000001"
		const addressDR1uZhS = accounts[5]
		const uintP2xTGzn = BigInt("570")
		const uintQGBvvwG = BigInt("1573")
		const addressPPQYq1C = accounts[1]
		const addressnMkG8CB = await VotingZ95lHuY.transferOwnership.call(addressU9OtM3i, {from: accounts[5]});
		const addressAiAuaE = await VotingZ95lHuY.addMinter.call(addressDR1uZhS, {from: accounts[2]});
		const uint256oxdXPHy = await VotingZ95lHuY.pause.call(uintP2xTGzn, {from: accounts[4]});
		const boolPqpDwq9 = await VotingZ95lHuY.transfer.call(addressPPQYq1C, uintQGBvvwG, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const Votingvm5cGIA = await Voting.new({from: accounts[5]});
		const uintOGXcOqi = BigInt("1733")
		const uintglALkze = BigInt("817")
		await Votingvm5cGIA.requiresWalletAcccess.call({from: accounts[3]});
		const uint256sDsmip4 = await Votingvm5cGIA.approve.call(uintOGXcOqi, {from: accounts[3]});
		const uint256AzEAvJF = await Votingvm5cGIA.burn.call(uintglALkze, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const VotinguAYKyGy = await Voting.new({from: accounts[1]});
		const uintDRSYyyK = BigInt("1172")
		const addressS1WxqDT = accounts[5]
		const uintgZElBLZ = BigInt("1966")
		const address4nwrtB = "0x0000000000000000000000000000000000000001"
		const addressJm5QXKD = await VotinguAYKyGy.burnFrom.call(addressS1WxqDT, uintDRSYyyK, {from: accounts[2]});
		await VotinguAYKyGy.renounceOwnership.call({from: accounts[4]});
		const booll6uosFv = await VotinguAYKyGy.transfer.call(address4nwrtB, uintgZElBLZ, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addresstSHGLeY = accounts[1]
		const VotinghgbvnLp = await Voting.new(addresstSHGLeY, {from: accounts[4]});
		const addressDX2moCF = accounts[0]
		const uinte1DYdw = BigInt("695")
		const boolY42aLVq = await VotinghgbvnLp.isValidOracleAddress.call(addressDX2moCF, {from: "0x0000000000000000000000000000000000000001"});
		const uint256e83WS3k = await VotinghgbvnLp.resolve.call(uinte1DYdw, {from: accounts[0]});
		const uint256rpsVNCm = await VotinghgbvnLp.snapshot.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressooAjcHn = accounts[2]
		const VotingYHmxf7s = await Voting.new(addressooAjcHn, {from: accounts[3]});
		const boolcrZMw1H = false
		const uintvoq9BWk = BigInt("1706")
		const uintDrg5LXn = BigInt("1181")
		const uint256KYHRnh4 = await VotingYHmxf7s.vote.call(uintvoq9BWk, boolcrZMw1H, {from: accounts[1]});
		const stringJifAqan = await VotingYHmxf7s.symbol.call({from: accounts[1]});
		const uint256APvFOJQ = await VotingYHmxf7s.totalSupplyAt.call(uintDrg5LXn, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressHVxAyDL = accounts[2]
		const VotingYHmxf7s = await Voting.new(addressHVxAyDL, {from: accounts[3]});
		const addressb1v2gLM = accounts[0]
		const boolcrZMw1H = false
		const uintYPu6Q1S = BigInt("1706")
		const uintTLmPy5s = BigInt("1181")
		const boolYnD727F = await VotingYHmxf7s.isExchangeFactory.call(addressb1v2gLM, {from: accounts[1]});
		const uint256KYHRnh4 = await VotingYHmxf7s.vote.call(uintYPu6Q1S, boolcrZMw1H, {from: accounts[1]});
		const stringJifAqan = await VotingYHmxf7s.symbol.call({from: accounts[1]});
		const uint256APvFOJQ = await VotingYHmxf7s.totalSupplyAt.call(uintTLmPy5s, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressKkWE2A = accounts[3]
		const VotinggYSl7Ji = await Voting.new(addressKkWE2A, {from: accounts[5]});
		const stringU0QAqiX = "hel8oPJzZWxkaM3T6f0HHXXFUDUneyvY9"
		const stringv622NE = "tqGx5gxLJQHZQrMW7Lg5E4oXfGlCSnpaFydQAQDiHpm6g"
		const stringAtf28Sx = "1vtrxAuGl8SOgKXKHM7NIGmBCHktM6mmOy2q6sjKgT3pm7cptyjcFrneMB0nt1dLLKO1ScerUjIZUmKGEHO4"
		const byteT7D6EhS = "0x181d1e030302011d010d09161b11190b00070b011018040918"
		const addressiCHp4qj = accounts[1]
		const uintWnv5z3Q = BigInt("665")
		const addresszEwK5wV = accounts[5]
		const addresst4aDq3W = accounts[0]
		const 
pklQYb1 = await VotinggYSl7Ji.createProposal.call(addressiCHp4qj, byteT7D6EhS, stringAtf28Sx, stringv622NE, stringU0QAqiX, {from: accounts[0]});
		await VotinggYSl7Ji.renounceMinter.call({from: "0x0000000000000000000000000000000000000001"});
		const boolhW4COhH = await VotinggYSl7Ji.transferFrom.call(addresst4aDq3W, addresszEwK5wV, uintWnv5z3Q, {from: accounts[2]});
		await VotinggYSl7Ji.renounceOwnership.call({from: accounts[0]});
		const stringWQeHY5G = await VotinggYSl7Ji.symbol.call({from: accounts[0]});
	});
})