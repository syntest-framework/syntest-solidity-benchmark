const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITGEdCDc5 = await RIT.new({from: accounts[1]});
		const uintamt7RqY = BigInt("629")
		const uintH9vlUV3 = BigInt("402")
		const addressV3THegE = accounts[3]
		const uintIGuEy09 = BigInt("104")
		const addressaxT1jj = accounts[2]
		const uintJ2yX4Ew = BigInt("1655")
		const uint256ittCsV7 = await RITGEdCDc5.totalSupply.call({from: accounts[1]});
//		const uint256oyY57c = await RITGEdCDc5._burn.call(uintamt7RqY, {from: accounts[3]});
//		const boolQ7op50 = await RITGEdCDc5.transfer.call(addressV3THegE, uintH9vlUV3, {from: accounts[2]});
//		const boolBoLZAbh = await RITGEdCDc5.decreaseAllowance.call(addressaxT1jj, uintIGuEy09, {from: accounts[2]});
//		const uint256TxQEwP5 = await RITGEdCDc5._burn.call(uintJ2yX4Ew, {from: accounts[3]});

		assert.equal(uint256ittCsV7, BigInt("500000000000000000000000000"))
		await expect(RITGEdCDc5._burn.call(uintamt7RqY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITc8wsg81 = await RIT.new({from: accounts[1]});
		const uintv7b8bmt = BigInt("640")
		const addressbA3MPe = accounts[5]
		const uintL7BPj8w = BigInt("1339")
		const addressLovppz8 = accounts[1]
//		const boolLzbcgGm = await RITc8wsg81.decreaseAllowance.call(addressbA3MPe, uintv7b8bmt, {from: accounts[2]});
//		const boolgta80b5 = await RITc8wsg81.transfer.call(addressLovppz8, uintL7BPj8w, {from: accounts[0]});

		await expect(RITc8wsg81.decreaseAllowance.call(addressbA3MPe, uintv7b8bmt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITESsk5qy = await RIT.new({from: accounts[4]});
		const uintXXYCHNc = BigInt("458")
		const addressFB53SCz = accounts[1]
		const addressW2A7yY6 = accounts[0]
		const uinti99Zj6x = BigInt("1792")
		const addressorfsUSo = accounts[0]
		const uintZkOx8zL = BigInt("1591")
		const addresscCzNDh = accounts[1]
		const addressdIyWpTF = accounts[1]
//		const boolRuY9ZDD = await RITESsk5qy.transferFrom.call(addressW2A7yY6, addressFB53SCz, uintXXYCHNc, {from: accounts[0]});
//		const boolXbtE6JF = await RITESsk5qy.approve.call(addressorfsUSo, uinti99Zj6x, {from: "0x0000000000000000000000000000000000000001"});
//		const boolPd9kOdE = await RITESsk5qy.transferFrom.call(addressdIyWpTF, addresscCzNDh, uintZkOx8zL, {from: accounts[1]});

		await expect(RITESsk5qy.transferFrom.call(addressW2A7yY6, addressFB53SCz, uintXXYCHNc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITgXs3jYi = await RIT.new({from: accounts[0]});
		const addressDpFLKB3 = accounts[1]
		const uint256KMXxRTG = await RITgXs3jYi.balanceOf.call(addressDpFLKB3, {from: accounts[3]});
		const uint256hikusZ = await RITgXs3jYi.totalSupply.call({from: accounts[2]});
		const uint256Kvn9WbD = await RITgXs3jYi.totalSupply.call({from: accounts[1]});

		assert.equal(uint256KMXxRTG, BigInt("0"))
		assert.equal(uint256Kvn9WbD, BigInt("500000000000000000000000000"))
		assert.equal(uint256hikusZ, BigInt("500000000000000000000000000"))
	});

	it('test for RIT', async () => {
		const RITgZmOPOY = await RIT.new({from: accounts[0]});
		const addressfpIhDZe = accounts[4]
		const address3tijxd = "0x0000000000000000000000000000000000000001"
		const uintTG7GiyE = BigInt("1084")
		const addressFPZEV3l = accounts[1]
		const uint256nOrIq1 = await RITgZmOPOY.allowance.call(address3tijxd, addressfpIhDZe, {from: accounts[2]});
		const uint8tERsl6j = await RITgZmOPOY.decimals.call({from: accounts[2]});
		const stringYh4KbTy = await RITgZmOPOY.symbol.call({from: accounts[4]});
		const boolt1Vm4HL = await RITgZmOPOY.approve.call(addressFPZEV3l, uintTG7GiyE, {from: accounts[3]});

		assert.equal(boolt1Vm4HL, true)
		assert.equal(stringYh4KbTy, "RIT 2.0")
		assert.equal(uint256nOrIq1, BigInt("0"))
		assert.equal(uint8tERsl6j, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RIThvSO26L = await RIT.new({from: accounts[1]});
		const uintUX8n5Ju = BigInt("1536")
		const addresshBu0DWG = "0x0000000000000000000000000000000000000001"
		const uintYmC1S0E = BigInt("1787")
		const addresszNV9o1l = accounts[1]
		const addressBlyGjL4 = accounts[2]
		const uintw54Cu4h = BigInt("349")
		const addressorli6iN = accounts[3]
		const uintLOd5Xcd = BigInt("1807")
		const addressoL3BXjv = accounts[3]
//		const boolWzMzlHh = await RIThvSO26L.transfer.call(addresshBu0DWG, uintUX8n5Ju, {from: accounts[0]});
//		const boolEaqZ9aK = await RIThvSO26L.transferFrom.call(addressBlyGjL4, addresszNV9o1l, uintYmC1S0E, {from: accounts[3]});
//		const boolWgIQW0 = await RIThvSO26L.decreaseAllowance.call(addressorli6iN, uintw54Cu4h, {from: accounts[1]});
//		const stringYRe2FL = await RIThvSO26L.symbol.call({from: accounts[1]});
//		const booln0vY3ZT = await RIThvSO26L.approve.call(addressoL3BXjv, uintLOd5Xcd, {from: accounts[1]});
//		const uint256JZsRqcO = await RIThvSO26L.totalSupply.call({from: accounts[3]});

		await expect(RIThvSO26L.transfer.call(addresshBu0DWG, uintUX8n5Ju, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITc8wsg81 = await RIT.new({from: accounts[1]});
		const uintGcfrn9B = BigInt("640")
		const addressEu0iTCo = accounts[5]
		const uintRYDsT8R = BigInt("1339")
		const addressl08CTmB = accounts[1]
		const stringQhO9Nkf = await RITc8wsg81.name.call({from: accounts[3]});
//		const boolLzbcgGm = await RITc8wsg81.decreaseAllowance.call(addressEu0iTCo, uintGcfrn9B, {from: accounts[2]});
//		const boolgta80b5 = await RITc8wsg81.transfer.call(addressl08CTmB, uintRYDsT8R, {from: accounts[0]});

		assert.equal(stringQhO9Nkf, "Real Estate Investment Token")
		await expect(RITc8wsg81.decreaseAllowance.call(addressEu0iTCo, uintGcfrn9B, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITyS6Pr5h = await RIT.new({from: accounts[3]});
		const uinto5xEF1V = BigInt("1167")
		const addresskj4LaLF = accounts[5]
		const uintKFgE50w = BigInt("273")
		const addressVqBdbde = accounts[4]
		const boolDGTzwYN = await RITyS6Pr5h.increaseAllowance.call(addresskj4LaLF, uinto5xEF1V, {from: "0x0000000000000000000000000000000000000001"});
		const boolnW2THtD = await RITyS6Pr5h.approve.call(addressVqBdbde, uintKFgE50w, {from: accounts[5]});
		const uint256PoPGWSN = await RITyS6Pr5h.totalSupply.call({from: accounts[0]});
		const uint256dFVBO88 = await RITyS6Pr5h.totalSupply.call({from: accounts[1]});

		assert.equal(boolDGTzwYN, true)
		assert.equal(boolnW2THtD, true)
		assert.equal(uint256PoPGWSN, BigInt("500000000000000000000000000"))
		assert.equal(uint256dFVBO88, BigInt("500000000000000000000000000"))
	});

	it('test for RIT', async () => {
		const RITrzrAk33 = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZJkxA07 = BigInt("122")
		const addressFU9A6jc = accounts[5]
		const addressyy260R = accounts[3]
		const uintUSEVNzU = BigInt("841")
		const addressPMdwyk = accounts[0]
		const uintmnszeqx = BigInt("1728")
		const addresshEb3koC = accounts[4]
		const boolDdWVZ1 = await RITrzrAk33.transferFrom.call(addressyy260R, addressFU9A6jc, uintZJkxA07, {from: accounts[0]});
		const bools5LJDS1 = await RITrzrAk33.decreaseAllowance.call(addressPMdwyk, uintUSEVNzU, {from: "0x0000000000000000000000000000000000000001"});
		const booljoZ31k3 = await RITrzrAk33.transfer.call(addresshEb3koC, uintmnszeqx, {from: accounts[2]});
		const stringvhxL9Rk = await RITrzrAk33.symbol.call({from: accounts[3]});
	});
})