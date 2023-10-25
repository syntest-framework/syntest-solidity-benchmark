const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPAc7OLzqk = await TPA.new({from: accounts[4]});
		const addressCEMPdH = accounts[2]
		const addressxxqQyYL = accounts[2]
		const uintNpXN2oJ = BigInt("1198")
		const addressra4ig0S = accounts[0]
		const addressXCE3yl = accounts[2]
		const addressGozjVsL = accounts[0]
		const addressJ4pvHL = accounts[5]
//		const addressz1TcVHU = await TPAc7OLzqk.addAdmin.call(addressCEMPdH, {from: accounts[0]});
//		const addresscMPz4vz = await TPAc7OLzqk.addAdmin.call(addressxxqQyYL, {from: accounts[3]});
//		const boolnnY83Yt = await TPAc7OLzqk.transferFrom.call(addressXCE3yl, addressra4ig0S, uintNpXN2oJ, {from: accounts[1]});
//		await TPAc7OLzqk.onlyOwner.call({from: accounts[3]});
//		const boolX1ncKk1 = await TPAc7OLzqk.isAdmin.call(addressGozjVsL, {from: accounts[4]});
//		const addresss0mJymp = await TPAc7OLzqk.notFrozen.call(addressJ4pvHL, {from: accounts[3]});

		await expect(TPAc7OLzqk.addAdmin.call(addressCEMPdH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const stringbWp55Bo = "m7ixVYNfStG5P4un8u3uIs8Xm2OjdAEQQ3U2QPQzqAnumEEzbgyhT4mjpmppWIv"
		const stringWPi61p = "TBOFNnrw"
		const uintPCLQ03 = BigInt("31")
		const TPANLEEERh = await TPA.new(stringbWp55Bo, stringWPi61p, uintPCLQ03, {from: accounts[5]});
		const addressY0DbxDK = accounts[5]
		const addressF6E143C = await TPANLEEERh.notFrozen.call(addressY0DbxDK, {from: accounts[0]});
		await TPANLEEERh.onlyOwner.call({from: accounts[0]});
	});

	it('test for TPA', async () => {
		const TPAR0dGfV1 = await TPA.new({from: accounts[1]});
		const uint8dUgio = BigInt("383")
		const addressfkxqV0A = accounts[3]
		const uintr9Byqb9 = BigInt("1061")
		const addressNl0hNx9 = accounts[3]
		const addressSIiipCA = accounts[1]
//		await TPAR0dGfV1.whenNotPaused.call({from: accounts[1]});
//		const boolVTN8nfy = await TPAR0dGfV1.increaseAllowance.call(addressfkxqV0A, uint8dUgio, {from: accounts[3]});
//		const boolmRLt54 = await TPAR0dGfV1.increaseAllowance.call(addressNl0hNx9, uintr9Byqb9, {from: accounts[2]});
//		const stringkVxKhmu = await TPAR0dGfV1.name.call({from: accounts[2]});
//		const boold7V2wKR = await TPAR0dGfV1.isAdmin.call(addressSIiipCA, {from: accounts[5]});

		await expect(TPAR0dGfV1.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAO27rg5 = await TPA.new({from: accounts[1]});
		const addressSKgnyOr = "0x0000000000000000000000000000000000000001"
		const addressp7aeqY = accounts[5]
		const boolvio9Wet = await TPAO27rg5.isOwner.call(addressSKgnyOr, {from: "0x0000000000000000000000000000000000000001"});
		const addressYwjhiX2 = await TPAO27rg5.addAdmin.call(addressp7aeqY, {from: accounts[1]});

		assert.equal(boolvio9Wet, false)
	});

	it('test for TPA', async () => {
		const TPAOLnLu0q = await TPA.new({from: accounts[1]});
		const uintpTeA0CA = BigInt("44")
		const addressx1eMd7O = accounts[3]
		const addressCG6CVm = accounts[4]
		const uintjag0FHF = BigInt("1989")
		const uintzUQf68 = BigInt("818")
		const addressmjxwYIR = accounts[5]
//		const boolY9mXJ1M = await TPAOLnLu0q.transfer.call(addressx1eMd7O, uintpTeA0CA, {from: accounts[0]});
//		const uint256HAUP4MH = await TPAOLnLu0q.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressMzc4SC = await TPAOLnLu0q.removeAdmin.call(addressCG6CVm, {from: accounts[1]});
//		await TPAOLnLu0q.renounceAdmin.call({from: accounts[4]});
//		await TPAOLnLu0q.whenPaused.call({from: accounts[0]});
//		const bool3g5ikL = await TPAOLnLu0q.transferWithLock.call(addressmjxwYIR, uintzUQf68, uintjag0FHF, {from: accounts[4]});

		await expect(TPAOLnLu0q.transfer.call(addressx1eMd7O, uintpTeA0CA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAOLnLu0q = await TPA.new({from: accounts[1]});
		const addressKUxLQ8 = accounts[5]
		const uint7cX36I = BigInt("1989")
		const uintbsTxwsy = BigInt("818")
		const addressvzGPnI = accounts[5]
		const uint256HAUP4MH = await TPAOLnLu0q.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressMzc4SC = await TPAOLnLu0q.removeAdmin.call(addressKUxLQ8, {from: accounts[1]});
//		await TPAOLnLu0q.renounceAdmin.call({from: accounts[4]});
//		await TPAOLnLu0q.whenPaused.call({from: accounts[0]});
//		const bool3g5ikL = await TPAOLnLu0q.transferWithLock.call(addressvzGPnI, uintbsTxwsy, uint7cX36I, {from: accounts[4]});

		assert.equal(uint256HAUP4MH, BigInt("10000000000000000000000000000"))
		await expect(TPAOLnLu0q.removeAdmin.call(addressKUxLQ8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAOLnLu0q = await TPA.new({from: accounts[1]});
		const uintebpAgVV = BigInt("730")
		const addressrFzr7pW = accounts[4]
		const addressdivn11C = accounts[2]
		const uintb2daQSM = BigInt("44")
		const addressSjU2Idd = accounts[3]
		const uintp6oKn5I = BigInt("631")
		const addressmexZmru = accounts[4]
		const addressmTufNUn = accounts[4]
		const uintoZNMMQ5 = BigInt("1989")
		const uintAE7ZjKU = BigInt("818")
		const addressmqZTtc9 = accounts[5]
//		const boolZCcDqFr = await TPAOLnLu0q.transferFrom.call(addressdivn11C, addressrFzr7pW, uintebpAgVV, {from: accounts[0]});
//		const boolY9mXJ1M = await TPAOLnLu0q.transfer.call(addressSjU2Idd, uintb2daQSM, {from: accounts[0]});
//		const boolnGrBFTm = await TPAOLnLu0q.decreaseAllowance.call(addressmexZmru, uintp6oKn5I, {from: accounts[5]});
//		const uint256HAUP4MH = await TPAOLnLu0q.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressMzc4SC = await TPAOLnLu0q.removeAdmin.call(addressmTufNUn, {from: accounts[1]});
//		await TPAOLnLu0q.renounceAdmin.call({from: accounts[4]});
//		await TPAOLnLu0q.whenPaused.call({from: accounts[0]});
//		const bool3g5ikL = await TPAOLnLu0q.transferWithLock.call(addressmqZTtc9, uintAE7ZjKU, uintoZNMMQ5, {from: accounts[4]});

		await expect(TPAOLnLu0q.transferFrom.call(addressdivn11C, addressrFzr7pW, uintebpAgVV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAGf1L6cD = await TPA.new({from: accounts[1]});
		const uintJO7qJOr = BigInt("1633")
		const addressxV2NCNe = accounts[1]
		const uintPNCgDcw = BigInt("496")
		const addressw7CNyXH = accounts[3]
		const addressMMt7rz = accounts[1]
		const addressDqLvb8g = accounts[4]
		const addresscw9D1cA = accounts[0]
//		const boolMYndoCD = await TPAGf1L6cD.decreaseAllowance.call(addressxV2NCNe, uintJO7qJOr, {from: accounts[2]});
//		const boolYB12A9 = await TPAGf1L6cD.transferFrom.call(addressMMt7rz, addressw7CNyXH, uintPNCgDcw, {from: accounts[0]});
//		const boolQQbWJy = await TPAGf1L6cD.unfreezeAccount.call(addressDqLvb8g, {from: accounts[0]});
//		const boolpRTknyv = await TPAGf1L6cD.isOwner.call(addresscw9D1cA, {from: accounts[3]});

		await expect(TPAGf1L6cD.decreaseAllowance.call(addressxV2NCNe, uintJO7qJOr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAHQvRy9P = await TPA.new({from: accounts[1]});
		const uintjQe5D7L = BigInt("1147")
		const addresseLm197w = accounts[3]
		const stringRTbb7v4 = await TPAHQvRy9P.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		await TPAHQvRy9P.whenPaused.call({from: accounts[2]});
//		const boolofHzzqK = await TPAHQvRy9P.approve.call(addresseLm197w, uintjQe5D7L, {from: accounts[0]});

		assert.equal(stringRTbb7v4, "TPA")
		await expect(TPAHQvRy9P.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAOLnLu0q = await TPA.new({from: accounts[1]});
		const uintJ6C6CHt = BigInt("75")
		const addressHI7nAm0 = accounts[4]
		const uintd6Bjzyx = BigInt("44")
		const addresslQcM0s0 = accounts[3]
		const uintnb0apck = BigInt("1989")
		const uinttMaL2CC = BigInt("818")
		const addressHfL8sX1 = accounts[5]
		const boolcOtKt9k = await TPAOLnLu0q.approve.call(addressHI7nAm0, uintJ6C6CHt, {from: accounts[4]});
//		const boolY9mXJ1M = await TPAOLnLu0q.transfer.call(addresslQcM0s0, uintd6Bjzyx, {from: accounts[0]});
//		const uint256HAUP4MH = await TPAOLnLu0q.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const bool3g5ikL = await TPAOLnLu0q.transferWithLock.call(addressHfL8sX1, uinttMaL2CC, uintnb0apck, {from: accounts[4]});

		assert.equal(boolcOtKt9k, true)
		await expect(TPAOLnLu0q.transfer.call(addresslQcM0s0, uintd6Bjzyx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAOLnLu0q = await TPA.new({from: accounts[1]});
		const uinthxI9MV0 = BigInt("44")
		const addressLZHW9Xn = accounts[3]
		const stringwnlN9SQ = await TPAOLnLu0q.name.call({from: accounts[0]});
//		const boolY9mXJ1M = await TPAOLnLu0q.transfer.call(addressLZHW9Xn, uinthxI9MV0, {from: accounts[0]});

		assert.equal(stringwnlN9SQ, "TPA")
		await expect(TPAOLnLu0q.transfer.call(addressLZHW9Xn, uinthxI9MV0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAwrtqnjH = await TPA.new({from: accounts[5]});
		const uintPO5Q0m0 = BigInt("267")
		const addressy3L6jeP = accounts[2]
		const addresseTaIfwd = accounts[2]
		const addressj3F5kG6 = accounts[5]
		const uintLYlLnh = BigInt("1565")
		const addresso3e4Ic = accounts[2]
//		const uint256MUZGQGW = await TPAwrtqnjH.burn.call(uintPO5Q0m0, {from: accounts[2]});
//		const boolPDG1tJv = await TPAwrtqnjH.freezeAccount.call(addressy3L6jeP, {from: accounts[3]});
//		await TPAwrtqnjH.unpause.call({from: accounts[1]});
//		const uint256HYVuszE = await TPAwrtqnjH.allowance.call(addressj3F5kG6, addresseTaIfwd, {from: accounts[0]});
//		await TPAwrtqnjH.onlyAdmin.call({from: accounts[4]});
//		const boolOKmx5KG = await TPAwrtqnjH.transfer.call(addresso3e4Ic, uintLYlLnh, {from: accounts[2]});

		await expect(TPAwrtqnjH.burn.call(uintPO5Q0m0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAOLnLu0q = await TPA.new({from: accounts[1]});
		const addressy9y3AY = accounts[2]
		const uintMlMJomY = BigInt("48")
		const addresszRTLniQ = accounts[3]
		const uint256NRAAiSx = await TPAOLnLu0q.balanceOf.call(addressy9y3AY, {from: accounts[4]});
		const uint8NvwWJS4 = await TPAOLnLu0q.decimals.call({from: accounts[3]});
//		await TPAOLnLu0q.pause.call({from: accounts[1]});
//		const boolY9mXJ1M = await TPAOLnLu0q.transfer.call(addresszRTLniQ, uintMlMJomY, {from: accounts[0]});

		assert.equal(uint256NRAAiSx, BigInt("0"))
		assert.equal(uint8NvwWJS4, BigInt("18"))
		await expect(TPAOLnLu0q.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAOLnLu0q = await TPA.new({from: accounts[1]});
		const addressMkSSezx = accounts[3]
		const addressgM4VO83 = accounts[2]
		const uintSI1LLXH = BigInt("660")
		const addressaRQVpbN = accounts[3]
		const uint256oCvC5vX = await TPAOLnLu0q.allowance.call(addressgM4VO83, addressMkSSezx, {from: accounts[2]});
//		const boolY9mXJ1M = await TPAOLnLu0q.transfer.call(addressaRQVpbN, uintSI1LLXH, {from: accounts[0]});

		assert.equal(uint256oCvC5vX, BigInt("0"))
		await expect(TPAOLnLu0q.transfer.call(addressaRQVpbN, uintSI1LLXH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAOLnLu0q = await TPA.new({from: accounts[1]});
		const addressqUAc8v = "0x0000000000000000000000000000000000000001"
		const uintNuacWy6 = BigInt("44")
		const addressMaokSRX = accounts[4]
		const addressCjspW8S = accounts[1]
		const addresssXdzNu = await TPAOLnLu0q.transferOwnership.call(addressqUAc8v, {from: accounts[1]});
//		const boolY9mXJ1M = await TPAOLnLu0q.transfer.call(addressMaokSRX, uintNuacWy6, {from: accounts[0]});
//		const addressbWCjUm9 = await TPAOLnLu0q.notFrozen.call(addressCjspW8S, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TPAOLnLu0q.transfer.call(addressMaokSRX, uintNuacWy6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAOLnLu0q = await TPA.new({from: accounts[1]});
		const uintjbw1lnP = BigInt("35")
		const addressP84WCG = accounts[3]
		const booldBKV19o = await TPAOLnLu0q.paused.call({from: accounts[5]});
//		const boolY9mXJ1M = await TPAOLnLu0q.transfer.call(addressP84WCG, uintjbw1lnP, {from: accounts[0]});

		assert.equal(booldBKV19o, false)
		await expect(TPAOLnLu0q.transfer.call(addressP84WCG, uintjbw1lnP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAWBjlGX5 = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const stringFrSa6T2 = await TPAWBjlGX5.symbol.call({from: accounts[0]});
		const stringtGyyW3 = await TPAWBjlGX5.symbol.call({from: accounts[1]});
		await TPAWBjlGX5.pause.call({from: accounts[3]});
	});

	it('test for TPA', async () => {
		const TPAOLnLu0q = await TPA.new({from: accounts[1]});
		const uint9ym3vu = BigInt("367")
		const addresszjwT2d = accounts[4]
		const uintqNEtaK = BigInt("275")
		const addressdaH5Svm = accounts[2]
		const uintprPz7U8 = BigInt("44")
		const addressRJLi1WO = accounts[3]
		const boolVdLMiJN = await TPAOLnLu0q.increaseAllowance.call(addresszjwT2d, uint9ym3vu, {from: accounts[4]});
		const booloexndv = await TPAOLnLu0q.increaseAllowance.call(addressdaH5Svm, uintqNEtaK, {from: accounts[4]});
//		const boolY9mXJ1M = await TPAOLnLu0q.transfer.call(addressRJLi1WO, uintprPz7U8, {from: accounts[0]});

		assert.equal(boolVdLMiJN, true)
		assert.equal(booloexndv, true)
		await expect(TPAOLnLu0q.transfer.call(addressRJLi1WO, uintprPz7U8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAOLnLu0q = await TPA.new({from: accounts[1]});
		const addressJlAy2mb = accounts[2]
		const uintMBtQPZY = BigInt("1709")
		const addressw4Om7i = accounts[5]
		const addressFKfDKi = "0x0000000000000000000000000000000000000001"
		const uint256NRAAiSx = await TPAOLnLu0q.balanceOf.call(addressJlAy2mb, {from: accounts[4]});
		const uint8NvwWJS4 = await TPAOLnLu0q.decimals.call({from: accounts[3]});
//		const addressZVfeXhX = await TPAOLnLu0q.burnFrom.call(addressw4Om7i, uintMBtQPZY, {from: "0x0000000000000000000000000000000000000001"});
//		const uint2564LEkWs = await TPAOLnLu0q.balanceOf.call(addressFKfDKi, {from: accounts[2]});
//		await TPAOLnLu0q.pause.call({from: accounts[1]});

		assert.equal(uint256NRAAiSx, BigInt("0"))
		assert.equal(uint8NvwWJS4, BigInt("18"))
		await expect(TPAOLnLu0q.burnFrom.call(addressw4Om7i, uintMBtQPZY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAOLnLu0q = await TPA.new({from: accounts[1]});
		const uintMokgBfi = BigInt("129")
		const addressBpD2fwl = accounts[4]
		const addressDJDMrsv = accounts[3]
//		await TPAOLnLu0q.renounceAdmin.call({from: accounts[1]});
//		const boolIkhF2bq = await TPAOLnLu0q.decreaseAllowance.call(addressBpD2fwl, uintMokgBfi, {from: accounts[3]});
//		const uint256NRAAiSx = await TPAOLnLu0q.balanceOf.call(addressDJDMrsv, {from: accounts[4]});

		await expect(TPAOLnLu0q.renounceAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAOLnLu0q = await TPA.new({from: accounts[1]});
		const addressbSVXFbn = accounts[4]
		const uintv5xilIB = BigInt("60")
		const addressLj4kXQB = accounts[3]
		const addressxtyMUr = await TPAOLnLu0q.upgradeTo.call(addressbSVXFbn, {from: accounts[1]});
		const stringa7y2iNH = await TPAOLnLu0q.symbol.call({from: accounts[5]});
//		const boolY9mXJ1M = await TPAOLnLu0q.transfer.call(addressLj4kXQB, uintv5xilIB, {from: accounts[0]});

		assert.equal(stringa7y2iNH, "TPA")
		await expect(TPAOLnLu0q.transfer.call(addressLj4kXQB, uintv5xilIB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAOLnLu0q = await TPA.new({from: accounts[1]});
		const uint9MsOXg = BigInt("1705")
		const uintW8WAoJj = BigInt("1822")
		const addressiPGub9h = accounts[5]
		const uintrmcJwVp = BigInt("2")
		const uintwtOlzR8 = BigInt("1427")
		const address0KRqvq = "0x0000000000000000000000000000000000000001"
		const uintpU5nnmK = BigInt("1425")
		const uintWy84CLZ = BigInt("1335")
		const addressMWr5otg = accounts[5]
		const addressrIkhj2B = accounts[1]
//		const boolssngvJN = await TPAOLnLu0q.lock.call(addressiPGub9h, uintW8WAoJj, uint9MsOXg, {from: accounts[1]});
//		const boolbDGZpNo = await TPAOLnLu0q.transferWithLock.call(address0KRqvq, uintwtOlzR8, uintrmcJwVp, {from: accounts[1]});
//		const uint256bxoKVYY = await TPAOLnLu0q.burn.call(uintpU5nnmK, {from: accounts[4]});
//		const stringsvqZTX = await TPAOLnLu0q.symbol.call({from: accounts[3]});
//		const boolXSNubHr = await TPAOLnLu0q.transferFrom.call(addressrIkhj2B, addressMWr5otg, uintWy84CLZ, {from: accounts[4]});

		await expect(TPAOLnLu0q.lock.call(addressiPGub9h, uintW8WAoJj, uint9MsOXg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})