const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenQ4iJTQH = await MIMOToken.new({from: accounts[4]});
		const uinty8ieZ3G = BigInt("1183")
		const addresscWyhT8H = accounts[2]
		const addressoleB0z = accounts[2]
		const booldxQ44TB = await MIMOTokenQ4iJTQH.approve.call(addresscWyhT8H, uinty8ieZ3G, {from: accounts[0]});
		const uintVUPiCaT = await MIMOTokenQ4iJTQH.balanceOf.call(addressoleB0z, {from: accounts[3]});

		assert.equal(booldxQ44TB, true)
		assert.equal(uintVUPiCaT, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenBsAfJyj = await MIMOToken.new({from: accounts[3]});
		const addresskcPSSEk = "0x0000000000000000000000000000000000000001"
		const addressWHY3cal = accounts[1]
		const uintbJ5BRZ = BigInt("1846")
		const addressYvZiPHA = "0x0000000000000000000000000000000000000001"
		const uintKEZcVI = BigInt("109")
		const uintkp8GOo = BigInt("1874")
		const uintavAg2Dv = await MIMOTokenBsAfJyj.allowance.call(addressWHY3cal, addresskcPSSEk, {from: accounts[1]});
		const boolpzLzb3b = await MIMOTokenBsAfJyj.approve.call(addressYvZiPHA, uintbJ5BRZ, {from: accounts[0]});
		const uint256DSDxzVS = await MIMOTokenBsAfJyj.setMinFee.call(uintKEZcVI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jVdoQS = await MIMOTokenBsAfJyj.getFee.call(uintkp8GOo, {from: accounts[2]});

		assert.equal(boolpzLzb3b, true)
		assert.equal(uint256jVdoQS, BigInt("50000000000000000"))
		assert.equal(uintavAg2Dv, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenKrvWYrN = await MIMOToken.new({from: accounts[2]});
		const uintMiYyb5I = BigInt("2015")
		const addressXtHCxym = accounts[4]
		const uintCpBV0WD = BigInt("1195")
		const addressOmAnT42 = accounts[1]
		const addresswHSEVAY = accounts[0]
		const uintS8maGqr = BigInt("1566")
		const uinted701AP = BigInt("1631")
		const addressj9Gxt72 = "0x0000000000000000000000000000000000000001"
		const addressoTB9sAL = accounts[2]
		const boolVFnsppt = await MIMOTokenKrvWYrN.approve.call(addressXtHCxym, uintMiYyb5I, {from: accounts[0]});
//		const boolQWBEkI = await MIMOTokenKrvWYrN.transfer.call(addressOmAnT42, uintCpBV0WD, {from: accounts[0]});
//		const uintRE0Dhpr = await MIMOTokenKrvWYrN.balanceOf.call(addresswHSEVAY, {from: accounts[0]});
//		const uint256V1ZBaHm = await MIMOTokenKrvWYrN.setMinFee.call(uintS8maGqr, {from: accounts[0]});
//		const boolanJQZwr = await MIMOTokenKrvWYrN.transferFrom.call(addressoTB9sAL, addressj9Gxt72, uinted701AP, {from: accounts[0]});

		assert.equal(boolVFnsppt, true)
		await expect(MIMOTokenKrvWYrN.transfer.call(addressOmAnT42, uintCpBV0WD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenqPcj10h = await MIMOToken.new({from: accounts[1]});
		const uintEukiexD = BigInt("334")
		const uintZaGZaOz = BigInt("820")
		const uint256ZCCMz5A = await MIMOTokenqPcj10h.setFeeRate.call(uintEukiexD, {from: accounts[0]});
		const uint256wAM4ipw = await MIMOTokenqPcj10h.setFeeRate.call(uintZaGZaOz, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenOmURcXf = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintX3Lkrxl = BigInt("749")
		const uintPOXlGc = BigInt("555")
		const addressC64sUL0 = accounts[3]
		const addressldRJNkR = accounts[4]
		const addressTAcUMWs = accounts[2]
		const uintEDSSGSa = BigInt("163")
		const addressacwrzZw = accounts[5]
		const uinto8pZ7gH = await MIMOTokenOmURcXf.totalSupply.call({from: accounts[1]});
		const uint256jPJDCls = await MIMOTokenOmURcXf.setMinFee.call(uintX3Lkrxl, {from: accounts[0]});
		const booltoOhems = await MIMOTokenOmURcXf.transfer.call(addressC64sUL0, uintPOXlGc, {from: accounts[3]});
		const uintrwDDOj = await MIMOTokenOmURcXf.allowance.call(addressTAcUMWs, addressldRJNkR, {from: accounts[5]});
		const boolnitm8UJ = await MIMOTokenOmURcXf.transfer.call(addressacwrzZw, uintEDSSGSa, {from: accounts[0]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenxbSrSZ9 = await MIMOToken.new({from: accounts[2]});
		const addresslzL9TCb = accounts[0]
		const addressTI6Axa = accounts[2]
		const uintqlBq8HJ = BigInt("497")
		const addresssTRzuOP = accounts[5]
		const addressgWPqSUC = accounts[3]
		const addresss8ju2Ar = accounts[5]
		const uintcIhDcev = BigInt("1907")
		const addressl4aaFM6 = accounts[2]
		const uinthQHMaEN = await MIMOTokenxbSrSZ9.totalSupply.call({from: accounts[1]});
		const uintnUlID1b = await MIMOTokenxbSrSZ9.allowance.call(addressTI6Axa, addresslzL9TCb, {from: accounts[0]});
//		const boolDXAeShZ = await MIMOTokenxbSrSZ9.transfer.call(addresssTRzuOP, uintqlBq8HJ, {from: accounts[3]});
//		const uintz3QkdEj = await MIMOTokenxbSrSZ9.allowance.call(addresss8ju2Ar, addressgWPqSUC, {from: "0x0000000000000000000000000000000000000001"});
//		const boolvIrlEFt = await MIMOTokenxbSrSZ9.transfer.call(addressl4aaFM6, uintcIhDcev, {from: "0x0000000000000000000000000000000000000001"});
//		const uintfe0DCOU = await MIMOTokenxbSrSZ9.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uinthQHMaEN, BigInt("16000000000000000000000000"))
		assert.equal(uintnUlID1b, BigInt("0"))
		await expect(MIMOTokenxbSrSZ9.transfer.call(addresssTRzuOP, uintqlBq8HJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenuQ9zX8N = await MIMOToken.new({from: accounts[3]});
		const uintS9fMZpR = BigInt("78")
		const addressZOXKcjN = accounts[1]
		const addressFwZQ0H = accounts[5]
		const uintqbjWNMP = BigInt("1469")
		const uintIg84o3D = BigInt("1847")
		const addressbzMw90q = accounts[3]
		const addressyxNFRNR = accounts[4]
//		const boolcAWbdup = await MIMOTokenuQ9zX8N.transferFrom.call(addressFwZQ0H, addressZOXKcjN, uintS9fMZpR, {from: accounts[1]});
//		const uint256BMrkmOU = await MIMOTokenuQ9zX8N.setFeeRate.call(uintqbjWNMP, {from: accounts[1]});
//		const booldAFeexQ = await MIMOTokenuQ9zX8N.transferFrom.call(addressyxNFRNR, addressbzMw90q, uintIg84o3D, {from: "0x0000000000000000000000000000000000000001"});
//		const uintwDoJdAP = await MIMOTokenuQ9zX8N.totalSupply.call({from: accounts[2]});

		await expect(MIMOTokenuQ9zX8N.transferFrom.call(addressFwZQ0H, addressZOXKcjN, uintS9fMZpR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenuQ9zX8N = await MIMOToken.new({from: accounts[3]});
		const addressKBVtpZI = accounts[1]
		const addressFSlIqvN = accounts[1]
		const uintdp9BW2c = BigInt("1154")
		const address14cbDi = "0x0000000000000000000000000000000000000000"
		const addressblLR5S4 = accounts[3]
		const uinthMTxtn6 = BigInt("392")
		const uinteKJl0S0 = BigInt("78")
		const addressg5kWQJH = accounts[1]
		const addresscc54kLB = accounts[5]
		const uintaVYeekt = BigInt("1469")
		const uintBBq8j54 = BigInt("1847")
		const addressT7C3bGz = accounts[3]
		const addressymP76vU = accounts[4]
		const uintixMcMdR = await MIMOTokenuQ9zX8N.allowance.call(addressFSlIqvN, addressKBVtpZI, {from: accounts[2]});
//		const boolUiZDWN = await MIMOTokenuQ9zX8N.transferFrom.call(addressblLR5S4, address14cbDi, uintdp9BW2c, {from: accounts[2]});
//		const uint2564KerqK = await MIMOTokenuQ9zX8N.setFeeRate.call(uinthMTxtn6, {from: accounts[0]});
//		const boolcAWbdup = await MIMOTokenuQ9zX8N.transferFrom.call(addresscc54kLB, addressg5kWQJH, uinteKJl0S0, {from: accounts[1]});
//		const uint256BMrkmOU = await MIMOTokenuQ9zX8N.setFeeRate.call(uintaVYeekt, {from: accounts[1]});
//		const booldAFeexQ = await MIMOTokenuQ9zX8N.transferFrom.call(addressymP76vU, addressT7C3bGz, uintBBq8j54, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintixMcMdR, BigInt("0"))
		await expect(MIMOTokenuQ9zX8N.transferFrom.call(addressblLR5S4, address14cbDi, uintdp9BW2c, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})