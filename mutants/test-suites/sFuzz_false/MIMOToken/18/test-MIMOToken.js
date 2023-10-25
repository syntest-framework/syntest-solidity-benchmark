const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokengMj2Y2s = await MIMOToken.new({from: accounts[0]});
		const uintWrdHTtM = BigInt("1417")
		const addressulJ8zTg = accounts[0]
		const uintTiRh2Mf = BigInt("1709")
		const addressoEJ4Z1T = accounts[4]
		const addressfq2MveN = accounts[2]
//		const booli0p90Rt = await MIMOTokengMj2Y2s.transfer.call(addressulJ8zTg, uintWrdHTtM, {from: accounts[5]});
//		const boolW38tJTm = await MIMOTokengMj2Y2s.transferFrom.call(addressfq2MveN, addressoEJ4Z1T, uintTiRh2Mf, {from: accounts[2]});
//		const uintck3fG2f = await MIMOTokengMj2Y2s.totalSupply.call({from: accounts[1]});

		await expect(MIMOTokengMj2Y2s.transfer.call(addressulJ8zTg, uintWrdHTtM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenKAAjKr = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintx9k98ry = BigInt("377")
		const addressyds2fcf = accounts[2]
		const uintEZS8hc4 = BigInt("1061")
		const addressucWO7D6 = accounts[2]
		const boolzHP4MeI = await MIMOTokenKAAjKr.approve.call(addressyds2fcf, uintx9k98ry, {from: accounts[4]});
		const uintBpDNbIT = await MIMOTokenKAAjKr.totalSupply.call({from: accounts[4]});
		const boolEFkAV3y = await MIMOTokenKAAjKr.transfer.call(addressucWO7D6, uintEZS8hc4, {from: accounts[1]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenEG2rRY5 = await MIMOToken.new({from: accounts[3]});
		const uintXTlJT99 = BigInt("1954")
		const addressQKlNwAD = accounts[3]
		const address62TPQZ = accounts[5]
		const uintTS7jBJ = BigInt("653")
		const addressHT7wbHF = accounts[4]
		const addressbzs19nS = accounts[5]
		const uintfNnGsv = BigInt("433")
		const addressL0yyi4Q = accounts[2]
		const uint256A5pRit3 = await MIMOTokenEG2rRY5.setFeeRate.call(uintXTlJT99, {from: accounts[1]});
		const uintveibLtT = await MIMOTokenEG2rRY5.allowance.call(address62TPQZ, addressQKlNwAD, {from: "0x0000000000000000000000000000000000000001"});
		const boolUSMizyK = await MIMOTokenEG2rRY5.approve.call(addressHT7wbHF, uintTS7jBJ, {from: accounts[5]});
		const uinto35zpL3 = await MIMOTokenEG2rRY5.balanceOf.call(addressbzs19nS, {from: accounts[1]});
		const booljkkxWfv = await MIMOTokenEG2rRY5.approve.call(addressL0yyi4Q, uintfNnGsv, {from: accounts[1]});

		assert.equal(boolUSMizyK, true)
		assert.equal(booljkkxWfv, true)
		assert.equal(uinto35zpL3, BigInt("0"))
		assert.equal(uintveibLtT, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenhN6H1Yf = await MIMOToken.new({from: accounts[5]});
		const addressqH1roP = "0x0000000000000000000000000000000000000001"
		const addressIFuMW0 = accounts[3]
		const addressbT4bC8d = accounts[4]
		const addressKS3rAOC = accounts[3]
		const uintA3tFTCH = await MIMOTokenhN6H1Yf.allowance.call(addressIFuMW0, addressqH1roP, {from: accounts[3]});
		const uintovBQH2L = await MIMOTokenhN6H1Yf.allowance.call(addressKS3rAOC, addressbT4bC8d, {from: accounts[0]});
		const uintWg2qAYf = await MIMOTokenhN6H1Yf.totalSupply.call({from: accounts[3]});

		assert.equal(uintA3tFTCH, BigInt("0"))
		assert.equal(uintWg2qAYf, BigInt("16000000000000000000000000"))
		assert.equal(uintovBQH2L, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenfqhtAcK = await MIMOToken.new({from: accounts[1]});
		const addressV5mxuC = accounts[1]
		const uintQFyM0tk = BigInt("378")
		const addressd9IkymI = accounts[4]
		const addressPCvsJ31 = accounts[2]
		const uintWwQcIZb = await MIMOTokenfqhtAcK.totalSupply.call({from: accounts[0]});
		const uintIsbhyKr = await MIMOTokenfqhtAcK.balanceOf.call(addressV5mxuC, {from: accounts[0]});
//		const booloCtojnN = await MIMOTokenfqhtAcK.transferFrom.call(addressPCvsJ31, addressd9IkymI, uintQFyM0tk, {from: accounts[3]});

		assert.equal(uintIsbhyKr, BigInt("0"))
		assert.equal(uintWwQcIZb, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenfqhtAcK.transferFrom.call(addressPCvsJ31, addressd9IkymI, uintQFyM0tk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenOocQOqe = await MIMOToken.new({from: accounts[0]});
		const uinthETHaj = BigInt("759")
		const uintVEkaX5g = BigInt("272")
		const addressgFKTGc = accounts[3]
		const uintCwokhjH = BigInt("114")
		const uint256Q9okyl = await MIMOTokenOocQOqe.getFee.call(uinthETHaj, {from: accounts[2]});
		const uintPZPWWDY = await MIMOTokenOocQOqe.totalSupply.call({from: accounts[0]});
//		const booltbOmytp = await MIMOTokenOocQOqe.transfer.call(addressgFKTGc, uintVEkaX5g, {from: accounts[4]});
//		const uint256dmQSVk5 = await MIMOTokenOocQOqe.getFee.call(uintCwokhjH, {from: accounts[3]});

		assert.equal(uint256Q9okyl, BigInt("50000000000000000"))
		assert.equal(uintPZPWWDY, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenOocQOqe.transfer.call(addressgFKTGc, uintVEkaX5g, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokentjX0NoY = await MIMOToken.new({from: accounts[4]});
		const addressV30QvjK = accounts[2]
		const uintSuMDAPm = BigInt("763")
		const uintLUi08lb = BigInt("20")
		const addressfIeXWZ = accounts[6]
		const addressbe1Jx0 = accounts[3]
		const uintCyNxOU7 = await MIMOTokentjX0NoY.balanceOf.call(addressV30QvjK, {from: accounts[3]});
		const uint256mAFmDoV = await MIMOTokentjX0NoY.setMinFee.call(uintSuMDAPm, {from: accounts[1]});
//		const boolA5hjNmO = await MIMOTokentjX0NoY.transferFrom.call(addressbe1Jx0, addressfIeXWZ, uintLUi08lb, {from: accounts[3]});

		assert.equal(uintCyNxOU7, BigInt("0"))
		await expect(MIMOTokentjX0NoY.transferFrom.call(addressbe1Jx0, addressfIeXWZ, uintLUi08lb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})