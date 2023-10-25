const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financewxVFqQr = await Rootkit_finance.new({from: accounts[5]});
		const uintWGYECt = BigInt("427")
		const addressqdJsPn1 = accounts[4]
		const addressihoTeu4 = accounts[2]
		const addressfSJH27r = accounts[2]
		const addressLm8zmV2 = "0x0000000000000000000000000000000000000001"
		const addressvhiTEpw = accounts[3]
		const addresstmHmbC5 = accounts[0]
		const uintXUYKzph = BigInt("427")
		const addressefnxKmu = accounts[3]
		const boolcWpQu0P = await Rootkit_financewxVFqQr.transferFrom.call(addressihoTeu4, addressqdJsPn1, uintWGYECt, {from: accounts[3]});
		const uintkJrrWtS = await Rootkit_financewxVFqQr.allowance.call(addressLm8zmV2, addressfSJH27r, {from: accounts[5]});
		const uintcSb4Vqt = await Rootkit_financewxVFqQr.allowance.call(addresstmHmbC5, addressvhiTEpw, {from: accounts[2]});
		const boolBx1C4yt = await Rootkit_financewxVFqQr.transfer.call(addressefnxKmu, uintXUYKzph, {from: accounts[1]});

		assert.equal(boolBx1C4yt, false)
		assert.equal(boolcWpQu0P, false)
		assert.equal(uintcSb4Vqt, BigInt("0"))
		assert.equal(uintkJrrWtS, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeiPNmeuk = await Rootkit_finance.new({from: accounts[5]});
		const addressu1kyj9l = accounts[1]
		const uintsuOWbpI = BigInt("343")
		const addressLgQ8W4 = accounts[5]
		const uint256UCrpg4U = await Rootkit_financeiPNmeuk.totalSupply.call({from: accounts[4]});
		const uint256hCbdU1M = await Rootkit_financeiPNmeuk.balanceOf.call(addressu1kyj9l, {from: accounts[3]});
		const boolNB2n3u = await Rootkit_financeiPNmeuk.transfer.call(addressLgQ8W4, uintsuOWbpI, {from: accounts[5]});

		assert.equal(boolNB2n3u, true)
		assert.equal(uint256UCrpg4U, BigInt("10000000000000000000000"))
		assert.equal(uint256hCbdU1M, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financenpjMNct = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uints2IO3rc = BigInt("1115")
		const addressuZmyBy = accounts[2]
		const addressvLZjMDu = accounts[5]
		const addressqkXyFFZ = accounts[4]
		const addressqVlrZy4 = accounts[0]
		const addressCNzUoC = accounts[3]
		const boolYcfUpOC = await Rootkit_financenpjMNct.transfer.call(addressuZmyBy, uints2IO3rc, {from: accounts[1]});
		const uint256ijD6Riq = await Rootkit_financenpjMNct.totalSupply.call({from: accounts[2]});
		const uintWagHew = await Rootkit_financenpjMNct.allowance.call(addressqkXyFFZ, addressvLZjMDu, {from: accounts[1]});
		const uintwWUPJc5 = await Rootkit_financenpjMNct.allowance.call(addressCNzUoC, addressqVlrZy4, {from: accounts[0]});
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financegFV6lQm = await Rootkit_finance.new({from: accounts[2]});
		const uintvQAsoJ = BigInt("1802")
		const addressrYmVYVp = accounts[3]
		const uintKHq6ZOt = BigInt("1828")
		const addressVJKYVBR = accounts[1]
		const uintxSj77uS = BigInt("1103")
		const addressSMGYQQL = accounts[4]
		const boolIkqjjy = await Rootkit_financegFV6lQm.approve.call(addressrYmVYVp, uintvQAsoJ, {from: accounts[4]});
		const boolzQDK4Rn = await Rootkit_financegFV6lQm.transfer.call(addressVJKYVBR, uintKHq6ZOt, {from: accounts[0]});
		const boolEhiur6 = await Rootkit_financegFV6lQm.approve.call(addressSMGYQQL, uintxSj77uS, {from: accounts[5]});

		assert.equal(boolEhiur6, true)
		assert.equal(boolIkqjjy, true)
		assert.equal(boolzQDK4Rn, false)
	});
})