const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractXzXrfI = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valueNeEYrZr = BigInt("1282")
		const nullPPFTAz = await contractXzXrfI.claim.call({from: accounts[4]});
		await contractXzXrfI.deposit.call(valueNeEYrZr, {from: accounts[0]});
		const nullTqFFkK8 = await contractXzXrfI.claim.call({from: accounts[1]});

		assert.equal(nullPPFTAz, 0)
		await expect(contractXzXrfI.deposit.call(valueNeEYrZr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractCzTNvhm = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueEiqucN = BigInt("600")
		const dstjIilc9e = accounts[3]
		const srcMIZii6z = accounts[0]
		const valueHUZ5zBI = BigInt("237")
		const dstHv94m57 = accounts[1]
		const srcfBMu5Hx = accounts[0]
		const valueXA9n8HH = BigInt("1496")
		const valueYcOWOgE = BigInt("322")
		const nullbiAbeBJ = await contractCzTNvhm.transferFrom.call(srcMIZii6z, dstjIilc9e, valueEiqucN, {from: accounts[2]});
		await contractCzTNvhm.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const nullX9sBab = await contractCzTNvhm.transferFrom.call(srcfBMu5Hx, dstHv94m57, valueHUZ5zBI, {from: accounts[3]});
		await contractCzTNvhm.deposit.call(valueXA9n8HH, {from: accounts[4]});
		await contractCzTNvhm.withdraw.call(valueYcOWOgE, {from: accounts[2]});

		await expect(contractCzTNvhm.transferFrom.call(srcMIZii6z, dstjIilc9e, valueEiqucN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractFyiCUGh = await VBZRXWrapper_alt.new({from: accounts[4]});
		const accountVd26Z7T = accounts[2]
		const valuee5B7iJH = BigInt("1794")
		const valueS0NxAJI = BigInt("600")
		const spenderXYCN0oy = accounts[2]
		const nulli6MsqxF = await contractFyiCUGh.claimable.call(accountVd26Z7T, {from: accounts[3]});
		await contractFyiCUGh.deposit.call(valuee5B7iJH, {from: accounts[4]});
		const nullgNsgTLk = await contractFyiCUGh.approve.call(spenderXYCN0oy, valueS0NxAJI, {from: accounts[5]});

		assert.equal(nulli6MsqxF, 0)
		await expect(contractFyiCUGh.deposit.call(valuee5B7iJH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractvsnaXD2 = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueshjvyDh = BigInt("874")
		const dstYegu6aH = accounts[0]
		const srcEbdUFu4 = accounts[1]
		const nullEzFlKNg = await contractvsnaXD2.claim.call({from: accounts[4]});
		await contractvsnaXD2.exit.call({from: accounts[0]});
		await contractvsnaXD2.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const nullUKIUvjO = await contractvsnaXD2.transferFrom.call(srcEbdUFu4, dstYegu6aH, valueshjvyDh, {from: accounts[0]});

		assert.equal(nullEzFlKNg, 0)
		await expect(contractvsnaXD2.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contract6BVUgx = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valuei4zig6 = BigInt("400")
		const spenderiCmHGcf = accounts[1]
		const accountPE8adGK = accounts[2]
		const accountoFs7iqr = accounts[3]
		const valueqVpVMCq = BigInt("204")
		const nullKKYM8Hc = await contract6BVUgx.approve.call(spenderiCmHGcf, valuei4zig6, {from: accounts[5]});
		await contract6BVUgx.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await contract6BVUgx.exit.call({from: accounts[1]});
		const nulluAosaMa = await contract6BVUgx.claimable.call(accountPE8adGK, {from: accounts[1]});
		const nullR6vlP6G = await contract6BVUgx.claimable.call(accountoFs7iqr, {from: accounts[0]});
		await contract6BVUgx.withdraw.call(valueqVpVMCq, {from: accounts[3]});

		assert.equal(nullKKYM8Hc, true)
		await expect(contract6BVUgx.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractTiplWqX = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valueSoVxnlG = BigInt("1")
		const dstYGp2oF = accounts[0]
		const valuew3oygZ4 = BigInt("769")
		const dst4wt5lk = accounts[4]
		const srcwHOZgrH = accounts[1]
		const account2pyo1S = accounts[2]
		const nullnvr570D = await contractTiplWqX.transfer.call(dstYGp2oF, valueSoVxnlG, {from: accounts[4]});
		const nullrukXwdU = await contractTiplWqX.transferFrom.call(srcwHOZgrH, dst4wt5lk, valuew3oygZ4, {from: accounts[3]});
		const nulltcM1uS = await contractTiplWqX.claimable.call(account2pyo1S, {from: accounts[1]});

		await expect(contractTiplWqX.transfer.call(dstYGp2oF, valueSoVxnlG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contracttcyIqXF = await VBZRXWrapper_alt.new({from: accounts[5]});
		const accountIalQgKt = accounts[1]
		const toggleIY6FZK = true
		const addriUQNyhR = accounts[2]
		const nulltKvJKg = await contracttcyIqXF.claimable.call(accountIalQgKt, {from: accounts[2]});
		await contracttcyIqXF.setBridge.call(addriUQNyhR, toggleIY6FZK, {from: accounts[5]});
		const nullN82Fq4b = await contracttcyIqXF.claim.call({from: accounts[3]});

		assert.equal(nullN82Fq4b, 0)
		assert.equal(nulltKvJKg, 0)
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractspbnvw8 = await VBZRXWrapper_alt.new({from: accounts[5]});
		const toggleHI5HOl = true
		const addrKvcTT8h = accounts[4]
		const accountBvMaWa = accounts[1]
		await contractspbnvw8.setBridge.call(addrKvcTT8h, toggleHI5HOl, {from: accounts[0]});
		const nullWx76von = await contractspbnvw8.claimable.call(accountBvMaWa, {from: accounts[2]});
		const nullDZQHu2c = await contractspbnvw8.claim.call({from: accounts[3]});

		await expect(contractspbnvw8.setBridge.call(addrKvcTT8h, toggleHI5HOl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractB4kBiVz = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueswwtLI2 = BigInt("1218")
		const dstAvHb8wz = accounts[2]
		const srczZOPky = accounts[5]
		const valueQQGcUYC = BigInt("1081")
		const dstw3BbRLZ = accounts[0]
		const valueRscCVun = BigInt("101")
		const dstQmYhXzV = accounts[2]
		const togglePAaH7T = true
		const addrerh6Vb = accounts[0]
		const nullFwSeN3c = await contractB4kBiVz.transferFrom.call(srczZOPky, dstAvHb8wz, valueswwtLI2, {from: accounts[2]});
		const nullxughQT = await contractB4kBiVz.transfer.call(dstw3BbRLZ, valueQQGcUYC, {from: accounts[4]});
		const nullOLWPyU0 = await contractB4kBiVz.transfer.call(dstQmYhXzV, valueRscCVun, {from: accounts[2]});
		await contractB4kBiVz.setBridge.call(addrerh6Vb, togglePAaH7T, {from: accounts[4]});
	});
})