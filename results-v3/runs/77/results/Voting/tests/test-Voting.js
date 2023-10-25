const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const Voting5EVIg9 = await Voting.new({from: accounts[0]});
		const uintoQl9L5o = BigInt("1169")
		const addressA5NuhM9 = accounts[3]
		const addresso8IfQ3x = accounts[2]
		const addressusEy4G0 = accounts[0]
		await Voting5EVIg9.requiresLiquidityTokenSnapshotAccess.call({from: accounts[0]});
		const boolmHjeAZ = await Voting5EVIg9.transferFrom.call(addresso8IfQ3x, addressA5NuhM9, uintoQl9L5o, {from: accounts[3]});
		const boolGCtzHq = await Voting5EVIg9.isValidVerifierAddress.call(addressusEy4G0, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressz5wRvun = accounts[1]
		const VotinguXCQ1uK = await Voting.new(addressz5wRvun, {from: accounts[2]});
		const uintNLmaICV = BigInt("1087")
		const uintnCeZE24 = BigInt("1208")
		const addressjNMmS9v = accounts[2]
		await VotinguXCQ1uK.requiresWalletAcccess.call({from: accounts[0]});
		const uint256R6jTcTQ = await VotinguXCQ1uK.veto.call(uintNLmaICV, {from: accounts[4]});
		const boolOVHgFpG = await VotinguXCQ1uK.approve.call(addressjNMmS9v, uintnCeZE24, {from: accounts[0]});
		await VotinguXCQ1uK.renounceMinter.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressC4BBIQS = accounts[1]
		const VotingnRauS9T = await Voting.new(addressC4BBIQS, {from: accounts[2]});
		const booltp11Rve = await VotingnRauS9T.isOwner.call({from: accounts[4]});
		await VotingnRauS9T.onlyMinter.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingKIr249d = await Voting.new({from: "0x0000000000000000000000000000000000000001"});
		const boolhb4ZOgU = true
		const uintQkCA7rH = BigInt("1488")
		const uintZGI1d7 = BigInt("1579")
		const uintzipuwgM = BigInt("131")
		const addressq9jE8fC = accounts[0]
		const uint256ks2bYS = await VotingKIr249d.vote.call(uintQkCA7rH, boolhb4ZOgU, {from: accounts[1]});
		const uint256ubqpmGW = await VotingKIr249d.veto.call(uintZGI1d7, {from: "0x0000000000000000000000000000000000000001"});
		const boolJMHkIna = await VotingKIr249d.transfer.call(addressq9jE8fC, uintzipuwgM, {from: accounts[2]});
		const uint8xX0SXRP = await VotingKIr249d.decimals.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressYNe6QjD = accounts[3]
		const VotinghwEaPiw = await Voting.new(addressYNe6QjD, {from: accounts[4]});
		const addresspGy3qDN = accounts[1]
		const addresslhucowG = accounts[1]
		const boolQBuc15l = await VotinghwEaPiw.isValidOracleAddress.call(addresspGy3qDN, {from: accounts[5]});
		await VotinghwEaPiw.onlyExchangeFactoryOrVotingSystem.call({from: accounts[4]});
		const addressibSQaPa = await VotinghwEaPiw.transferOwnership.call(addresslhucowG, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressgIkmdlF = accounts[0]
		const VotingUiVUZdy = await Voting.new(addressgIkmdlF, {from: accounts[2]});
		const uintkByUXT8 = BigInt("961")
		const uintk3sXb7F = BigInt("358")
		const addressBOsuBct = accounts[1]
		const uint256xblDEMw = await VotingUiVUZdy.approve.call(uintkByUXT8, {from: accounts[5]});
		const stringsRiRx8 = await VotingUiVUZdy.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolBPyWBdz = await VotingUiVUZdy.transfer.call(addressBOsuBct, uintk3sXb7F, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressKbB5b3o = accounts[3]
		const VotingFJqKWv = await Voting.new(addressKbB5b3o, {from: accounts[1]});
		const addressFKt6rr = accounts[1]
		const uintDhuH3ZV = BigInt("1530")
		const address31uB4C = "0x0000000000000000000000000000000000000001"
		const addressKXkTFCZ = accounts[1]
		const boolcsK95fA = await VotingFJqKWv.isVotingSystem.call(addressFKt6rr, {from: accounts[3]});
		const boolxrrEz5O = await VotingFJqKWv.increaseAllowance.call(address31uB4C, uintDhuH3ZV, {from: accounts[4]});
		const boolvLT4q1w = await VotingFJqKWv.isVotingSystem.call(addressKXkTFCZ, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addresswKsRADp = accounts[1]
		const VotingnRauS9T = await Voting.new(addresswKsRADp, {from: accounts[2]});
		const addresss5b6DAq = accounts[3]
		const boolhQ9HM4q = await VotingnRauS9T.isExchangeFactory.call(addresss5b6DAq, {from: accounts[4]});
		await VotingnRauS9T.onlyOracle.call({from: accounts[0]});
		const booltp11Rve = await VotingnRauS9T.isOwner.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const VotingK0d5zlb = await Voting.new({from: accounts[4]});
		const uintoKnYTzG = BigInt("1062")
		const addressBpAjIna = accounts[1]
		const uintocyB487 = BigInt("1900")
		const addressAbXYIyV = "0x0000000000000000000000000000000000000001"
		const addressIA4FXfg = await VotingK0d5zlb.burnFrom.call(addressBpAjIna, uintoKnYTzG, {from: accounts[2]});
		const uint256BexWSO2 = await VotingK0d5zlb.balanceOfAt.call(addressAbXYIyV, uintocyB487, {from: accounts[2]});
		await VotingK0d5zlb.onRegistryRefresh.call({from: accounts[5]});
		await VotingK0d5zlb.renounceMinter.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressCm3aRKj = accounts[1]
		const VotingnRauS9T = await Voting.new(addressCm3aRKj, {from: accounts[2]});
		const uintiwXLaJN = BigInt("1013")
		const uint256yXfOCLU = await VotingnRauS9T.pause.call(uintiwXLaJN, {from: accounts[0]});
		const booltp11Rve = await VotingnRauS9T.isOwner.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressTYetdiD = accounts[1]
		const VotingnRauS9T = await Voting.new(addressTYetdiD, {from: accounts[2]});
		const boolX1uEiBi = false
		const uintSj9Qmsv = BigInt("1494")
		const uint256a2qZtwN = await VotingnRauS9T.vote.call(uintSj9Qmsv, boolX1uEiBi, {from: accounts[4]});
		await VotingnRauS9T.requiresLiquidityTokenSnapshotAccess.call({from: accounts[2]});
		const stringlzLnUib = await VotingnRauS9T.symbol.call({from: accounts[0]});
		const booltp11Rve = await VotingnRauS9T.isOwner.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addresslxYFd0R = accounts[1]
		const VotingnRauS9T = await Voting.new(addresslxYFd0R, {from: accounts[2]});
		const addressfUugGbk = accounts[1]
		const boolQ1dhQs5 = await VotingnRauS9T.isValidVerifierAddress.call(addressfUugGbk, {from: accounts[5]});
		const booltp11Rve = await VotingnRauS9T.isOwner.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressCnymy2K = accounts[5]
		const VotingbBE2gb1 = await Voting.new(addressCnymy2K, {from: accounts[5]});
		const address2dhAmo = accounts[0]
		const addressIXrazY = accounts[3]
		const boolW55av5b = await VotingbBE2gb1.isValidStamperAddress.call(address2dhAmo, {from: accounts[0]});
		const boolazW9O3 = await VotingbBE2gb1.isValidVerifierAddress.call(addressIXrazY, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressjfZP3E7 = accounts[1]
		const VotingnRauS9T = await Voting.new(addressjfZP3E7, {from: accounts[2]});
		const stringIWcZKx0 = "4D"
		const stringfibVAmG = "FrIVqW1d4lhkXbGhoCqFjiC2aX1hJVdTYMGx9LxSuHoeLkImrBfuPojXRTnLzGPCSOiuvQdfce"
		const stringDoQ9uG = "wXAKfdnia8fKhCzXSnHtD7BnbvmVjsCIA4ll82CMtOmaiqms6Y2UwJjAksKsMhsyJhTN4PLSNhUCz5XNneVvYvzbvChqQSuwKfR"
		const byteuitMxTW = "0x1f120c"
		const addressMTufjvv = accounts[3]
		const booltp11Rve = await VotingnRauS9T.isOwner.call({from: accounts[4]});
		const 
YFvfaGn = await VotingnRauS9T.createProposal.call(addressMTufjvv, byteuitMxTW, stringDoQ9uG, stringfibVAmG, stringIWcZKx0, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressM7Fmqro = accounts[1]
		const VotingnRauS9T = await Voting.new(addressM7Fmqro, {from: accounts[2]});
		const uintwvaN2PJ = BigInt("969")
		const uintoONaZ6 = BigInt("1576")
		const addresspEfdPzU = accounts[0]
		const booltp11Rve = await VotingnRauS9T.isOwner.call({from: accounts[4]});
		const uint256zvqJAXn = await VotingnRauS9T.resolve.call(uintwvaN2PJ, {from: accounts[0]});
		const boolmCun0q7 = await VotingnRauS9T.increaseAllowance.call(addresspEfdPzU, uintoONaZ6, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressSnsIa7 = accounts[1]
		const VotingnRauS9T = await Voting.new(addressSnsIa7, {from: accounts[2]});
		const addressYVWhps = "0x0000000000000000000000000000000000000001"
		const addressrSZLn3 = await VotingnRauS9T.transferOwnership.call(addressYVWhps, {from: accounts[2]});
		const booltp11Rve = await VotingnRauS9T.isOwner.call({from: accounts[4]});
		await VotingnRauS9T.nonReentrant.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressN4cQb5S = accounts[2]
		const Votingm07xE0q = await Voting.new(addressN4cQb5S, {from: accounts[1]});
		const addresshwXcDOn = accounts[2]
		const uintcv52fs2 = BigInt("1183")
		const addressdE9CBTp = accounts[5]
		const addressrI4yoVo = accounts[4]
		const uintgcNZFDn = BigInt("1917")
		const addressaeWwWT = accounts[1]
		const uintZAZkjKq = BigInt("421")
		const boolLhoshiH = await Votingm07xE0q.didAddressVote.call(uintcv52fs2, addresshwXcDOn, {from: accounts[0]});
		const uint256EM4Pb4G = await Votingm07xE0q.balanceOf.call(addressdE9CBTp, {from: accounts[1]});
		const boolUj5tBaj = await Votingm07xE0q.isValidStamperAddress.call(addressrI4yoVo, {from: accounts[1]});
		const uint256bnpZzu7 = await Votingm07xE0q.pause.call(uintgcNZFDn, {from: accounts[2]});
		const booltviL2Bf = await Votingm07xE0q.didAddressVote.call(uintZAZkjKq, addressaeWwWT, {from: accounts[1]});
		await Votingm07xE0q.onlyMessageProcessor.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressyLYSrjB = accounts[1]
		const VotingnRauS9T = await Voting.new(addressyLYSrjB, {from: accounts[2]});
		const uintM9ug4hi = BigInt("793")
		const addressXYRzA7O = accounts[2]
		const uinteaK5AsI = BigInt("1026")
		const addressvtkDbz = accounts[0]
		const boolbo5OFWm = await VotingnRauS9T.approve.call(addressXYRzA7O, uintM9ug4hi, {from: accounts[3]});
		const uint256yXfOCLU = await VotingnRauS9T.pause.call(uinteaK5AsI, {from: accounts[0]});
		const boolNr4JSk0 = await VotingnRauS9T.isVotingSystem.call(addressvtkDbz, {from: accounts[1]});
	});
})