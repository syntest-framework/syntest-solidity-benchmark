const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractemX08nQ = await VBZRXWrapper_alt.new({from: accounts[0]});
		const account6QaVfD = accounts[5]
		await contractemX08nQ.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const nullVg3MtPw = await contractemX08nQ.claimable.call(account6QaVfD, {from: accounts[2]});

		await expect(contractemX08nQ.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractjHsXiAB = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valuelBU1tG = BigInt("1685")
		const spenderbTkST5c = accounts[0]
		const valueAO6aVom = BigInt("270")
		const accountuC7fzi = accounts[1]
		const valueeDTO9Up = BigInt("578")
		const dstE7n1CfJ = accounts[5]
		const valueZl0zDUv = BigInt("1447")
		const spendera4w7Hzy = accounts[3]
		const nulli9dtREj = await contractjHsXiAB.approve.call(spenderbTkST5c, valuelBU1tG, {from: accounts[3]});
		await contractjHsXiAB.deposit.call(valueAO6aVom, {from: accounts[1]});
		const nullPkE60Nx = await contractjHsXiAB.claimable.call(accountuC7fzi, {from: accounts[3]});
		const nullC3aWHjF = await contractjHsXiAB.transfer.call(dstE7n1CfJ, valueeDTO9Up, {from: accounts[2]});
		const nullLbvNF3s = await contractjHsXiAB.approve.call(spendera4w7Hzy, valueZl0zDUv, {from: accounts[2]});

		assert.equal(nulli9dtREj, true)
		await expect(contractjHsXiAB.deposit.call(valueAO6aVom, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractDlWBkya = await VBZRXWrapper_alt.new({from: accounts[3]});
		const accountEMlS1VG = accounts[0]
		const valueprVOXPY = BigInt("1589")
		const spenderl45UoXL = "0x0000000000000000000000000000000000000001"
		const valueKJFcjhx = BigInt("1915")
		const dstAtVG0ZU = "0x0000000000000000000000000000000000000001"
		const srcatZmsu0 = accounts[0]
		const valueShkC3Ty = BigInt("1272")
		const spenderKfxiQlw = accounts[5]
		const nullctimEdB = await contractDlWBkya.claimable.call(accountEMlS1VG, {from: accounts[3]});
		const nullKRZlJt = await contractDlWBkya.approve.call(spenderl45UoXL, valueprVOXPY, {from: accounts[2]});
		const nullOgmto05 = await contractDlWBkya.transferFrom.call(srcatZmsu0, dstAtVG0ZU, valueKJFcjhx, {from: accounts[0]});
		const nullqiHdMQ = await contractDlWBkya.approve.call(spenderKfxiQlw, valueShkC3Ty, {from: accounts[5]});
		await contractDlWBkya.exit.call({from: accounts[1]});

		assert.equal(nullKRZlJt, true)
		assert.equal(nullctimEdB, 0)
		await expect(contractDlWBkya.transferFrom.call(srcatZmsu0, dstAtVG0ZU, valueKJFcjhx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractmsivGfa = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valuewinMwfc = BigInt("1312")
		const value23ffm1 = BigInt("1201")
		const spenderO1O62eS = accounts[2]
		const valuedUBNS5b = BigInt("416")
		const valuedWNEqdT = BigInt("1278")
		const spendergjr115G = accounts[1]
		await contractmsivGfa.withdraw.call(valuewinMwfc, {from: accounts[1]});
		const nullOxvIkeR = await contractmsivGfa.approve.call(spenderO1O62eS, value23ffm1, {from: accounts[1]});
		await contractmsivGfa.deposit.call(valuedUBNS5b, {from: accounts[4]});
		const nullZu6wURk = await contractmsivGfa.approve.call(spendergjr115G, valuedWNEqdT, {from: accounts[0]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contracthFJgjes = await VBZRXWrapper_alt.new({from: accounts[1]});
		const accountEzsXn9 = accounts[3]
		const toggle1dpSTs = true
		const addrdnltQ58 = accounts[4]
		const valueDyq2E0R = BigInt("1958")
		const spender67v6zo = accounts[3]
		const toggleuSQR3gC = false
		const addrtxn8ANI = "0x0000000000000000000000000000000000000001"
		const valuefPNbFMf = BigInt("1986")
		const dstTqS2S0m = accounts[3]
		const srcc1PHoX1 = accounts[4]
		const nullUwMEd6A = await contracthFJgjes.claimable.call(accountEzsXn9, {from: accounts[4]});
		await contracthFJgjes.setBridge.call(addrdnltQ58, toggle1dpSTs, {from: accounts[2]});
		const nulla3Fovr = await contracthFJgjes.approve.call(spender67v6zo, valueDyq2E0R, {from: accounts[1]});
		await contracthFJgjes.setBridge.call(addrtxn8ANI, toggleuSQR3gC, {from: accounts[2]});
		const nullZbqRNpg = await contracthFJgjes.transferFrom.call(srcc1PHoX1, dstTqS2S0m, valuefPNbFMf, {from: accounts[0]});

		assert.equal(nullUwMEd6A, 0)
		await expect(contracthFJgjes.setBridge.call(addrdnltQ58, toggle1dpSTs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractMhswqGd = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valueNa8QUhI = BigInt("44")
		const dstqDf5Qn = accounts[3]
		const srctumUNLS = accounts[5]
		const nulled8cEf = await contractMhswqGd.claim.call({from: accounts[2]});
		const nulljyUR92 = await contractMhswqGd.transferFrom.call(srctumUNLS, dstqDf5Qn, valueNa8QUhI, {from: accounts[4]});

		assert.equal(nulled8cEf, 0)
		await expect(contractMhswqGd.transferFrom.call(srctumUNLS, dstqDf5Qn, valueNa8QUhI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractd8nOhzL = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valuegR0C520 = BigInt("680")
		const dstw1pvU2T = accounts[4]
		const accountR339Xe6 = "0x0000000000000000000000000000000000000002"
		const nulllpDuZeD = await contractd8nOhzL.transfer.call(dstw1pvU2T, valuegR0C520, {from: accounts[4]});
		const nullnHTUA3V = await contractd8nOhzL.claimable.call(accountR339Xe6, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractd8nOhzL.transfer.call(dstw1pvU2T, valuegR0C520, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractUVUsgKA = await VBZRXWrapper_alt.new({from: accounts[1]});
		const valueDroOxVb = BigInt("216")
		const spenderGKu8et = accounts[4]
		const toggleVKhZgqD = false
		const addrZp4Srq7 = accounts[0]
		const valueZM0zfE2 = BigInt("911")
		const nullGbPvUQs = await contractUVUsgKA.approve.call(spenderGKu8et, valueDroOxVb, {from: accounts[0]});
		await contractUVUsgKA.setBridge.call(addrZp4Srq7, toggleVKhZgqD, {from: accounts[1]});
		const nullGNBf2F = await contractUVUsgKA.claim.call({from: accounts[4]});
		await contractUVUsgKA.deposit.call(valueZM0zfE2, {from: accounts[2]});

		assert.equal(nullGNBf2F, 0)
		assert.equal(nullGbPvUQs, true)
		await expect(contractUVUsgKA.claim.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractKgyU0xh = await VBZRXWrapper_alt.new({from: accounts[3]});
		const accountUwUlovJ = accounts[0]
		const valuepWiJxd5 = BigInt("1589")
		const spenderUFWcFmJ = "0x00000000000000000000000000000000000000-1"
		const valueay5kKMR = BigInt("1915")
		const dste48FALl = "0x0000000000000000000000000000000000000001"
		const srcPlkFeqC = accounts[0]
		const nulluBcDyo = await contractKgyU0xh.claimable.call(accountUwUlovJ, {from: accounts[3]});
		const nullzn6ga0o = await contractKgyU0xh.approve.call(spenderUFWcFmJ, valuepWiJxd5, {from: accounts[2]});
		const nullcX20HDS = await contractKgyU0xh.transferFrom.call(srcPlkFeqC, dste48FALl, valueay5kKMR, {from: accounts[0]});
		await contractKgyU0xh.exit.call({from: accounts[1]});
		await contractKgyU0xh.exit.call({from: accounts[1]});

		assert.equal(nulluBcDyo, 0)
		await expect(contractKgyU0xh.approve.call(spenderUFWcFmJ, valuepWiJxd5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})