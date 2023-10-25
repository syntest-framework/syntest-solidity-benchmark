const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const stringPZElbq1 = "40p18yQxfMygpkKdUHrKjFU5lV2SzghAEPEvvW56B"
		const stringPss3hhp = "Oof4UwvqkABzGr9vAaGuQfKeSpqAi5YDxJObTaGnkA7dJbe1BuLYDmLMVeXBCl2XeNYVmJKl3GugJrzUNpNREOPIilyG"
		const uintbrO0qU2 = BigInt("175")
		const LUPVYjsbP6 = await LUP.new(stringPZElbq1, stringPss3hhp, uintbrO0qU2, {from: accounts[2]});
		const uintPuRVRSk = BigInt("1385")
		const uintEOK76uY = BigInt("247")
		const addresslMbe7r = accounts[2]
		const boolLHJfOTl = true
		const addressSV1Xrp0 = accounts[1]
		const boolzMGY7nP = await LUPVYjsbP6.lock.call(addresslMbe7r, uintEOK76uY, uintPuRVRSk, {from: accounts[4]});
		const stringxnbTDEV = await LUPVYjsbP6.name.call({from: accounts[0]});
		const bool1RMcwO = await LUPVYjsbP6.freezeAccount.call(addressSV1Xrp0, boolLHJfOTl, {from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUPlxaP2tA = await LUP.new({from: accounts[2]});
		const boolYcIn11I = true
		const address0EfdjN = accounts[4]
		const addressJQ1DUK4 = accounts[4]
		const bool0zeltk = true
		const addressU8P4dVB = accounts[1]
//		const boolOn0kVFA = await LUPlxaP2tA.freezeAccount.call(address0EfdjN, boolYcIn11I, {from: accounts[0]});
//		const addressagxOoi = await LUPlxaP2tA.notFrozen.call(addressJQ1DUK4, {from: accounts[1]});
//		const boolXd1j8Uy = await LUPlxaP2tA.freezeAccount.call(addressU8P4dVB, bool0zeltk, {from: accounts[3]});

		await expect(LUPlxaP2tA.freezeAccount.call(address0EfdjN, boolYcIn11I, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPjmO0UKT = await LUP.new({from: accounts[0]});
		const addresszi3sFkH = accounts[2]
		const addressZbKX2iI = accounts[1]
//		const addressOJhWOGP = await LUPjmO0UKT.notFrozen.call(addresszi3sFkH, {from: accounts[0]});
//		const addressWacKtnn = await LUPjmO0UKT.upgradeTo.call(addressZbKX2iI, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LUPjmO0UKT.notFrozen.call(addresszi3sFkH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUP0M7KMQ = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyz4MPG8 = BigInt("42")
		const addressYoKKZ6i = accounts[0]
		const stringsYYtDBr = await LUP0M7KMQ.name.call({from: "0x0000000000000000000000000000000000000001"});
		const stringPxX0OmI = await LUP0M7KMQ.symbol.call({from: accounts[4]});
		const boolaKfvXxj = await LUP0M7KMQ.transfer.call(addressYoKKZ6i, uintyz4MPG8, {from: accounts[2]});
	});

	it('test for LUP', async () => {
		const LUPAHKHH1o = await LUP.new({from: accounts[0]});
		const uintFSdpZRD = BigInt("2")
		const uintI5O15E6 = BigInt("252")
		const addresst7Ti1wQ = accounts[3]
		const stringCY4f6PI = await LUPAHKHH1o.symbol.call({from: accounts[1]});
//		const booleOY9JRx = await LUPAHKHH1o.lock.call(addresst7Ti1wQ, uintI5O15E6, uintFSdpZRD, {from: accounts[3]});
//		const uint8WCcabZh = await LUPAHKHH1o.decimals.call({from: accounts[2]});

		assert.equal(stringCY4f6PI, "LUP")
		await expect(LUPAHKHH1o.lock.call(addresst7Ti1wQ, uintI5O15E6, uintFSdpZRD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPaJm6GJ = await LUP.new({from: accounts[1]});
		const addressfgw5qXd = accounts[2]
//		const addressNQhx7QK = await LUPaJm6GJ.upgradeTo.call(addressfgw5qXd, {from: accounts[0]});
//		const uint8m4ANBDP = await LUPaJm6GJ.decimals.call({from: accounts[2]});

		await expect(LUPaJm6GJ.upgradeTo.call(addressfgw5qXd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPdDdhp8J = await LUP.new({from: accounts[4]});
		const boolhphct3 = false
		const addressVdyCVsz = accounts[1]
		const addressKahNOgI = accounts[1]
		const boolEIiWVSg = true
		const address7TLwiQ = accounts[2]
		const uintl4Qysou = BigInt("1117")
		const addressClY4RWa = accounts[3]
		const boolwz5SSb2 = await LUPdDdhp8J.freezeAccount.call(addressVdyCVsz, boolhphct3, {from: accounts[4]});
		const uint256KoyatSQ = await LUPdDdhp8J.balanceOf.call(addressKahNOgI, {from: accounts[2]});
		const stringP4Oo29F = await LUPdDdhp8J.symbol.call({from: accounts[2]});
		const boolb9NGcnr = await LUPdDdhp8J.freezeAccount.call(address7TLwiQ, boolEIiWVSg, {from: accounts[4]});
//		const boolmZDy2lE = await LUPdDdhp8J.transfer.call(addressClY4RWa, uintl4Qysou, {from: accounts[1]});

		assert.equal(boolb9NGcnr, true)
		assert.equal(boolwz5SSb2, true)
		assert.equal(stringP4Oo29F, "LUP")
		assert.equal(uint256KoyatSQ, BigInt("0"))
		await expect(LUPdDdhp8J.transfer.call(addressClY4RWa, uintl4Qysou, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPdDdhp8J = await LUP.new({from: accounts[4]});
		const boolhphct3 = true
		const addressmMUlfc = accounts[1]
		const addresssijdNt = accounts[1]
		const boolEIiWVSg = true
		const addresskFIjjj = accounts[2]
		const uintPb5hjyy = BigInt("1117")
		const addressCcFIAl = accounts[3]
		const boolwz5SSb2 = await LUPdDdhp8J.freezeAccount.call(addressmMUlfc, boolhphct3, {from: accounts[4]});
		const uint8s22O9iM = await LUPdDdhp8J.decimals.call({from: accounts[1]});
		const uint256KoyatSQ = await LUPdDdhp8J.balanceOf.call(addresssijdNt, {from: accounts[2]});
		const stringP4Oo29F = await LUPdDdhp8J.symbol.call({from: accounts[2]});
		const boolb9NGcnr = await LUPdDdhp8J.freezeAccount.call(addresskFIjjj, boolEIiWVSg, {from: accounts[4]});
//		const boolmZDy2lE = await LUPdDdhp8J.transfer.call(addressCcFIAl, uintPb5hjyy, {from: accounts[1]});

		assert.equal(boolb9NGcnr, true)
		assert.equal(boolwz5SSb2, true)
		assert.equal(stringP4Oo29F, "LUP")
		assert.equal(uint256KoyatSQ, BigInt("0"))
		assert.equal(uint8s22O9iM, BigInt("18"))
		await expect(LUPdDdhp8J.transfer.call(addressCcFIAl, uintPb5hjyy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPdDdhp8J = await LUP.new({from: accounts[4]});
		const boolEIiWVSg = true
		const addressjOxDpKN = accounts[2]
		const uintxO04oR8 = BigInt("1117")
		const addressgjIuYi3 = accounts[3]
		const stringYIEizVX = await LUPdDdhp8J.name.call({from: accounts[3]});
		const boolb9NGcnr = await LUPdDdhp8J.freezeAccount.call(addressjOxDpKN, boolEIiWVSg, {from: accounts[4]});
//		const boolmZDy2lE = await LUPdDdhp8J.transfer.call(addressgjIuYi3, uintxO04oR8, {from: accounts[1]});

		assert.equal(boolb9NGcnr, true)
		assert.equal(stringYIEizVX, "LINKUP Token")
		await expect(LUPdDdhp8J.transfer.call(addressgjIuYi3, uintxO04oR8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPdDdhp8J = await LUP.new({from: accounts[4]});
		const addressbttG20l = accounts[1]
		const uintTDWbFay = BigInt("920")
		const uintUixc87J = BigInt("1755")
		const addressh7nNKJM = accounts[0]
		const uinta9Ylnp9 = BigInt("1449")
		const addressEn39uKj = accounts[2]
		const uintTR30Ssx = BigInt("1117")
		const addressaULi9EX = accounts[3]
		const uint256KoyatSQ = await LUPdDdhp8J.balanceOf.call(addressbttG20l, {from: accounts[2]});
		const stringP4Oo29F = await LUPdDdhp8J.symbol.call({from: accounts[2]});
//		const boolXZ0GGtT = await LUPdDdhp8J.lock.call(addressh7nNKJM, uintUixc87J, uintTDWbFay, {from: accounts[4]});
//		const boolGCxz2aS = await LUPdDdhp8J.unlock.call(addressEn39uKj, uinta9Ylnp9, {from: accounts[3]});
//		const uint8aHJmBxq = await LUPdDdhp8J.decimals.call({from: accounts[0]});
//		const boolmZDy2lE = await LUPdDdhp8J.transfer.call(addressaULi9EX, uintTR30Ssx, {from: accounts[1]});

		assert.equal(stringP4Oo29F, "LUP")
		assert.equal(uint256KoyatSQ, BigInt("0"))
		await expect(LUPdDdhp8J.lock.call(addressh7nNKJM, uintUixc87J, uintTDWbFay, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPdDdhp8J = await LUP.new({from: accounts[4]});
		const uintas4JMA4 = BigInt("1560")
		const addressloTDl4N = accounts[4]
		const uinthb2Stoi = BigInt("2000")
		const addressAYkuyt0 = accounts[5]
		const uintulltXz4 = BigInt("1117")
		const addressAMIWsCt = accounts[3]
//		const boolhcqSG0i = await LUPdDdhp8J.unlock.call(addressloTDl4N, uintas4JMA4, {from: accounts[4]});
//		const boolvHGr8Ai = await LUPdDdhp8J.transfer.call(addressAYkuyt0, uinthb2Stoi, {from: accounts[1]});
//		const boolmZDy2lE = await LUPdDdhp8J.transfer.call(addressAMIWsCt, uintulltXz4, {from: accounts[1]});

		await expect(LUPdDdhp8J.unlock.call(addressloTDl4N, uintas4JMA4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPdDdhp8J = await LUP.new({from: accounts[4]});
		const uintuds2L9 = BigInt("1819")
		const uintP6QXqEW = BigInt("689")
		const addressRsX2W9 = accounts[0]
		const addressdIEpWfd = accounts[2]
		const boolk1wcRD = await LUPdDdhp8J.transferWithLock.call(addressRsX2W9, uintP6QXqEW, uintuds2L9, {from: accounts[4]});
		const uint256KoyatSQ = await LUPdDdhp8J.balanceOf.call(addressdIEpWfd, {from: accounts[2]});

		assert.equal(boolk1wcRD, true)
		assert.equal(uint256KoyatSQ, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPdDdhp8J = await LUP.new({from: accounts[4]});
		const addressYHJG3g0 = accounts[3]
		const uintkeftkvc = BigInt("1117")
		const addressY6mESCR = accounts[3]
		const addressrSrLnAH = await LUPdDdhp8J.upgradeTo.call(addressYHJG3g0, {from: accounts[4]});
//		const boolmZDy2lE = await LUPdDdhp8J.transfer.call(addressY6mESCR, uintkeftkvc, {from: accounts[1]});

		await expect(LUPdDdhp8J.transfer.call(addressY6mESCR, uintkeftkvc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPdDdhp8J = await LUP.new({from: accounts[4]});
		const uintZwzF6rM = BigInt("1528")
		const uintFe0QrbZ = BigInt("1623")
		const addressGxZIob = accounts[4]
		const uintlcPaJqP = BigInt("1001")
		const addressDo16wp = accounts[3]
		const booldq9rw5j = await LUPdDdhp8J.lock.call(addressGxZIob, uintFe0QrbZ, uintZwzF6rM, {from: accounts[4]});
//		const boolmZDy2lE = await LUPdDdhp8J.transfer.call(addressDo16wp, uintlcPaJqP, {from: accounts[1]});

		assert.equal(booldq9rw5j, true)
		await expect(LUPdDdhp8J.transfer.call(addressDo16wp, uintlcPaJqP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})