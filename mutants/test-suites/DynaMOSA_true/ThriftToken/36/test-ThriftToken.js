const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenGIgqjNQ = await ThriftToken.new({from: accounts[5]});
		const uintVUBGRMY = BigInt("1351")
		const addressMs71dp = accounts[0]
		const addressYCUaFtp = accounts[0]
		const boolZmA6pyQ = await ThriftTokenGIgqjNQ.approve.call(addressMs71dp, uintVUBGRMY, {from: accounts[3]});
		const uint256kJGBxx0 = await ThriftTokenGIgqjNQ.balanceOf.call(addressYCUaFtp, {from: accounts[0]});

		assert.equal(boolZmA6pyQ, true)
		assert.equal(uint256kJGBxx0, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenxSUUSPS = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressZKqv6F1 = accounts[5]
		const uintbEuoMz = BigInt("1774")
		const addressSXoEnEE = accounts[5]
		const addressRrjLrTG = accounts[3]
		const addressIpxUS1H = accounts[2]
		const uintewpRv1 = BigInt("1718")
		const addressfaAspSx = accounts[4]
		const uint256k5jG3VC = await ThriftTokenxSUUSPS.balanceOf.call(addressZKqv6F1, {from: accounts[0]});
		const boolOMqCedR = await ThriftTokenxSUUSPS.transferFrom.call(addressRrjLrTG, addressSXoEnEE, uintbEuoMz, {from: accounts[5]});
		const uint256tFpkKu = await ThriftTokenxSUUSPS.balanceOf.call(addressIpxUS1H, {from: accounts[5]});
		const boolgYF400b = await ThriftTokenxSUUSPS.approve.call(addressfaAspSx, uintewpRv1, {from: accounts[0]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenrIxYJUU = await ThriftToken.new({from: accounts[1]});
		const addressieHg7Jd = accounts[1]
		const addressX7rLzO = accounts[1]
		const uintWeLj4g = BigInt("684")
		const addressT1JDvOf = accounts[2]
		const addresshiLMQAn = accounts[4]
		const uintyYf3twS = BigInt("1345")
		const addressiJLOP8 = accounts[0]
		const addressZqblOA = accounts[3]
		const addressUvG9Vlg = accounts[0]
		const addressT3l3Me3 = accounts[2]
		const uint256NDuJAhe = await ThriftTokenrIxYJUU.allowance.call(addressX7rLzO, addressieHg7Jd, {from: accounts[0]});
//		const boolrq8G88 = await ThriftTokenrIxYJUU.transfer.call(addressT1JDvOf, uintWeLj4g, {from: accounts[0]});
//		const uint256ZoE0q9M = await ThriftTokenrIxYJUU.balanceOf.call(addresshiLMQAn, {from: accounts[4]});
//		const bool2zBhdB = await ThriftTokenrIxYJUU.transferFrom.call(addressZqblOA, addressiJLOP8, uintyYf3twS, {from: accounts[0]});
//		const uint256X4I8Afz = await ThriftTokenrIxYJUU.allowance.call(addressT3l3Me3, addressUvG9Vlg, {from: accounts[1]});

		assert.equal(uint256NDuJAhe, BigInt("0"))
		await expect(ThriftTokenrIxYJUU.transfer.call(addressT1JDvOf, uintWeLj4g, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftToken8fKtCp = await ThriftToken.new({from: accounts[0]});
		const uintUWoDYDR = BigInt("1567")
		const addressEpsfMNF = accounts[0]
		const addresstHW7qoK = accounts[1]
		const uintwslok39 = BigInt("486")
		const addresscXFNZmW = accounts[2]
		const uintd2zshX = BigInt("667")
		const addressDREFW1N = accounts[5]
		const boolkyrtThf = await ThriftToken8fKtCp.approve.call(addressEpsfMNF, uintUWoDYDR, {from: accounts[4]});
//		const addressVOCXODR = await ThriftToken8fKtCp.transferOwnership.call(addresstHW7qoK, {from: accounts[3]});
//		const boolSfPbIiu = await ThriftToken8fKtCp.transfer.call(addresscXFNZmW, uintwslok39, {from: accounts[5]});
//		const boolTuJQblh = await ThriftToken8fKtCp.approve.call(addressDREFW1N, uintd2zshX, {from: accounts[4]});

		assert.equal(boolkyrtThf, true)
		await expect(ThriftToken8fKtCp.transferOwnership.call(addresstHW7qoK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenKMONhf5 = await ThriftToken.new({from: accounts[2]});
		const addressHy2vtP = accounts[4]
		const addressRsTbJ1c = accounts[1]
		const uintGMOxC6c = BigInt("1491")
		const addressq7Ey2nA = "0x0000000000000000000000000000000000000001"
		const uintjH3YG1e = BigInt("1782")
		const addressX00HVxm = accounts[0]
		const uint256ZnUFkYR = await ThriftTokenKMONhf5.balanceOf.call(addressHy2vtP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mzI6UmT = await ThriftTokenKMONhf5.balanceOf.call(addressRsTbJ1c, {from: accounts[2]});
		const boolAs0IleU = await ThriftTokenKMONhf5.approve.call(addressq7Ey2nA, uintGMOxC6c, {from: accounts[4]});
		const boolyxEurmZ = await ThriftTokenKMONhf5.decreaseApproval.call(addressX00HVxm, uintjH3YG1e, {from: accounts[4]});

		assert.equal(boolAs0IleU, true)
		assert.equal(boolyxEurmZ, true)
		assert.equal(uint256ZnUFkYR, BigInt("0"))
		assert.equal(uint256mzI6UmT, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokencbsva1A = await ThriftToken.new({from: accounts[5]});
		const uintWYEQnPZ = BigInt("785")
		const addressMM1Hzso = accounts[5]
		const uintRJBxibS = BigInt("1919")
		const address8eXGxc = accounts[1]
		const addressEwH5LQX = "0x0000000000000000000000000000000000000001"
		const uintY30o7DG = BigInt("684")
		const addressm3QVfH4 = accounts[2]
		const addressBEGNm4 = accounts[1]
		const uintyuJZInp = BigInt("544")
		const addressPquX1AG = accounts[0]
		const boolFw5ldu = await ThriftTokencbsva1A.increaseApproval.call(addressMM1Hzso, uintWYEQnPZ, {from: accounts[3]});
		const booluc2Am6d = await ThriftTokencbsva1A.approve.call(address8eXGxc, uintRJBxibS, {from: accounts[3]});
		const uint256bNkeBmH = await ThriftTokencbsva1A.transferableTokens.call(addressEwH5LQX, {from: "0x0000000000000000000000000000000000000001"});
//		const boolVsLO8RF = await ThriftTokencbsva1A.transferFrom.call(addressBEGNm4, addressm3QVfH4, uintY30o7DG, {from: accounts[1]});
//		const boolAkPDvE8 = await ThriftTokencbsva1A.transfer.call(addressPquX1AG, uintyuJZInp, {from: accounts[3]});

		assert.equal(boolFw5ldu, true)
		assert.equal(booluc2Am6d, true)
		assert.equal(uint256bNkeBmH, BigInt("0"))
		await expect(ThriftTokencbsva1A.transferFrom.call(addressBEGNm4, addressm3QVfH4, uintY30o7DG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokeno37RVf3 = await ThriftToken.new({from: accounts[0]});
		const addressnNskTaU = accounts[2]
		const addressfXmyf7i = accounts[4]
		const addressOyaqoCX = accounts[1]
		const uintoUowB0G = BigInt("1184")
		const addressuDBvhKd = accounts[0]
		const uintJvwrezK = BigInt("618")
		const addressws1JTiS = accounts[2]
		const uint256Xt5MGg = await ThriftTokeno37RVf3.allowance.call(addressfXmyf7i, addressnNskTaU, {from: accounts[4]});
		const addressrzZ2drH = await ThriftTokeno37RVf3.transferOwnership.call(addressOyaqoCX, {from: accounts[0]});
		const booleZVe5cr = await ThriftTokeno37RVf3.increaseApproval.call(addressuDBvhKd, uintoUowB0G, {from: accounts[3]});
		const boolGOLrE08 = await ThriftTokeno37RVf3.approve.call(addressws1JTiS, uintJvwrezK, {from: accounts[4]});

		assert.equal(boolGOLrE08, true)
		assert.equal(booleZVe5cr, true)
		assert.equal(uint256Xt5MGg, BigInt("0"))
	});
})