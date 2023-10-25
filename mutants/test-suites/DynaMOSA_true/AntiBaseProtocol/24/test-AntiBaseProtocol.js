const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringSGZAF73 = "YOVT7Ol7LupYt77R3iPMA5reGrjqEcaliJznXHo7yz1q"
		const stringqM1dFk5 = "an4Vg7phCgbR9WAqE7OR1sRT8bq5g7dn1VVpLljSNZQ3pORevv2V2Hla"
		const uintPW93JgF = BigInt("34")
		const AntiBaseProtocolE1R2Og3 = await AntiBaseProtocol.new(stringSGZAF73, stringqM1dFk5, uintPW93JgF, {from: "0x0000000000000000000000000000000000000001"});
		const uintiRsBs5S = BigInt("1183")
		const addressvqB3LfU = accounts[1]
		const uints6f88BG = BigInt("1203")
		const addressSIrFhyH = accounts[0]
		const addressd0UHRzk = accounts[1]
		const uintfXd5PX = BigInt("1706")
		const addressUPKIFeV = accounts[3]
		const uintERZX3CB = BigInt("1948")
		const addressCEmPLc8 = accounts[0]
		const addressKP5gFvm = accounts[2]
		const addressdRitTWB = accounts[0]
		const addressgFGGh4g = await AntiBaseProtocolE1R2Og3.burnFrom.call(addressvqB3LfU, uintiRsBs5S, {from: "0x0000000000000000000000000000000000000001"});
		const boolREHWfEY = await AntiBaseProtocolE1R2Og3.transferFrom.call(addressd0UHRzk, addressSIrFhyH, uints6f88BG, {from: accounts[3]});
		const addresswi5ZwQp = await AntiBaseProtocolE1R2Og3._mint.call(addressUPKIFeV, uintfXd5PX, {from: accounts[4]});
		const boolBbbhokL = await AntiBaseProtocolE1R2Og3.transferFrom.call(addressKP5gFvm, addressCEmPLc8, uintERZX3CB, {from: accounts[4]});
		const addressPFt42e = await AntiBaseProtocolE1R2Og3._transferOwnership.call(addressdRitTWB, {from: accounts[5]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolxPLZIVA = await AntiBaseProtocol.new({from: accounts[3]});
		const addressBHjzU2 = accounts[2]
		const uintrIPLMx = BigInt("1882")
		const uintXifTbl = BigInt("145")
		const addresszk4Q4u5 = accounts[0]
		const uintqy2gKbc = BigInt("1611")
		const addressThm8vp8 = accounts[5]
		const uintfv9yvlQ = BigInt("1287")
		const addressizfbJ9e = accounts[2]
//		const addressD6AznnY = await AntiBaseProtocolxPLZIVA._transferOwnership.call(addressBHjzU2, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256EpAU9j2 = await AntiBaseProtocolxPLZIVA.findRewardFee.call(uintrIPLMx, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbVy3OSb = await AntiBaseProtocolxPLZIVA.transfer.call(addresszk4Q4u5, uintXifTbl, {from: accounts[1]});
//		const addressvBtoEY = await AntiBaseProtocolxPLZIVA._burnFrom.call(addressThm8vp8, uintqy2gKbc, {from: accounts[2]});
//		const boolDy6G4V = await AntiBaseProtocolxPLZIVA.approve.call(addressizfbJ9e, uintfv9yvlQ, {from: accounts[0]});

		await expect(AntiBaseProtocolxPLZIVA._transferOwnership.call(addressBHjzU2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolfBUnUwu = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uint25613k69S = await AntiBaseProtocolfBUnUwu.totalSupply.call({from: accounts[5]});
		await AntiBaseProtocolfBUnUwu.requestGas.call({from: accounts[3]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmaKhaTu = await AntiBaseProtocol.new({from: accounts[0]});
		const uintTk71Bq8 = BigInt("62")
		const addressxNJzj8z = "0x0000000000000000000000000000000000000001"
		const addressFNQnC3E = accounts[4]
		const uintyDG8pI2 = BigInt("977")
		const addressmIPiYVP = accounts[4]
		const uintbHM4G8h = BigInt("1252")
		const addressJLS98vg = accounts[2]
//		const boolo1X86L1 = await AntiBaseProtocolmaKhaTu.transferFrom.call(addressFNQnC3E, addressxNJzj8z, uintTk71Bq8, {from: accounts[3]});
//		const uint8kOXqAgp = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[5]});
//		const uint256drl4YxL = await AntiBaseProtocolmaKhaTu.findRewardFee.call(uintyDG8pI2, {from: accounts[5]});
//		const uint256FIx2eBM = await AntiBaseProtocolmaKhaTu.balanceOf.call(addressmIPiYVP, {from: accounts[2]});
//		const boolNj9Qcr = await AntiBaseProtocolmaKhaTu.transfer.call(addressJLS98vg, uintbHM4G8h, {from: accounts[4]});
//		const uint8hZncCQz = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[4]});

		await expect(AntiBaseProtocolmaKhaTu.transferFrom.call(addressFNQnC3E, addressxNJzj8z, uintTk71Bq8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmaKhaTu = await AntiBaseProtocol.new({from: accounts[0]});
		const uintnCcmYEX = BigInt("62")
		const addressSDX3GdA = "0x0000000000000000000000000000000000000000"
		const addressqygLMZt = accounts[4]
		const uintaqS9EPM = BigInt("977")
		const addresso8nhsMJ = accounts[4]
		const uintCZI1PDK = BigInt("1252")
		const addressdFjnUgM = accounts[2]
		const uintzzeXWlP = BigInt("1773")
		const uint256n4bnyyF = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[2]});
//		const boolo1X86L1 = await AntiBaseProtocolmaKhaTu.transferFrom.call(addressqygLMZt, addressSDX3GdA, uintnCcmYEX, {from: accounts[3]});
//		const uint8kOXqAgp = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[5]});
//		const uint256drl4YxL = await AntiBaseProtocolmaKhaTu.findRewardFee.call(uintaqS9EPM, {from: accounts[5]});
//		const uint256FIx2eBM = await AntiBaseProtocolmaKhaTu.balanceOf.call(addresso8nhsMJ, {from: accounts[2]});
//		const boolNj9Qcr = await AntiBaseProtocolmaKhaTu.transfer.call(addressdFjnUgM, uintCZI1PDK, {from: accounts[4]});
//		const uint256kYI6GCL = await AntiBaseProtocolmaKhaTu.findBurnFee.call(uintzzeXWlP, {from: accounts[0]});
//		const uint8hZncCQz = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[4]});

		assert.equal(uint256n4bnyyF, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolmaKhaTu.transferFrom.call(addressqygLMZt, addressSDX3GdA, uintnCcmYEX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmaKhaTu = await AntiBaseProtocol.new({from: accounts[0]});
		const uintQjPLB4 = BigInt("1219")
		const addressbMFrGes = accounts[0]
		const uintd79TI8A = BigInt("977")
		const uinto3NzQXS = BigInt("2017")
		const addressqOYHNF7 = accounts[4]
		const uintAtHIK8m = BigInt("1251")
		const addressOHzBrZI = accounts[2]
		const uint8kOXqAgp = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[5]});
		const stringww0try7 = await AntiBaseProtocolmaKhaTu.name.call({from: accounts[4]});
		const boolfTLMsRT = await AntiBaseProtocolmaKhaTu.approve.call(addressbMFrGes, uintQjPLB4, {from: accounts[4]});
		const uint256drl4YxL = await AntiBaseProtocolmaKhaTu.findRewardFee.call(uintd79TI8A, {from: accounts[5]});
		const boolXnAsCN = await AntiBaseProtocolmaKhaTu.increaseAllowance.call(addressqOYHNF7, uinto3NzQXS, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNj9Qcr = await AntiBaseProtocolmaKhaTu.transfer.call(addressOHzBrZI, uintAtHIK8m, {from: accounts[4]});
//		const uint256kjU9rTx = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[1]});
//		const uint256AhPrdi8 = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[4]});
//		const uint8hZncCQz = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[4]});

		assert.equal(boolXnAsCN, true)
		assert.equal(boolfTLMsRT, true)
		assert.equal(stringww0try7, "https://t.me/antibaseprotocol")
		assert.equal(uint256drl4YxL, BigInt("50"))
		assert.equal(uint8kOXqAgp, BigInt("18"))
		await expect(AntiBaseProtocolmaKhaTu.transfer.call(addressOHzBrZI, uintAtHIK8m, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmaKhaTu = await AntiBaseProtocol.new({from: accounts[0]});
		const uintdT9CEj0 = BigInt("1103")
		const addressaIXUg0 = accounts[0]
		const uintrBzFJEq = BigInt("1219")
		const addressNXcK3s = accounts[0]
		const uint5OXG64 = BigInt("977")
		const uintNbOp8lb = BigInt("2017")
		const addressIyOEhIZ = accounts[4]
		const uintCT1AJRr = BigInt("1251")
		const addressbvZCRRx = accounts[2]
//		const boolZPI1uQA = await AntiBaseProtocolmaKhaTu.decreaseAllowance.call(addressaIXUg0, uintdT9CEj0, {from: accounts[1]});
//		const uint8kOXqAgp = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[5]});
//		const stringww0try7 = await AntiBaseProtocolmaKhaTu.name.call({from: accounts[4]});
//		const boolfTLMsRT = await AntiBaseProtocolmaKhaTu.approve.call(addressNXcK3s, uintrBzFJEq, {from: accounts[4]});
//		const uint256drl4YxL = await AntiBaseProtocolmaKhaTu.findRewardFee.call(uint5OXG64, {from: accounts[5]});
//		const boolXnAsCN = await AntiBaseProtocolmaKhaTu.increaseAllowance.call(addressIyOEhIZ, uintNbOp8lb, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNj9Qcr = await AntiBaseProtocolmaKhaTu.transfer.call(addressbvZCRRx, uintCT1AJRr, {from: accounts[4]});
//		const uint256kjU9rTx = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[1]});
//		const uint256AhPrdi8 = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[4]});
//		const uint8hZncCQz = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[4]});

		await expect(AntiBaseProtocolmaKhaTu.decreaseAllowance.call(addressaIXUg0, uintdT9CEj0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmaKhaTu = await AntiBaseProtocol.new({from: accounts[0]});
		const uintwUeeeRy = BigInt("1219")
		const addressaURUQB = accounts[0]
		const addressK8arbr5 = accounts[2]
		const addressKj3eaaR = accounts[3]
		const uintuMnUYu5 = BigInt("977")
		const uintwuOE1V = BigInt("2017")
		const addressO0CGRUk = accounts[4]
		const uintrqx91An = BigInt("1251")
		const addressT8kN2iK = accounts[2]
		const uint8kOXqAgp = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[5]});
		const stringww0try7 = await AntiBaseProtocolmaKhaTu.name.call({from: accounts[4]});
		const boolfTLMsRT = await AntiBaseProtocolmaKhaTu.approve.call(addressaURUQB, uintwUeeeRy, {from: accounts[4]});
		const uint256yL0JWT = await AntiBaseProtocolmaKhaTu.allowance.call(addressKj3eaaR, addressK8arbr5, {from: accounts[2]});
		const uint256drl4YxL = await AntiBaseProtocolmaKhaTu.findRewardFee.call(uintuMnUYu5, {from: accounts[5]});
		const boolXnAsCN = await AntiBaseProtocolmaKhaTu.increaseAllowance.call(addressO0CGRUk, uintwuOE1V, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNj9Qcr = await AntiBaseProtocolmaKhaTu.transfer.call(addressT8kN2iK, uintrqx91An, {from: accounts[4]});
//		const uint256kjU9rTx = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[1]});
//		const uint256AhPrdi8 = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[4]});
//		const uint8hZncCQz = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[4]});

		assert.equal(boolXnAsCN, true)
		assert.equal(boolfTLMsRT, true)
		assert.equal(stringww0try7, "https://t.me/antibaseprotocol")
		assert.equal(uint256drl4YxL, BigInt("50"))
		assert.equal(uint256yL0JWT, BigInt("0"))
		assert.equal(uint8kOXqAgp, BigInt("18"))
		await expect(AntiBaseProtocolmaKhaTu.transfer.call(addressT8kN2iK, uintrqx91An, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmaKhaTu = await AntiBaseProtocol.new({from: accounts[0]});
		const uintWAVxbA = BigInt("1219")
		const addressclSEpux = accounts[0]
		const addressg3Nm0ds = accounts[3]
		const uintHRojkO = BigInt("977")
		const uintBIN3da2 = BigInt("2017")
		const addressQbeIPR0 = accounts[4]
		const uintpBalfYf = BigInt("1251")
		const addressgnum0O = accounts[2]
		const uint8kOXqAgp = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[5]});
		const stringww0try7 = await AntiBaseProtocolmaKhaTu.name.call({from: accounts[4]});
		const boolfTLMsRT = await AntiBaseProtocolmaKhaTu.approve.call(addressclSEpux, uintWAVxbA, {from: accounts[4]});
		const uint256eA4WP30 = await AntiBaseProtocolmaKhaTu.balanceOf.call(addressg3Nm0ds, {from: accounts[0]});
		const uint256drl4YxL = await AntiBaseProtocolmaKhaTu.findRewardFee.call(uintHRojkO, {from: accounts[5]});
		const stringIGd8RpB = await AntiBaseProtocolmaKhaTu.symbol.call({from: accounts[2]});
		const boolXnAsCN = await AntiBaseProtocolmaKhaTu.increaseAllowance.call(addressQbeIPR0, uintBIN3da2, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNj9Qcr = await AntiBaseProtocolmaKhaTu.transfer.call(addressgnum0O, uintpBalfYf, {from: accounts[4]});
//		const uint256kjU9rTx = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[1]});
//		const uint8hZncCQz = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[4]});

		assert.equal(boolXnAsCN, true)
		assert.equal(boolfTLMsRT, true)
		assert.equal(stringIGd8RpB, "ABASE")
		assert.equal(stringww0try7, "https://t.me/antibaseprotocol")
		assert.equal(uint256drl4YxL, BigInt("50"))
		assert.equal(uint256eA4WP30, BigInt("0"))
		assert.equal(uint8kOXqAgp, BigInt("18"))
		await expect(AntiBaseProtocolmaKhaTu.transfer.call(addressgnum0O, uintpBalfYf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmaKhaTu = await AntiBaseProtocol.new({from: accounts[0]});
		const addressnZjByPf = accounts[1]
		const uintzgocY0j = BigInt("1219")
		const addressEw7vi1Z = accounts[0]
		const uintr9b5880 = BigInt("977")
		const uintHLPhjoO = BigInt("2017")
		const addressYfSCGu = accounts[4]
		const uintvjE7IG8 = BigInt("1251")
		const addressckwSrB0 = accounts[2]
		const uint8kOXqAgp = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[5]});
//		const addressGvLBXu0 = await AntiBaseProtocolmaKhaTu.transferOwnership.call(addressnZjByPf, {from: accounts[2]});
//		const stringww0try7 = await AntiBaseProtocolmaKhaTu.name.call({from: accounts[4]});
//		const boolfTLMsRT = await AntiBaseProtocolmaKhaTu.approve.call(addressEw7vi1Z, uintzgocY0j, {from: accounts[4]});
//		const uint256drl4YxL = await AntiBaseProtocolmaKhaTu.findRewardFee.call(uintr9b5880, {from: accounts[5]});
//		const boolXnAsCN = await AntiBaseProtocolmaKhaTu.increaseAllowance.call(addressYfSCGu, uintHLPhjoO, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNj9Qcr = await AntiBaseProtocolmaKhaTu.transfer.call(addressckwSrB0, uintvjE7IG8, {from: accounts[4]});
//		const uint256kjU9rTx = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[1]});
//		const stringXck9XlS = await AntiBaseProtocolmaKhaTu.symbol.call({from: accounts[1]});
//		const uint8hZncCQz = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[4]});

		assert.equal(uint8kOXqAgp, BigInt("18"))
		await expect(AntiBaseProtocolmaKhaTu.transferOwnership.call(addressnZjByPf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmaKhaTu = await AntiBaseProtocol.new({from: accounts[0]});
		const uintucg27Tk = BigInt("351")
		const uintP7AO4gO = BigInt("1219")
		const addresspg1657t = accounts[0]
		const uintDn3qUsE = BigInt("977")
		const uintVtAqbis = BigInt("2017")
		const addressh76QLW7 = accounts[4]
		const uintSrEkhH0 = BigInt("1251")
		const addressBIp03TV = accounts[2]
		const uint8kOXqAgp = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[5]});
//		const uint256IyHIF4R = await AntiBaseProtocolmaKhaTu.burn.call(uintucg27Tk, {from: accounts[3]});
//		const stringww0try7 = await AntiBaseProtocolmaKhaTu.name.call({from: accounts[4]});
//		const boolfTLMsRT = await AntiBaseProtocolmaKhaTu.approve.call(addresspg1657t, uintP7AO4gO, {from: accounts[4]});
//		const uint256drl4YxL = await AntiBaseProtocolmaKhaTu.findRewardFee.call(uintDn3qUsE, {from: accounts[5]});
//		const boolXnAsCN = await AntiBaseProtocolmaKhaTu.increaseAllowance.call(addressh76QLW7, uintVtAqbis, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256X8Zs2nE = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[0]});
//		const boolNj9Qcr = await AntiBaseProtocolmaKhaTu.transfer.call(addressBIp03TV, uintSrEkhH0, {from: accounts[4]});
//		const uint256kjU9rTx = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[1]});
//		await AntiBaseProtocolmaKhaTu.renounceOwnership.call({from: accounts[1]});
//		const uint256JZuupph = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[2]});
//		const uint256AhPrdi8 = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[4]});
//		const uint8hZncCQz = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[4]});

		assert.equal(uint8kOXqAgp, BigInt("18"))
		await expect(AntiBaseProtocolmaKhaTu.burn.call(uintucg27Tk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmaKhaTu = await AntiBaseProtocol.new({from: accounts[0]});
		const uintNnoVT8 = BigInt("1569")
		const addressCc6f3z0 = accounts[0]
		const uintR91q4cj = BigInt("1219")
		const addressNJ2AAwx = accounts[0]
		const uintZtZIxEy = BigInt("494")
		const uintssLEnRQ = BigInt("2017")
		const addressCohjRoA = accounts[4]
		const uintN5UmAKG = BigInt("1251")
		const addressBJ2qHaU = accounts[2]
		const uintN3uwBOC = BigInt("1865")
		const uint8kOXqAgp = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[5]});
//		const addressscgUAJQ = await AntiBaseProtocolmaKhaTu.burnFrom.call(addressCc6f3z0, uintNnoVT8, {from: accounts[4]});
//		const boolfTLMsRT = await AntiBaseProtocolmaKhaTu.approve.call(addressNJ2AAwx, uintR91q4cj, {from: accounts[4]});
//		const boolgTn2n7y = await AntiBaseProtocolmaKhaTu.isOwner.call({from: accounts[4]});
//		const uint256drl4YxL = await AntiBaseProtocolmaKhaTu.findRewardFee.call(uintZtZIxEy, {from: accounts[5]});
//		const boolXnAsCN = await AntiBaseProtocolmaKhaTu.increaseAllowance.call(addressCohjRoA, uintssLEnRQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNj9Qcr = await AntiBaseProtocolmaKhaTu.transfer.call(addressBJ2qHaU, uintN5UmAKG, {from: accounts[4]});
//		const uint256dEXEUPJ = await AntiBaseProtocolmaKhaTu.burn.call(uintN3uwBOC, {from: accounts[5]});
//		const uint256kjU9rTx = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[1]});
//		const uint256AhPrdi8 = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[4]});
//		const uint8hZncCQz = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[4]});

		assert.equal(uint8kOXqAgp, BigInt("18"))
		await expect(AntiBaseProtocolmaKhaTu.burnFrom.call(addressCc6f3z0, uintNnoVT8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmaKhaTu = await AntiBaseProtocol.new({from: accounts[0]});
		const uintUCEbPwk = BigInt("1219")
		const addresszvrCocv = accounts[1]
		const uintWUSb6mb = BigInt("494")
		const uintQhxNIIT = BigInt("2017")
		const addressgNTtDKG = accounts[4]
		const uintJntvq57 = BigInt("1251")
		const addressnhiCz4R = accounts[2]
		const uint8kOXqAgp = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[5]});
//		await AntiBaseProtocolmaKhaTu.renounceOwnership.call({from: accounts[0]});
//		const stringfs2Kc7 = await AntiBaseProtocolmaKhaTu.symbol.call({from: accounts[0]});
//		const boolfTLMsRT = await AntiBaseProtocolmaKhaTu.approve.call(addresszvrCocv, uintUCEbPwk, {from: accounts[4]});
//		const uint256drl4YxL = await AntiBaseProtocolmaKhaTu.findRewardFee.call(uintWUSb6mb, {from: accounts[5]});
//		const boolXnAsCN = await AntiBaseProtocolmaKhaTu.increaseAllowance.call(addressgNTtDKG, uintQhxNIIT, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNj9Qcr = await AntiBaseProtocolmaKhaTu.transfer.call(addressnhiCz4R, uintJntvq57, {from: accounts[4]});
//		const uint256kjU9rTx = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[1]});
//		const uint256AhPrdi8 = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[4]});
//		const uint8hZncCQz = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[4]});

		assert.equal(uint8kOXqAgp, BigInt("18"))
		await expect(AntiBaseProtocolmaKhaTu.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmaKhaTu = await AntiBaseProtocol.new({from: accounts[0]});
		const uintj81y3G = BigInt("1219")
		const addressL7i7neJ = accounts[0]
		const uintfueFaH = BigInt("494")
		const uintRiRzlKq = BigInt("641")
		const uintWjr8mWH = BigInt("2024")
		const addressmIXX7e2 = accounts[4]
		const uintvFqh6xH = BigInt("1251")
		const addressErxqMXo = accounts[2]
		const uintDkj704 = BigInt("1594")
		const uint8kOXqAgp = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[5]});
		const stringfs2Kc7 = await AntiBaseProtocolmaKhaTu.symbol.call({from: accounts[0]});
		const boolfTLMsRT = await AntiBaseProtocolmaKhaTu.approve.call(addressL7i7neJ, uintj81y3G, {from: accounts[4]});
		const uint256drl4YxL = await AntiBaseProtocolmaKhaTu.findRewardFee.call(uintfueFaH, {from: accounts[5]});
		const uint256yl6WXN0 = await AntiBaseProtocolmaKhaTu.findBurnFee.call(uintRiRzlKq, {from: accounts[5]});
		const boolXnAsCN = await AntiBaseProtocolmaKhaTu.increaseAllowance.call(addressmIXX7e2, uintWjr8mWH, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNj9Qcr = await AntiBaseProtocolmaKhaTu.transfer.call(addressErxqMXo, uintvFqh6xH, {from: accounts[4]});
//		const uint256ssxCDw = await AntiBaseProtocolmaKhaTu.burn.call(uintDkj704, {from: accounts[0]});
//		const uint256kjU9rTx = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[1]});
//		const uint256AhPrdi8 = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[4]});
//		const uint8hZncCQz = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[4]});

		assert.equal(boolXnAsCN, true)
		assert.equal(boolfTLMsRT, true)
		assert.equal(stringfs2Kc7, "ABASE")
		assert.equal(uint256drl4YxL, BigInt("25"))
		assert.equal(uint256yl6WXN0, BigInt("105"))
		assert.equal(uint8kOXqAgp, BigInt("18"))
		await expect(AntiBaseProtocolmaKhaTu.transfer.call(addressErxqMXo, uintvFqh6xH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmaKhaTu = await AntiBaseProtocol.new({from: accounts[0]});
		const addressrrozQg3 = accounts[2]
		const uintmyHCh19 = BigInt("1219")
		const addressl7BxSUa = accounts[0]
		const uintiBdcgWM = BigInt("476")
		const uintm8SyHNI = BigInt("2017")
		const addressJ7nvvAg = accounts[4]
		const uintpAay5W6 = BigInt("1475")
		const addressOD2zzQG = accounts[2]
		const uint8kOXqAgp = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[5]});
		const addressZ5qsDOI = await AntiBaseProtocolmaKhaTu.transferOwnership.call(addressrrozQg3, {from: accounts[0]});
		const boolfTLMsRT = await AntiBaseProtocolmaKhaTu.approve.call(addressl7BxSUa, uintmyHCh19, {from: accounts[4]});
		const uint256drl4YxL = await AntiBaseProtocolmaKhaTu.findRewardFee.call(uintiBdcgWM, {from: accounts[5]});
		const boolXnAsCN = await AntiBaseProtocolmaKhaTu.increaseAllowance.call(addressJ7nvvAg, uintm8SyHNI, {from: "0x0000000000000000000000000000000000000001"});
//		const boolgvLMdJ4 = await AntiBaseProtocolmaKhaTu.transfer.call(addressOD2zzQG, uintpAay5W6, {from: accounts[2]});
//		const uint256AhPrdi8 = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[4]});

		assert.equal(boolXnAsCN, true)
		assert.equal(boolfTLMsRT, true)
		assert.equal(uint256drl4YxL, BigInt("25"))
		assert.equal(uint8kOXqAgp, BigInt("18"))
		await expect(AntiBaseProtocolmaKhaTu.transfer.call(addressOD2zzQG, uintpAay5W6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmaKhaTu = await AntiBaseProtocol.new({from: accounts[0]});
		const uintbJsk36M = BigInt("1219")
		const addressCUJOs2K = accounts[0]
		const uinthvNkM2 = BigInt("495")
		const uintGVgPOsU = BigInt("2017")
		const address5kYS7a = accounts[4]
		const uintXo6euvD = BigInt("1977")
		const addressMJfVb3e = accounts[2]
		const addressmNiZgPL = accounts[0]
		const uint8kOXqAgp = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[5]});
		const boolfTLMsRT = await AntiBaseProtocolmaKhaTu.approve.call(addressCUJOs2K, uintbJsk36M, {from: accounts[4]});
		const uint256drl4YxL = await AntiBaseProtocolmaKhaTu.findRewardFee.call(uinthvNkM2, {from: accounts[5]});
		const stringu80OgqY = await AntiBaseProtocolmaKhaTu.symbol.call({from: accounts[3]});
		const boolXnAsCN = await AntiBaseProtocolmaKhaTu.increaseAllowance.call(address5kYS7a, uintGVgPOsU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256AhPrdi8 = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[4]});
//		const boolP96tb9t = await AntiBaseProtocolmaKhaTu.transferFrom.call(addressmNiZgPL, addressMJfVb3e, uintXo6euvD, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolXnAsCN, true)
		assert.equal(boolfTLMsRT, true)
		assert.equal(stringu80OgqY, "ABASE")
		assert.equal(uint256AhPrdi8, BigInt("31250000000000000000"))
		assert.equal(uint256drl4YxL, BigInt("25"))
		assert.equal(uint8kOXqAgp, BigInt("18"))
		await expect(AntiBaseProtocolmaKhaTu.transferFrom.call(addressmNiZgPL, addressMJfVb3e, uintXo6euvD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmaKhaTu = await AntiBaseProtocol.new({from: accounts[0]});
		const uintkUmDr9e = BigInt("142")
		const uintcXz18k = BigInt("1219")
		const addressPnfUXkN = accounts[0]
		const uintSjNhqL2 = BigInt("966")
		const uintol8fevY = BigInt("357")
		const uintQpt6DfK = BigInt("1251")
		const addressKOQiDr = accounts[2]
		const uint8kOXqAgp = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[5]});
		const uint256mG8kVU = await AntiBaseProtocolmaKhaTu.findBurnFee.call(uintkUmDr9e, {from: accounts[4]});
		const stringfs2Kc7 = await AntiBaseProtocolmaKhaTu.symbol.call({from: accounts[0]});
		const addressILvghNp = await AntiBaseProtocolmaKhaTu.owner.call({from: accounts[1]});
		const uint8tiGAgeF = await AntiBaseProtocolmaKhaTu.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolfTLMsRT = await AntiBaseProtocolmaKhaTu.approve.call(addressPnfUXkN, uintcXz18k, {from: accounts[4]});
		const stringeEMYcji = await AntiBaseProtocolmaKhaTu.symbol.call({from: accounts[3]});
//		const uint2561iNfzV = await AntiBaseProtocolmaKhaTu.burn.call(uintSjNhqL2, {from: accounts[3]});
//		const uint256drl4YxL = await AntiBaseProtocolmaKhaTu.findRewardFee.call(uintol8fevY, {from: accounts[5]});
//		const boolNj9Qcr = await AntiBaseProtocolmaKhaTu.transfer.call(addressKOQiDr, uintQpt6DfK, {from: accounts[4]});
//		const uint256kjU9rTx = await AntiBaseProtocolmaKhaTu.totalSupply.call({from: accounts[1]});
//		const bool9YVFU1 = await AntiBaseProtocolmaKhaTu.isOwner.call({from: accounts[2]});
//		const uint8hZncCQz = await AntiBaseProtocolmaKhaTu.decimals.call({from: accounts[4]});

		assert.equal(addressILvghNp, 0x67CCc254677fc9F2e5B71E83Bf465B8EE5Eff6ee)
		assert.equal(boolfTLMsRT, true)
		assert.equal(stringeEMYcji, "ABASE")
		assert.equal(stringfs2Kc7, "ABASE")
		assert.equal(uint256mG8kVU, BigInt("30"))
		assert.equal(uint8kOXqAgp, BigInt("18"))
		assert.equal(uint8tiGAgeF, BigInt("18"))
		await expect(AntiBaseProtocolmaKhaTu.burn.call(uintSjNhqL2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnVrhlO = await AntiBaseProtocol.new({from: accounts[2]});
		const uintr4xSevs = BigInt("650")
		const addressBAohle = "0x00000000000000000000000000000000000000-1"
		const uintfhr30go = BigInt("1391")
		const address0ITFde = accounts[3]
		const uintPIXhyQJ = BigInt("1319")
		const addresscbFWYyX = accounts[1]
		const uintjE0x7Z = BigInt("997")
//		const boolNlPKFPX = await AntiBaseProtocolnVrhlO.transfer.call(addressBAohle, uintr4xSevs, {from: accounts[0]});
//		const uint8Ps1UyOL = await AntiBaseProtocolnVrhlO.decimals.call({from: accounts[3]});
//		const uint256kcuNrGV = await AntiBaseProtocolnVrhlO.totalSupply.call({from: accounts[2]});
//		const addressB6FhEtS = await AntiBaseProtocolnVrhlO._burn.call(address0ITFde, uintfhr30go, {from: accounts[1]});
//		const booliTYoTBa = await AntiBaseProtocolnVrhlO.approve.call(addresscbFWYyX, uintPIXhyQJ, {from: accounts[1]});
//		const uint256AjjnEUB = await AntiBaseProtocolnVrhlO.findRewardFee.call(uintjE0x7Z, {from: accounts[2]});

		await expect(AntiBaseProtocolnVrhlO.transfer.call(addressBAohle, uintr4xSevs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})