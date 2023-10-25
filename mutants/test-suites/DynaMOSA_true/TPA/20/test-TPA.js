const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const stringT9VGHwH = "BxNuQYvVPLhTzxK4xgoBYW6KGdMXym"
		const stringQTMrNsz = "xGLSrl8FMJehlVinUlrXHS73BjcYKL7Sfay4ssrb1kwVZI5YXHYfqPUUGwFVeXvgjR18ZA5xJ4w1cmnjnGd6So5Z86zcV9B"
		const uintKqqP4tU = BigInt("205")
		const TPACc4r1hv = await TPA.new(stringT9VGHwH, stringQTMrNsz, uintKqqP4tU, {from: accounts[0]});
		const addressJDnOp2 = accounts[1]
		const addressh21Q0dl = accounts[1]
		const addressaLfRr1 = accounts[3]
		const uintGnFswab = BigInt("563")
		const addressqmvssID = accounts[0]
		const uintgdlK0gN = BigInt("524")
		const addressEV88TEf = accounts[5]
		const uint256hGSXZAe = await TPACc4r1hv.balanceOf.call(addressJDnOp2, {from: accounts[0]});
		const uint256v01WZm = await TPACc4r1hv.allowance.call(addressaLfRr1, addressh21Q0dl, {from: accounts[0]});
		const addressce4WWg = await TPACc4r1hv.burnFrom.call(addressqmvssID, uintGnFswab, {from: accounts[0]});
		const booltB3MQnY = await TPACc4r1hv.paused.call({from: accounts[5]});
		const booliTMcqxd = await TPACc4r1hv.transfer.call(addressEV88TEf, uintgdlK0gN, {from: accounts[2]});
	});

	it('test for TPA', async () => {
		const TPAoFCpeD1 = await TPA.new({from: accounts[0]});
		const uintZYG1kDQ = BigInt("1592")
		const addressvyP4Oey = accounts[0]
//		await TPAoFCpeD1.pause.call({from: accounts[4]});
//		const stringluHLUL7 = await TPAoFCpeD1.name.call({from: accounts[3]});
//		const boolmc8LjDm = await TPAoFCpeD1.unlock.call(addressvyP4Oey, uintZYG1kDQ, {from: accounts[3]});

		await expect(TPAoFCpeD1.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPASoSLvkO = await TPA.new({from: accounts[3]});
		const uintDGXR8kM = BigInt("1752")
		const addressAranxhL = accounts[4]
		const addressq1Kh4G = accounts[1]
		const uintjkU6lYF = BigInt("1497")
		const addressshqQYNb = accounts[3]
		const bool06YjPj = await TPASoSLvkO.approve.call(addressAranxhL, uintDGXR8kM, {from: accounts[3]});
//		const boolThmzBeh = await TPASoSLvkO.unfreezeAccount.call(addressq1Kh4G, {from: accounts[2]});
//		const boolrrnvDid = await TPASoSLvkO.increaseAllowance.call(addressshqQYNb, uintjkU6lYF, {from: accounts[3]});

		assert.equal(bool06YjPj, true)
		await expect(TPASoSLvkO.unfreezeAccount.call(addressq1Kh4G, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaTXOy7 = await TPA.new({from: accounts[4]});
		const uintSiH0SnZ = BigInt("423")
		const addresslKW4pv = accounts[2]
		const addressmLywOo = accounts[0]
//		await TPAaTXOy7.onlyAdmin.call({from: accounts[3]});
//		await TPAaTXOy7.pause.call({from: accounts[2]});
//		const boolVk1HEZX = await TPAaTXOy7.transferFrom.call(addressmLywOo, addresslKW4pv, uintSiH0SnZ, {from: accounts[5]});

		await expect(TPAaTXOy7.onlyAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaTXOy7 = await TPA.new({from: accounts[4]});
		const uintqnkUq98 = BigInt("2011")
		const addressnb4O3av = accounts[1]
		const addressXWpc6zE = accounts[3]
		const addressHc2EkdQ = accounts[2]
//		const boolRQ8sxq2 = await TPAaTXOy7.decreaseAllowance.call(addressnb4O3av, uintqnkUq98, {from: accounts[3]});
//		const addressxVWAF9v = await TPAaTXOy7.addAdmin.call(addressXWpc6zE, {from: accounts[1]});
//		await TPAaTXOy7.onlyAdmin.call({from: accounts[3]});
//		const uint256USIsTeX = await TPAaTXOy7.balanceOf.call(addressHc2EkdQ, {from: accounts[1]});
//		await TPAaTXOy7.pause.call({from: accounts[2]});

		await expect(TPAaTXOy7.decreaseAllowance.call(addressnb4O3av, uintqnkUq98, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaTXOy7 = await TPA.new({from: accounts[4]});
		const addressZrYvca = accounts[0]
		const addressvOp9y2 = accounts[4]
		const addressIFYyzIZ = accounts[4]
		const addressBr0qixw = accounts[1]
		const uint256f6hr5Q2 = await TPAaTXOy7.balanceOf.call(addressZrYvca, {from: accounts[3]});
		const boolYvocOKb = await TPAaTXOy7.isOwner.call(addressvOp9y2, {from: accounts[2]});
//		const addressxVWAF9v = await TPAaTXOy7.addAdmin.call(addressIFYyzIZ, {from: accounts[1]});
//		await TPAaTXOy7.pause.call({from: accounts[2]});
//		const addressxiar9XW = await TPAaTXOy7.transferOwnership.call(addressBr0qixw, {from: accounts[0]});

		assert.equal(boolYvocOKb, true)
		assert.equal(uint256f6hr5Q2, BigInt("0"))
		await expect(TPAaTXOy7.addAdmin.call(addressIFYyzIZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAoFCpeD1 = await TPA.new({from: accounts[0]});
		const uintIZqroXk = BigInt("1592")
		const addressLqCDkEQ = accounts[0]
		const stringluHLUL7 = await TPAoFCpeD1.name.call({from: accounts[3]});
//		const boolmc8LjDm = await TPAoFCpeD1.unlock.call(addressLqCDkEQ, uintIZqroXk, {from: accounts[3]});

		assert.equal(stringluHLUL7, "TPA")
		await expect(TPAoFCpeD1.unlock.call(addressLqCDkEQ, uintIZqroXk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPASoSLvkO = await TPA.new({from: accounts[3]});
		const uintoOEef5k = BigInt("1752")
		const addressrDFiwah = accounts[4]
		const addressZW8Dnm8 = accounts[1]
		const uintTJZWH4d = BigInt("862")
		const addressEkUuUYi = accounts[3]
		const bool06YjPj = await TPASoSLvkO.approve.call(addressrDFiwah, uintoOEef5k, {from: accounts[3]});
//		const addressdGN8bwM = await TPASoSLvkO.removeAdmin.call(addressZW8Dnm8, {from: accounts[3]});
//		const boolrrnvDid = await TPASoSLvkO.increaseAllowance.call(addressEkUuUYi, uintTJZWH4d, {from: accounts[3]});

		assert.equal(bool06YjPj, true)
		await expect(TPASoSLvkO.removeAdmin.call(addressZW8Dnm8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAhZqVhnH = await TPA.new({from: accounts[0]});
		const uintj89ydXs = BigInt("243")
		const addressgcnCdd6 = accounts[1]
		const addresskdxHTGY = accounts[5]
		const uintVLD4pz = BigInt("463")
		const addressbFMnH5 = accounts[5]
		const addressDocJN6i = accounts[5]
//		const boolBl6IWde = await TPAhZqVhnH.transfer.call(addressgcnCdd6, uintj89ydXs, {from: accounts[2]});
//		const boolIxmWEY = await TPAhZqVhnH.unfreezeAccount.call(addresskdxHTGY, {from: accounts[1]});
//		const boolZpUQcBb = await TPAhZqVhnH.approve.call(addressbFMnH5, uintVLD4pz, {from: accounts[1]});
//		const addressGoiAaef = await TPAhZqVhnH.upgradeTo.call(addressDocJN6i, {from: accounts[0]});

		await expect(TPAhZqVhnH.transfer.call(addressgcnCdd6, uintj89ydXs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaTXOy7 = await TPA.new({from: accounts[4]});
		const addressCh5ydAq = accounts[0]
		const addressFq0av6K = accounts[4]
		const uintoMkztbf = BigInt("1978")
		const addressMz6wFwc = accounts[1]
		const uintT9Oc4bm = BigInt("352")
		const uintKjRCPpv = BigInt("1414")
		const addresspcB8E1l = accounts[2]
		const addressE6VNBnV = accounts[4]
		const uintk1s6leT = BigInt("693")
		const addressgoze2Uo = accounts[0]
		const addressqijcE48 = accounts[3]
		const addressrfiL6QS = accounts[1]
		const uint256f6hr5Q2 = await TPAaTXOy7.balanceOf.call(addressCh5ydAq, {from: accounts[3]});
		const boolYvocOKb = await TPAaTXOy7.isOwner.call(addressFq0av6K, {from: accounts[2]});
//		const boolk9Zz3bQ = await TPAaTXOy7.unlock.call(addressMz6wFwc, uintoMkztbf, {from: accounts[4]});
//		const boolr10giU6 = await TPAaTXOy7.transferWithLock.call(addresspcB8E1l, uintKjRCPpv, uintT9Oc4bm, {from: accounts[1]});
//		const addressxVWAF9v = await TPAaTXOy7.addAdmin.call(addressE6VNBnV, {from: accounts[1]});
//		const boolGOsZUCq = await TPAaTXOy7.approve.call(addressgoze2Uo, uintk1s6leT, {from: accounts[0]});
//		const boolKr9crmC = await TPAaTXOy7.freezeAccount.call(addressqijcE48, {from: accounts[0]});
//		const addressxiar9XW = await TPAaTXOy7.transferOwnership.call(addressrfiL6QS, {from: accounts[0]});

		assert.equal(boolYvocOKb, true)
		assert.equal(uint256f6hr5Q2, BigInt("0"))
		await expect(TPAaTXOy7.unlock.call(addressMz6wFwc, uintoMkztbf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaTXOy7 = await TPA.new({from: accounts[4]});
		const uinti9K4T1U = BigInt("156")
		const addressL3SovlB = accounts[2]
		const boolyK2GZPB = await TPAaTXOy7.increaseAllowance.call(addressL3SovlB, uinti9K4T1U, {from: accounts[0]});
//		await TPAaTXOy7.pause.call({from: accounts[2]});

		assert.equal(boolyK2GZPB, true)
		await expect(TPAaTXOy7.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaTXOy7 = await TPA.new({from: accounts[4]});
		const uintfriQuGf = BigInt("1791")
		const addressw5RyPP = accounts[2]
		const addressIZU7gk = accounts[2]
		const addressZbjMjHL = accounts[0]
		const addressWsMRoiJ = accounts[3]
		const addressLpqY210 = accounts[4]
		const addressM3r3T1o = accounts[4]
		const addressVBKQGJN = accounts[3]
		const addresswADALU5 = accounts[1]
//		const boolF4b99fs = await TPAaTXOy7.transferFrom.call(addressIZU7gk, addressw5RyPP, uintfriQuGf, {from: accounts[3]});
//		const uint256f6hr5Q2 = await TPAaTXOy7.balanceOf.call(addressZbjMjHL, {from: accounts[3]});
//		const addresskBoopRx = await TPAaTXOy7.addAdmin.call(addressWsMRoiJ, {from: accounts[3]});
//		const boolYvocOKb = await TPAaTXOy7.isOwner.call(addressLpqY210, {from: accounts[2]});
//		const addressxVWAF9v = await TPAaTXOy7.addAdmin.call(addressM3r3T1o, {from: accounts[1]});
//		await TPAaTXOy7.pause.call({from: accounts[2]});
//		const boolKr9crmC = await TPAaTXOy7.freezeAccount.call(addressVBKQGJN, {from: accounts[0]});
//		const addressxiar9XW = await TPAaTXOy7.transferOwnership.call(addresswADALU5, {from: accounts[0]});

		await expect(TPAaTXOy7.transferFrom.call(addressIZU7gk, addressw5RyPP, uintfriQuGf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaTXOy7 = await TPA.new({from: accounts[4]});
		const addressgvK52ZP = accounts[0]
		const uintvKB42wl = BigInt("1296")
		const addressqiXnsDG = accounts[4]
		const uintACQACi = BigInt("1978")
		const addressghcAHPm = accounts[1]
		const uintjggaohd = BigInt("352")
		const uintVzkRvEr = BigInt("1414")
		const addressWVQ8qn4 = accounts[2]
		const addressBcwky9i = accounts[5]
		const addressGNQ8MrR = accounts[3]
		const uint5LlFTz = BigInt("693")
		const addressN0H7BB7 = accounts[0]
		const addressAVdTdU = accounts[3]
		const addressG3BV2hM = accounts[1]
		const uint256f6hr5Q2 = await TPAaTXOy7.balanceOf.call(addressgvK52ZP, {from: accounts[3]});
//		const uint256Mq5la1 = await TPAaTXOy7.burn.call(uintvKB42wl, {from: accounts[1]});
//		const boolYvocOKb = await TPAaTXOy7.isOwner.call(addressqiXnsDG, {from: accounts[2]});
//		const boolk9Zz3bQ = await TPAaTXOy7.unlock.call(addressghcAHPm, uintACQACi, {from: accounts[4]});
//		const boolr10giU6 = await TPAaTXOy7.transferWithLock.call(addressWVQ8qn4, uintVzkRvEr, uintjggaohd, {from: accounts[1]});
//		const addressxVWAF9v = await TPAaTXOy7.addAdmin.call(addressBcwky9i, {from: accounts[1]});
//		const booleE0E4j6 = await TPAaTXOy7.freezeAccount.call(addressGNQ8MrR, {from: accounts[4]});
//		await TPAaTXOy7.renounceAdmin.call({from: accounts[2]});
//		const boolGOsZUCq = await TPAaTXOy7.approve.call(addressN0H7BB7, uint5LlFTz, {from: accounts[0]});
//		const boolKr9crmC = await TPAaTXOy7.freezeAccount.call(addressAVdTdU, {from: accounts[0]});
//		const addressxiar9XW = await TPAaTXOy7.transferOwnership.call(addressG3BV2hM, {from: accounts[0]});

		assert.equal(uint256f6hr5Q2, BigInt("0"))
		await expect(TPAaTXOy7.burn.call(uintvKB42wl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaTXOy7 = await TPA.new({from: accounts[4]});
		const addressV6EWkEM = accounts[0]
		const addressPppHDg = accounts[4]
		const uinthZZx7Kn = BigInt("1978")
		const addressxlUdp2R = accounts[1]
		const uintpf0tBvW = BigInt("352")
		const uintY4YtwH2 = BigInt("1414")
		const addresscMwwyUD = accounts[2]
		const addressoXggdCY = accounts[4]
		const uintyTP5zLF = BigInt("693")
		const addressxCibx59 = accounts[0]
		const addressqnM91BQ = accounts[3]
		const addressFm1mQY = accounts[3]
		const addressPf6MO5a = accounts[1]
		const uint256f6hr5Q2 = await TPAaTXOy7.balanceOf.call(addressV6EWkEM, {from: accounts[3]});
		const boolYvocOKb = await TPAaTXOy7.isOwner.call(addressPppHDg, {from: accounts[2]});
		const stringWFfeIyu = await TPAaTXOy7.symbol.call({from: accounts[1]});
//		const boolk9Zz3bQ = await TPAaTXOy7.unlock.call(addressxlUdp2R, uinthZZx7Kn, {from: accounts[4]});
//		const boolr10giU6 = await TPAaTXOy7.transferWithLock.call(addresscMwwyUD, uintY4YtwH2, uintpf0tBvW, {from: accounts[1]});
//		const addressxVWAF9v = await TPAaTXOy7.addAdmin.call(addressoXggdCY, {from: accounts[1]});
//		const boolGOsZUCq = await TPAaTXOy7.approve.call(addressxCibx59, uintyTP5zLF, {from: accounts[0]});
//		await TPAaTXOy7.unpause.call({from: accounts[1]});
//		const boolyTn0fkc = await TPAaTXOy7.isOwner.call(addressqnM91BQ, {from: accounts[0]});
//		const boolKr9crmC = await TPAaTXOy7.freezeAccount.call(addressFm1mQY, {from: accounts[0]});
//		const addressxiar9XW = await TPAaTXOy7.transferOwnership.call(addressPf6MO5a, {from: accounts[0]});

		assert.equal(boolYvocOKb, true)
		assert.equal(stringWFfeIyu, "TPA")
		assert.equal(uint256f6hr5Q2, BigInt("0"))
		await expect(TPAaTXOy7.unlock.call(addressxlUdp2R, uinthZZx7Kn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaTXOy7 = await TPA.new({from: accounts[4]});
		const addressyvFZwMv = accounts[1]
		const addressyONDcSW = accounts[4]
		const addressj9LzL8o = accounts[5]
		const uintZF6RCNF = BigInt("1345")
		const addressGenP9D2 = accounts[5]
		const addressXdEoXnz = accounts[1]
		const uint256f6hr5Q2 = await TPAaTXOy7.balanceOf.call(addressyvFZwMv, {from: accounts[3]});
		const boolYvocOKb = await TPAaTXOy7.isOwner.call(addressyONDcSW, {from: accounts[2]});
		const uint256Kv2OL67 = await TPAaTXOy7.totalSupply.call({from: accounts[4]});
//		const addressxVWAF9v = await TPAaTXOy7.addAdmin.call(addressj9LzL8o, {from: accounts[1]});
//		const boolt23hkL = await TPAaTXOy7.transferFrom.call(addressXdEoXnz, addressGenP9D2, uintZF6RCNF, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256KE7WCMT = await TPAaTXOy7.totalSupply.call({from: accounts[2]});
//		await TPAaTXOy7.pause.call({from: accounts[2]});

		assert.equal(boolYvocOKb, true)
		assert.equal(uint256Kv2OL67, BigInt("10000000000000000000000000000"))
		assert.equal(uint256f6hr5Q2, BigInt("0"))
		await expect(TPAaTXOy7.addAdmin.call(addressj9LzL8o, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPASoSLvkO = await TPA.new({from: accounts[3]});
		const uintEOs9Xe8 = BigInt("1752")
		const addresskCsU1q = accounts[4]
		const addressUyiIBF2 = accounts[3]
		const uintd8pL1b9 = BigInt("862")
		const addressFWX5Ukk = accounts[3]
		const uintNM4QSwd = BigInt("527")
		const bool06YjPj = await TPASoSLvkO.approve.call(addresskCsU1q, uintEOs9Xe8, {from: accounts[3]});
		const addressdGN8bwM = await TPASoSLvkO.removeAdmin.call(addressUyiIBF2, {from: accounts[3]});
		const boolEairLyd = await TPASoSLvkO.paused.call({from: accounts[3]});
		const boolrrnvDid = await TPASoSLvkO.increaseAllowance.call(addressFWX5Ukk, uintd8pL1b9, {from: accounts[3]});
//		const uint256eK1uNsP = await TPASoSLvkO.burn.call(uintNM4QSwd, {from: "0x0000000000000000000000000000000000000001"});
//		await TPASoSLvkO.whenPaused.call({from: accounts[1]});

		assert.equal(bool06YjPj, true)
		assert.equal(boolEairLyd, false)
		assert.equal(boolrrnvDid, true)
		await expect(TPASoSLvkO.burn.call(uintNM4QSwd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAEOiErvo = await TPA.new({from: accounts[0]});
		const uintNmuihij = BigInt("2040")
		const addressekPSMPi = accounts[4]
		const addressHssJFeF = accounts[3]
		const addressUyRsIS = accounts[3]
		const uintM9HE2P4 = BigInt("1874")
		const addressWlVFS9 = accounts[4]
		const boolA4Qxqx2 = await TPAEOiErvo.approve.call(addressekPSMPi, uintNmuihij, {from: accounts[1]});
		const uint256bXWdDib = await TPAEOiErvo.allowance.call(addressUyRsIS, addressHssJFeF, {from: accounts[3]});
		const stringsw1m6qM = await TPAEOiErvo.name.call({from: accounts[2]});
		const boolKy20Bs = await TPAEOiErvo.approve.call(addressWlVFS9, uintM9HE2P4, {from: accounts[3]});
//		await TPAEOiErvo.onlyOwner.call({from: accounts[1]});

		assert.equal(boolA4Qxqx2, true)
		assert.equal(boolKy20Bs, true)
		assert.equal(stringsw1m6qM, "TPA")
		assert.equal(uint256bXWdDib, BigInt("0"))
		await expect(TPAEOiErvo.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaTXOy7 = await TPA.new({from: accounts[4]});
		const addressmzN9fJV = accounts[5]
		const uintHNczE79 = BigInt("164")
		const addressSOe8oSg = accounts[0]
		const addressN9dnRYI = accounts[1]
		const uintC26R8i = BigInt("1534")
		const uintD7Ii9oE = BigInt("957")
		const addresszWRKpQV = accounts[0]
		const uintxsQQh1q = BigInt("93")
		const uintxLn9sc7 = BigInt("239")
		const addressqY6pCgT = accounts[5]
		const uintHKMozF0 = BigInt("146")
		const addressrlJ20qt = accounts[0]
//		await TPAaTXOy7.renounceAdmin.call({from: accounts[4]});
//		const uint256xTxREgS = await TPAaTXOy7.balanceOf.call(addressmzN9fJV, {from: accounts[3]});
//		const boolIeGWBgF = await TPAaTXOy7.transferFrom.call(addressN9dnRYI, addressSOe8oSg, uintHNczE79, {from: accounts[3]});
//		const boolVAMlEGA = await TPAaTXOy7.lock.call(addresszWRKpQV, uintD7Ii9oE, uintC26R8i, {from: accounts[2]});
//		await TPAaTXOy7.pause.call({from: accounts[2]});
//		const boolgmus4BN = await TPAaTXOy7.lock.call(addressqY6pCgT, uintxLn9sc7, uintxsQQh1q, {from: accounts[4]});
//		await TPAaTXOy7.whenPaused.call({from: accounts[2]});
//		const boolDQcTBS = await TPAaTXOy7.decreaseAllowance.call(addressrlJ20qt, uintHKMozF0, {from: accounts[0]});

		await expect(TPAaTXOy7.renounceAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAdnvBOer = await TPA.new({from: accounts[1]});
		const uintqijH5g = BigInt("420")
		const addressi7qXY1 = accounts[3]
		const addressbHlzVLT = accounts[2]
		const uintr2NifkY = BigInt("1255")
		const addressowzkJlt = accounts[2]
		const uint8GCL6K6V = await TPAdnvBOer.decimals.call({from: accounts[4]});
//		await TPAdnvBOer.onlyAdmin.call({from: accounts[4]});
//		const stringlnwCFBY = await TPAdnvBOer.symbol.call({from: accounts[4]});
//		const boolEVAGlTq = await TPAdnvBOer.transfer.call(addressi7qXY1, uintqijH5g, {from: accounts[0]});
//		const boolmzAVHgE = await TPAdnvBOer.freezeAccount.call(addressbHlzVLT, {from: accounts[4]});
//		const boolSKiRNWH = await TPAdnvBOer.increaseAllowance.call(addressowzkJlt, uintr2NifkY, {from: accounts[4]});

		assert.equal(uint8GCL6K6V, BigInt("18"))
		await expect(TPAdnvBOer.onlyAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaTXOy7 = await TPA.new({from: accounts[4]});
		const addressjY9z1dp = accounts[4]
		const addressQtAGgTk = accounts[5]
		const addressF8VZNRo = await TPAaTXOy7.transferOwnership.call(addressjY9z1dp, {from: accounts[4]});
		const uint256xTxREgS = await TPAaTXOy7.balanceOf.call(addressQtAGgTk, {from: accounts[3]});
		const boolpH7phUB = await TPAaTXOy7.paused.call({from: accounts[3]});

		assert.equal(boolpH7phUB, false)
		assert.equal(uint256xTxREgS, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAaTXOy7 = await TPA.new({from: accounts[4]});
		const uintfWokNAi = BigInt("1917")
		const addresswazqB1S = "0x0000000000000000000000000000000000000001"
		const uintHQm8Cx = BigInt("698")
		const addressVjTD5oN = accounts[5]
//		const addressFURUJ81 = await TPAaTXOy7.burnFrom.call(addresswazqB1S, uintfWokNAi, {from: accounts[5]});
//		const bool36LDsO = await TPAaTXOy7.unlock.call(addressVjTD5oN, uintHQm8Cx, {from: accounts[4]});

		await expect(TPAaTXOy7.burnFrom.call(addresswazqB1S, uintfWokNAi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaTXOy7 = await TPA.new({from: accounts[4]});
		const address97InaD = accounts[5]
		const addresskQK4wiy = accounts[5]
		const uint256xTxREgS = await TPAaTXOy7.balanceOf.call(address97InaD, {from: accounts[3]});
		const addressvF4quH = await TPAaTXOy7.addAdmin.call(addresskQK4wiy, {from: accounts[4]});
		const uint8rDBoQqN = await TPAaTXOy7.decimals.call({from: accounts[1]});

		assert.equal(uint256xTxREgS, BigInt("0"))
		assert.equal(uint8rDBoQqN, BigInt("18"))
	});

	it('test for TPA', async () => {
		const TPAVGZqkuk = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const uintTFvoZ9j = BigInt("1205")
		const addressVC7FntC = accounts[1]
		const boolKzLuQz = await TPAVGZqkuk.transfer.call(addressVC7FntC, uintTFvoZ9j, {from: accounts[4]});
		const boolRbtdyJO = await TPAVGZqkuk.paused.call({from: accounts[2]});
		await TPAVGZqkuk.onlyAdmin.call({from: accounts[2]});
	});

	it('test for TPA', async () => {
		const TPAaTXOy7 = await TPA.new({from: accounts[4]});
		const addressi6YdD2N = accounts[3]
		const uinttmv6h9 = BigInt("853")
		const addressF7sac7h = accounts[4]
		const addresslob5zVh = accounts[2]
		const addressoKeG0z2 = accounts[0]
		const boolYwtKW0I = await TPAaTXOy7.freezeAccount.call(addressi6YdD2N, {from: accounts[4]});
//		const boolZkKni8N = await TPAaTXOy7.transferFrom.call(addresslob5zVh, addressF7sac7h, uinttmv6h9, {from: accounts[5]});
//		const addressg7N6PDR = await TPAaTXOy7.upgradeTo.call(addressoKeG0z2, {from: accounts[1]});

		assert.equal(boolYwtKW0I, true)
		await expect(TPAaTXOy7.transferFrom.call(addresslob5zVh, addressF7sac7h, uinttmv6h9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaTXOy7 = await TPA.new({from: accounts[4]});
		const uintOtQ9G8 = BigInt("1001")
		const uintGV627Cy = BigInt("663")
		const addressEddIrt = accounts[4]
		const uintVIQ4J5 = BigInt("698")
		const addresswaUHYxh = accounts[4]
		const boolW75XXOB = await TPAaTXOy7.transferWithLock.call(addressEddIrt, uintGV627Cy, uintOtQ9G8, {from: accounts[4]});
//		const bool36LDsO = await TPAaTXOy7.unlock.call(addresswaUHYxh, uintVIQ4J5, {from: accounts[4]});

		assert.equal(boolW75XXOB, true)
		await expect(TPAaTXOy7.unlock.call(addresswaUHYxh, uintVIQ4J5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})