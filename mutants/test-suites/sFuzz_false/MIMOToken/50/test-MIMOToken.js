const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenNcvUb1 = await MIMOToken.new({from: accounts[0]});
		const uinte9LI5qL = BigInt("1540")
		const addresshdQyHp7 = accounts[1]
		const uintcNVHtny = BigInt("888")
		const addressXqqidDa = accounts[2]
		const uintXM8twj = BigInt("1373")
		const addresspeGzuxp = accounts[4]
		const addresstYDsYuu = accounts[2]
		const uintAyPRtfK = BigInt("1281")
		const addressJ74f3dd = accounts[2]
		const addressDOZmTd8 = accounts[3]
		const uintA4utO3T = BigInt("111")
		const addresseiB1dxt = accounts[2]
		const addressL425Ziy = "0x0000000000000000000000000000000000000001"
//		const boolPlr0zgx = await MIMOTokenNcvUb1.transfer.call(addresshdQyHp7, uinte9LI5qL, {from: accounts[0]});
//		const boolO47sHis = await MIMOTokenNcvUb1.approve.call(addressXqqidDa, uintcNVHtny, {from: accounts[4]});
//		const boolVPUW2Sm = await MIMOTokenNcvUb1.transferFrom.call(addresstYDsYuu, addresspeGzuxp, uintXM8twj, {from: accounts[3]});
//		const boolMMyz3y5 = await MIMOTokenNcvUb1.transferFrom.call(addressDOZmTd8, addressJ74f3dd, uintAyPRtfK, {from: accounts[2]});
//		const boolj4qmLpq = await MIMOTokenNcvUb1.transferFrom.call(addressL425Ziy, addresseiB1dxt, uintA4utO3T, {from: accounts[0]});

		await expect(MIMOTokenNcvUb1.transfer.call(addresshdQyHp7, uinte9LI5qL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenZC5RcJm = await MIMOToken.new({from: accounts[3]});
		const uinty74Q77e = BigInt("2011")
		const addressmZItNdD = accounts[0]
		const addressiwz6Z9N = accounts[5]
		const uintvdgFYWP = BigInt("1092")
		const uintFdLjFka = BigInt("1717")
		const addressC5Kumf9 = accounts[0]
		const uintKJpX5P7 = await MIMOTokenZC5RcJm.totalSupply.call({from: accounts[1]});
		const boolBcI7sus = await MIMOTokenZC5RcJm.approve.call(addressmZItNdD, uinty74Q77e, {from: accounts[2]});
		const uintWDpxNCS = await MIMOTokenZC5RcJm.balanceOf.call(addressiwz6Z9N, {from: accounts[2]});
		const uint256hYGoiH1 = await MIMOTokenZC5RcJm.getFee.call(uintvdgFYWP, {from: accounts[2]});
		const uint256eEq5KsQ = await MIMOTokenZC5RcJm.getFee.call(uintFdLjFka, {from: accounts[2]});
		const uintNY6hxES = await MIMOTokenZC5RcJm.balanceOf.call(addressC5Kumf9, {from: accounts[3]});

		assert.equal(boolBcI7sus, true)
		assert.equal(uint256eEq5KsQ, BigInt("50000000000000000"))
		assert.equal(uint256hYGoiH1, BigInt("50000000000000000"))
		assert.equal(uintKJpX5P7, BigInt("16000000000000000000000000"))
		assert.equal(uintNY6hxES, BigInt("0"))
		assert.equal(uintWDpxNCS, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenlgl0GQ2 = await MIMOToken.new({from: accounts[2]});
		const uintKQMVOvO = BigInt("1205")
		const uinto9jBmby = BigInt("1923")
		const addressPC4hFOw = accounts[2]
		const uintvGaHUhH = BigInt("1749")
		const addressoSHWw5H = accounts[1]
		const addressmHnVFDu = accounts[1]
		const addressoQBevj1 = accounts[5]
		const addressZZs0aFM = accounts[1]
		const uint256egSAT9 = await MIMOTokenlgl0GQ2.setMinFee.call(uintKQMVOvO, {from: accounts[3]});
//		const boolvBjkjY = await MIMOTokenlgl0GQ2.transfer.call(addressPC4hFOw, uinto9jBmby, {from: accounts[1]});
//		const uintx4Ioseq = await MIMOTokenlgl0GQ2.totalSupply.call({from: accounts[2]});
//		const uint256hdvkhh4 = await MIMOTokenlgl0GQ2.setMinFee.call(uintvGaHUhH, {from: accounts[4]});
//		const uintDMsCpnP = await MIMOTokenlgl0GQ2.allowance.call(addressmHnVFDu, addressoSHWw5H, {from: accounts[0]});
//		const uintL1bwgwB = await MIMOTokenlgl0GQ2.allowance.call(addressZZs0aFM, addressoQBevj1, {from: accounts[2]});

		await expect(MIMOTokenlgl0GQ2.transfer.call(addressPC4hFOw, uinto9jBmby, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenKfjn4NH = await MIMOToken.new({from: accounts[0]});
		const addresseyf32Qp = accounts[3]
		const addressdQAwABs = accounts[1]
		const uintqfT3UTJ = BigInt("1846")
		const uintp0PCcqp = await MIMOTokenKfjn4NH.allowance.call(addressdQAwABs, addresseyf32Qp, {from: accounts[0]});
		const uint256zHf9mK8 = await MIMOTokenKfjn4NH.setFeeRate.call(uintqfT3UTJ, {from: accounts[0]});
		const uinte2w17q = await MIMOTokenKfjn4NH.totalSupply.call({from: accounts[0]});

		assert.equal(uinte2w17q, BigInt("16000000000000000000000000"))
		assert.equal(uintp0PCcqp, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenmdK9EW = await MIMOToken.new({from: accounts[2]});
		const uintnWA7uic = BigInt("898")
		const addresseW3eEYP = accounts[0]
		const addressGVBzuSs = accounts[0]
		const uintB9toaBk = BigInt("1014")
		const addresswILbNN3 = accounts[3]
		const addresswWZdj2y = "0x0000000000000000000000000000000000000001"
		const uintjyPyFq7 = BigInt("849")
		const addressI2uBKA0 = accounts[2]
		const boolggXofsQ = await MIMOTokenmdK9EW.approve.call(addresseW3eEYP, uintnWA7uic, {from: accounts[3]});
		const uintNwrd3QI = await MIMOTokenmdK9EW.balanceOf.call(addressGVBzuSs, {from: accounts[5]});
		const uintzOZSx8u = await MIMOTokenmdK9EW.totalSupply.call({from: accounts[0]});
//		const boolWIO6w8z = await MIMOTokenmdK9EW.transferFrom.call(addresswWZdj2y, addresswILbNN3, uintB9toaBk, {from: accounts[0]});
//		const boolD3a3iU = await MIMOTokenmdK9EW.approve.call(addressI2uBKA0, uintjyPyFq7, {from: accounts[0]});

		assert.equal(boolggXofsQ, true)
		assert.equal(uintNwrd3QI, BigInt("0"))
		assert.equal(uintzOZSx8u, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenmdK9EW.transferFrom.call(addresswWZdj2y, addresswILbNN3, uintB9toaBk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenn4LaBSm = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSkI5ytJ = BigInt("197")
		const uintg3FVbsl = BigInt("1591")
		const addressp5AlO5x = accounts[4]
		const uintdVRWqzc = BigInt("313")
		const uint7vStOL = BigInt("92")
		const addressJTbwnbP = accounts[1]
		const addressSuQEDjn = accounts[1]
		const addressUFTLRlg = accounts[1]
		const addressKLu9jp = accounts[1]
		const uint256dzUDVo = await MIMOTokenn4LaBSm.setMinFee.call(uintSkI5ytJ, {from: accounts[4]});
		const boolSMJgNH = await MIMOTokenn4LaBSm.transfer.call(addressp5AlO5x, uintg3FVbsl, {from: accounts[3]});
		const uint256YRdwuKG = await MIMOTokenn4LaBSm.setMinFee.call(uintdVRWqzc, {from: accounts[4]});
		const booln31xcGa = await MIMOTokenn4LaBSm.approve.call(addressJTbwnbP, uint7vStOL, {from: accounts[0]});
		const uintFOABAtW = await MIMOTokenn4LaBSm.allowance.call(addressUFTLRlg, addressSuQEDjn, {from: accounts[4]});
		const uintML84uaZ = await MIMOTokenn4LaBSm.balanceOf.call(addressKLu9jp, {from: accounts[3]});
	});
})