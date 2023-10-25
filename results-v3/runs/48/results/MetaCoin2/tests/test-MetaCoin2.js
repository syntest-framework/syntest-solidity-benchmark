const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2BxB7Dm9 = await MetaCoin2.new({from: accounts[5]});
		const addressFebrlpK = accounts[2]
		const addressdeTZyh = accounts[4]
		const uintzUOc0Cs = await MetaCoin2BxB7Dm9.getBalanceInEth.call(addressFebrlpK, {from: accounts[1]});
		const uintIVTQoW2 = await MetaCoin2BxB7Dm9.getBalanceInEth.call(addressdeTZyh, {from: accounts[3]});

		assert.equal(uintIVTQoW2, BigInt("0"))
		assert.equal(uintzUOc0Cs, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2KXe9qJL = await MetaCoin2.new({from: accounts[4]});
		const addressU15NE1Q = accounts[1]
		const address1b9xPf = accounts[0]
		const uintuiwOXVJ = BigInt("555")
		const addressPewSgk = accounts[5]
		const addressGV5Bc6 = accounts[2]
		const address0gNCs8 = accounts[3]
		const uintCQWbhhZ = await MetaCoin2KXe9qJL.getBalanceInEth.call(addressU15NE1Q, {from: accounts[1]});
		const uintOeY0Qro = await MetaCoin2KXe9qJL.getBalanceInEth.call(address1b9xPf, {from: accounts[2]});
		const boolpnzNxxx = await MetaCoin2KXe9qJL.sendCoin.call(addressPewSgk, uintuiwOXVJ, {from: accounts[3]});
		const uintn04GMFM = await MetaCoin2KXe9qJL.getBalanceInEth.call(addressGV5Bc6, {from: accounts[1]});
		const uintD1JRvjY = await MetaCoin2KXe9qJL.getBalanceInEth.call(address0gNCs8, {from: accounts[3]});

		assert.equal(boolpnzNxxx, false)
		assert.equal(uintCQWbhhZ, BigInt("0"))
		assert.equal(uintD1JRvjY, BigInt("0"))
		assert.equal(uintOeY0Qro, BigInt("0"))
		assert.equal(uintn04GMFM, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2VFYFNY8 = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const uinttUurle = BigInt("576")
		const addressHXs73dA = accounts[2]
		const uintmUPpuNZ = BigInt("33")
		const addressw1EoWg = accounts[3]
		const addressK6zVKVw = accounts[2]
		const addressEPtPjLJ = "0x0000000000000000000000000000000000000001"
		const boolHYfjswa = await MetaCoin2VFYFNY8.sendCoin.call(addressHXs73dA, uinttUurle, {from: accounts[3]});
		const boolnyWHpnL = await MetaCoin2VFYFNY8.sendCoin.call(addressw1EoWg, uintmUPpuNZ, {from: accounts[3]});
		const uintNCeBfzK = await MetaCoin2VFYFNY8.getBalanceInEth.call(addressK6zVKVw, {from: accounts[4]});
		const uintxegFWEK = await MetaCoin2VFYFNY8.getBalanceInEth.call(addressEPtPjLJ, {from: accounts[4]});
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2EifjOfp = await MetaCoin2.new({from: accounts[4]});
		const addressB76rpal = accounts[2]
		const addressjhJEGS = accounts[4]
		const uintluk0MZE = BigInt("1775")
		const addressZIClTP6 = accounts[4]
		const uinta6j0sXO = BigInt("1805")
		const addressQU4RZn = accounts[0]
		const uintHx4Opun = BigInt("1882")
		const addressnid8uT3 = accounts[0]
		const uintvw3A6II = BigInt("499")
		const addressiqllJd = accounts[3]
		const addresso3ZxqFi = accounts[5]
		const addressfqZF15V = accounts[0]
		const addressK3VsW06 = accounts[4]
		const uintymWA2qC = BigInt("250")
		const addressILwAGzy = accounts[4]
		const uintBrfpAfe = await MetaCoin2EifjOfp.getBalance.call(addressB76rpal, {from: accounts[3]});
		const uinteldDGbZ = await MetaCoin2EifjOfp.getBalance.call(addressjhJEGS, {from: accounts[3]});
		const boolw0YJ5Go = await MetaCoin2EifjOfp.sendCoin.call(addressZIClTP6, uintluk0MZE, {from: accounts[2]});
		const boolDPQuHJZ = await MetaCoin2EifjOfp.sendCoin.call(addressQU4RZn, uinta6j0sXO, {from: accounts[3]});
		const boolcjFan7K = await MetaCoin2EifjOfp.sendCoin.call(addressnid8uT3, uintHx4Opun, {from: accounts[2]});
		const boolJOrpWqf = await MetaCoin2EifjOfp.sendCoin.call(addressiqllJd, uintvw3A6II, {from: accounts[4]});
		const uintYMSNEn4 = await MetaCoin2EifjOfp.getBalanceInEth.call(addresso3ZxqFi, {from: accounts[3]});
		const uintplTDH4D = await MetaCoin2EifjOfp.getBalanceInEth.call(addressfqZF15V, {from: accounts[1]});
		const uintEFfb1WU = await MetaCoin2EifjOfp.getBalanceInEth.call(addressK3VsW06, {from: accounts[0]});
		const boolUYpCX0N = await MetaCoin2EifjOfp.sendCoin.call(addressILwAGzy, uintymWA2qC, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolDPQuHJZ, false)
		assert.equal(boolJOrpWqf, true)
		assert.equal(boolUYpCX0N, false)
		assert.equal(boolcjFan7K, false)
		assert.equal(boolw0YJ5Go, false)
		assert.equal(uintBrfpAfe, BigInt("0"))
		assert.equal(uintEFfb1WU, BigInt("20000"))
		assert.equal(uintYMSNEn4, BigInt("0"))
		assert.equal(uinteldDGbZ, BigInt("10000"))
		assert.equal(uintplTDH4D, BigInt("0"))
	});
})