const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALtmG6mql = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintr3xhFPT = BigInt("1554")
		const addresscrTimDG = accounts[0]
		const uintnAswHlF = BigInt("1868")
		const addressHQkAB0 = accounts[5]
		const addressyDzSPtV = accounts[3]
		const uintfvRORxl = BigInt("1755")
		const addresswh18TMb = accounts[5]
		const boole1XoE8D = await NALtmG6mql.decreaseAllowance.call(addresscrTimDG, uintr3xhFPT, {from: accounts[3]});
		const boolSUESuk = await NALtmG6mql.transferFrom.call(addressyDzSPtV, addressHQkAB0, uintnAswHlF, {from: "0x0000000000000000000000000000000000000001"});
		const boolY987Aev = await NALtmG6mql.transfer.call(addresswh18TMb, uintfvRORxl, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NAL', async () => {
		const NALF2xQ5Hm = await NAL.new({from: accounts[5]});
		const addressQy3818L = accounts[2]
		const uintPi3Ewme = BigInt("1753")
		const uintFx0rwUo = BigInt("728")
		const addressjkzuMaf = accounts[2]
		const addressotl7t7a = accounts[1]
//		const addressm91ymes = await NALF2xQ5Hm.removeAdmin.call(addressQy3818L, {from: accounts[1]});
//		const bool4G2qPQ = await NALF2xQ5Hm.paused.call({from: accounts[4]});
//		const boolJhhZdnt = await NALF2xQ5Hm.transferWithLock.call(addressjkzuMaf, uintFx0rwUo, uintPi3Ewme, {from: accounts[2]});
//		const addressOm3e3DW = await NALF2xQ5Hm.addAdmin.call(addressotl7t7a, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALF2xQ5Hm.removeAdmin.call(addressQy3818L, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const stringXghIzlH = "BWfey6JksnEOYJnIrFldIomPK0uUom1UjGWnuLH8OcFtCVfT8W63zw"
		const stringZPGq3yQ = "pM0pxbMavuFsFmeHMKeENizm9Jaz6wdp8x1E8BDXooa8Z1UGRuRSR0wbEFDcWexuvOS3FFyptS7S9AgJajqqgJaiaR"
		const uinti01txRq = BigInt("219")
		const NALVUiHRz = await NAL.new(stringXghIzlH, stringZPGq3yQ, uinti01txRq, {from: accounts[0]});
		const uintIvLkyU = BigInt("1500")
		const uint8tCs1yl7 = await NALVUiHRz.decimals.call({from: accounts[5]});
		const uint256XtwLFJe = await NALVUiHRz.burn.call(uintIvLkyU, {from: "0x0000000000000000000000000000000000000001"});
		const uint8PDxRHRv = await NALVUiHRz.decimals.call({from: accounts[4]});
		await NALVUiHRz.whenNotPaused.call({from: accounts[3]});
	});

	it('test for NAL', async () => {
		const NALdASaIS = await NAL.new({from: accounts[4]});
		const addressD4vI8Vs = accounts[4]
		const addressx6a2y1f = accounts[1]
		const uintvrGXBou = BigInt("953")
		const uintFM8FQUB = BigInt("61")
		const addresscIbK37x = "0x0000000000000000000000000000000000000001"
		const addressoABxICJ = accounts[1]
//		await NALdASaIS.unpause.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256m8JHoEO = await NALdASaIS.allowance.call(addressx6a2y1f, addressD4vI8Vs, {from: accounts[2]});
//		const boolNDSshLS = await NALdASaIS.transferWithLock.call(addresscIbK37x, uintFM8FQUB, uintvrGXBou, {from: accounts[3]});
//		const boolhNUM2F = await NALdASaIS.freezeAccount.call(addressoABxICJ, {from: accounts[4]});

		await expect(NALdASaIS.unpause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALlwO7EaC = await NAL.new({from: accounts[3]});
		const uintdmXQNQ = BigInt("1899")
		const addresskE1HzbV = accounts[4]
		const stringGL23cA = await NALlwO7EaC.name.call({from: accounts[1]});
//		await NALlwO7EaC.whenNotPaused.call({from: accounts[3]});
//		const boolKi7kd4q = await NALlwO7EaC.transfer.call(addresskE1HzbV, uintdmXQNQ, {from: accounts[0]});

		assert.equal(stringGL23cA, "Personal Token")
		await expect(NALlwO7EaC.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALqr6R5Zl = await NAL.new({from: accounts[1]});
		const uintEuAluZu = BigInt("542")
		const addressPNijrE2 = accounts[3]
		const uintv5ErGoR = BigInt("239")
		const addressgPetFEo = accounts[2]
//		const addresskLfnGmd = await NALqr6R5Zl.burnFrom.call(addressPNijrE2, uintEuAluZu, {from: accounts[1]});
//		const boolHcircKF = await NALqr6R5Zl.decreaseAllowance.call(addressgPetFEo, uintv5ErGoR, {from: accounts[4]});
//		const uint256YUtdDQC = await NALqr6R5Zl.totalSupply.call({from: accounts[2]});
//		const stringoB2FQaS = await NALqr6R5Zl.symbol.call({from: accounts[0]});

		await expect(NALqr6R5Zl.burnFrom.call(addressPNijrE2, uintEuAluZu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALXPdkt6p = await NAL.new({from: accounts[4]});
		const uintYbKCkO = BigInt("1570")
		const uintybtSDgi = BigInt("1819")
		const uintrvljIT = BigInt("263")
		const addresszmcHm3A = accounts[3]
		const uint256QqDU5sW = await NALXPdkt6p.burn.call(uintYbKCkO, {from: accounts[4]});
		const stringFWoBVaj = await NALXPdkt6p.name.call({from: accounts[3]});
//		const boolgcjpsSg = await NALXPdkt6p.lock.call(addresszmcHm3A, uintrvljIT, uintybtSDgi, {from: accounts[1]});

		assert.equal(stringFWoBVaj, "Personal Token")
		await expect(NALXPdkt6p.lock.call(addresszmcHm3A, uintrvljIT, uintybtSDgi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALQaiZQdO = await NAL.new({from: accounts[2]});
		const uinti2tDFyb = BigInt("1512")
		const addressP6ePx1S = accounts[5]
		const addressRIJ9Ocl = accounts[0]
		const addressCdAnyy = accounts[2]
//		const boolrzDKL0X = await NALQaiZQdO.transfer.call(addressP6ePx1S, uinti2tDFyb, {from: accounts[1]});
//		const addresspWhh7c = await NALQaiZQdO.notFrozen.call(addressRIJ9Ocl, {from: accounts[4]});
//		const boolr0B8pwi = await NALQaiZQdO.unfreezeAccount.call(addressCdAnyy, {from: accounts[1]});

		await expect(NALQaiZQdO.transfer.call(addressP6ePx1S, uinti2tDFyb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALXPdkt6p = await NAL.new({from: accounts[4]});
		const uintCAGi59t = BigInt("1558")
		const uintFAPRnLw = BigInt("1704")
		const addressy81swIO = accounts[2]
		const uintlh9YnoR = BigInt("1819")
		const uintxestLLz = BigInt("263")
		const addressS4tgoK = accounts[3]
		const uintbwxizT = BigInt("320")
		const addresswvLaka = "0x0000000000000000000000000000000000000001"
		const uint256QqDU5sW = await NALXPdkt6p.burn.call(uintCAGi59t, {from: accounts[4]});
		const stringFWoBVaj = await NALXPdkt6p.name.call({from: accounts[3]});
//		const boolHCjLubi = await NALXPdkt6p.decreaseAllowance.call(addressy81swIO, uintFAPRnLw, {from: accounts[0]});
//		const boolgcjpsSg = await NALXPdkt6p.lock.call(addressS4tgoK, uintxestLLz, uintlh9YnoR, {from: accounts[1]});
//		const boolSvVWBML = await NALXPdkt6p.transfer.call(addresswvLaka, uintbwxizT, {from: accounts[0]});

		assert.equal(stringFWoBVaj, "Personal Token")
		await expect(NALXPdkt6p.decreaseAllowance.call(addressy81swIO, uintFAPRnLw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALXPdkt6p = await NAL.new({from: accounts[4]});
		const uintNPSsok9 = BigInt("1548")
		const addressqa3eDq7 = "0x0000000000000000000000000000000000000001"
		const stringFWoBVaj = await NALXPdkt6p.name.call({from: accounts[3]});
		const boolb0gBqQx = await NALXPdkt6p.approve.call(addressqa3eDq7, uintNPSsok9, {from: accounts[4]});

		assert.equal(boolb0gBqQx, true)
		assert.equal(stringFWoBVaj, "Personal Token")
	});

	it('test for NAL', async () => {
		const NALXPdkt6p = await NAL.new({from: accounts[4]});
		const uintccx9AP = BigInt("1927")
		const addressDWA3Wt2 = accounts[1]
		const addressL2aENOS = accounts[4]
		const uintZHwLDFH = BigInt("1819")
		const uintGQYsmpc = BigInt("263")
		const addressLqb6zZ3 = accounts[3]
		const addressr4nA8FJ = accounts[2]
		const addressVqgEHGg = accounts[2]
//		const boolwlNufA4 = await NALXPdkt6p.transferFrom.call(addressL2aENOS, addressDWA3Wt2, uintccx9AP, {from: accounts[1]});
//		const boolgcjpsSg = await NALXPdkt6p.lock.call(addressLqb6zZ3, uintGQYsmpc, uintZHwLDFH, {from: accounts[1]});
//		const uint8fpY3qeP = await NALXPdkt6p.decimals.call({from: accounts[5]});
//		const uint256dKLuQB = await NALXPdkt6p.allowance.call(addressVqgEHGg, addressr4nA8FJ, {from: accounts[4]});
//		await NALXPdkt6p.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(NALXPdkt6p.transferFrom.call(addressL2aENOS, addressDWA3Wt2, uintccx9AP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALeZcpkeb = await NAL.new({from: accounts[0]});
		const uintYvxCPwV = BigInt("261")
		const addressNQBDSBo = accounts[4]
		const addressYVS6U0u = "0x0000000000000000000000000000000000000000"
		const uintIvNtS2a = BigInt("1788")
		const addressrt2FoMj = accounts[2]
		const stringWW9djmM = await NALeZcpkeb.name.call({from: accounts[4]});
		const uint256Gkh790j = await NALeZcpkeb.totalSupply.call({from: accounts[2]});
//		const boolAne033N = await NALeZcpkeb.transfer.call(addressNQBDSBo, uintYvxCPwV, {from: accounts[2]});
//		const booluQhWHuL = await NALeZcpkeb.freezeAccount.call(addressYVS6U0u, {from: accounts[3]});
//		const boolX4o9jAL = await NALeZcpkeb.transfer.call(addressrt2FoMj, uintIvNtS2a, {from: accounts[0]});

		assert.equal(stringWW9djmM, "Personal Token")
		assert.equal(uint256Gkh790j, BigInt("2000000000000000000000000000"))
		await expect(NALeZcpkeb.transfer.call(addressNQBDSBo, uintYvxCPwV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALXPdkt6p = await NAL.new({from: accounts[4]});
		const uintTdrL2AC = BigInt("135")
		const addressTYlDt4N = accounts[4]
		const uintS7IUm0C = BigInt("384")
		const stringFWoBVaj = await NALXPdkt6p.name.call({from: accounts[3]});
		const uint256cmDGsgs = await NALXPdkt6p.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolxRLDIvs = await NALXPdkt6p.increaseAllowance.call(addressTYlDt4N, uintTdrL2AC, {from: accounts[1]});
//		const uint256hDPxNtA = await NALXPdkt6p.burn.call(uintS7IUm0C, {from: accounts[0]});

		assert.equal(boolxRLDIvs, true)
		assert.equal(stringFWoBVaj, "Personal Token")
		assert.equal(uint256cmDGsgs, BigInt("2000000000000000000000000000"))
		await expect(NALXPdkt6p.burn.call(uintS7IUm0C, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALQaiZQdO = await NAL.new({from: accounts[2]});
		const addressAxSE6GI = accounts[3]
		const addressq1FLtoG = accounts[1]
		const uintGUMxinq = BigInt("1512")
		const addressD5m65sz = accounts[5]
		const addressrMknTsR = accounts[1]
		const addressXkC0OIT = accounts[2]
		const addresstjITihM = await NALQaiZQdO.transferOwnership.call(addressAxSE6GI, {from: accounts[2]});
		const uint256svN6kas = await NALQaiZQdO.balanceOf.call(addressq1FLtoG, {from: accounts[4]});
//		const boolrzDKL0X = await NALQaiZQdO.transfer.call(addressD5m65sz, uintGUMxinq, {from: accounts[1]});
//		const addresspWhh7c = await NALQaiZQdO.notFrozen.call(addressrMknTsR, {from: accounts[4]});
//		const boolr0B8pwi = await NALQaiZQdO.unfreezeAccount.call(addressXkC0OIT, {from: accounts[1]});

		assert.equal(uint256svN6kas, BigInt("0"))
		await expect(NALQaiZQdO.transfer.call(addressD5m65sz, uintGUMxinq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALXPdkt6p = await NAL.new({from: accounts[4]});
		const addressi3yVTLA = accounts[2]
		const uint0nZlen = BigInt("1775")
		const addressBE191rm = accounts[3]
		const uint256VKFm4MS = await NALXPdkt6p.balanceOf.call(addressi3yVTLA, {from: accounts[2]});
		const stringGRUrEWs = await NALXPdkt6p.symbol.call({from: accounts[4]});
		const stringFWoBVaj = await NALXPdkt6p.name.call({from: accounts[3]});
//		const boolg3Lczhj = await NALXPdkt6p.transfer.call(addressBE191rm, uint0nZlen, {from: accounts[1]});
//		await NALXPdkt6p.whenNotPaused.call({from: accounts[2]});

		assert.equal(stringFWoBVaj, "Personal Token")
		assert.equal(stringGRUrEWs, "NAL")
		assert.equal(uint256VKFm4MS, BigInt("0"))
		await expect(NALXPdkt6p.transfer.call(addressBE191rm, uint0nZlen, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALXPdkt6p = await NAL.new({from: accounts[4]});
		const addressOfj1vW = accounts[5]
		const addressVOfhg1A = accounts[2]
		const stringFWoBVaj = await NALXPdkt6p.name.call({from: accounts[3]});
		const uint256z2pluWd = await NALXPdkt6p.allowance.call(addressVOfhg1A, addressOfj1vW, {from: accounts[3]});

		assert.equal(stringFWoBVaj, "Personal Token")
		assert.equal(uint256z2pluWd, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALsOJRjW1 = await NAL.new({from: accounts[2]});
		const addresse7qesOw = accounts[3]
		const uintoRtSZiK = BigInt("996")
		const addressyoGMYlr = accounts[5]
		const addressCIzWrFy = accounts[3]
		const addressZHFmWPE = accounts[3]
		const boolkRFUprq = await NALsOJRjW1.isAdmin.call(addresse7qesOw, {from: accounts[3]});
//		await NALsOJRjW1.renounceAdmin.call({from: accounts[2]});
//		const boollAJTi0b = await NALsOJRjW1.transferFrom.call(addressCIzWrFy, addressyoGMYlr, uintoRtSZiK, {from: accounts[1]});
//		const boolbEk54VC = await NALsOJRjW1.freezeAccount.call(addressZHFmWPE, {from: accounts[4]});

		assert.equal(boolkRFUprq, false)
		await expect(NALsOJRjW1.renounceAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALsOJRjW1 = await NAL.new({from: accounts[2]});
		const addressxnf6RG3 = accounts[3]
		const uintWsSlq9p = BigInt("983")
		const addressgLmSGQ = accounts[5]
		const addresskhRA7qm = accounts[3]
		const addressS48QJEX = accounts[3]
		const uint8cPZbdJA = await NALsOJRjW1.decimals.call({from: accounts[3]});
		const boolkRFUprq = await NALsOJRjW1.isAdmin.call(addressxnf6RG3, {from: accounts[3]});
//		await NALsOJRjW1.renounceAdmin.call({from: accounts[2]});
//		const boollAJTi0b = await NALsOJRjW1.transferFrom.call(addresskhRA7qm, addressgLmSGQ, uintWsSlq9p, {from: accounts[1]});
//		const boolbEk54VC = await NALsOJRjW1.freezeAccount.call(addressS48QJEX, {from: accounts[4]});

		assert.equal(boolkRFUprq, false)
		assert.equal(uint8cPZbdJA, BigInt("18"))
		await expect(NALsOJRjW1.renounceAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALQaiZQdO = await NAL.new({from: accounts[2]});
		const addressSFqSVNH = accounts[0]
		const addressWpuDmET = accounts[4]
//		const addresscpa8bAb = await NALQaiZQdO.removeAdmin.call(addressSFqSVNH, {from: accounts[2]});
//		const boolr0B8pwi = await NALQaiZQdO.unfreezeAccount.call(addressWpuDmET, {from: accounts[1]});

		await expect(NALQaiZQdO.removeAdmin.call(addressSFqSVNH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALQaiZQdO = await NAL.new({from: accounts[2]});
		const addressTZlZfvr = accounts[4]
		const boolgvTChLf = await NALQaiZQdO.paused.call({from: accounts[4]});
//		const boolr0B8pwi = await NALQaiZQdO.unfreezeAccount.call(addressTZlZfvr, {from: accounts[1]});

		assert.equal(boolgvTChLf, false)
		await expect(NALQaiZQdO.unfreezeAccount.call(addressTZlZfvr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALXPdkt6p = await NAL.new({from: accounts[4]});
		const addressawltAiK = accounts[3]
		const uintD4zp8Dj = BigInt("1647")
		const uintUW3fDK = BigInt("796")
		const addressa126tbN = accounts[0]
		const addresso5sBYmO = accounts[2]
		const uint256VKFm4MS = await NALXPdkt6p.balanceOf.call(addressawltAiK, {from: accounts[2]});
//		const boolFPNSkL1 = await NALXPdkt6p.lock.call(addressa126tbN, uintUW3fDK, uintD4zp8Dj, {from: accounts[4]});
//		const boolx6XDffP = await NALXPdkt6p.isAdmin.call(addresso5sBYmO, {from: accounts[5]});
//		await NALXPdkt6p.whenNotPaused.call({from: accounts[2]});

		assert.equal(uint256VKFm4MS, BigInt("0"))
		await expect(NALXPdkt6p.lock.call(addressa126tbN, uintUW3fDK, uintD4zp8Dj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALXPdkt6p = await NAL.new({from: accounts[4]});
		const addressXdt4Khf = accounts[4]
		const uintan9J9P9 = BigInt("604")
		const addressxXsRPxY = accounts[3]
		const uintFyAWA83 = BigInt("1942")
		const uintmOpmXsV = BigInt("1856")
		const addressy1suIhF = accounts[4]
		const addresswA0KWRx = accounts[2]
		const uint256VKFm4MS = await NALXPdkt6p.balanceOf.call(addressXdt4Khf, {from: accounts[2]});
		const boolP0NAQGm = await NALXPdkt6p.approve.call(addressxXsRPxY, uintan9J9P9, {from: accounts[4]});
		const boolPH0CPFZ = await NALXPdkt6p.transferWithLock.call(addressy1suIhF, uintmOpmXsV, uintFyAWA83, {from: accounts[4]});
//		await NALXPdkt6p.renounceAdmin.call({from: accounts[3]});
//		const addressMsawwI4 = await NALXPdkt6p.upgradeTo.call(addresswA0KWRx, {from: accounts[1]});
//		await NALXPdkt6p.whenNotPaused.call({from: accounts[2]});

		assert.equal(boolP0NAQGm, true)
		assert.equal(boolPH0CPFZ, true)
		assert.equal(uint256VKFm4MS, BigInt("2000000000000000000000000000"))
		await expect(NALXPdkt6p.renounceAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALQaiZQdO = await NAL.new({from: accounts[2]});
		const addressa2TdoAM = accounts[2]
		const uintsNeYwIg = BigInt("1512")
		const addressYwcPXlL = accounts[6]
		const uintGLWvTBU = BigInt("873")
		const addresso3UWGb = accounts[3]
		const boolD0sYxMt = await NALQaiZQdO.isOwner.call(addressa2TdoAM, {from: accounts[1]});
		const stringkH1wv1O = await NALQaiZQdO.symbol.call({from: accounts[2]});
//		const boolrzDKL0X = await NALQaiZQdO.transfer.call(addressYwcPXlL, uintsNeYwIg, {from: accounts[1]});
//		const boolWpewYOf = await NALQaiZQdO.transfer.call(addresso3UWGb, uintGLWvTBU, {from: accounts[3]});

		assert.equal(boolD0sYxMt, true)
		assert.equal(stringkH1wv1O, "NAL")
		await expect(NALQaiZQdO.transfer.call(addressYwcPXlL, uintsNeYwIg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALXPdkt6p = await NAL.new({from: accounts[4]});
		const uintwfvjei8 = BigInt("898")
		const addressKzFWO4g = accounts[5]
		const addressbLEV3qL = accounts[0]
		const addresspLF1q0D = accounts[1]
		const addressz5S4kNQ = accounts[3]
		const addressyLD35HB = accounts[1]
		const uintkdg0KZQ = BigInt("1647")
		const uinthrlLaw = BigInt("796")
		const addressawmVvQj = accounts[0]
		const addressDuNvder = accounts[2]
		const boolrlm3KHs = await NALXPdkt6p.transfer.call(addressKzFWO4g, uintwfvjei8, {from: accounts[4]});
		const addressgt30S1q = await NALXPdkt6p.addAdmin.call(addressbLEV3qL, {from: accounts[4]});
//		const boolU4ocLHv = await NALXPdkt6p.unfreezeAccount.call(addresspLF1q0D, {from: accounts[2]});
//		const uint256VKFm4MS = await NALXPdkt6p.balanceOf.call(addressz5S4kNQ, {from: accounts[2]});
//		const boolQKywZ2 = await NALXPdkt6p.freezeAccount.call(addressyLD35HB, {from: accounts[0]});
//		const boolFPNSkL1 = await NALXPdkt6p.lock.call(addressawmVvQj, uinthrlLaw, uintkdg0KZQ, {from: accounts[4]});
//		const boolx6XDffP = await NALXPdkt6p.isAdmin.call(addressDuNvder, {from: accounts[5]});
//		await NALXPdkt6p.whenNotPaused.call({from: accounts[2]});

		assert.equal(boolrlm3KHs, true)
		await expect(NALXPdkt6p.unfreezeAccount.call(addresspLF1q0D, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALQaiZQdO = await NAL.new({from: accounts[2]});
		const addressRhXbDVy = accounts[4]
		const uintuvssGhT = BigInt("1512")
		const addresskF05ZVI = accounts[7]
//		const boola9SA79P = await NALQaiZQdO.unfreezeAccount.call(addressRhXbDVy, {from: accounts[2]});
//		const boolrzDKL0X = await NALQaiZQdO.transfer.call(addresskF05ZVI, uintuvssGhT, {from: accounts[1]});

		await expect(NALQaiZQdO.unfreezeAccount.call(addressRhXbDVy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})