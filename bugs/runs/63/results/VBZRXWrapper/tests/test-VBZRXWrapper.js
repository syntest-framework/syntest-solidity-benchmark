const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractKCyG0Gd = await VBZRXWrapper.new({from: accounts[0]});
		const valueTaQL5A = BigInt("1454")
		const valuedJj9DNq = BigInt("263")
		const dstVklhwcY = accounts[1]
		const accountMhsIPAR = accounts[1]
		await contractKCyG0Gd.withdraw.call(valueTaQL5A, {from: accounts[2]});
		const nullnPafaM = await contractKCyG0Gd.claim.call({from: accounts[4]});
		const nullVwhOYy = await contractKCyG0Gd.transfer.call(dstVklhwcY, valuedJj9DNq, {from: accounts[5]});
		const nullxYDO7a8 = await contractKCyG0Gd.claimable.call(accountMhsIPAR, {from: accounts[2]});

		await expect(contractKCyG0Gd.withdraw.call(valueTaQL5A, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractM5SQ03G = await VBZRXWrapper.new({from: accounts[0]});
		await contractM5SQ03G.exit.call({from: accounts[0]});
		await contractM5SQ03G.exit.call({from: accounts[0]});
		const nullglIkG1b = await contractM5SQ03G.claim.call({from: accounts[5]});

		await expect(contractM5SQ03G.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractYdCq5aZ = await VBZRXWrapper.new({from: accounts[2]});
		const value5oJIDD = BigInt("881")
		const dstKSZsm9X = accounts[3]
		const srcbEzk1k2 = accounts[4]
		const nullzk638qp = await contractYdCq5aZ.claim.call({from: accounts[1]});
		const nullrjyxQYc = await contractYdCq5aZ.transferFrom.call(srcbEzk1k2, dstKSZsm9X, value5oJIDD, {from: accounts[2]});
		await contractYdCq5aZ.exit.call({from: accounts[4]});

		assert.equal(nullzk638qp, 0)
		await expect(contractYdCq5aZ.transferFrom.call(srcbEzk1k2, dstKSZsm9X, value5oJIDD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractUKEA89 = await VBZRXWrapper.new({from: accounts[1]});
		const valueP0Nerq0 = BigInt("1289")
		const spenderNd3RPpt = "0x0000000000000000000000000000000000000001"
		const nulloZGkGvJ = await contractUKEA89.approve.call(spenderNd3RPpt, valueP0Nerq0, {from: accounts[0]});
		const nullzSfeHym = await contractUKEA89.claim.call({from: accounts[2]});

		assert.equal(nulloZGkGvJ, true)
		assert.equal(nullzSfeHym, 0)
	});

	it('test for VBZRXWrapper', async () => {
		const contractnu5tqQM = await VBZRXWrapper.new({from: accounts[2]});
		const accountsUtgyR = accounts[4]
		const valueoPYqHRT = BigInt("1711")
		const dstIoDALm3 = accounts[3]
		const srcX3Lmv7V = accounts[0]
		const valueXs46UVQ = BigInt("1711")
		const spenderzjl87Bi = accounts[0]
		const nullOteStb7 = await contractnu5tqQM.claimable.call(accountsUtgyR, {from: accounts[2]});
		const nullvlLf6U = await contractnu5tqQM.transferFrom.call(srcX3Lmv7V, dstIoDALm3, valueoPYqHRT, {from: accounts[1]});
		const nullr13SXkR = await contractnu5tqQM.approve.call(spenderzjl87Bi, valueXs46UVQ, {from: accounts[3]});

		await expect(contractnu5tqQM.claimable.call(accountsUtgyR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractmAq46ks = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valuekw3PKny = BigInt("1725")
		const spendereV3RqOJ = accounts[1]
		const accountWvkb8jT = accounts[3]
		const nullyaSGfT = await contractmAq46ks.claim.call({from: accounts[4]});
		const null4o5ggT = await contractmAq46ks.approve.call(spendereV3RqOJ, valuekw3PKny, {from: accounts[0]});
		await contractmAq46ks.exit.call({from: accounts[1]});
		const nullKFILEE = await contractmAq46ks.claimable.call(accountWvkb8jT, {from: accounts[0]});
	});

	it('test for VBZRXWrapper', async () => {
		const contracts48u7Y = await VBZRXWrapper.new({from: accounts[1]});
		const valueYyLvhM1 = BigInt("1289")
		const spenderIHzvT8B = "0x0000000000000000000000000000000000000001"
		const valueVfg7lE8 = BigInt("1947")
		const valueHIo8H2 = BigInt("188")
		const spenderXudHX9Y = accounts[2]
		const nullZkIjK8R = await contracts48u7Y.approve.call(spenderIHzvT8B, valueYyLvhM1, {from: accounts[0]});
		await contracts48u7Y.deposit.call(valueVfg7lE8, {from: accounts[2]});
		const nullaMnTtQW = await contracts48u7Y.approve.call(spenderXudHX9Y, valueHIo8H2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullZkIjK8R, true)
		await expect(contracts48u7Y.deposit.call(valueVfg7lE8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractgx8PfPk = await VBZRXWrapper.new({from: accounts[1]});
		const valuePU7Y0pC = BigInt("1663")
		const dstgcl0fZR = accounts[2]
		const nullx1af8xO = await contractgx8PfPk.claim.call({from: accounts[2]});
		const nullINpNlPq = await contractgx8PfPk.claim.call({from: "0x0000000000000000000000000000000000000001"});
		const nullT60eJeD = await contractgx8PfPk.transfer.call(dstgcl0fZR, valuePU7Y0pC, {from: accounts[5]});

		assert.equal(nullINpNlPq, 0)
		assert.equal(nullx1af8xO, 0)
		await expect(contractgx8PfPk.transfer.call(dstgcl0fZR, valuePU7Y0pC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})