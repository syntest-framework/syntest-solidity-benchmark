const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const stringD8PoEzx = "bB2RFkXML9qmDnT7gHgnC3g4oN4zwThS4AhJhJKHSWnNY6Rm0oLzh49h1M0zwNyBk6qYkFJI4IXiSVQWKeI"
		const stringwNEKnuE = "1Mg9oMelUOqVNMmLQ9uxWxM2fDwVgVHyblOjNTo7KknPjyYPHhakgbI1amPlfKrqjCJdK"
		const uint4fFKTS = BigInt("76")
		const LUPD8tazsj = await LUP.new(stringD8PoEzx, stringwNEKnuE, uint4fFKTS, {from: accounts[3]});
		const uintBLcW6nF = BigInt("1193")
		const uintDzZPHxH = BigInt("221")
		const addressfki48qF = accounts[0]
		const uintBDSlCbU = BigInt("55")
		const addresstiESydF = accounts[0]
		const uintI2N2UM = BigInt("734")
		const addressLfkpKmQ = accounts[2]
		const addressynWemew = accounts[1]
		const addressv5Ae0UC = accounts[5]
		const boolb5wtafw = await LUPD8tazsj.lock.call(addressfki48qF, uintDzZPHxH, uintBLcW6nF, {from: accounts[1]});
		const boolEobwxTE = await LUPD8tazsj.unlock.call(addresstiESydF, uintBDSlCbU, {from: accounts[5]});
		const boolcvlRRgL = await LUPD8tazsj.unlock.call(addressLfkpKmQ, uintI2N2UM, {from: accounts[3]});
		const address9DBZWQ = await LUPD8tazsj.notFrozen.call(addressynWemew, {from: accounts[2]});
		const uint256fFQd3m9 = await LUPD8tazsj.balanceOf.call(addressv5Ae0UC, {from: accounts[1]});
		const stringwEpf2xA = await LUPD8tazsj.name.call({from: accounts[0]});
	});

	it('test for LUP', async () => {
		const LUPcHYHAC = await LUP.new({from: accounts[1]});
		const uintq6eJKZA = BigInt("1122")
		const uintO8MkV4W = BigInt("1739")
		const addressYkmMgQQ = accounts[4]
		const uintniJrSgs = BigInt("141")
		const uintGShINey = BigInt("368")
		const addressvJ32pR6 = accounts[3]
		const addresslq7oiJB = accounts[1]
		const uintz2q2OgM = BigInt("1083")
		const addressYiPYC0s = "0x0000000000000000000000000000000000000001"
//		const booluMKsMBT = await LUPcHYHAC.lock.call(addressYkmMgQQ, uintO8MkV4W, uintq6eJKZA, {from: accounts[3]});
//		const boolyNjW8Hq = await LUPcHYHAC.transferWithLock.call(addressvJ32pR6, uintGShINey, uintniJrSgs, {from: accounts[4]});
//		const addressKenRAjS = await LUPcHYHAC.notFrozen.call(addresslq7oiJB, {from: accounts[2]});
//		const booluVmdLtP = await LUPcHYHAC.transfer.call(addressYiPYC0s, uintz2q2OgM, {from: accounts[0]});

		await expect(LUPcHYHAC.lock.call(addressYkmMgQQ, uintO8MkV4W, uintq6eJKZA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPqx3vnYF = await LUP.new({from: accounts[2]});
		const addresskm5RFx = accounts[1]
		const uintlp9r0zM = BigInt("1365")
		const uintnHtCvPf = BigInt("359")
		const addressUCHPqjs = accounts[4]
		const addresso8EKS2Q = "0x0000000000000000000000000000000000000001"
//		const addressdQ1YF3 = await LUPqx3vnYF.notFrozen.call(addresskm5RFx, {from: accounts[4]});
//		const boolXTC3V0D = await LUPqx3vnYF.transferWithLock.call(addressUCHPqjs, uintnHtCvPf, uintlp9r0zM, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256aPU4WcZ = await LUPqx3vnYF.balanceOf.call(addresso8EKS2Q, {from: accounts[2]});

		await expect(LUPqx3vnYF.notFrozen.call(addresskm5RFx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPiKFwTpW = await LUP.new({from: accounts[1]});
		const boolw8yxQwd = true
		const addressdRe7RDl = accounts[4]
		const stringJTGWGRR = await LUPiKFwTpW.symbol.call({from: accounts[3]});
		const stringaoOfObh = await LUPiKFwTpW.name.call({from: accounts[2]});
		const stringcKwJSqg = await LUPiKFwTpW.symbol.call({from: accounts[4]});
//		const boolRv8TNpc = await LUPiKFwTpW.freezeAccount.call(addressdRe7RDl, boolw8yxQwd, {from: accounts[3]});

		assert.equal(stringJTGWGRR, "LUP")
		assert.equal(stringaoOfObh, "LINKUP Token")
		assert.equal(stringcKwJSqg, "LUP")
		await expect(LUPiKFwTpW.freezeAccount.call(addressdRe7RDl, boolw8yxQwd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPOpp061 = await LUP.new({from: accounts[5]});
		const uinteTN0Wu2 = BigInt("2034")
		const addressG2Sdjv3 = accounts[2]
		const booliz6w5Ng = true
		const addressZWdWzSA = "0x0000000000000000000000000000000000000001"
//		const boolsgC1BoM = await LUPOpp061.unlock.call(addressG2Sdjv3, uinteTN0Wu2, {from: accounts[5]});
//		const stringqdWxtFt = await LUPOpp061.symbol.call({from: accounts[2]});
//		const uint8JRwDaaD = await LUPOpp061.decimals.call({from: accounts[5]});
//		const boolkoVTqc = await LUPOpp061.freezeAccount.call(addressZWdWzSA, booliz6w5Ng, {from: accounts[3]});

		await expect(LUPOpp061.unlock.call(addressG2Sdjv3, uinteTN0Wu2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPpRMRKQ3 = await LUP.new({from: accounts[0]});
		const uintlw4k3r0 = BigInt("998")
		const addressZGhCcY3 = accounts[2]
		const address4RAoU6 = accounts[3]
		const addressiW5Vokg = accounts[4]
		const addressR8sPYZZ = accounts[1]
//		const booleh5zU3j = await LUPpRMRKQ3.transfer.call(addressZGhCcY3, uintlw4k3r0, {from: accounts[2]});
//		const uint256kYXqTq = await LUPpRMRKQ3.balanceOf.call(address4RAoU6, {from: accounts[3]});
//		const addresscnvjuxd = await LUPpRMRKQ3.notFrozen.call(addressiW5Vokg, {from: accounts[1]});
//		const uint256Ucw8vmE = await LUPpRMRKQ3.balanceOf.call(addressR8sPYZZ, {from: accounts[5]});

		await expect(LUPpRMRKQ3.transfer.call(addressZGhCcY3, uintlw4k3r0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPEUEcvDJ = await LUP.new({from: accounts[4]});
		const addressRleibO4 = accounts[4]
		const bool3XrO8C = true
		const addressRK8X3c9 = accounts[0]
//		const addressU5H2n62 = await LUPEUEcvDJ.upgradeTo.call(addressRleibO4, {from: accounts[1]});
//		const boolKJN7hgY = await LUPEUEcvDJ.freezeAccount.call(addressRK8X3c9, bool3XrO8C, {from: accounts[2]});
//		const stringjNlqkJU = await LUPEUEcvDJ.name.call({from: accounts[2]});

		await expect(LUPEUEcvDJ.upgradeTo.call(addressRleibO4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPBnzmpER = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzukKFr = BigInt("1413")
		const uintV7bsoT = BigInt("606")
		const addressoZ5SvbP = "0x0000000000000000000000000000000000000001"
		const uint8LLEND53 = await LUPBnzmpER.decimals.call({from: accounts[0]});
		const stringcUujogu = await LUPBnzmpER.symbol.call({from: accounts[0]});
		const boolnlimGFs = await LUPBnzmpER.lock.call(addressoZ5SvbP, uintV7bsoT, uintzukKFr, {from: accounts[0]});
	});

	it('test for LUP', async () => {
		const LUPpRMRKQ3 = await LUP.new({from: accounts[0]});
		const uintIBObdWF = BigInt("1574")
		const uintxyCmlcM = BigInt("1848")
		const address1xXzTl = "0x0000000000000000000000000000000000000001"
		const uintXcSOIN0 = BigInt("998")
		const addressyTa2YhQ = accounts[2]
		const addressd9ex1H = accounts[5]
		const addressnglzTvU = accounts[1]
		const boolKYjKVIe = await LUPpRMRKQ3.transferWithLock.call(address1xXzTl, uintxyCmlcM, uintIBObdWF, {from: accounts[0]});
//		const booleh5zU3j = await LUPpRMRKQ3.transfer.call(addressyTa2YhQ, uintXcSOIN0, {from: accounts[2]});
//		const addresscnvjuxd = await LUPpRMRKQ3.notFrozen.call(addressd9ex1H, {from: accounts[1]});
//		const uint256Ucw8vmE = await LUPpRMRKQ3.balanceOf.call(addressnglzTvU, {from: accounts[5]});

		assert.equal(boolKYjKVIe, true)
		await expect(LUPpRMRKQ3.transfer.call(addressyTa2YhQ, uintXcSOIN0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPpRMRKQ3 = await LUP.new({from: accounts[0]});
		const addressYeDedOb = "0x0000000000000000000000000000000000000001"
		const uintus6mVB = BigInt("998")
		const addressEBGhVnX = accounts[2]
		const addresspjfgw6z = accounts[4]
		const addressU5LWhCY = accounts[1]
		const uint256HIP006B = await LUPpRMRKQ3.balanceOf.call(addressYeDedOb, {from: accounts[1]});
//		const booleh5zU3j = await LUPpRMRKQ3.transfer.call(addressEBGhVnX, uintus6mVB, {from: accounts[2]});
//		const addresscnvjuxd = await LUPpRMRKQ3.notFrozen.call(addresspjfgw6z, {from: accounts[1]});
//		const uint256Ucw8vmE = await LUPpRMRKQ3.balanceOf.call(addressU5LWhCY, {from: accounts[5]});

		assert.equal(uint256HIP006B, BigInt("0"))
		await expect(LUPpRMRKQ3.transfer.call(addressEBGhVnX, uintus6mVB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPA1caUdJ = await LUP.new({from: accounts[4]});
		const uintaszACBF = BigInt("508")
		const uintjXGgXQx = BigInt("493")
		const addresslSWZOEH = accounts[0]
		const uintZ79Rh8M = BigInt("1694")
		const uintwJMahqj = BigInt("1315")
		const addressROkQFV = accounts[3]
		const boolmuJTsoP = true
		const addressqi91IJI = accounts[3]
		const boolQEgQ4rL = false
		const addressDu2ug9Q = accounts[0]
//		const boolWsUULr2 = await LUPA1caUdJ.lock.call(addresslSWZOEH, uintjXGgXQx, uintaszACBF, {from: accounts[4]});
//		const boolaWcBJI1 = await LUPA1caUdJ.lock.call(addressROkQFV, uintwJMahqj, uintZ79Rh8M, {from: accounts[1]});
//		const boolOknRnrt = await LUPA1caUdJ.freezeAccount.call(addressqi91IJI, boolmuJTsoP, {from: accounts[5]});
//		const boolWwjDgQP = await LUPA1caUdJ.freezeAccount.call(addressDu2ug9Q, boolQEgQ4rL, {from: accounts[2]});

		await expect(LUPA1caUdJ.lock.call(addresslSWZOEH, uintjXGgXQx, uintaszACBF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPA1caUdJ = await LUP.new({from: accounts[4]});
		const stringSo9IhF6 = await LUPA1caUdJ.name.call({from: accounts[2]});
		const uint8LIrNN79 = await LUPA1caUdJ.decimals.call({from: accounts[3]});
		const string0fC1bK = await LUPA1caUdJ.name.call({from: accounts[1]});

		assert.equal(string0fC1bK, "LINKUP Token")
		assert.equal(stringSo9IhF6, "LINKUP Token")
		assert.equal(uint8LIrNN79, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPpRMRKQ3 = await LUP.new({from: accounts[0]});
		const addressSBmUvxq = "0x0000000000000000000000000000000000000001"
		const addresstjasNs7 = accounts[2]
		const addressO0LyCx7 = accounts[1]
		const addresswUDGo3v = await LUPpRMRKQ3.upgradeTo.call(addressSBmUvxq, {from: accounts[0]});
		const uint256Ucw8vmE = await LUPpRMRKQ3.balanceOf.call(addresstjasNs7, {from: accounts[5]});
//		const addressKDH7EoR = await LUPpRMRKQ3.notFrozen.call(addressO0LyCx7, {from: accounts[4]});

		assert.equal(uint256Ucw8vmE, BigInt("0"))
		await expect(LUPpRMRKQ3.notFrozen.call(addressO0LyCx7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPpRMRKQ3 = await LUP.new({from: accounts[0]});
		const addressmYXVRzr = accounts[3]
		const boolVumJ8go = false
		const addressrsQ0Pbj = accounts[2]
		const uint256Ucw8vmE = await LUPpRMRKQ3.balanceOf.call(addressmYXVRzr, {from: accounts[5]});
		const boolbUTbRAj = await LUPpRMRKQ3.freezeAccount.call(addressrsQ0Pbj, boolVumJ8go, {from: accounts[0]});
		const uint8MmGnNQ6 = await LUPpRMRKQ3.decimals.call({from: accounts[4]});

		assert.equal(boolbUTbRAj, true)
		assert.equal(uint256Ucw8vmE, BigInt("0"))
		assert.equal(uint8MmGnNQ6, BigInt("18"))
	});
})