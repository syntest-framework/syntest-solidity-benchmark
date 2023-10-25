const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenKeymUP = await ThriftToken.new({from: accounts[5]});
		const addressA2MeJsO = accounts[4]
		const uintRcbctXv = BigInt("1869")
		const addressCF6rRMg = accounts[0]
		const addressxRTNzMa = await ThriftTokenKeymUP.transferOwnership.call(addressA2MeJsO, {from: accounts[1]});
		const boolLyGPMyH = await ThriftTokenKeymUP.increaseApproval.call(addressCF6rRMg, uintRcbctXv, {from: accounts[2]});

		await expect(ThriftTokenKeymUP.transferOwnership.call(addressA2MeJsO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenaBdNGYn = await ThriftToken.new({from: accounts[2]});
		const uintzbkSWg = BigInt("1346")
		const addressDeRV1MM = accounts[4]
		const addressNTjg497 = accounts[0]
		const addresstdkKwkl = accounts[5]
		const addressZJ1Gwwv = "0x0000000000000000000000000000000000000001"
		const uintsXrYStJ = BigInt("111")
		const addressYEJh2V1 = accounts[2]
		const addressAeLU6hZ = accounts[4]
		const boolhVKxaod = await ThriftTokenaBdNGYn.transferFrom.call(addressNTjg497, addressDeRV1MM, uintzbkSWg, {from: accounts[1]});
		const addressPqOZlP = await ThriftTokenaBdNGYn.transferOwnership.call(addresstdkKwkl, {from: accounts[3]});
		const addresszhB5svp = await ThriftTokenaBdNGYn.transferOwnership.call(addressZJ1Gwwv, {from: accounts[0]});
		const boolfyhE6UY = await ThriftTokenaBdNGYn.increaseApproval.call(addressYEJh2V1, uintsXrYStJ, {from: accounts[2]});
		const uint256VFgXzK1 = await ThriftTokenaBdNGYn.transferableTokens.call(addressAeLU6hZ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ThriftTokenaBdNGYn.transferFrom.call(addressNTjg497, addressDeRV1MM, uintzbkSWg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenSZlaARY = await ThriftToken.new({from: accounts[4]});
		const uint42TaJp = BigInt("1308")
		const addressQb8yYHP = accounts[3]
		const uintCGDDKx = BigInt("735")
		const addressPmVySMn = accounts[0]
		const addressHGAV8Rc = accounts[0]
		const addressgk6vZ9e = accounts[2]
		const addressaYJ8GNe = accounts[0]
		const addressUc68Zp3 = accounts[1]
		const boolpCmcspH = await ThriftTokenSZlaARY.approve.call(addressQb8yYHP, uint42TaJp, {from: accounts[4]});
		const boolCKRgjcA = await ThriftTokenSZlaARY.transferFrom.call(addressHGAV8Rc, addressPmVySMn, uintCGDDKx, {from: accounts[5]});
		const addressUyidovW = await ThriftTokenSZlaARY.transferOwnership.call(addressgk6vZ9e, {from: accounts[1]});
		const uint256Is0DYxF = await ThriftTokenSZlaARY.allowance.call(addressUc68Zp3, addressaYJ8GNe, {from: accounts[4]});

		assert.equal(boolpCmcspH, true)
		await expect(ThriftTokenSZlaARY.transferFrom.call(addressHGAV8Rc, addressPmVySMn, uintCGDDKx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenrTHaaeB = await ThriftToken.new({from: accounts[3]});
		const addressqnGcbz1 = accounts[1]
		const uintXZjzLNV = BigInt("639")
		const addressYO3cyZk = accounts[4]
		const uintRJSDeC3 = BigInt("884")
		const addressCyhzRie = accounts[3]
		const uint256JSk0ho = await ThriftTokenrTHaaeB.balanceOf.call(addressqnGcbz1, {from: accounts[3]});
		const boolO49cTHO = await ThriftTokenrTHaaeB.increaseApproval.call(addressYO3cyZk, uintXZjzLNV, {from: accounts[1]});
		const boolHjHWdc = await ThriftTokenrTHaaeB.transfer.call(addressCyhzRie, uintRJSDeC3, {from: accounts[0]});

		assert.equal(boolO49cTHO, true)
		assert.equal(uint256JSk0ho, BigInt("0"))
		await expect(ThriftTokenrTHaaeB.transfer.call(addressCyhzRie, uintRJSDeC3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenjnLaJZV = await ThriftToken.new({from: accounts[4]});
		const uintBk0ynfd = BigInt("551")
		const addressvMBkV0t = accounts[1]
		const uintJYPTT5 = BigInt("628")
		const addresszOVOWBO = accounts[4]
		const uintooKi5P8 = BigInt("1879")
		const addresstfplm3 = "0x0000000000000000000000000000000000000001"
		const boolW6u1L7 = await ThriftTokenjnLaJZV.increaseApproval.call(addressvMBkV0t, uintBk0ynfd, {from: accounts[3]});
		const boolAnLiVWU = await ThriftTokenjnLaJZV.decreaseApproval.call(addresszOVOWBO, uintJYPTT5, {from: accounts[2]});
		const boolsPdtE6F = await ThriftTokenjnLaJZV.increaseApproval.call(addresstfplm3, uintooKi5P8, {from: accounts[1]});

		assert.equal(boolAnLiVWU, true)
		assert.equal(boolW6u1L7, true)
		assert.equal(boolsPdtE6F, true)
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenBWbkstd = await ThriftToken.new({from: accounts[0]});
		const address9h5OAh = accounts[5]
		const addressyc1ziLt = accounts[1]
		const addressNJHpEBQ = accounts[1]
		const addressOTMg05u = accounts[1]
		const addresseBiuvmv = accounts[3]
		const addressUzB5y03 = accounts[6]
		const addressYFUvmPk = accounts[2]
		const addressnEos6j = await ThriftTokenBWbkstd.transferOwnership.call(address9h5OAh, {from: accounts[0]});
		const uint256IyPJEt = await ThriftTokenBWbkstd.allowance.call(addressNJHpEBQ, addressyc1ziLt, {from: accounts[4]});
		const uint256oJe3EUL = await ThriftTokenBWbkstd.transferableTokens.call(addressOTMg05u, {from: accounts[2]});
		const uint256DKoph6W = await ThriftTokenBWbkstd.allowance.call(addressUzB5y03, addresseBiuvmv, {from: accounts[3]});
		const uint256UKDAf66 = await ThriftTokenBWbkstd.balanceOf.call(addressYFUvmPk, {from: accounts[5]});

		assert.equal(uint256DKoph6W, BigInt("0"))
		assert.equal(uint256IyPJEt, BigInt("0"))
		assert.equal(uint256UKDAf66, BigInt("0"))
		assert.equal(uint256oJe3EUL, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenPipoqMn = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const address8bu3Fz = accounts[4]
		const uinteM8v6BX = BigInt("1965")
		const addressJOtKMLL = accounts[5]
		const uintXZwRTZC = BigInt("16")
		const addressiECApJ = accounts[4]
		const addressuh7ODRz = "0x0000000000000000000000000000000000000001"
		const addressUV3Awzs = accounts[3]
		const uint256GppZlpK = await ThriftTokenPipoqMn.balanceOf.call(address8bu3Fz, {from: accounts[0]});
		const boolrn5uU5B = await ThriftTokenPipoqMn.approve.call(addressJOtKMLL, uinteM8v6BX, {from: accounts[1]});
		const boolGtmcOM0 = await ThriftTokenPipoqMn.approve.call(addressiECApJ, uintXZwRTZC, {from: accounts[4]});
		const uint256IEzjA2A = await ThriftTokenPipoqMn.allowance.call(addressUV3Awzs, addressuh7ODRz, {from: accounts[5]});
	});
})