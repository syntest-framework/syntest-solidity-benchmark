const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenmGcZ3R4 = await ThriftToken.new({from: accounts[2]});
		const uinteHRubbT = BigInt("929")
		const addressyZIgnUK = accounts[4]
		const addresshFbJwy6 = "0x0000000000000000000000000000000000000001"
		const addressS1q0fhl = "0x0000000000000000000000000000000000000001"
//		const boolpcfAls = await ThriftTokenmGcZ3R4.transfer.call(addressyZIgnUK, uinteHRubbT, {from: accounts[5]});
//		const uint256ZOP7Wn = await ThriftTokenmGcZ3R4.allowance.call(addressS1q0fhl, addresshFbJwy6, {from: accounts[4]});

		await expect(ThriftTokenmGcZ3R4.transfer.call(addressyZIgnUK, uinteHRubbT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenmP2dVdz = await ThriftToken.new({from: accounts[0]});
		const uinte7VIbyH = BigInt("1570")
		const addressZcNhXca = accounts[3]
		const addressIR28Kwx = "0x0000000000000000000000000000000000000001"
		const uintuv2po4h = BigInt("670")
		const addresstNCko2i = accounts[5]
		const addressUbw4vZy = accounts[0]
		const uintDg8TKGC = BigInt("453")
		const addressGvh6e2K = accounts[0]
//		const boolA8gJ8dO = await ThriftTokenmP2dVdz.transferFrom.call(addressIR28Kwx, addressZcNhXca, uinte7VIbyH, {from: accounts[5]});
//		const boolo3TwuV7 = await ThriftTokenmP2dVdz.transfer.call(addresstNCko2i, uintuv2po4h, {from: accounts[3]});
//		const uint256OEFp4Sj = await ThriftTokenmP2dVdz.transferableTokens.call(addressUbw4vZy, {from: "0x0000000000000000000000000000000000000001"});
//		const boolfnhg97M = await ThriftTokenmP2dVdz.approve.call(addressGvh6e2K, uintDg8TKGC, {from: accounts[1]});

		await expect(ThriftTokenmP2dVdz.transferFrom.call(addressIR28Kwx, addressZcNhXca, uinte7VIbyH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokent7XwSWa = await ThriftToken.new({from: accounts[4]});
		const uintYMA7On = BigInt("682")
		const addressP0y0g0o = accounts[0]
		const uintB7M9rL7 = BigInt("6")
		const addressLPr0kWr = accounts[4]
		const boolYkgZhED = await ThriftTokent7XwSWa.increaseApproval.call(addressP0y0g0o, uintYMA7On, {from: accounts[2]});
		const boolbyC9M23 = await ThriftTokent7XwSWa.approve.call(addressLPr0kWr, uintB7M9rL7, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolYkgZhED, true)
		assert.equal(boolbyC9M23, true)
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenJnPp0J0 = await ThriftToken.new({from: accounts[5]});
		const uintN7H2dK5 = BigInt("1744")
		const addressSekIqta = accounts[1]
		const addressMbzGenx = accounts[1]
		const addressclGZJi7 = accounts[3]
		const addressMNLKuSy = accounts[0]
		const uintHwj8mfa = BigInt("1089")
		const addresspovmmR6 = accounts[1]
		const boolQb0nR4F = await ThriftTokenJnPp0J0.approve.call(addressSekIqta, uintN7H2dK5, {from: accounts[3]});
		const uint256sRKw31 = await ThriftTokenJnPp0J0.allowance.call(addressclGZJi7, addressMbzGenx, {from: accounts[0]});
		const uint256IyCWvPx = await ThriftTokenJnPp0J0.balanceOf.call(addressMNLKuSy, {from: accounts[0]});
//		const boollozFOVT = await ThriftTokenJnPp0J0.transfer.call(addresspovmmR6, uintHwj8mfa, {from: accounts[3]});

		assert.equal(boolQb0nR4F, true)
		assert.equal(uint256IyCWvPx, BigInt("0"))
		assert.equal(uint256sRKw31, BigInt("0"))
		await expect(ThriftTokenJnPp0J0.transfer.call(addresspovmmR6, uintHwj8mfa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenoCWDuw = await ThriftToken.new({from: accounts[2]});
		const uintB6Xi3cL = BigInt("1404")
		const addressG44E7Wf = accounts[0]
		const addressgQK4fn = "0x0000000000000000000000000000000000000001"
		const addressFRSE9HV = "0x0000000000000000000000000000000000000001"
		const boolqu6fOu0 = await ThriftTokenoCWDuw.decreaseApproval.call(addressG44E7Wf, uintB6Xi3cL, {from: accounts[5]});
		const uint256JCi1tQ2 = await ThriftTokenoCWDuw.balanceOf.call(addressgQK4fn, {from: accounts[3]});
		const uint256HG1r4Gq = await ThriftTokenoCWDuw.balanceOf.call(addressFRSE9HV, {from: accounts[3]});

		assert.equal(boolqu6fOu0, true)
		assert.equal(uint256HG1r4Gq, BigInt("0"))
		assert.equal(uint256JCi1tQ2, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenc9tanoF = await ThriftToken.new({from: accounts[0]});
		const addressnPb1wD3 = accounts[3]
		const uintf6Tl6E = BigInt("1646")
		const addressjmsxIel = accounts[2]
		const uintJA4Vq0Q = BigInt("956")
		const address8M143c = accounts[3]
//		const addressU2g3QnE = await ThriftTokenc9tanoF.transferOwnership.call(addressnPb1wD3, {from: "0x0000000000000000000000000000000000000001"});
//		const boolPfzRRHx = await ThriftTokenc9tanoF.increaseApproval.call(addressjmsxIel, uintf6Tl6E, {from: accounts[1]});
//		const boolDae6S9 = await ThriftTokenc9tanoF.increaseApproval.call(address8M143c, uintJA4Vq0Q, {from: accounts[3]});

		await expect(ThriftTokenc9tanoF.transferOwnership.call(addressnPb1wD3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenZprm5dq = await ThriftToken.new({from: accounts[0]});
		const addressNt9KAr = accounts[5]
		const addressSW1Fa1x = accounts[2]
		const addresspOpiWe = "0x0000000000000000000000000000000000000001"
		const uintuAKmYl = BigInt("1777")
		const addressTrSRY5e = accounts[0]
		const addressNz5N5Ij = accounts[1]
		const uint256CWRNNo = await ThriftTokenZprm5dq.balanceOf.call(addressNt9KAr, {from: accounts[1]});
		const addressT7VNXUn = await ThriftTokenZprm5dq.transferOwnership.call(addressSW1Fa1x, {from: accounts[0]});
		const addressksyYcS = await ThriftTokenZprm5dq.transferOwnership.call(addresspOpiWe, {from: accounts[0]});
//		const boolJUCoOSk = await ThriftTokenZprm5dq.transferFrom.call(addressNz5N5Ij, addressTrSRY5e, uintuAKmYl, {from: accounts[2]});

		assert.equal(uint256CWRNNo, BigInt("0"))
		await expect(ThriftTokenZprm5dq.transferFrom.call(addressNz5N5Ij, addressTrSRY5e, uintuAKmYl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenc5vNGJ = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintEWtJCD5 = BigInt("738")
		const addressC5r5z3u = accounts[4]
		const uintdoKYjUf = BigInt("363")
		const addresszEEKt9X = accounts[2]
		const addressskzftmD = accounts[4]
		const booliabQQCz = await ThriftTokenc5vNGJ.transfer.call(addressC5r5z3u, uintEWtJCD5, {from: accounts[2]});
		const boolGtWZKHb = await ThriftTokenc5vNGJ.approve.call(addresszEEKt9X, uintdoKYjUf, {from: accounts[1]});
		const uint256psGsluE = await ThriftTokenc5vNGJ.balanceOf.call(addressskzftmD, {from: accounts[4]});
	});
})