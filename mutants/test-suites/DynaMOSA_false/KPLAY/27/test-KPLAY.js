const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAY1HvkC5 = await KPLAY.new({from: accounts[2]});
		const uintnlUNiAu = BigInt("680")
		const uintxqbvKbQ = BigInt("200")
		const addressldqn3BW = accounts[4]
		const addressNWjKGK0 = accounts[5]
		const uintn4blqSM = BigInt("1186")
		const uinttKpKyJT = BigInt("1155")
		const addressCLXv0j6 = "0x0000000000000000000000000000000000000001"
//		const addresse1ZrX2h = await KPLAY1HvkC5.lockAfter.call(addressldqn3BW, uintxqbvKbQ, uintnlUNiAu, {from: accounts[1]});
//		const uint256YoCc7tQ = await KPLAY1HvkC5.lockCount.call(addressNWjKGK0, {from: accounts[4]});
//		const addressISoVwq6 = await KPLAY1HvkC5.lock.call(addressCLXv0j6, uinttKpKyJT, uintn4blqSM, {from: accounts[3]});

		await expect(KPLAY1HvkC5.lockAfter.call(addressldqn3BW, uintxqbvKbQ, uintnlUNiAu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCVQYxSP = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addresskZhOB7 = accounts[0]
		const uint3vFaO8 = BigInt("19")
		const addresstY5AreZ = accounts[4]
		const addresshKMb2QU = accounts[1]
		const addressc75D59v = await KPLAYCVQYxSP.freeze.call(addresskZhOB7, {from: accounts[3]});
		await KPLAYCVQYxSP.renounceOwnership.call({from: accounts[4]});
		const boolXar8cg = await KPLAYCVQYxSP.approve.call(addresstY5AreZ, uint3vFaO8, {from: accounts[0]});
		const booljPjoSZw = await KPLAYCVQYxSP.isFrozen.call(addresshKMb2QU, {from: accounts[2]});
	});

	it('test for KPLAY', async () => {
		const KPLAYCwtuKcj = await KPLAY.new({from: accounts[4]});
		const uintN39qYbb = BigInt("1516")
		const addressEMsB8Yd = accounts[2]
		const addressXjhpFtc = accounts[1]
		const uintTHiYq1i = BigInt("274")
		const addressTUgBaLr = accounts[4]
		const addresse1CcNOy = accounts[4]
//		await KPLAYCwtuKcj.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolTek9a9P = await KPLAYCwtuKcj.transferFrom.call(addressXjhpFtc, addressEMsB8Yd, uintN39qYbb, {from: accounts[2]});
//		const addressyUCGRUU = await KPLAYCwtuKcj.unlock.call(addressTUgBaLr, uintTHiYq1i, {from: accounts[4]});
//		const boolQOQpSDX = await KPLAYCwtuKcj.isFrozen.call(addresse1CcNOy, {from: accounts[4]});
//		await KPLAYCwtuKcj.whenNotFrozen.call({from: accounts[4]});

		await expect(KPLAYCwtuKcj.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYJvtekqT = await KPLAY.new({from: accounts[5]});
		const uintsONWuF7 = BigInt("940")
		const uintt3XJlkL = BigInt("1614")
		const addressYEccZm2 = accounts[4]
		const addressgYF7Ygo = accounts[3]
		const addressyScs8nG = accounts[2]
		const uintOLzHJvy = BigInt("57")
		const addressI359RWa = "0x0000000000000000000000000000000000000001"
		const addresshWO56Kp = accounts[0]
		const uintFSSq73H = BigInt("398")
		const uintyrh6YBd = BigInt("2011")
		const addressxx3HnbV = accounts[0]
//		const addressFlLMdBJ = await KPLAYJvtekqT.lockAfter.call(addressYEccZm2, uintt3XJlkL, uintsONWuF7, {from: accounts[5]});
//		const uint256lPVYOVT = await KPLAYJvtekqT.allowance.call(addressyScs8nG, addressgYF7Ygo, {from: accounts[2]});
//		const boolRA8LGRf = await KPLAYJvtekqT.transferFrom.call(addresshWO56Kp, addressI359RWa, uintOLzHJvy, {from: accounts[1]});
//		const uint256tMWWVdf = await KPLAYJvtekqT.afterTime.call(uintFSSq73H, {from: accounts[2]});
//		const boolnx7Cr0B = await KPLAYJvtekqT.increaseAllowance.call(addressxx3HnbV, uintyrh6YBd, {from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYJvtekqT.renounceOwnership.call({from: accounts[3]});

		await expect(KPLAYJvtekqT.lockAfter.call(addressYEccZm2, uintt3XJlkL, uintsONWuF7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYsTBV5nN = await KPLAY.new({from: accounts[4]});
		const uintUZyhNQx = BigInt("357")
		const addressrbtdC4r = accounts[2]
		const uintJsDcIzd = BigInt("1894")
		const uintMBZJ3dY = BigInt("1390")
		const addressb2xTaA2 = accounts[4]
		const boolZdMtgyt = await KPLAYsTBV5nN.approve.call(addressrbtdC4r, uintUZyhNQx, {from: accounts[0]});
		const addresshMM7Qpi = await KPLAYsTBV5nN.lockAfter.call(addressb2xTaA2, uintMBZJ3dY, uintJsDcIzd, {from: accounts[4]});

		assert.equal(boolZdMtgyt, true)
	});

	it('test for KPLAY', async () => {
		const KPLAYJ2MQ4ZM = await KPLAY.new({from: accounts[0]});
		const uintkM4r4Ly = BigInt("320")
		const addressxiema2 = accounts[0]
		const addressv3BwDPt = accounts[2]
		const uintMKj0ivl = BigInt("433")
		const addresssvh1VzE = accounts[3]
		const booluvyuhJI = await KPLAYJ2MQ4ZM.approve.call(addressxiema2, uintkM4r4Ly, {from: accounts[2]});
		const boolbKCAJ7x = await KPLAYJ2MQ4ZM.isFrozen.call(addressv3BwDPt, {from: accounts[4]});
//		await KPLAYJ2MQ4ZM.onlyOwner.call({from: accounts[1]});
//		const bool7GEGZ5 = await KPLAYJ2MQ4ZM.increaseAllowance.call(addresssvh1VzE, uintMKj0ivl, {from: accounts[4]});

		assert.equal(boolbKCAJ7x, false)
		assert.equal(booluvyuhJI, true)
		await expect(KPLAYJ2MQ4ZM.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKtDA80k = await KPLAY.new({from: accounts[3]});
		const addressr9vyfG5 = "0x0000000000000000000000000000000000000001"
		const uintzUapUg = BigInt("1994")
		const addressqlInKE = accounts[3]
		const addressjyd6ubh = accounts[0]
		const uint256omj8WCS = await KPLAYKtDA80k.balanceOf.call(addressr9vyfG5, {from: accounts[4]});
//		const boolAx3vJn4 = await KPLAYKtDA80k.mint.call(addressqlInKE, uintzUapUg, {from: accounts[5]});
//		await KPLAYKtDA80k.whenNotFrozen.call({from: accounts[4]});
//		const uint256Vbd6w6 = await KPLAYKtDA80k.balanceOf.call(addressjyd6ubh, {from: accounts[0]});

		assert.equal(uint256omj8WCS, BigInt("0"))
		await expect(KPLAYKtDA80k.mint.call(addressqlInKE, uintzUapUg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAY1HvkC5 = await KPLAY.new({from: accounts[2]});
		const uintqtVSKb = BigInt("1863")
		const addressY0W3bV3 = accounts[3]
		const uinteK73gqR = BigInt("680")
		const uintu0I4gb = BigInt("200")
		const addressNjCnT0 = accounts[4]
		const addressIOUgYM = accounts[5]
		const uintiqojzCY = BigInt("1186")
		const uintAkfT6NA = BigInt("1940")
		const addresskx31DIY = "0x0000000000000000000000000000000000000001"
//		const boolw1ZSwwO = await KPLAY1HvkC5.decreaseAllowance.call(addressY0W3bV3, uintqtVSKb, {from: accounts[1]});
//		const addresse1ZrX2h = await KPLAY1HvkC5.lockAfter.call(addressNjCnT0, uintu0I4gb, uinteK73gqR, {from: accounts[1]});
//		const uint256YoCc7tQ = await KPLAY1HvkC5.lockCount.call(addressIOUgYM, {from: accounts[4]});
//		const addressISoVwq6 = await KPLAY1HvkC5.lock.call(addresskx31DIY, uintAkfT6NA, uintiqojzCY, {from: accounts[3]});

		await expect(KPLAY1HvkC5.decreaseAllowance.call(addressY0W3bV3, uintqtVSKb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKtDA80k = await KPLAY.new({from: accounts[3]});
		const uintsnJQxVg = BigInt("215")
		const addressgPbBB9 = accounts[0]
		const addresseQRgmOD = "0x0000000000000000000000000000000000000001"
		const addressouy2eZx = "0x0000000000000000000000000000000000000001"
		const uintR5KpZKa = BigInt("1994")
		const addressGLYhai6 = accounts[3]
		const addresslRak6oT = accounts[1]
//		const booleZCsu18 = await KPLAYKtDA80k.transferFrom.call(addresseQRgmOD, addressgPbBB9, uintsnJQxVg, {from: accounts[2]});
//		await KPLAYKtDA80k.unpause.call({from: accounts[1]});
//		const uint256omj8WCS = await KPLAYKtDA80k.balanceOf.call(addressouy2eZx, {from: accounts[4]});
//		const boolAx3vJn4 = await KPLAYKtDA80k.mint.call(addressGLYhai6, uintR5KpZKa, {from: accounts[5]});
//		await KPLAYKtDA80k.whenNotFrozen.call({from: accounts[4]});
//		const uint256Vbd6w6 = await KPLAYKtDA80k.balanceOf.call(addresslRak6oT, {from: accounts[0]});

		await expect(KPLAYKtDA80k.transferFrom.call(addresseQRgmOD, addressgPbBB9, uintsnJQxVg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYHxFK052 = await KPLAY.new({from: accounts[4]});
		const addressuF9Qxf = accounts[1]
		const uintlA5Vxld = BigInt("1251")
		const addressAUJfCn = accounts[0]
		const uintCG5LCJ4 = BigInt("1528")
		const addressCIJMwpJ = accounts[3]
		const addressayQ8qv6 = accounts[4]
		const uint256jtYBGm5 = await KPLAYHxFK052.balanceOf.call(addressuF9Qxf, {from: accounts[3]});
//		const boolY1zw5Tt = await KPLAYHxFK052.transfer.call(addressAUJfCn, uintlA5Vxld, {from: accounts[5]});
//		const boolSoXak4U = await KPLAYHxFK052.transferFrom.call(addressayQ8qv6, addressCIJMwpJ, uintCG5LCJ4, {from: accounts[4]});

		assert.equal(uint256jtYBGm5, BigInt("0"))
		await expect(KPLAYHxFK052.transfer.call(addressAUJfCn, uintlA5Vxld, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKtDA80k = await KPLAY.new({from: accounts[3]});
		const addressQIXlt7l = "0x0000000000000000000000000000000000000001"
		const uintFVvgxnJ = BigInt("1994")
		const addressdETibHN = accounts[3]
		const addressMhnGH24 = accounts[0]
		const uint256omj8WCS = await KPLAYKtDA80k.balanceOf.call(addressQIXlt7l, {from: accounts[4]});
		const uint256V0BCD94 = await KPLAYKtDA80k.currentTime.call({from: accounts[0]});
//		await KPLAYKtDA80k.whenNotFrozen.call({from: accounts[2]});
//		const boolAx3vJn4 = await KPLAYKtDA80k.mint.call(addressdETibHN, uintFVvgxnJ, {from: accounts[5]});
//		await KPLAYKtDA80k.whenNotFrozen.call({from: accounts[4]});
//		const uint256Vbd6w6 = await KPLAYKtDA80k.balanceOf.call(addressMhnGH24, {from: accounts[0]});

		assert.equal(uint256V0BCD94, BigInt("1630229240"))
		assert.equal(uint256omj8WCS, BigInt("0"))
		await expect(KPLAYKtDA80k.whenNotFrozen.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYxv6JXJT = await KPLAY.new({from: accounts[4]});
		const addressWsVwANr = accounts[3]
		const uinttWzlwN7 = BigInt("1050")
		const addresso8IBA1Y = accounts[5]
		const addressheBcoAb = accounts[3]
		const uintX8sK0mw = BigInt("849")
		const uintHmYwS7s = BigInt("256")
		const addressXDSzeT1 = accounts[0]
		const uinttVf21Ne = BigInt("1497")
		const uinthKNStic = BigInt("1975")
		const address0IZWgn = "0x0000000000000000000000000000000000000001"
		const addressgEEQO6Q = await KPLAYxv6JXJT.transferOwnership.call(addressWsVwANr, {from: accounts[4]});
//		const boolIWUlUE = await KPLAYxv6JXJT.transferFrom.call(addressheBcoAb, addresso8IBA1Y, uinttWzlwN7, {from: accounts[2]});
//		const uint256D3g78kj = await KPLAYxv6JXJT.afterTime.call(uintX8sK0mw, {from: accounts[0]});
//		const addressRP0BAhW = await KPLAYxv6JXJT.burn.call(addressXDSzeT1, uintHmYwS7s, {from: "0x0000000000000000000000000000000000000001"});
//		const booloEvg295 = await KPLAYxv6JXJT.transferWithLockAfter.call(address0IZWgn, uinthKNStic, uinttVf21Ne, {from: accounts[2]});

		await expect(KPLAYxv6JXJT.transferFrom.call(addressheBcoAb, addresso8IBA1Y, uinttWzlwN7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAY3Fv9zV = await KPLAY.new({from: accounts[2]});
		const addressjCpsT4e = accounts[0]
		const uintaCBw0JG = BigInt("1386")
		const addressW2KO18l = accounts[5]
		const addressbRlR0uA = accounts[6]
		const uint256bfCzPN = await KPLAY3Fv9zV.balanceOf.call(addressjCpsT4e, {from: accounts[3]});
//		await KPLAY3Fv9zV.unpause.call({from: accounts[2]});
//		await KPLAY3Fv9zV.whenNotPaused.call({from: accounts[2]});
//		const boolrzes8QC = await KPLAY3Fv9zV.mint.call(addressW2KO18l, uintaCBw0JG, {from: accounts[3]});
//		await KPLAY3Fv9zV.pause.call({from: accounts[1]});
//		const addressb4ARMaj = await KPLAY3Fv9zV.freeze.call(addressbRlR0uA, {from: accounts[2]});

		assert.equal(uint256bfCzPN, BigInt("0"))
		await expect(KPLAY3Fv9zV.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKtDA80k = await KPLAY.new({from: accounts[3]});
		const addressGtB4t0E = "0x0000000000000000000000000000000000000001"
		const addressJwOfnUK = accounts[1]
		const uintBK0zkXX = BigInt("1994")
		const addresswPFTbrh = accounts[3]
		const addresstOpjrBd = accounts[0]
		const uint256omj8WCS = await KPLAYKtDA80k.balanceOf.call(addressGtB4t0E, {from: accounts[4]});
		const uint256iyfPEe1 = await KPLAYKtDA80k.lockCount.call(addressJwOfnUK, {from: accounts[4]});
		const uint256V0BCD94 = await KPLAYKtDA80k.currentTime.call({from: accounts[0]});
//		await KPLAYKtDA80k.whenPaused.call({from: accounts[2]});
//		await KPLAYKtDA80k.whenNotFrozen.call({from: accounts[2]});
//		const boolAx3vJn4 = await KPLAYKtDA80k.mint.call(addresswPFTbrh, uintBK0zkXX, {from: accounts[5]});
//		await KPLAYKtDA80k.whenNotFrozen.call({from: accounts[4]});
//		const uint256Vbd6w6 = await KPLAYKtDA80k.balanceOf.call(addresstOpjrBd, {from: accounts[0]});

		assert.equal(uint256V0BCD94, BigInt("1630229218"))
		assert.equal(uint256iyfPEe1, BigInt("0"))
		assert.equal(uint256omj8WCS, BigInt("0"))
		await expect(KPLAYKtDA80k.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYsTBV5nN = await KPLAY.new({from: accounts[4]});
		const uinthgcw0rx = BigInt("1924")
		const addresscPQIRc = accounts[4]
		const addressLIyxbFw = "0x0000000000000000000000000000000000000001"
		const addressBwoknES = accounts[3]
		const uintaIW4VL = BigInt("357")
		const addressckhjq9V = accounts[2]
//		await KPLAYsTBV5nN.lockState.call(addresscPQIRc, uinthgcw0rx, {from: accounts[2]});
//		await KPLAYsTBV5nN.pause.call({from: accounts[2]});
//		const uint2560P56r0 = await KPLAYsTBV5nN.allowance.call(addressBwoknES, addressLIyxbFw, {from: accounts[2]});
//		const boolZdMtgyt = await KPLAYsTBV5nN.approve.call(addressckhjq9V, uintaIW4VL, {from: accounts[0]});

		await expect(KPLAYsTBV5nN.lockState.call(addresscPQIRc, uinthgcw0rx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYHxFK052 = await KPLAY.new({from: accounts[4]});
		const addresslPBrl1i = accounts[0]
		const uintQuowSNh = BigInt("1200")
		const addressjXfGSgx = accounts[2]
		const addressMzmDur = accounts[1]
		const uintonRKQ3G = BigInt("1254")
		const addressLTgVpnL = accounts[0]
		const uintCdJqKt = BigInt("1528")
		const addressV8jCBBH = accounts[3]
		const addressFNPpb3n = accounts[4]
		const addressy7kYlpF = await KPLAYHxFK052.unfreeze.call(addresslPBrl1i, {from: accounts[4]});
//		const boolE8jX7D = await KPLAYHxFK052.mint.call(addressjXfGSgx, uintQuowSNh, {from: accounts[3]});
//		const uint256jtYBGm5 = await KPLAYHxFK052.balanceOf.call(addressMzmDur, {from: accounts[3]});
//		const boolY1zw5Tt = await KPLAYHxFK052.transfer.call(addressLTgVpnL, uintonRKQ3G, {from: accounts[5]});
//		const boolSoXak4U = await KPLAYHxFK052.transferFrom.call(addressFNPpb3n, addressV8jCBBH, uintCdJqKt, {from: accounts[4]});

		await expect(KPLAYHxFK052.mint.call(addressjXfGSgx, uintQuowSNh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYcLv976 = await KPLAY.new({from: accounts[2]});
		const uintMBZ7ITw = BigInt("528")
		const uintJqOtT8T = BigInt("1491")
		const addressgotpqTR = accounts[1]
		const uintmpy7Soh = BigInt("1706")
		const uintJXPdRcB = BigInt("1985")
		const addressvxvfbQ5 = "0x0000000000000000000000000000000000000001"
		const addressuXFMl6p = accounts[3]
		const addressojWwHgA = accounts[1]
		const uintk8OcNF = BigInt("1921")
//		const addressJmmVRLR = await KPLAYcLv976.lock.call(addressgotpqTR, uintJqOtT8T, uintMBZ7ITw, {from: accounts[2]});
//		const boolyCzC6NT = await KPLAYcLv976.transferWithLock.call(addressvxvfbQ5, uintJXPdRcB, uintmpy7Soh, {from: accounts[3]});
//		const uint256D0gSycW = await KPLAYcLv976.allowance.call(addressojWwHgA, addressuXFMl6p, {from: accounts[2]});
//		const uint256CcERWZV = await KPLAYcLv976.afterTime.call(uintk8OcNF, {from: accounts[2]});

		await expect(KPLAYcLv976.lock.call(addressgotpqTR, uintJqOtT8T, uintMBZ7ITw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYHxFK052 = await KPLAY.new({from: accounts[4]});
		const address44T76h = accounts[2]
		const uintDXVaS2 = BigInt("1528")
		const addressH4KRUbL = accounts[3]
		const address0w8Ugx = accounts[4]
		const uintmhplRR2 = BigInt("398")
		const addressiTmwC6Q = accounts[1]
		const addressZrLRdr7 = await KPLAYHxFK052.freeze.call(address44T76h, {from: accounts[4]});
//		const boolSoXak4U = await KPLAYHxFK052.transferFrom.call(address0w8Ugx, addressH4KRUbL, uintDXVaS2, {from: accounts[4]});
//		const uint256ZTHVCrC = await KPLAYHxFK052.currentTime.call({from: accounts[0]});
//		const boolIqVbqjZ = await KPLAYHxFK052.increaseAllowance.call(addressiTmwC6Q, uintmhplRR2, {from: accounts[0]});

		await expect(KPLAYHxFK052.transferFrom.call(address0w8Ugx, addressH4KRUbL, uintDXVaS2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYHxFK052 = await KPLAY.new({from: accounts[4]});
		const addressPxfZV5c = accounts[2]
		const uintY8YyUn4 = BigInt("382")
		const addressjz5E4qE = accounts[1]
		const uint256jtYBGm5 = await KPLAYHxFK052.balanceOf.call(addressPxfZV5c, {from: accounts[3]});
		const boolIqVbqjZ = await KPLAYHxFK052.increaseAllowance.call(addressjz5E4qE, uintY8YyUn4, {from: accounts[0]});

		assert.equal(boolIqVbqjZ, true)
		assert.equal(uint256jtYBGm5, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYHxFK052 = await KPLAY.new({from: accounts[4]});
		const addresskz2cZfH = accounts[3]
		const uintvtfsvLa = BigInt("1591")
		const addressZCazCbs = accounts[1]
		const uint256jtYBGm5 = await KPLAYHxFK052.balanceOf.call(addresskz2cZfH, {from: accounts[3]});
		const boole2IgKtZ = await KPLAYHxFK052.mint.call(addressZCazCbs, uintvtfsvLa, {from: accounts[4]});
//		await KPLAYHxFK052.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boole2IgKtZ, true)
		assert.equal(uint256jtYBGm5, BigInt("0"))
		await expect(KPLAYHxFK052.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYHxFK052 = await KPLAY.new({from: accounts[4]});
		const uintn5m748l = BigInt("1273")
		const addressRwByCPu = accounts[3]
		const uint256MijAiAe = await KPLAYHxFK052.afterTime.call(uintn5m748l, {from: accounts[1]});
		const uint256jtYBGm5 = await KPLAYHxFK052.balanceOf.call(addressRwByCPu, {from: accounts[3]});

		assert.equal(uint256MijAiAe, BigInt("1630230510"))
		assert.equal(uint256jtYBGm5, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYHxFK052 = await KPLAY.new({from: accounts[4]});
		const addressza2S0YK = accounts[1]
		const uintmhO88BI = BigInt("1528")
		const addressRi39I6s = accounts[4]
		const addressE8kZLj = accounts[4]
		const uint256FKDaswG = await KPLAYHxFK052.totalSupply.call({from: accounts[2]});
		const uint256jtYBGm5 = await KPLAYHxFK052.balanceOf.call(addressza2S0YK, {from: accounts[3]});
//		const boolSoXak4U = await KPLAYHxFK052.transferFrom.call(addressE8kZLj, addressRi39I6s, uintmhO88BI, {from: accounts[4]});

		assert.equal(uint256FKDaswG, BigInt("10000000000000000"))
		assert.equal(uint256jtYBGm5, BigInt("0"))
		await expect(KPLAYHxFK052.transferFrom.call(addressE8kZLj, addressRi39I6s, uintmhO88BI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYHxFK052 = await KPLAY.new({from: accounts[4]});
		const addressF2m8eWf = accounts[0]
		const addressH9TUlIw = accounts[0]
		const addressIYQV9S7 = accounts[4]
		const addressWOSXDM8 = accounts[3]
		const uint256FlQ3Uu1 = await KPLAYHxFK052.allowance.call(addressH9TUlIw, addressF2m8eWf, {from: accounts[2]});
		const addresspV9VVh1 = await KPLAYHxFK052.unfreeze.call(addressIYQV9S7, {from: accounts[4]});
		const uint256jtYBGm5 = await KPLAYHxFK052.balanceOf.call(addressWOSXDM8, {from: accounts[3]});

		assert.equal(uint256FlQ3Uu1, BigInt("0"))
		assert.equal(uint256jtYBGm5, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYxv6JXJT = await KPLAY.new({from: accounts[4]});
		const addressGR4yFkA = accounts[0]
		const addresslI9QAVN = accounts[3]
		const addressG21mYQN = accounts[5]
		const uintiqlblwT = BigInt("1350")
		const addressc3tdXs = accounts[4]
		const addressqHuYje = accounts[0]
		const uintsRPFkKO = BigInt("1050")
		const addressNFi3KG0 = accounts[5]
		const addresscxj4m9K = accounts[3]
		const uintxWeMdsh = BigInt("1121")
		const addressynFkExG = accounts[2]
		const addressC8xB5C = accounts[4]
		const uintImSJ3hD = BigInt("234")
		const addressc4sJnvB = accounts[0]
		const uintYLKssC = BigInt("1497")
		const uintYBjJUmC = BigInt("1975")
		const addressYWv6UO = "0x0000000000000000000000000000000000000001"
		const uint256tOIJtyd = await KPLAYxv6JXJT.lockCount.call(addressGR4yFkA, {from: accounts[3]});
		const addressgEEQO6Q = await KPLAYxv6JXJT.transferOwnership.call(addresslI9QAVN, {from: accounts[4]});
		const uint256KV6K7CY = await KPLAYxv6JXJT.balanceOf.call(addressG21mYQN, {from: accounts[2]});
//		await KPLAYxv6JXJT.renounceOwnership.call({from: accounts[4]});
//		const boolDn9USTF = await KPLAYxv6JXJT.transferFrom.call(addressqHuYje, addressc3tdXs, uintiqlblwT, {from: accounts[3]});
//		const boolIWUlUE = await KPLAYxv6JXJT.transferFrom.call(addresscxj4m9K, addressNFi3KG0, uintsRPFkKO, {from: accounts[2]});
//		const boolnKrVqr9 = await KPLAYxv6JXJT.transferFrom.call(addressC8xB5C, addressynFkExG, uintxWeMdsh, {from: accounts[0]});
//		const addressRP0BAhW = await KPLAYxv6JXJT.burn.call(addressc4sJnvB, uintImSJ3hD, {from: "0x0000000000000000000000000000000000000001"});
//		const booloEvg295 = await KPLAYxv6JXJT.transferWithLockAfter.call(addressYWv6UO, uintYBjJUmC, uintYLKssC, {from: accounts[2]});

		assert.equal(uint256KV6K7CY, BigInt("0"))
		assert.equal(uint256tOIJtyd, BigInt("0"))
		await expect(KPLAYxv6JXJT.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYIxszuTz = await KPLAY.new({from: accounts[2]});
		const uintmHQDn7P = BigInt("2012")
		const addressw7TdYy = "0x0000000000000000000000000000000000000001"
		const addressIRV9jCu = accounts[1]
		const uintDHsHHvO = BigInt("1780")
		const addresskHQIoA = accounts[2]
//		const addressaIVKWnn = await KPLAYIxszuTz.unlock.call(addressw7TdYy, uintmHQDn7P, {from: accounts[2]});
//		const booleR5AC1e = await KPLAYIxszuTz.isFrozen.call(addressIRV9jCu, {from: accounts[2]});
//		const uint256GxF2QUf = await KPLAYIxszuTz.currentTime.call({from: accounts[0]});
//		const boolpfD6S8Q = await KPLAYIxszuTz.decreaseAllowance.call(addresskHQIoA, uintDHsHHvO, {from: accounts[3]});

		await expect(KPLAYIxszuTz.unlock.call(addressw7TdYy, uintmHQDn7P, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYIxszuTz = await KPLAY.new({from: accounts[2]});
		const uintrzBSqmz = BigInt("484")
		const uintGgm5Wd = BigInt("324")
		const addressV9B3GJd = accounts[1]
		const uintSFINAef = BigInt("2012")
		const addressXk5hjEL = "0x0000000000000000000000000000000000000001"
		const addressn8vSNTF = accounts[1]
		const uintljTwVhM = BigInt("1780")
		const addressJOvR5A = accounts[2]
		const boolCHWFJYB = await KPLAYIxszuTz.transferWithLockAfter.call(addressV9B3GJd, uintGgm5Wd, uintrzBSqmz, {from: accounts[2]});
//		const addressaIVKWnn = await KPLAYIxszuTz.unlock.call(addressXk5hjEL, uintSFINAef, {from: accounts[2]});
//		await KPLAYIxszuTz.renounceOwnership.call({from: accounts[4]});
//		const booleR5AC1e = await KPLAYIxszuTz.isFrozen.call(addressn8vSNTF, {from: accounts[2]});
//		const uint256GxF2QUf = await KPLAYIxszuTz.currentTime.call({from: accounts[0]});
//		const boolpfD6S8Q = await KPLAYIxszuTz.decreaseAllowance.call(addressJOvR5A, uintljTwVhM, {from: accounts[3]});

		assert.equal(boolCHWFJYB, true)
		await expect(KPLAYIxszuTz.unlock.call(addressXk5hjEL, uintSFINAef, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYHxFK052 = await KPLAY.new({from: accounts[4]});
		const addressarTVgLs = accounts[2]
		const uintG0sgCpt = BigInt("1962")
		const addressrNPLLfR = accounts[1]
		const uint256jtYBGm5 = await KPLAYHxFK052.balanceOf.call(addressarTVgLs, {from: accounts[3]});
//		const addressBzvnYTA = await KPLAYHxFK052.burn.call(addressrNPLLfR, uintG0sgCpt, {from: accounts[4]});

		assert.equal(uint256jtYBGm5, BigInt("0"))
		await expect(KPLAYHxFK052.burn.call(addressrNPLLfR, uintG0sgCpt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYHxFK052 = await KPLAY.new({from: accounts[4]});
		const addressbkJEpbU = accounts[3]
		const uint256jtYBGm5 = await KPLAYHxFK052.balanceOf.call(addressbkJEpbU, {from: accounts[3]});
//		await KPLAYHxFK052.pause.call({from: accounts[4]});

		assert.equal(uint256jtYBGm5, BigInt("0"))
		await expect(KPLAYHxFK052.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYHxFK052 = await KPLAY.new({from: accounts[4]});
		const uintUX5alMg = BigInt("1577")
		const uintOQTSFPX = BigInt("1791")
		const addressVThWh20 = accounts[3]
		const addresspaUaqv = accounts[3]
		const uintNYchS6h = BigInt("1509")
		const addressrlOFqDW = accounts[2]
		const uintRNladX7 = BigInt("623")
		const uintbsPSIgg = BigInt("180")
		const addressGrc3lZe = accounts[1]
		const uintrwnqMoR = BigInt("1890")
		const addressj5Rc2Qs = accounts[6]
		const addressUuCqya9 = accounts[4]
		const uintqYahLls = BigInt("423")
		const addressCX75cbu = accounts[5]
		const uintW486SJA = BigInt("1167")
		const uintxlr0I8c = BigInt("159")
		const addressUD8ovi = accounts[3]
		const addressDkFEy3 = accounts[0]
		const uintO5vR6zt = BigInt("1213")
		const uintlmLqOrH = BigInt("1869")
		const addresslYik6Nv = accounts[3]
		const addressDZTNvR9 = accounts[4]
		const uintRZ4tRY2 = BigInt("944")
		const addressSKN5CTA = accounts[1]
		const boolW2zzTmx = await KPLAYHxFK052.transferWithLock.call(addressVThWh20, uintOQTSFPX, uintUX5alMg, {from: accounts[4]});
		const uint256Ehwfcfj = await KPLAYHxFK052.balanceOf.call(addresspaUaqv, {from: accounts[1]});
//		await KPLAYHxFK052.pause.call({from: accounts[4]});
//		const boolRolPKkt = await KPLAYHxFK052.transfer.call(addressrlOFqDW, uintNYchS6h, {from: accounts[3]});
//		const addresspOwG87e = await KPLAYHxFK052.lock.call(addressGrc3lZe, uintbsPSIgg, uintRNladX7, {from: accounts[1]});
//		const boolAQP1W4l = await KPLAYHxFK052.transferFrom.call(addressUuCqya9, addressj5Rc2Qs, uintrwnqMoR, {from: accounts[0]});
//		const boolnGncsdS = await KPLAYHxFK052.approve.call(addressCX75cbu, uintqYahLls, {from: accounts[1]});
//		const boolvxQT3NP = await KPLAYHxFK052.transferWithLockAfter.call(addressUD8ovi, uintxlr0I8c, uintW486SJA, {from: accounts[2]});
//		const addressLPNS5j9 = await KPLAYHxFK052.freeze.call(addressDkFEy3, {from: accounts[2]});
//		await KPLAYHxFK052.whenPaused.call({from: accounts[3]});
//		const boolSvMyW8P = await KPLAYHxFK052.transferWithLock.call(addresslYik6Nv, uintlmLqOrH, uintO5vR6zt, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256g1i6EG = await KPLAYHxFK052.balanceOf.call(addressDZTNvR9, {from: "0x0000000000000000000000000000000000000001"});
//		const boolGMMUkc = await KPLAYHxFK052.mint.call(addressSKN5CTA, uintRZ4tRY2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolW2zzTmx, true)
		assert.equal(uint256Ehwfcfj, BigInt("0"))
		await expect(KPLAYHxFK052.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})