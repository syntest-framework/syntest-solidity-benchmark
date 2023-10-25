const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveLJj3Pl = await Revive.new({from: accounts[3]});
		const addressmKUSaB3 = accounts[5]
		const addressoDVp6PH = accounts[3]
		const addresskoPogip = accounts[4]
		const uintA8yzGvf = BigInt("1271")
		const addressa1IEGHq = accounts[4]
		const uintXt2Cjpu = BigInt("1292")
		const addressQtfP2CJ = accounts[1]
		const byteHIbnPwZ = "0x0d0a05031620051a1719040a0b0b01200208140f16131f0c0f1102170f081b1c"
		const addressTXCWcGS = accounts[2]
		const uint256tQmQRi0 = await ReviveLJj3Pl.allowance.call(addressoDVp6PH, addressmKUSaB3, {from: accounts[3]});
//		await ReviveLJj3Pl.onlyOwner.call({from: accounts[2]});
//		const uint256xw7JqoP = await ReviveLJj3Pl.unlock.call(addresskoPogip, {from: "0x0000000000000000000000000000000000000001"});
//		const boolh0eamDF = await ReviveLJj3Pl.increaseAllowance.call(addressa1IEGHq, uintA8yzGvf, {from: accounts[5]});
//		const boolSOPqJVV = await ReviveLJj3Pl.decreaseAllowance.call(addressQtfP2CJ, uintXt2Cjpu, {from: accounts[2]});
//		const uint256VesCVoh = await ReviveLJj3Pl.tokensUnlockable.call(addressTXCWcGS, byteHIbnPwZ, {from: accounts[2]});

		assert.equal(uint256tQmQRi0, BigInt("0"))
		await expect(ReviveLJj3Pl.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveMZGVO1z = await Revive.new({from: accounts[2]});
		const uintLcYzWv4 = BigInt("174")
		const addressCSkrAlK = accounts[2]
		const uintss2806O = BigInt("1978")
		const addresstPiyQP = accounts[4]
		const uintxerVTR = BigInt("1564")
		const addressXDDK5gf = accounts[5]
//		const boolapad0eq = await ReviveMZGVO1z.transfer.call(addressCSkrAlK, uintLcYzWv4, {from: "0x0000000000000000000000000000000000000001"});
//		const addressTwPBYT = await ReviveMZGVO1z.owner.call({from: accounts[2]});
//		const boollOPSnjP = await ReviveMZGVO1z.transfer.call(addresstPiyQP, uintss2806O, {from: accounts[1]});
//		const boolukK9T8A = await ReviveMZGVO1z.decreaseAllowance.call(addressXDDK5gf, uintxerVTR, {from: accounts[2]});

		await expect(ReviveMZGVO1z.transfer.call(addressCSkrAlK, uintLcYzWv4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const uintV5AX9dT = BigInt("238")
		const byteQk1OjX3 = "0x040e161e120500190b1a17010a060c0a0d161f04191e12120e1714110c020d1a"
		const uintlhJjf0k = BigInt("685")
		const addressc8onLQP = accounts[3]
//		const boolXPiInpU = await ReviveFndJiMj.increaseLockAmount.call(byteQk1OjX3, uintV5AX9dT, {from: accounts[0]});
//		const boolPNI6Q5c = await ReviveFndJiMj.transfer.call(addressc8onLQP, uintlhJjf0k, {from: accounts[2]});

		await expect(ReviveFndJiMj.increaseLockAmount.call(byteQk1OjX3, uintV5AX9dT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive12M8nu = await Revive.new({from: accounts[1]});
		const addressFqS92xx = accounts[4]
		const uintWoNwbaE = BigInt("1688")
		const address5nEYhS = accounts[2]
		const addressQaRbMZW = accounts[0]
		const uintQjrvLF = BigInt("159")
		const byteDgPCfzb = "0x051b0a01171811061111060b0e16060b02121b1a1b18061a17060a030910061b"
		const uint256HBSxtbt = await Revive12M8nu.getUnlockableTokens.call(addressFqS92xx, {from: accounts[0]});
		const boolykxSsE = await Revive12M8nu.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolzvucvRG = await Revive12M8nu.decreaseAllowance.call(address5nEYhS, uintWoNwbaE, {from: accounts[1]});
//		const uint256yF5iURR = await Revive12M8nu.balanceOf.call(addressQaRbMZW, {from: accounts[0]});
//		const boolhKSASyk = await Revive12M8nu.increaseLockAmount.call(byteDgPCfzb, uintQjrvLF, {from: accounts[2]});

		assert.equal(boolykxSsE, false)
		assert.equal(uint256HBSxtbt, BigInt("0"))
		await expect(Revive12M8nu.decreaseAllowance.call(address5nEYhS, uintWoNwbaE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivekVZNyi = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintXHJyyCA = BigInt("845")
		const addressczQWkLM = accounts[5]
		const addressJ6xYLm = accounts[4]
		const addressOuZJqMz = await RevivekVZNyi.recoverERC20.call(addressczQWkLM, uintXHJyyCA, {from: accounts[0]});
		const uint256mshaSzq = await RevivekVZNyi.getUnlockableTokens.call(addressJ6xYLm, {from: "0x0000000000000000000000000000000000000001"});
		const addressQIGJdG6 = await RevivekVZNyi.owner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Revive', async () => {
		const RevivewZWoJYO = await Revive.new({from: accounts[1]});
		const uintoOlvmhK = BigInt("1737")
		const addressysvWvtB = "0x0000000000000000000000000000000000000001"
		const uintuFw0RzF = BigInt("1551")
		const addressiVPghyi = accounts[0]
//		const uint256tyNvqdM = await RevivewZWoJYO.recoverERC20.call(uintoOlvmhK, {from: accounts[2]});
//		const boolc10cJL = await RevivewZWoJYO.isOwner.call({from: accounts[1]});
//		const uint256ejiY6X = await RevivewZWoJYO.totalBalanceOf.call(addressysvWvtB, {from: accounts[1]});
//		const boolglpqojc = await RevivewZWoJYO.approve.call(addressiVPghyi, uintuFw0RzF, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RevivewZWoJYO.recoverERC20.call(uintoOlvmhK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const uintGj8dUdL = BigInt("318")
		const bytekWYoYOy = "0x02201412071d0a171e16061f1d051b0a0f150412180f0f1d1c1c040b11080a15"
		const uintySQtvqT = BigInt("1420")
		const addressAQzu1ci = accounts[4]
		const uintY4oCbrk = BigInt("673")
		const addressWH5ojq6 = accounts[3]
//		const boolBXMSqMi = await ReviveFndJiMj.extendLock.call(bytekWYoYOy, uintGj8dUdL, {from: accounts[3]});
//		const boolSfILRxL = await ReviveFndJiMj.transfer.call(addressAQzu1ci, uintySQtvqT, {from: accounts[4]});
//		const boolPNI6Q5c = await ReviveFndJiMj.transfer.call(addressWH5ojq6, uintY4oCbrk, {from: accounts[2]});

		await expect(ReviveFndJiMj.extendLock.call(bytekWYoYOy, uintGj8dUdL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveMZGVO1z = await Revive.new({from: accounts[2]});
		const byteaaNKMPC = "0x130901061e0e12170607071d010c0f081c091e0f12150a020d091b040319021e"
		const addressJMkExN7 = accounts[0]
		const uintDg0hXVd = BigInt("56")
		const addressxZhlWw4 = accounts[0]
		const uintXwaaIEb = BigInt("1978")
		const addressfkWEpRV = accounts[4]
		const uintgD7NgZy = BigInt("1886")
		const addressWnGAiQJ = accounts[1]
		const addressOhkBMm6 = accounts[1]
		const uintLReJkp = BigInt("1564")
		const addressYh2cWr0 = accounts[5]
		const addressTwPBYT = await ReviveMZGVO1z.owner.call({from: accounts[2]});
		const uint256ok3vEe = await ReviveMZGVO1z.tokensUnlockable.call(addressJMkExN7, byteaaNKMPC, {from: accounts[1]});
		const boolPSvCe2v = await ReviveMZGVO1z.increaseAllowance.call(addressxZhlWw4, uintDg0hXVd, {from: accounts[2]});
//		const boollOPSnjP = await ReviveMZGVO1z.transfer.call(addressfkWEpRV, uintXwaaIEb, {from: accounts[1]});
//		const bool9zK3Hn = await ReviveMZGVO1z.transferFrom.call(addressOhkBMm6, addressWnGAiQJ, uintgD7NgZy, {from: accounts[4]});
//		const boolukK9T8A = await ReviveMZGVO1z.decreaseAllowance.call(addressYh2cWr0, uintLReJkp, {from: accounts[2]});

		assert.equal(addressTwPBYT, 0x1441753eb81f8102aD5Ae6E2988e1F597A6E37d4)
		assert.equal(boolPSvCe2v, true)
		assert.equal(uint256ok3vEe, BigInt("0"))
		await expect(ReviveMZGVO1z.transfer.call(addressfkWEpRV, uintXwaaIEb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive12M8nu = await Revive.new({from: accounts[1]});
		const addressDSSDfgD = accounts[5]
		const uintvKj3h2 = BigInt("512")
		const uintQec0yME = BigInt("818")
		const byteZhcFzJK = "0x070b17180403170d0906141518081b1619051414150706130e1e0e17130b1715"
		const uintsZhcaV3 = BigInt("1688")
		const addressZGrlGcE = accounts[2]
		const addressIvMv5b = accounts[0]
		const uintYmONbJ5 = BigInt("159")
		const byteAKZUCE = "0x051b0a01171811061111060b0e16060b02121b1a1b18061a17060a030910061b"
		const uint256HBSxtbt = await Revive12M8nu.getUnlockableTokens.call(addressDSSDfgD, {from: accounts[0]});
		const boolZNoHuna = await Revive12M8nu.lock.call(byteZhcFzJK, uintQec0yME, uintvKj3h2, {from: accounts[1]});
		const boolykxSsE = await Revive12M8nu.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolzvucvRG = await Revive12M8nu.decreaseAllowance.call(addressZGrlGcE, uintsZhcaV3, {from: accounts[1]});
//		const uint256yF5iURR = await Revive12M8nu.balanceOf.call(addressIvMv5b, {from: accounts[0]});
//		const boolhKSASyk = await Revive12M8nu.increaseLockAmount.call(byteAKZUCE, uintYmONbJ5, {from: accounts[2]});
//		await Revive12M8nu.renounceOwnership.call({from: accounts[2]});

		assert.equal(boolZNoHuna, true)
		assert.equal(boolykxSsE, false)
		assert.equal(uint256HBSxtbt, BigInt("0"))
		await expect(Revive12M8nu.decreaseAllowance.call(addressZGrlGcE, uintsZhcaV3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive12M8nu = await Revive.new({from: accounts[1]});
		const addressiDUAHib = accounts[4]
		const uintmy0kWV0 = BigInt("1146")
		const addressu3NNNJP = accounts[0]
		const addressLfHBtzP = accounts[3]
		const uintK5J0Qp5 = BigInt("1688")
		const addressIA0GMIH = accounts[2]
		const addressBoCdQrw = accounts[2]
		const uintMRZUMfx = BigInt("136")
		const addressImEGIEG = accounts[3]
		const uintoXlywzZ = BigInt("159")
		const byteWxLoV6S = "0x051b0a01171811061111060b0e16060b02121b1a1b18061a17060a030910061b"
		const uint256HBSxtbt = await Revive12M8nu.getUnlockableTokens.call(addressiDUAHib, {from: accounts[0]});
//		const boolSGnKXHm = await Revive12M8nu.transferFrom.call(addressLfHBtzP, addressu3NNNJP, uintmy0kWV0, {from: accounts[1]});
//		const boolykxSsE = await Revive12M8nu.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolzvucvRG = await Revive12M8nu.decreaseAllowance.call(addressIA0GMIH, uintK5J0Qp5, {from: accounts[1]});
//		const uint256yF5iURR = await Revive12M8nu.balanceOf.call(addressBoCdQrw, {from: accounts[0]});
//		const boolEhuGh3P = await Revive12M8nu.transfer.call(addressImEGIEG, uintMRZUMfx, {from: "0x0000000000000000000000000000000000000001"});
//		const addressFf4Lzcq = await Revive12M8nu.owner.call({from: accounts[1]});
//		const boolhKSASyk = await Revive12M8nu.increaseLockAmount.call(byteWxLoV6S, uintoXlywzZ, {from: accounts[2]});

		assert.equal(uint256HBSxtbt, BigInt("0"))
		await expect(Revive12M8nu.transferFrom.call(addressLfHBtzP, addressu3NNNJP, uintmy0kWV0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const uintfoYW5k = BigInt("1881")
		const byteMCwAg0r = "0x08141b0b1b0b1e181f010b11161d1c1c0a20101f1704071c190a0f1a19191017"
		const addressHDZnAh0 = accounts[4]
		const uintmWl6tvy = BigInt("1640")
		const addressTyEOWF3 = accounts[1]
		const addressAkfhU1e = accounts[4]
		const uintq3VCNdO = BigInt("198")
		const byteH6DoSc2 = "0x040e161e120500190b1a17010a060c0a0d161f04191e12120c1714110c020d1a"
		const uint256pAS2ly6 = await ReviveFndJiMj.tokensLockedAtTime.call(addressHDZnAh0, byteMCwAg0r, uintfoYW5k, {from: accounts[4]});
//		const boolCzvjQNW = await ReviveFndJiMj.transferFrom.call(addressAkfhU1e, addressTyEOWF3, uintmWl6tvy, {from: accounts[0]});
//		const boolXPiInpU = await ReviveFndJiMj.increaseLockAmount.call(byteH6DoSc2, uintq3VCNdO, {from: accounts[0]});

		assert.equal(uint256pAS2ly6, BigInt("0"))
		await expect(ReviveFndJiMj.transferFrom.call(addressAkfhU1e, addressTyEOWF3, uintmWl6tvy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive12M8nu = await Revive.new({from: accounts[1]});
		const addressPgTsjzo = accounts[5]
		const uintFp2yts2 = BigInt("512")
		const uintNDOJtzs = BigInt("818")
		const byteFbbvi9Y = "0x070b17180403170d0906141518081b1619051414150706130e1e0e17130b1715"
		const addressQpsVDpV = accounts[0]
		const uintgS19zKM = BigInt("159")
		const byteW2n6hzn = "0x051b0a01171811061111060b0e16060b02121b1a1b18061a17060a030910061b"
		const uint256HBSxtbt = await Revive12M8nu.getUnlockableTokens.call(addressPgTsjzo, {from: accounts[0]});
		const boolZNoHuna = await Revive12M8nu.lock.call(byteFbbvi9Y, uintNDOJtzs, uintFp2yts2, {from: accounts[1]});
		const boolykxSsE = await Revive12M8nu.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256yF5iURR = await Revive12M8nu.balanceOf.call(addressQpsVDpV, {from: accounts[0]});
//		const boolhKSASyk = await Revive12M8nu.increaseLockAmount.call(byteW2n6hzn, uintgS19zKM, {from: accounts[2]});
//		await Revive12M8nu.renounceOwnership.call({from: accounts[2]});

		assert.equal(boolZNoHuna, true)
		assert.equal(boolykxSsE, false)
		assert.equal(uint256HBSxtbt, BigInt("0"))
		assert.equal(uint256yF5iURR, BigInt("0"))
		await expect(Revive12M8nu.increaseLockAmount.call(byteW2n6hzn, uintgS19zKM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const addressZvgEm05 = accounts[4]
		const uintU2w2LUZ = BigInt("198")
		const bytew3dyRo = "0x040e161e120500190b1a17010a080c0a0d161f04191e12120e1714110c020d1a"
		const addressRUGwMEI = accounts[0]
		const uint256DA0w6M = await ReviveFndJiMj.totalBalanceOf.call(addressZvgEm05, {from: accounts[1]});
//		const boolXPiInpU = await ReviveFndJiMj.increaseLockAmount.call(bytew3dyRo, uintU2w2LUZ, {from: accounts[0]});
//		const uint256YQrYgm2 = await ReviveFndJiMj.unlock.call(addressRUGwMEI, {from: accounts[5]});

		assert.equal(uint256DA0w6M, BigInt("0"))
		await expect(ReviveFndJiMj.increaseLockAmount.call(bytew3dyRo, uintU2w2LUZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive12M8nu = await Revive.new({from: accounts[1]});
		const addressrgZjvUQ = accounts[5]
		const uintnbESB8y = BigInt("512")
		const uintQ5gEFuI = BigInt("818")
		const byteGYJj0Z7 = "0x070b17180403170d0906141518081b1619051414150706130e1e0e17130b1715"
		const addressVOINTD5 = accounts[0]
		const uintXJlSbh8 = BigInt("159")
		const bytexld2S6s = "0x051b0a01171811061111060b0e16060b02121b1a1b18061a17060a030910061b"
		const uint256HBSxtbt = await Revive12M8nu.getUnlockableTokens.call(addressrgZjvUQ, {from: accounts[0]});
		const uint256SsqwNcR = await Revive12M8nu.totalSupply.call({from: accounts[2]});
		const boolZNoHuna = await Revive12M8nu.lock.call(byteGYJj0Z7, uintQ5gEFuI, uintnbESB8y, {from: accounts[1]});
		const uint256yF5iURR = await Revive12M8nu.balanceOf.call(addressVOINTD5, {from: accounts[0]});
//		const boolhKSASyk = await Revive12M8nu.increaseLockAmount.call(bytexld2S6s, uintXJlSbh8, {from: accounts[2]});
//		await Revive12M8nu.renounceOwnership.call({from: accounts[2]});

		assert.equal(boolZNoHuna, true)
		assert.equal(uint256HBSxtbt, BigInt("0"))
		assert.equal(uint256SsqwNcR, BigInt("3000000000000000000000000000"))
		assert.equal(uint256yF5iURR, BigInt("0"))
		await expect(Revive12M8nu.increaseLockAmount.call(bytexld2S6s, uintXJlSbh8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const addresstYk1wy = accounts[1]
		const uintzubqwqq = BigInt("1881")
		const byted4O9icP = "0x08141b0b1b0b1e181f010b11161d1c1c0a20101f1704071c190a0f1a19191017"
		const addressuuwJS55 = accounts[4]
		const uintTMyQ0l = BigInt("1640")
		const addressDO5IK0l = accounts[1]
		const address83b2tn = accounts[5]
		const uintU7OZiNe = BigInt("198")
		const bytebe4yY56 = "0x040e161e120500190b1a17010a060c0a0d161f04191e12120c1714110c020d1a"
		const addressziZPpY = await ReviveFndJiMj.transferOwnership.call(addresstYk1wy, {from: accounts[0]});
		const uint256pAS2ly6 = await ReviveFndJiMj.tokensLockedAtTime.call(addressuuwJS55, byted4O9icP, uintzubqwqq, {from: accounts[4]});
//		const boolCzvjQNW = await ReviveFndJiMj.transferFrom.call(address83b2tn, addressDO5IK0l, uintTMyQ0l, {from: accounts[0]});
//		const boolXPiInpU = await ReviveFndJiMj.increaseLockAmount.call(bytebe4yY56, uintU7OZiNe, {from: accounts[0]});

		assert.equal(uint256pAS2ly6, BigInt("0"))
		await expect(ReviveFndJiMj.transferFrom.call(address83b2tn, addressDO5IK0l, uintTMyQ0l, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive12M8nu = await Revive.new({from: accounts[1]});
		const addressHEEVhg6 = accounts[4]
		const addressW6UF4vc = accounts[3]
		const uintxcJ5Tw = BigInt("1019")
		const addressXE2K5mQ = accounts[0]
		const addressoP3vvIQ = accounts[5]
		const uintAjMwVpS = BigInt("1688")
		const addressjoCP6uv = accounts[3]
		const addressi8Y4Sr4 = accounts[0]
		const uintBGQSaA9 = BigInt("159")
		const bytexCBCc5s = "0x051b0a01171811061111060b0e16060b02121b1a1b18061a17060a030910061b"
		const uint256HBSxtbt = await Revive12M8nu.getUnlockableTokens.call(addressHEEVhg6, {from: accounts[0]});
		const boolgdli6Mx = await Revive12M8nu.isOwner.call({from: accounts[4]});
		const uint256FXeGr5l = await Revive12M8nu.unlock.call(addressW6UF4vc, {from: accounts[1]});
//		const boolsoOB1wI = await Revive12M8nu.transferFrom.call(addressoP3vvIQ, addressXE2K5mQ, uintxcJ5Tw, {from: accounts[5]});
//		const boolykxSsE = await Revive12M8nu.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolzvucvRG = await Revive12M8nu.decreaseAllowance.call(addressjoCP6uv, uintAjMwVpS, {from: accounts[1]});
//		const uint256yF5iURR = await Revive12M8nu.balanceOf.call(addressi8Y4Sr4, {from: accounts[0]});
//		const boolhKSASyk = await Revive12M8nu.increaseLockAmount.call(bytexCBCc5s, uintBGQSaA9, {from: accounts[2]});

		assert.equal(boolgdli6Mx, false)
		assert.equal(uint256FXeGr5l, BigInt("0"))
		assert.equal(uint256HBSxtbt, BigInt("0"))
		await expect(Revive12M8nu.transferFrom.call(addressoP3vvIQ, addressXE2K5mQ, uintxcJ5Tw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const uintIN68Eg4 = BigInt("1253")
		const addresscVYwjwg = "0x0000000000000000000000000000000000000001"
		const uinthzLYffa = BigInt("1881")
		const byteEAqcw1 = "0x08141b0b1b0b1e181f010b11161d1c1c0a20101f1704071c190a0f1a19191017"
		const addressqRsYJsw = accounts[5]
		const addressIRXPsUF = accounts[5]
		const addressep2ScDa = accounts[3]
		const uintwVKaJp = BigInt("1605")
		const addressa5f0jGv = accounts[1]
		const addresssjCXLW7 = accounts[4]
		const addressDnd7xu = accounts[0]
		const uintzv4eeJj = BigInt("1712")
		const addressTksNcH = accounts[3]
		const uintQMQkQrv = BigInt("198")
		const bytesX8BU57 = "0x040e161e120500190b1a17010a060c0a0d161f04191e12120c1714110c020d1a"
		const uintY2Y1fqj = BigInt("1746")
		const uintkdMPHbK = BigInt("861")
		const byteQIwUwBx = "0x1f1c030c0c0b0617021f1d151b0a0417071f16180b17020a0914160a1b1a0602"
		const addressC3doqMZ = "0x0000000000000000000000000000000000000001"
		const uintpEI2mR7 = BigInt("722")
		const addressgEQ6n3 = accounts[2]
		const boolat1ySPP = await ReviveFndJiMj.approve.call(addresscVYwjwg, uintIN68Eg4, {from: accounts[1]});
		const uint256pAS2ly6 = await ReviveFndJiMj.tokensLockedAtTime.call(addressqRsYJsw, byteEAqcw1, uinthzLYffa, {from: accounts[4]});
		const uint256BbWfbLy = await ReviveFndJiMj.getUnlockableTokens.call(addressIRXPsUF, {from: accounts[1]});
		const uint256eLBV076 = await ReviveFndJiMj.getUnlockableTokens.call(addressep2ScDa, {from: accounts[0]});
//		const boolCzvjQNW = await ReviveFndJiMj.transferFrom.call(addresssjCXLW7, addressa5f0jGv, uintwVKaJp, {from: accounts[0]});
//		const uint256xwWSyAX = await ReviveFndJiMj.unlock.call(addressDnd7xu, {from: accounts[1]});
//		const boolIqJVqEZ = await ReviveFndJiMj.decreaseAllowance.call(addressTksNcH, uintzv4eeJj, {from: accounts[2]});
//		const boolXPiInpU = await ReviveFndJiMj.increaseLockAmount.call(bytesX8BU57, uintQMQkQrv, {from: accounts[0]});
//		const boolTt9CjJT = await ReviveFndJiMj.transferWithLock.call(addressC3doqMZ, byteQIwUwBx, uintkdMPHbK, uintY2Y1fqj, {from: accounts[5]});
//		const addressnDOsaK0 = await ReviveFndJiMj.recoverERC20.call(addressgEQ6n3, uintpEI2mR7, {from: accounts[3]});

		assert.equal(boolat1ySPP, true)
		assert.equal(uint256BbWfbLy, BigInt("0"))
		assert.equal(uint256eLBV076, BigInt("0"))
		assert.equal(uint256pAS2ly6, BigInt("0"))
		await expect(ReviveFndJiMj.transferFrom.call(addresssjCXLW7, addressa5f0jGv, uintwVKaJp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const addressj8bkgiY = accounts[5]
		const uintPBC77zP = BigInt("1370")
		const addressRvAf9T = accounts[0]
		const uinthZK970 = BigInt("1814")
		const uintoKpQ6Yx = BigInt("1137")
		const bytez7VZNww = "0x0f100e0e1e1a1a140a0502191f180c1417001a160b0a17171f08111f151e1a17"
		const uint256DA0w6M = await ReviveFndJiMj.totalBalanceOf.call(addressj8bkgiY, {from: accounts[1]});
//		const uint256XJCEAJv = await ReviveFndJiMj.recoverERC20.call(uintPBC77zP, {from: accounts[2]});
//		const uint256YQrYgm2 = await ReviveFndJiMj.unlock.call(addressRvAf9T, {from: accounts[5]});
//		const boolyypgRn = await ReviveFndJiMj.lock.call(bytez7VZNww, uintoKpQ6Yx, uinthZK970, {from: accounts[5]});

		assert.equal(uint256DA0w6M, BigInt("0"))
		await expect(ReviveFndJiMj.recoverERC20.call(uintPBC77zP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const uintlTc9BeQ = BigInt("1879")
		const byteqoGE8EO = "0x08141b0b1b0b1e181f010b11161d1c1c0a20101f1704071c190a0f1a19191017"
		const addressKabAaTM = accounts[5]
		const uintmR62ZyW = BigInt("749")
		const addressJoQ5q9g = accounts[2]
		const uintQSUBdhY = BigInt("439")
		const byteLD5ej3a = "0x0415090f0c09001f0e1b161c11160e1c1309010e0c01141f060c171e10101e02"
		const uintBuyqER = BigInt("231")
		const bytegl3A9Rr = "0x040e161e120500190b1a17010a060c0a0d161f04191e12120c1714110c020d1a"
		const uint256pAS2ly6 = await ReviveFndJiMj.tokensLockedAtTime.call(addressKabAaTM, byteqoGE8EO, uintlTc9BeQ, {from: accounts[4]});
//		const addressf8Z337q = await ReviveFndJiMj.recoverERC20.call(addressJoQ5q9g, uintmR62ZyW, {from: accounts[0]});
//		const boolrmyCZe0 = await ReviveFndJiMj.increaseLockAmount.call(byteLD5ej3a, uintQSUBdhY, {from: accounts[3]});
//		const boolXPiInpU = await ReviveFndJiMj.increaseLockAmount.call(bytegl3A9Rr, uintBuyqER, {from: accounts[0]});

		assert.equal(uint256pAS2ly6, BigInt("0"))
		await expect(ReviveFndJiMj.recoverERC20.call(addressJoQ5q9g, uintmR62ZyW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive12M8nu = await Revive.new({from: accounts[1]});
		const addressE3Hecm = accounts[4]
		const bytexWlLiQE = "0x201c0111190a141112041f1d130b1a1410120d02190b081a160e121d00180514"
		const addressyQlNRkd = accounts[1]
		const byteWV0Ox0 = "0x1a0d181801201e0a0b1d0d1f12020405130709081b1f0a1c1309111a111e2019"
		const addressfj7hJjz = accounts[2]
		const addressq7xSMh2 = accounts[4]
		const uintG5puh6k = BigInt("830")
		const uintLy8SOVc = BigInt("1010")
		const bytey7Cz8VY = "0x1c0e15060f0a100404121d060220131f170a201b0500091b0908161d1614120d"
		const addressZfyUAOA = accounts[3]
		const addressSWuEGyT = accounts[3]
		const uintENUieBP = BigInt("1019")
		const addressRHVZ6j = accounts[0]
		const addressuxqqJx2 = accounts[5]
		const uintykdMZPS = BigInt("1867")
		const addressRc8n2fp = accounts[0]
		const addressq8gnjTi = accounts[2]
		const uintGUCVMnk = BigInt("1695")
		const addressrVEyhVE = accounts[3]
		const uintT4mhxMM = BigInt("159")
		const bytelfFUsiq = "0x051b0a01171811061111060b0e16060b02121b1a1b18061a17060a030910061b"
		const uint256HBSxtbt = await Revive12M8nu.getUnlockableTokens.call(addressE3Hecm, {from: accounts[0]});
		const uint256QEd7Cb = await Revive12M8nu.tokensUnlockable.call(addressyQlNRkd, bytexWlLiQE, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hldKABh = await Revive12M8nu.tokensUnlockable.call(addressfj7hJjz, byteWV0Ox0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LECDex = await Revive12M8nu.balanceOf.call(addressq7xSMh2, {from: accounts[3]});
		const addressicGH6vo = await Revive12M8nu.owner.call({from: accounts[2]});
		const boolgdli6Mx = await Revive12M8nu.isOwner.call({from: accounts[4]});
//		const boolXigc43 = await Revive12M8nu.transferWithLock.call(addressZfyUAOA, bytey7Cz8VY, uintLy8SOVc, uintG5puh6k, {from: accounts[4]});
//		const uint256FXeGr5l = await Revive12M8nu.unlock.call(addressSWuEGyT, {from: accounts[1]});
//		const boolsoOB1wI = await Revive12M8nu.transferFrom.call(addressuxqqJx2, addressRHVZ6j, uintENUieBP, {from: accounts[5]});
//		const boolHPUeSU = await Revive12M8nu.approve.call(addressRc8n2fp, uintykdMZPS, {from: accounts[3]});
//		const uint256G1RxpsE = await Revive12M8nu.totalSupply.call({from: accounts[1]});
//		const uint256IuDLX5 = await Revive12M8nu.unlock.call(addressq8gnjTi, {from: accounts[2]});
//		const boolykxSsE = await Revive12M8nu.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolzvucvRG = await Revive12M8nu.decreaseAllowance.call(addressrVEyhVE, uintGUCVMnk, {from: accounts[1]});
//		const boolhKSASyk = await Revive12M8nu.increaseLockAmount.call(bytelfFUsiq, uintT4mhxMM, {from: accounts[2]});

		assert.equal(addressicGH6vo, 0x26FA71061E596572EBAFFbFd5157679b017A123b)
		assert.equal(boolgdli6Mx, false)
		assert.equal(uint256HBSxtbt, BigInt("0"))
		assert.equal(uint256LECDex, BigInt("0"))
		assert.equal(uint256QEd7Cb, BigInt("0"))
		assert.equal(uint256hldKABh, BigInt("0"))
		await expect(Revive12M8nu.transferWithLock.call(addressZfyUAOA, bytey7Cz8VY, uintLy8SOVc, uintG5puh6k, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const uintS6Sk6ne = BigInt("1875")
		const bytefxumWik = "0x08141b0b1b0b1e181f010b11161d1c1c0a20101f1704071c190a0f1a19191017"
		const addresszQFsDL4 = accounts[5]
		const uint256pAS2ly6 = await ReviveFndJiMj.tokensLockedAtTime.call(addresszQFsDL4, bytefxumWik, uintS6Sk6ne, {from: accounts[4]});
		const uint256iR7PMn9 = await ReviveFndJiMj.totalSupply.call({from: accounts[2]});
//		await ReviveFndJiMj.renounceOwnership.call({from: accounts[0]});

		assert.equal(uint256iR7PMn9, BigInt("3000000000000000000000000000"))
		assert.equal(uint256pAS2ly6, BigInt("0"))
		await expect(ReviveFndJiMj.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const uintRVzmdz7 = BigInt("1451")
		const uintBLz8EjO = BigInt("1222")
		const addressCu2vin0 = accounts[1]
		const uintm67MoV = BigInt("1875")
		const byteESLmOIa = "0x08141b0b1b0b1e181f010b11161d1c1c0a20101f1704071c190a0f1a19191017"
		const addressqgjN4q = accounts[6]
//		const uint256vk9cilq = await ReviveFndJiMj.recoverERC20.call(uintRVzmdz7, {from: accounts[1]});
//		const addressl2Sn88Q = await ReviveFndJiMj.recoverERC20.call(addressCu2vin0, uintBLz8EjO, {from: accounts[4]});
//		const uint256pAS2ly6 = await ReviveFndJiMj.tokensLockedAtTime.call(addressqgjN4q, byteESLmOIa, uintm67MoV, {from: accounts[4]});

		await expect(ReviveFndJiMj.recoverERC20.call(uintRVzmdz7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const uintfQg1Gvs = BigInt("1077")
		const uint2P1vsw = BigInt("16")
		const uintr3lyYmj = BigInt("509")
		const bytetqVQ2Z = "0x1f0c1a1509010a091c1f0d0f16110b091b1e08191210020d05081d161b20201c"
		const uintZJzJrq8 = BigInt("768")
		const addressQOBlwa = accounts[3]
		const addresszlq0k2J = accounts[3]
//		const uint256dKeKOrD = await ReviveFndJiMj.recoverERC20.call(uintfQg1Gvs, {from: accounts[3]});
//		const booltkQKo7 = await ReviveFndJiMj.lock.call(bytetqVQ2Z, uintr3lyYmj, uint2P1vsw, {from: accounts[1]});
//		const boolv15GQi = await ReviveFndJiMj.transferFrom.call(addresszlq0k2J, addressQOBlwa, uintZJzJrq8, {from: accounts[1]});

		await expect(ReviveFndJiMj.recoverERC20.call(uintfQg1Gvs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const addressJkdoRnj = accounts[0]
		const uintXKeQgzE = BigInt("189")
		const bytehEs1Wyw = "0x040e161e120500190b1a17fffffffd0a060c0a0d161f04191e12120e1714110c020d1a"
		const uint256efLiGBX = await ReviveFndJiMj.getUnlockableTokens.call(addressJkdoRnj, {from: accounts[2]});
//		const boolXPiInpU = await ReviveFndJiMj.increaseLockAmount.call(bytehEs1Wyw, uintXKeQgzE, {from: accounts[0]});

		assert.equal(uint256efLiGBX, BigInt("0"))
		await expect(ReviveFndJiMj.increaseLockAmount.call(bytehEs1Wyw, uintXKeQgzE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const addresssxPxSA7 = accounts[0]
		const uint6nwdW6 = BigInt("1707")
		const uinteaPhUqc = BigInt("1758")
		const byteWD48jhe = "0x1a0c0d0c1c1d080916020a031d161416110d120d200204131e09101001111317"
		const uint256efLiGBX = await ReviveFndJiMj.getUnlockableTokens.call(addresssxPxSA7, {from: accounts[2]});
//		const uint256bP2mOrt = await ReviveFndJiMj.recoverERC20.call(uint6nwdW6, {from: accounts[3]});
//		const boolbaeiLac = await ReviveFndJiMj.extendLock.call(byteWD48jhe, uinteaPhUqc, {from: accounts[5]});

		assert.equal(uint256efLiGBX, BigInt("0"))
		await expect(ReviveFndJiMj.recoverERC20.call(uint6nwdW6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const addressAUfnLRO = accounts[3]
		const uintBzEkncC = BigInt("1728")
		const uintsJAqzm = BigInt("37")
		const byteQJ8uUBY = "0x01031d100402150917191e0d1e030a1114110b0814010b19080e0b0a17081012"
		const addressDKIYY6K = accounts[3]
		const uint256nJcWMki = await ReviveFndJiMj.totalBalanceOf.call(addressAUfnLRO, {from: accounts[4]});
//		const uint256ey2MZGS = await ReviveFndJiMj.recoverERC20.call(uintBzEkncC, {from: accounts[5]});
//		await ReviveFndJiMj.renounceOwnership.call({from: accounts[1]});
//		const uint256A4VCHH9 = await ReviveFndJiMj.tokensLockedAtTime.call(addressDKIYY6K, byteQJ8uUBY, uintsJAqzm, {from: accounts[1]});

		assert.equal(uint256nJcWMki, BigInt("0"))
		await expect(ReviveFndJiMj.recoverERC20.call(uintBzEkncC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const uintmMcUcs9 = BigInt("305")
		const uint0reozu = BigInt("340")
		const byteX48exNV = "0x1a0c101007011b111517201514180f18121914160315091416101a0a110e1c0e"
		const addressEpRsaeS = "0x0000000000000000000000000000000000000001"
		const addressu7148A = accounts[3]
		const addressLxpDhbB = accounts[4]
		const uintzB3L936 = BigInt("984")
		const uintFKThqnz = BigInt("963")
		const uintKEG8GNP = BigInt("1591")
		const bytez9OZjUq = "0x071f1d16020e16200c12050c200317190f200606080608151507051f040d041f"
		const addresshDjeUQe = accounts[4]
		const uintRHyl2I = BigInt("17")
		const uintLFSFF1K = BigInt("509")
		const byteZ3hD1k1 = "0x15040e0816051e141904180a201a1f0c04051c070704090e1308161e0f1d0f02"
		const boolXWtzplQ = await ReviveFndJiMj.transferWithLock.call(addressEpRsaeS, byteX48exNV, uint0reozu, uintmMcUcs9, {from: accounts[0]});
		const uint256LoZB5yJ = await ReviveFndJiMj.allowance.call(addressLxpDhbB, addressu7148A, {from: accounts[3]});
//		const uint256N5tnSq = await ReviveFndJiMj.recoverERC20.call(uintzB3L936, {from: accounts[4]});
//		const boolgeBV7ST = await ReviveFndJiMj.transferWithLock.call(addresshDjeUQe, bytez9OZjUq, uintKEG8GNP, uintFKThqnz, {from: accounts[2]});
//		const booltkQKo7 = await ReviveFndJiMj.lock.call(byteZ3hD1k1, uintLFSFF1K, uintRHyl2I, {from: accounts[1]});

		assert.equal(boolXWtzplQ, true)
		assert.equal(uint256LoZB5yJ, BigInt("0"))
		await expect(ReviveFndJiMj.recoverERC20.call(uintzB3L936, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const uintupXNrOy = BigInt("1830")
		const uintJRRAiOd = BigInt("37")
		const bytebkFzM2n = "0x081c160e0415071c190f151b060f1e060a130500110113010b0418060a16161a"
		const addressLEmJQ8h = accounts[3]
//		const uint256p5OvatD = await ReviveFndJiMj.recoverERC20.call(uintupXNrOy, {from: accounts[2]});
//		const uint256A4VCHH9 = await ReviveFndJiMj.tokensLockedAtTime.call(addressLEmJQ8h, bytebkFzM2n, uintJRRAiOd, {from: accounts[1]});

		await expect(ReviveFndJiMj.recoverERC20.call(uintupXNrOy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const uintMbv5115 = BigInt("1174")
		const addressZvag4l4 = accounts[2]
		const addressenSJoNN = accounts[0]
//		const uint256B4GmawE = await ReviveFndJiMj.recoverERC20.call(uintMbv5115, {from: accounts[3]});
//		const uint256YQrYgm2 = await ReviveFndJiMj.unlock.call(addressZvag4l4, {from: accounts[5]});
//		const uint256ic2e4J4 = await ReviveFndJiMj.balanceOf.call(addressenSJoNN, {from: accounts[1]});

		await expect(ReviveFndJiMj.recoverERC20.call(uintMbv5115, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveMtxUJpO = await Revive.new({from: accounts[2]});
		const byte2UIXS6 = "0x060211090410080912060a0a040120080005100b0a0e0e0f06010f03071b1609"
		const addressLMDOBSP = accounts[2]
		const uint9FuvbW = BigInt("917")
		const uintuPGfdja = BigInt("1834")
		const uintM3i4BTL = BigInt("470")
		const bytebGLm2di = "0x0c0d0d010f050910161c061d0d170c141d071507101905191804040c1b03071e"
		const uinttb4YViH = BigInt("715")
		const bytearBzPab = "0x1b0a07150814040a0b1c111d0a0f041315001d1b1c1111161f00061e10101f14"
		const uint256jvwWBUw = await ReviveMtxUJpO.tokensLocked.call(addressLMDOBSP, byte2UIXS6, {from: accounts[2]});
//		const uint256dHXMsFm = await ReviveMtxUJpO.recoverERC20.call(uint9FuvbW, {from: accounts[4]});
//		const boolV4NldbR = await ReviveMtxUJpO.lock.call(bytebGLm2di, uintM3i4BTL, uintuPGfdja, {from: accounts[3]});
//		const boolalGB8Oj = await ReviveMtxUJpO.increaseLockAmount.call(bytearBzPab, uinttb4YViH, {from: accounts[2]});

		assert.equal(uint256jvwWBUw, BigInt("0"))
		await expect(ReviveMtxUJpO.recoverERC20.call(uint9FuvbW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const uintiO5C6gQ = BigInt("936")
		const uintsB4Wnd9 = BigInt("33")
		const bytedSk2dfg = "0x081c160e0415071c190f151b060f1e060a130500110113010a0418060a16161a"
		const addressGeM9S6U = accounts[3]
//		const uint256gUnNTv = await ReviveFndJiMj.recoverERC20.call(uintiO5C6gQ, {from: accounts[2]});
//		const uint256A4VCHH9 = await ReviveFndJiMj.tokensLockedAtTime.call(addressGeM9S6U, bytedSk2dfg, uintsB4Wnd9, {from: accounts[1]});

		await expect(ReviveFndJiMj.recoverERC20.call(uintiO5C6gQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const address67Fwk8 = accounts[1]
		const addressJrfS8Ph = "0x0000000000000000000000000000000000000001"
		const uintFaW7l5Z = BigInt("33")
		const byteSfhYduP = "0x081c160e0415071c190f151b060f1e060a130500110113010a0418060a16161a"
		const addressXubumEg = accounts[3]
		const uintMUp979 = BigInt("822")
		const uintE8UvFHt = BigInt("229")
		const addressXPXrRsj = accounts[4]
		const addressm1ckQhn = "0x0000000000000000000000000000000000000001"
		const uint256vADzydj = await ReviveFndJiMj.unlock.call(address67Fwk8, {from: accounts[4]});
		const uint256Usuk3I4 = await ReviveFndJiMj.getUnlockableTokens.call(addressJrfS8Ph, {from: accounts[4]});
		const uint256A4VCHH9 = await ReviveFndJiMj.tokensLockedAtTime.call(addressXubumEg, byteSfhYduP, uintFaW7l5Z, {from: accounts[1]});
//		const uint25628UHqi = await ReviveFndJiMj.recoverERC20.call(uintMUp979, {from: "0x0000000000000000000000000000000000000001"});
//		const addressSa5F7JX = await ReviveFndJiMj.recoverERC20.call(addressXPXrRsj, uintE8UvFHt, {from: accounts[4]});
//		const uint256agmCq4o = await ReviveFndJiMj.balanceOf.call(addressm1ckQhn, {from: accounts[4]});

		assert.equal(uint256A4VCHH9, BigInt("0"))
		assert.equal(uint256Usuk3I4, BigInt("0"))
		assert.equal(uint256vADzydj, BigInt("0"))
		await expect(ReviveFndJiMj.recoverERC20.call(uintMUp979, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const uintErdvvV = BigInt("248")
		const addressMQfUhys = accounts[4]
		const addressSHCY5I7 = accounts[3]
		const addressvR3IsIT = accounts[2]
//		const uint256Z4PPlDc = await ReviveFndJiMj.recoverERC20.call(uintErdvvV, {from: accounts[1]});
//		const uint256Yv26S7y = await ReviveFndJiMj.totalBalanceOf.call(addressMQfUhys, {from: accounts[5]});
//		const uint256zoYmuih = await ReviveFndJiMj.getUnlockableTokens.call(addressSHCY5I7, {from: accounts[0]});
//		const uint256YQrYgm2 = await ReviveFndJiMj.unlock.call(addressvR3IsIT, {from: accounts[5]});

		await expect(ReviveFndJiMj.recoverERC20.call(uintErdvvV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFndJiMj = await Revive.new({from: accounts[0]});
		const uintrmLCg3O = BigInt("1007")
		const addressBlLH4pe = accounts[4]
		const uintYLBcFjn = BigInt("33")
		const byteZEyneLV = "0x081c160e0415071c190f151b060f1e060a130500110113010a0418060a16161a"
		const addressFWT1Skj = accounts[3]
//		const uint256BH74tnj = await ReviveFndJiMj.recoverERC20.call(uintrmLCg3O, {from: accounts[3]});
//		const uint256dRWifRg = await ReviveFndJiMj.totalBalanceOf.call(addressBlLH4pe, {from: accounts[3]});
//		const boolL4WYJ7f = await ReviveFndJiMj.isOwner.call({from: accounts[2]});
//		const uint256A4VCHH9 = await ReviveFndJiMj.tokensLockedAtTime.call(addressFWT1Skj, byteZEyneLV, uintYLBcFjn, {from: accounts[1]});

		await expect(ReviveFndJiMj.recoverERC20.call(uintrmLCg3O, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivefGJ2DS6 = await Revive.new({from: accounts[0]});
		const uintZgqqlC = BigInt("1036")
		const addressBfEHTUf = accounts[3]
		const uint3APwOT = BigInt("1129")
		const addressjJk9R6l = accounts[0]
//		const uint256DYEPCU1 = await RevivefGJ2DS6.recoverERC20.call(uintZgqqlC, {from: accounts[2]});
//		const uint256ZV1He5k = await RevivefGJ2DS6.getUnlockableTokens.call(addressBfEHTUf, {from: "0x0000000000000000000000000000000000000001"});
//		const bool6reIqp = await RevivefGJ2DS6.increaseAllowance.call(addressjJk9R6l, uint3APwOT, {from: accounts[3]});

		await expect(RevivefGJ2DS6.recoverERC20.call(uintZgqqlC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveZGrTXU4 = await Revive.new({from: accounts[4]});
		const uintkesuify = BigInt("500")
		const uintbgpIIcc = BigInt("1272")
		const addressOixsL54 = accounts[1]
		const addressuaVUCs = accounts[3]
		const addressFejSCHt = accounts[1]
//		const uint256QVSXoSb = await ReviveZGrTXU4.recoverERC20.call(uintkesuify, {from: accounts[3]});
//		const uint256dakCP7r = await ReviveZGrTXU4.recoverERC20.call(uintbgpIIcc, {from: accounts[4]});
//		const uint256xydE2sw = await ReviveZGrTXU4.balanceOf.call(addressOixsL54, {from: accounts[2]});
//		const uint256JKzjMX0 = await ReviveZGrTXU4.totalBalanceOf.call(addressuaVUCs, {from: accounts[5]});
//		const uint256mV3W3Dc = await ReviveZGrTXU4.totalBalanceOf.call(addressFejSCHt, {from: accounts[2]});

		await expect(ReviveZGrTXU4.recoverERC20.call(uintkesuify, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})