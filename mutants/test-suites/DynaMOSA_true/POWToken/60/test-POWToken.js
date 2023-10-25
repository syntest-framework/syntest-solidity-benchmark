const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenR6yuCT = await POWToken.new({from: accounts[0]});
		const addresshZV6Pn8 = accounts[5]
//		const addresshVMl1Ab = await POWTokenR6yuCT.transferOwnership.call(addresshZV6Pn8, {from: accounts[3]});
//		await POWTokenR6yuCT.whenNotPaused.call({from: accounts[1]});

		await expect(POWTokenR6yuCT.transferOwnership.call(addresshZV6Pn8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenNAj5csd = await POWToken.new({from: accounts[4]});
		const uintYFaJp11 = BigInt("1036")
		const addressakxUOcu = accounts[0]
		const uint256bLvKi4f = await POWTokenNAj5csd.lpStakingRewardRate.call({from: accounts[4]});
//		const addresspfodHA = await POWTokenNAj5csd.inCaseTokensGetStuck.call(addressakxUOcu, uintYFaJp11, {from: accounts[3]});

		assert.equal(uint256bLvKi4f, BigInt("0"))
		await expect(POWTokenNAj5csd.inCaseTokensGetStuck.call(addressakxUOcu, uintYFaJp11, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenIW0NBUv = await POWToken.new({from: accounts[1]});
		const uintSw6jUVb = BigInt("59")
		const uintwAtShUz = BigInt("802")
		const uintj54FMac = BigInt("1484")
		const addresskisVgL = accounts[4]
//		const uint256PWrLSos = await POWTokenIW0NBUv.setElectricCharge.call(uintSw6jUVb, {from: accounts[5]});
//		const uint256JP73HAX = await POWTokenIW0NBUv.addHashRate.call(uintwAtShUz, {from: accounts[2]});
//		const addresshRcCKsq = await POWTokenIW0NBUv.claimReward.call(addresskisVgL, uintj54FMac, {from: accounts[1]});

		await expect(POWTokenIW0NBUv.setElectricCharge.call(uintSw6jUVb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenOwyfnwU = await POWToken.new({from: accounts[0]});
		const addressvX1MYvd = accounts[2]
		const boolGvrmx18 = await POWTokenOwyfnwU.paused.call({from: accounts[5]});
//		await POWTokenOwyfnwU.whenPaused.call({from: accounts[3]});
//		const addressCI0jjlm = await POWTokenOwyfnwU.transferOwnership.call(addressvX1MYvd, {from: accounts[4]});

		assert.equal(boolGvrmx18, false)
		await expect(POWTokenOwyfnwU.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenEZukSNt = await POWToken.new({from: accounts[2]});
		const uintOPIPrYv = BigInt("1486")
		const uintvogKvhE = BigInt("1576")
		const uintJtB9sHO = BigInt("951")
		const uintTao43MN = BigInt("1259")
		const uintZcpeO2a = BigInt("614")
		const addressU21xcgw = accounts[3]
		const addressBLrAItw = accounts[4]
		const addressKuANVfO = accounts[0]
		const addresshegJiiB = accounts[3]
		const addressnnJOcBM = "0x0000000000000000000000000000000000000001"
		const addressV5z9Sps = accounts[2]
		const addressfm0qrN4 = accounts[3]
		const addressKgCfnmL = accounts[4]
		const stringgRphTmq = "msDI5iGzP6nBzqP21xLa7s0zBdFxK12q90b4GrdYKiJvxheaOfE3ZYvWWiRnX3AXo42ge0kvknLHiarNegMW"
		const stringNUkex0 = "rBLujXT9GXYwHNSBcua5aPH7XaFl74V2PXE8zp7e8jqMHhbTkJCY2kM4rbk8H2jDJISvoaJkl98DiMe8Muh5t48skbsC3q"
		const uintjUVKZCi = BigInt("1401")
		const uintmBN3BkT = BigInt("767")
		const bytedxSgWWh = "0x12150305190c0f180814191c061e20080b00120f021709121d1c1c180011110a"
		const bytezfuC3Yl = "0x1700010019060f1815120b071c1e07130d16111e1d080d12101306170b1f1014"
		const uintwqJGCQy = BigInt("68")
		const uintRVOQjWH = BigInt("1263")
		const uintk2LQx3E = BigInt("1050")
		const addressza3UFY = accounts[2]
		const addressOBl473e = accounts[2]
//		const stringq0iQYka = await POWTokenEZukSNt.initialize.call(stringNUkex0, stringgRphTmq, addressKgCfnmL, addressfm0qrN4, addressV5z9Sps, addressnnJOcBM, addresshegJiiB, addressKuANVfO, addressBLrAItw, addressU21xcgw, uintZcpeO2a, uintTao43MN, uintJtB9sHO, uintvogKvhE, uintOPIPrYv, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256NqaJ3Fx = await POWTokenEZukSNt.setDepreciationNumerator.call(uintjUVKZCi, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256BCHau8 = await POWTokenEZukSNt.setElectricCharge.call(uintmBN3BkT, {from: accounts[3]});
//		const addressXTnO39i = await POWTokenEZukSNt.permit.call(addressOBl473e, addressza3UFY, uintk2LQx3E, uintRVOQjWH, uintwqJGCQy, bytezfuC3Yl, bytedxSgWWh, {from: accounts[0]});

		await expect(POWTokenEZukSNt.initialize.call(stringNUkex0, stringgRphTmq, addressKgCfnmL, addressfm0qrN4, addressV5z9Sps, addressnnJOcBM, addresshegJiiB, addressKuANVfO, addressBLrAItw, addressU21xcgw, uintZcpeO2a, uintTao43MN, uintJtB9sHO, uintvogKvhE, uintOPIPrYv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenNAj5csd = await POWToken.new({from: accounts[4]});
		const uinthwGpPWy = BigInt("1148")
		const uintsNthHh3 = BigInt("1036")
		const addressEeL6GoG = accounts[1]
//		const uint256Y1lEpPe = await POWTokenNAj5csd.getCurWorkingRate.call({from: accounts[3]});
//		const uint256bLvKi4f = await POWTokenNAj5csd.lpStakingRewardRate.call({from: accounts[4]});
//		const uint256vbl0R2 = await POWTokenNAj5csd.setDepreciationNumerator.call(uinthwGpPWy, {from: accounts[2]});
//		const addresspfodHA = await POWTokenNAj5csd.inCaseTokensGetStuck.call(addressEeL6GoG, uintsNthHh3, {from: accounts[3]});

		await expect(POWTokenNAj5csd.getCurWorkingRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenEZukSNt = await POWToken.new({from: accounts[2]});
		const uintQ6EDdUA = BigInt("1614")
		const addressPnbpPk0 = accounts[1]
		const uintHyUCsHE = BigInt("1486")
		const uintbxU1EI = BigInt("1576")
		const uintN3jGGzd = BigInt("951")
		const uintmRRKsuy = BigInt("1259")
		const uintiERkmVo = BigInt("614")
		const addressSuahG4x = accounts[4]
		const addresscKNUUe4 = accounts[4]
		const addresshR9kEhS = accounts[0]
		const addresszHsYDOZ = accounts[3]
		const addressrHo41Yz = "0x0000000000000000000000000000000000000001"
		const addresssSlynNH = accounts[2]
		const addressYX03fGr = accounts[3]
		const addressGll0M17 = accounts[5]
		const stringgRphTmq = "msDI5iGzP6nBzqP21xLa7s0zBdFxK12q90b4GrdYKiJvxheaOfE3ZYvWWiRnX3AXo42ge0kvknLHiarNegMW"
		const stringNUkex0 = "rBLujXT9GXYwHNSBcua5aPH7XaFl74V2PXE8zp7e8jqMHhbTkJCY2kM4rbk8H2jDJISvoaJkl98DiMe8Muh5t48skbsC3q"
		const uintKYo3OAY = BigInt("447")
		const addressMSWgsOF = accounts[2]
		const uintOki9cln = BigInt("1401")
		const uintE8o3g20 = BigInt("767")
//		const boolXBppvRU = await POWTokenEZukSNt.transfer.call(addressPnbpPk0, uintQ6EDdUA, {from: accounts[4]});
//		const stringq0iQYka = await POWTokenEZukSNt.initialize.call(stringNUkex0, stringgRphTmq, addressGll0M17, addressYX03fGr, addresssSlynNH, addressrHo41Yz, addresszHsYDOZ, addresshR9kEhS, addresscKNUUe4, addressSuahG4x, uintiERkmVo, uintmRRKsuy, uintN3jGGzd, uintbxU1EI, uintHyUCsHE, {from: "0x0000000000000000000000000000000000000001"});
//		const addressMYBHycZ = await POWTokenEZukSNt.inCaseTokensGetStuck.call(addressMSWgsOF, uintKYo3OAY, {from: accounts[4]});
//		const uint256NqaJ3Fx = await POWTokenEZukSNt.setDepreciationNumerator.call(uintOki9cln, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256L46MR20 = await POWTokenEZukSNt.getCurWorkingRate.call({from: accounts[5]});
//		const uint256BCHau8 = await POWTokenEZukSNt.setElectricCharge.call(uintE8o3g20, {from: accounts[3]});

		await expect(POWTokenEZukSNt.transfer.call(addressPnbpPk0, uintQ6EDdUA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenvxzD9WS = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256Bpx27UG = await POWTokenvxzD9WS.remainingAmount.call({from: accounts[3]});
		await POWTokenvxzD9WS.pause.call({from: accounts[0]});
		await POWTokenvxzD9WS.pause.call({from: accounts[3]});
		const uint256TZtYEOs = await POWTokenvxzD9WS.getIncomeBTCInWeiPerSec.call({from: accounts[3]});
	});

	it('test for POWToken', async () => {
		const POWTokenNAj5csd = await POWToken.new({from: accounts[4]});
		const byteQJTNZSq = "0x160200180e041b111d0c00141904150c1217120120031f00020819121f09001e"
		const bytecCiTU7P = "0x03031714160500170a18161c1f0513100d15170d0c171015190908030d1d0705"
		const uintJNAvWmG = BigInt("87")
		const uintO2sEcmW = BigInt("887")
		const uintCVcIGAx = BigInt("427")
		const addressZ3dsh5S = accounts[0]
		const addressvLaiOh0 = accounts[3]
		const uintw9rLtvZ = BigInt("1693")
		const uintvtBJOoo = BigInt("525")
		const uint256bLvKi4f = await POWTokenNAj5csd.lpStakingRewardRate.call({from: accounts[4]});
//		const addresslnsBL1P = await POWTokenNAj5csd.permit.call(addressvLaiOh0, addressZ3dsh5S, uintCVcIGAx, uintO2sEcmW, uintJNAvWmG, bytecCiTU7P, byteQJTNZSq, {from: accounts[0]});
//		const uint256Iel76VX = await POWTokenNAj5csd.setMinerPoolFeeNumerator.call(uintw9rLtvZ, {from: accounts[4]});
//		await POWTokenNAj5csd.onlyOwner.call({from: accounts[3]});
//		const uint256DQJDxm = await POWTokenNAj5csd.setElectricCharge.call(uintvtBJOoo, {from: accounts[4]});

		assert.equal(uint256bLvKi4f, BigInt("0"))
		await expect(POWTokenNAj5csd.permit.call(addressvLaiOh0, addressZ3dsh5S, uintCVcIGAx, uintO2sEcmW, uintJNAvWmG, bytecCiTU7P, byteQJTNZSq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenNAj5csd = await POWToken.new({from: accounts[4]});
//		const uint256JAYzDUe = await POWTokenNAj5csd.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});
//		const uint256bLvKi4f = await POWTokenNAj5csd.lpStakingRewardRate.call({from: accounts[4]});

		await expect(POWTokenNAj5csd.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenEZukSNt = await POWToken.new({from: accounts[2]});
		const uintuNLA9E8 = BigInt("1085")
		const addressLvHUtT = accounts[5]
		const uintbrxH26J = BigInt("1486")
		const uintVnKR481 = BigInt("1576")
		const uintB58FgFn = BigInt("951")
		const uintaBkRrDY = BigInt("1259")
		const uintLQytyiG = BigInt("614")
		const addressUVQWj1 = accounts[3]
		const addressz6LebWV = accounts[4]
		const addressvjdYIG5 = accounts[0]
		const addressOHxgTcH = accounts[3]
		const addressAL9NIka = "0x0000000000000000000000000000000000000001"
		const addresscL0lomY = accounts[2]
		const addresss8qEQXO = accounts[3]
		const addresseyHvWj = accounts[4]
		const stringgRphTmq = "msDI5iGzP6nBzqP21xLa7s0zBdFxK12q90b4GrdYKiJvxheaOfE3ZYvWWiRnX3AXo42ge0kvknLHiarNegMW"
		const stringNUkex0 = "rBLujXT9GXYwHNSBcua5aPH7XaFl74V2PXE8zp7e8jqMHhbTkJCY2kM4rbk8H2jDJISvoaJkl98DiMe8Muh5t48skbsC3q"
		const uintK1E4azK = BigInt("1402")
		const uintCP2p3kx = BigInt("1122")
		const addressITpTUtr = accounts[3]
		const bytezCyzOWC = "0x12150305190c0f180814191c061e20080b00120f021709121d1c1c180011110a"
		const bytekubFtUg = "0x1700010019060f1815120b071c1e07130d16111e1d080d12101306170b1f1014"
		const uintZBb6LsJ = BigInt("68")
		const uintJJ8TOjU = BigInt("1011")
		const uintX3twNKh = BigInt("1050")
		const addressy0SbsFv = accounts[2]
		const addresssgU31W = accounts[2]
		const uint256BDijsVk = await POWTokenEZukSNt.remainingAmount.call({from: accounts[2]});
//		const addressa4kTtbQ = await POWTokenEZukSNt.claimReward.call(addressLvHUtT, uintuNLA9E8, {from: "0x0000000000000000000000000000000000000001"});
//		const stringq0iQYka = await POWTokenEZukSNt.initialize.call(stringNUkex0, stringgRphTmq, addresseyHvWj, addresss8qEQXO, addresscL0lomY, addressAL9NIka, addressOHxgTcH, addressvjdYIG5, addressz6LebWV, addressUVQWj1, uintLQytyiG, uintaBkRrDY, uintB58FgFn, uintVnKR481, uintbrxH26J, {from: "0x0000000000000000000000000000000000000001"});
//		await POWTokenEZukSNt.updateIncomeRate.call({from: accounts[1]});
//		const uint256NqaJ3Fx = await POWTokenEZukSNt.setDepreciationNumerator.call(uintK1E4azK, {from: "0x0000000000000000000000000000000000000001"});
//		const addresszm8ZQNe = await POWTokenEZukSNt.claimIncome.call(addressITpTUtr, uintCP2p3kx, {from: accounts[2]});
//		const addressXTnO39i = await POWTokenEZukSNt.permit.call(addresssgU31W, addressy0SbsFv, uintX3twNKh, uintJJ8TOjU, uintZBb6LsJ, bytekubFtUg, bytezCyzOWC, {from: accounts[0]});

		assert.equal(uint256BDijsVk, BigInt("0"))
		await expect(POWTokenEZukSNt.claimReward.call(addressLvHUtT, uintuNLA9E8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenEZukSNt = await POWToken.new({from: accounts[2]});
		const uintOjRDuHP = BigInt("722")
		const addresslKk9x0j = accounts[3]
		const uintAdi31V = BigInt("1486")
		const uintMCEXntJ = BigInt("1576")
		const uintlezm3CW = BigInt("951")
		const uintoyT33h = BigInt("1259")
		const uintHnMGufZ = BigInt("614")
		const addresswRTcdq6 = accounts[3]
		const addressyw5CzWw = accounts[4]
		const addressBSuekp8 = accounts[0]
		const address5ZKUBE = accounts[3]
		const addresst6v1IgO = "0x0000000000000000000000000000000000000001"
		const addressfaHzoov = accounts[2]
		const addressaBTPikE = accounts[3]
		const addressxdE5AYe = accounts[4]
		const stringgRphTmq = "msDI5iGzP6nBzqP21xLa7s0zBdFxK12q90b4GrdYKiJvxheaOfE3ZYvWWiRnX3AXo42ge0kvknLHiarNegMW"
		const stringNUkex0 = "rBLujXT9GXYwHNSBcua5aPH7XaFl74V2PXE8zp7e8jqMHhbTkJCY2kM4rbk8H2jDJISvoaJkl98DiMe8Muh5t48skbsC3q"
		const uintfVSfct7 = BigInt("1401")
		const uint6RSgdl = BigInt("767")
//		const addressij1rtR = await POWTokenEZukSNt.mint.call(addresslKk9x0j, uintOjRDuHP, {from: accounts[3]});
//		const stringq0iQYka = await POWTokenEZukSNt.initialize.call(stringNUkex0, stringgRphTmq, addressxdE5AYe, addressaBTPikE, addressfaHzoov, addresst6v1IgO, address5ZKUBE, addressBSuekp8, addressyw5CzWw, addresswRTcdq6, uintHnMGufZ, uintoyT33h, uintlezm3CW, uintMCEXntJ, uintAdi31V, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256NqaJ3Fx = await POWTokenEZukSNt.setDepreciationNumerator.call(uintfVSfct7, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256wpRFd0u = await POWTokenEZukSNt.getHistoryWorkingRate.call({from: accounts[3]});
//		const uint256BCHau8 = await POWTokenEZukSNt.setElectricCharge.call(uint6RSgdl, {from: accounts[3]});

		await expect(POWTokenEZukSNt.mint.call(addresslKk9x0j, uintOjRDuHP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenNAj5csd = await POWToken.new({from: accounts[4]});
//		const uint256tl1I6Zz = await POWTokenNAj5csd.getIncomeBTCInWeiPerSec.call({from: accounts[1]});
//		const uint256bLvKi4f = await POWTokenNAj5csd.lpStakingRewardRate.call({from: accounts[4]});

		await expect(POWTokenNAj5csd.getIncomeBTCInWeiPerSec.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenNAj5csd = await POWToken.new({from: accounts[4]});
		const uintX2iGVLV = BigInt("1377")
		const addressqOLfVdR = accounts[3]
		const addressPKQ89ol = accounts[3]
//		const boolOITQaUa = await POWTokenNAj5csd.transferFrom.call(addressPKQ89ol, addressqOLfVdR, uintX2iGVLV, {from: accounts[3]});
//		const uint256bLvKi4f = await POWTokenNAj5csd.lpStakingRewardRate.call({from: accounts[4]});
//		await POWTokenNAj5csd.whenNotPaused.call({from: accounts[2]});

		await expect(POWTokenNAj5csd.transferFrom.call(addressPKQ89ol, addressqOLfVdR, uintX2iGVLV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenDpBO7XX = await POWToken.new({from: accounts[1]});
		const uintMMUcnU9 = BigInt("566")
		const addressAzeEs7T = accounts[2]
		const uintjb7WBwU = BigInt("1109")
		const uintY0YbAa = BigInt("113")
		const addressmImaijF = accounts[2]
		const uintfukBOQ2 = BigInt("1002")
		const boolBfEu5z = await POWTokenDpBO7XX.approve.call(addressAzeEs7T, uintMMUcnU9, {from: accounts[4]});
//		const uint256q3LbeDH = await POWTokenDpBO7XX.setElectricCharge.call(uintjb7WBwU, {from: accounts[4]});
//		const uint256nD86E5N = await POWTokenDpBO7XX.stakingRewardRate.call({from: accounts[0]});
//		const boolsC99dJP = await POWTokenDpBO7XX.approve.call(addressmImaijF, uintY0YbAa, {from: accounts[5]});
//		const uint256rw7rxa4 = await POWTokenDpBO7XX.notifyRewardAmount.call(uintfukBOQ2, {from: accounts[0]});

		assert.equal(boolBfEu5z, true)
		await expect(POWTokenDpBO7XX.setElectricCharge.call(uintjb7WBwU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenEZukSNt = await POWToken.new({from: accounts[2]});
		const uintIPR2liz = BigInt("1987")
		const addressrg2jyKx = accounts[3]
		const uintEFrB1oj = BigInt("765")
//		const uint256wpRFd0u = await POWTokenEZukSNt.getHistoryWorkingRate.call({from: accounts[3]});
//		const address09ZFR9 = await POWTokenEZukSNt.claimIncome.call(addressrg2jyKx, uintIPR2liz, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256BCHau8 = await POWTokenEZukSNt.setElectricCharge.call(uintEFrB1oj, {from: accounts[3]});

		await expect(POWTokenEZukSNt.getHistoryWorkingRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenIkzZK1 = await POWToken.new({from: accounts[2]});
		const uintRvgv65G = BigInt("1800")
		const addressWtnzdsC = accounts[0]
		const uintswVBZS8 = BigInt("756")
		const byteySYU6j = "0x020c1d021a09100d0b050106071b16091510030e0a0910071f1a1d141f030b11"
		const byteNoD9Zpi = "0x021d05091f0f01041d17060c170808170b011e000218021c1303141b170b1319"
		const uintpQwTJkR = BigInt("243")
		const uintgEembwY = BigInt("959")
		const uintBa58mU = BigInt("282")
		const addressyEPdMfN = accounts[5]
		const addressn3JhAA = accounts[3]
//		await POWTokenIkzZK1.updateIncomeRate.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressWgogUNH = await POWTokenIkzZK1.claimIncome.call(addressWtnzdsC, uintRvgv65G, {from: accounts[3]});
//		const uint256VaePtq = await POWTokenIkzZK1.setWorkingHashRate.call(uintswVBZS8, {from: accounts[1]});
//		const addressJjXdv5S = await POWTokenIkzZK1.permit.call(addressn3JhAA, addressyEPdMfN, uintBa58mU, uintgEembwY, uintpQwTJkR, byteNoD9Zpi, byteySYU6j, {from: accounts[4]});

		await expect(POWTokenIkzZK1.updateIncomeRate.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenEZukSNt = await POWToken.new({from: accounts[2]});
		const uintWQPTl7Y = BigInt("1987")
		const addressuhAqHg9 = accounts[4]
		const uintbrM5Voy = BigInt("765")
//		const address09ZFR9 = await POWTokenEZukSNt.claimIncome.call(addressuhAqHg9, uintWQPTl7Y, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256BCHau8 = await POWTokenEZukSNt.setElectricCharge.call(uintbrM5Voy, {from: accounts[3]});

		await expect(POWTokenEZukSNt.claimIncome.call(addressuhAqHg9, uintWQPTl7Y, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})