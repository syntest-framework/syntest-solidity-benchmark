const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenKZ6wnOK = await ThriftToken.new({from: accounts[4]});
		const uintKm6p6PK = BigInt("1405")
		const addressLNmcV2T = accounts[2]
		const uintd5IWBEa = BigInt("1128")
		const addressyq61Gi4 = accounts[1]
		const addressDo62oqX = accounts[1]
		const addressZu9zlb = accounts[2]
		const uintDDPwhQP = BigInt("797")
		const addresst2lq5hi = accounts[0]
		const uintAmLMedM = BigInt("1253")
		const addressji7eiep = accounts[2]
		const boolrW2dTAy = await ThriftTokenKZ6wnOK.transfer.call(addressLNmcV2T, uintKm6p6PK, {from: accounts[3]});
		const booll4X5y4V = await ThriftTokenKZ6wnOK.transferFrom.call(addressDo62oqX, addressyq61Gi4, uintd5IWBEa, {from: accounts[0]});
		const addressSx4sBMB = await ThriftTokenKZ6wnOK.transferOwnership.call(addressZu9zlb, {from: accounts[0]});
		const boolWU1kLVN = await ThriftTokenKZ6wnOK.approve.call(addresst2lq5hi, uintDDPwhQP, {from: accounts[0]});
		const boolPfTdVLD = await ThriftTokenKZ6wnOK.decreaseApproval.call(addressji7eiep, uintAmLMedM, {from: accounts[3]});

		await expect(ThriftTokenKZ6wnOK.transfer.call(addressLNmcV2T, uintKm6p6PK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenlTvxDYi = await ThriftToken.new({from: accounts[0]});
		const uintjYNlE4l = BigInt("776")
		const addresskJNN4Xa = accounts[3]
		const addresstrkvyDC = accounts[4]
		const uint5AgK6Z = BigInt("2015")
		const addressA4zHZAa = "0x0000000000000000000000000000000000000001"
		const uintaz1ERaW = BigInt("25")
		const addressL4eHCf0 = accounts[3]
		const uintvaBxM5A = BigInt("1351")
		const addressJQQM4OB = accounts[1]
		const addressW4polYO = accounts[2]
		const boolLERUZX = await ThriftTokenlTvxDYi.transferFrom.call(addresstrkvyDC, addresskJNN4Xa, uintjYNlE4l, {from: accounts[0]});
		const boolxdkOAcO = await ThriftTokenlTvxDYi.approve.call(addressA4zHZAa, uint5AgK6Z, {from: accounts[1]});
		const boolm2ESW4 = await ThriftTokenlTvxDYi.transfer.call(addressL4eHCf0, uintaz1ERaW, {from: accounts[0]});
		const boolXZmMxXm = await ThriftTokenlTvxDYi.increaseApproval.call(addressJQQM4OB, uintvaBxM5A, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nFRZakR = await ThriftTokenlTvxDYi.balanceOf.call(addressW4polYO, {from: accounts[3]});

		await expect(ThriftTokenlTvxDYi.transferFrom.call(addresstrkvyDC, addresskJNN4Xa, uintjYNlE4l, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenSGku8ar = await ThriftToken.new({from: accounts[3]});
		const uintMbVsE5 = BigInt("725")
		const addressbZZwryj = accounts[4]
		const addressN3F0rJW = accounts[2]
		const uinth94QWFt = BigInt("1351")
		const addressNtZQUyS = accounts[4]
		const addressVahvTTK = accounts[3]
		const uintloJ5LmE = BigInt("119")
		const addressVIR0aCu = accounts[4]
		const addresskpievb = accounts[4]
		const boolBFcNmJJ = await ThriftTokenSGku8ar.approve.call(addressbZZwryj, uintMbVsE5, {from: accounts[2]});
		const addressny6NC1J = await ThriftTokenSGku8ar.transferOwnership.call(addressN3F0rJW, {from: accounts[4]});
		const boolawgOdBS = await ThriftTokenSGku8ar.decreaseApproval.call(addressNtZQUyS, uinth94QWFt, {from: accounts[5]});
		const uint256DP1iEaM = await ThriftTokenSGku8ar.transferableTokens.call(addressVahvTTK, {from: accounts[5]});
		const boolw4nbYzg = await ThriftTokenSGku8ar.transferFrom.call(addresskpievb, addressVIR0aCu, uintloJ5LmE, {from: accounts[4]});

		assert.equal(boolBFcNmJJ, true)
		await expect(ThriftTokenSGku8ar.transferOwnership.call(addressN3F0rJW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenD59zMN3 = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressOb7ThCr = accounts[0]
		const uintZYtauJ5 = BigInt("30")
		const addressDMBzefe = accounts[0]
		const uinthjPexR = BigInt("1480")
		const addressCXKv7i = "0x0000000000000000000000000000000000000001"
		const uintxRpFq5j = BigInt("273")
		const address3jcyfx = "0x0000000000000000000000000000000000000001"
		const uintRRLPMd4 = BigInt("1785")
		const addressDCJX2EG = accounts[5]
		const addressQCTc7a2 = accounts[2]
		const addressnOetXN = await ThriftTokenD59zMN3.transferOwnership.call(addressOb7ThCr, {from: accounts[0]});
		const boolkhGg6w9 = await ThriftTokenD59zMN3.approve.call(addressDMBzefe, uintZYtauJ5, {from: accounts[2]});
		const booljnLIdW7 = await ThriftTokenD59zMN3.transfer.call(addressCXKv7i, uinthjPexR, {from: accounts[5]});
		const boolGsCvdKO = await ThriftTokenD59zMN3.approve.call(address3jcyfx, uintxRpFq5j, {from: accounts[2]});
		const booloshKBiV = await ThriftTokenD59zMN3.transferFrom.call(addressQCTc7a2, addressDCJX2EG, uintRRLPMd4, {from: accounts[4]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenq6ctdqE = await ThriftToken.new({from: accounts[3]});
		const addressLlXdilZ = accounts[2]
		const addressAarLvy6 = accounts[3]
		const addresseg6nyJM = accounts[5]
		const uintVITCxHW = BigInt("1893")
		const addressbWEdGRH = accounts[0]
		const addressOPwJ7qd = accounts[4]
		const uint25633Ye45 = await ThriftTokenq6ctdqE.allowance.call(addressAarLvy6, addressLlXdilZ, {from: accounts[1]});
		const uint256MOgW0mt = await ThriftTokenq6ctdqE.balanceOf.call(addresseg6nyJM, {from: accounts[0]});
		const boolPemhypz = await ThriftTokenq6ctdqE.transferFrom.call(addressOPwJ7qd, addressbWEdGRH, uintVITCxHW, {from: accounts[3]});

		assert.equal(uint25633Ye45, BigInt("0"))
		assert.equal(uint256MOgW0mt, BigInt("0"))
		await expect(ThriftTokenq6ctdqE.transferFrom.call(addressOPwJ7qd, addressbWEdGRH, uintVITCxHW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenLAPKMO2 = await ThriftToken.new({from: accounts[0]});
		const addressfPDTC80 = accounts[4]
		const uint1JyYXC = BigInt("1130")
		const addressYzb8t9o = accounts[1]
		const uintGMXz24N = BigInt("952")
		const addressjMjfb8B = accounts[5]
		const uintYt1yyD = BigInt("697")
		const addressAKw8mmQ = accounts[1]
		const addressgxj1ssu = accounts[3]
		const uint256IMBT9jL = await ThriftTokenLAPKMO2.transferableTokens.call(addressfPDTC80, {from: accounts[0]});
		const boolbrZosQ8 = await ThriftTokenLAPKMO2.decreaseApproval.call(addressYzb8t9o, uint1JyYXC, {from: accounts[0]});
		const boolrHwep7f = await ThriftTokenLAPKMO2.approve.call(addressjMjfb8B, uintGMXz24N, {from: accounts[0]});
		const booledOemB = await ThriftTokenLAPKMO2.transferFrom.call(addressgxj1ssu, addressAKw8mmQ, uintYt1yyD, {from: accounts[3]});

		assert.equal(boolbrZosQ8, true)
		assert.equal(boolrHwep7f, true)
		assert.equal(uint256IMBT9jL, BigInt("0"))
		await expect(ThriftTokenLAPKMO2.transferFrom.call(addressgxj1ssu, addressAKw8mmQ, uintYt1yyD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenWZ8NSHw = await ThriftToken.new({from: accounts[4]});
		const uintjyPZSgw = BigInt("1919")
		const addressP6mFBqx = accounts[4]
		const uintK1vfOG = BigInt("370")
		const addressylS8Ly = "0x0000000000000000000000000000000000000001"
		const boolS8AMwTj = await ThriftTokenWZ8NSHw.increaseApproval.call(addressP6mFBqx, uintjyPZSgw, {from: accounts[1]});
		const boolFriFT1H = await ThriftTokenWZ8NSHw.transfer.call(addressylS8Ly, uintK1vfOG, {from: accounts[0]});

		assert.equal(boolS8AMwTj, true)
		await expect(ThriftTokenWZ8NSHw.transfer.call(addressylS8Ly, uintK1vfOG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})